import requests
import json
import os
from datetime import datetime

DOMAIN = "meritorium.co.in"
CDX_API = "http://web.archive.org/cdx/search/cdx"

def get_snapshots():
    print(f"Fetching snapshots for {DOMAIN}...")
    params = {
        'url': DOMAIN,
        'output': 'json',
        'fl': 'timestamp,original,mimetype,statuscode,digest',
        'filter': 'statuscode:200',
        'collapse': 'digest'  # collapsed by digest to avoid duplicates
    }
    
    try:
        response = requests.get(CDX_API, params=params)
        response.raise_for_status()
        data = response.json()
        
        if not data:
            print("No snapshots found.")
            return []

        # The first item is the header
        header = data[0]
        rows = data[1:]
        
        snapshots = []
        for row in rows:
            snapshot = dict(zip(header, row))
            snapshots.append(snapshot)
            
        return snapshots

    except Exception as e:
        print(f"Error fetching snapshots: {e}")
        return []

def main():
    snapshots = get_snapshots()
    
    if not snapshots:
        return

    print(f"\nFound {len(snapshots)} unique snapshots:")
    
    # Save the list to a file
    with open("wayback_analysis/snapshot_list.json", "w") as f:
        json.dump(snapshots, f, indent=2)
        
    for snap in snapshots:
        ts = snap['timestamp']
        # Format timestamp for readability
        dt = datetime.strptime(ts, "%Y%m%d%H%M%S")
        url = f"http://web.archive.org/web/{ts}/{snap['original']}"
        print(f"- {dt}: {snap['mimetype']} -> {url}")

    print(f"\nSnapshot list saved to wayback_analysis/snapshot_list.json")

if __name__ == "__main__":
    main()
