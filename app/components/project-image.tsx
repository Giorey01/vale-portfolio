import React from "react";
import Image from "next/image";

interface ProjectImageProps {
  src: string;
  alt: string;
}

function ProjectImage({ src, alt }: ProjectImageProps) {
  return (
    <>
      <div className="relative">
        <Image
          src={src}
          fill
          className="object-cover hover:border-2 hover:z-10 hover:scale-[1.02] hover:shadow-2xl hover:rounded-lg duration-200"
          alt={alt}
        />
      </div>
    </>
  );
}

export default ProjectImage;
