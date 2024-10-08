import React from "react";
import Image from "next/image";
import TopPage from "@/app/components/top-page";
import ProjectImage from "@/app/components/project-image";
function AliensPack() {
  return (
    <>
      <div>
        <TopPage
          titolo="Aliens Pack"
          sottotitolo="Custom product design"
          descrizione="Collage illustration and Design 
                    for T-Shirts, Mugs 
                    and Stickers"
        />
        <div className="grid grid-cols-2 mx-40 gap-1">
          <Image
            src="https://d321io5nxf2wuu.cloudfront.net/ValePortfolio/Progetti/AliensPack/alienscup.webp"
            width={1500}
            height={1000}
            className="row-span-2 object-cover hover:border-2 hover:scale-[1.02] hover:z-10 hover:shadow-2xl hover:rounded-lg duration-200"
          />
          <ProjectImage
            src="https://d321io5nxf2wuu.cloudfront.net/ValePortfolio/Progetti/AliensPack/sticker_mockup.webp"
            alt="sticker"
          />
          <ProjectImage
            src="https://d321io5nxf2wuu.cloudfront.net/ValePortfolio/Progetti/AliensPack/t-shirt_mockup.webp"
            alt="t-shirt"
          />
        </div>
      </div>
    </>
  );
}

export default AliensPack;
