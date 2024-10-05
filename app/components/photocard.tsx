import React from "react";
import Image from "next/image";

interface PhotocardProps {
  src: string;
  alt: string;
}

const Photocard = ({ src, alt }: PhotocardProps) => {
  return (
    <div className="relative hover:opacity-75 duration-300 group">
      <Image src={src} alt={alt} width={800} height={800} />
      <p className="absolute text-2xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        CIAO
      </p>
    </div>
  );
};

export default Photocard;
