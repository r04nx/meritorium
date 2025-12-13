import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ width = 135, height = 36, className }) => {
  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      <Image
        src="/logo.png"
        alt="Meritorium Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
};
