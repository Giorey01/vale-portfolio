import React from "react";
import Image from "next/image";

interface ProjectImageProps {
  src: string;
  alt: string;
}

function ProjectImage({ src, alt }: ProjectImageProps) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={800} // Dimensioni desiderate per la maglietta
        height={300} // Dimensioni desiderate per la maglietta
        className="min-w-80 hover:cursor-pointer object-cover hover:opacity-75 hover:border-2 hover:z-10 hover:scale-[1.02] hover:shadow-2xl hover:rounded-lg duration-200"
      />
    </>
  );
}

export default ProjectImage;
