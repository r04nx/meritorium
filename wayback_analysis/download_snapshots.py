import json
import os
import requests
import re
from bs4 import BeautifulSoup
from urllib.parse import urljoin
import time

def ensure_dir(path):
    if not os.path.exists(path):
        os.makedirs(path)

def sanitize_filename(url):
    return re.sub(r'[^\w\-_\.]', '_', url)

def download_file(url, path):
    try:
        # Rate limiting to be nice to Archive.org
        time.sleep(0.5) 
        response = requests.get(url, stream=True, timeout=10)
        response.raise_for_status()
        with open(path, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
        return True
    except Exception as e:
        print(f"    Failed to download {url}: {e}")
        return False

def main():
    with open("wayback_analysis/snapshot_list.json", "r") as f:
        snapshots = json.load(f)

    # Let's limit to the last 5 snapshots to avoid taking too long, or maybe distinct years?
    # The user said "all available snapshots". There are only 10. We can do 10.
    
    print(f"Starting download of {len(snapshots)} snapshots...")

    for snap in snapshots:
        ts = snap['timestamp']
        original_url = snap['original']
        wayback_url = f"http://web.archive.org/web/{ts}/{original_url}"
        
        snap_dir = f"wayback_analysis/{ts}"
        ensure_dir(snap_dir)
        images_dir = f"{snap_dir}/images"
        ensure_dir(images_dir)
        
        print(f"\nProcessing Snapshot: {ts}")
        
        # 1. Download HTML
        html_path = f"{snap_dir}/index.html"
        print(f"  Downloading HTML...")
        try:
            response = requests.get(wayback_url, timeout=15)
            response.raise_for_status()
            html_content = response.content
            
            with open(html_path, "wb") as f:
                f.write(html_content)
                
            # 2. Extract Content
            soup = BeautifulSoup(html_content, 'html.parser')
            
            # Save visible text
            text_content = soup.get_text(separator='\n', strip=True)
            with open(f"{snap_dir}/content.txt", "w") as f:
                f.write(text_content)
            
            # 3. Find and Download Images
            imgs = soup.find_all('img')
            print(f"  Found {len(imgs)} images.")
            
            for img in imgs:
                src = img.get('src')
                if not src:
                    continue
                
                # Handle wayback rewrite URLs
                # Usually wayback src starts with /web/timestamp/http...
                # or absolute URLs.
                # We need to construct the full requestable URL.
                
                if src.startswith("//"):
                    img_url = "http:" + src
                elif src.startswith("/"):
                    img_url = "http://web.archive.org" + src
                else:
                    img_url = urljoin(wayback_url, src)
                    
                filename = sanitize_filename(src.split('/')[-1])
                if len(filename) > 50:
                    filename = filename[-50:] # Truncate if too long
                if not filename:
                    filename = "unnamed.jpg"
                    
                download_path = f"{images_dir}/{filename}"
                
                # print(f"    Downloading image: {filename}")
                download_file(img_url, download_path)
                
        except Exception as e:
            print(f"  Failed to process snapshot {ts}: {e}")

    print("\nDownload complete.")

if __name__ == "__main__":
    main()
