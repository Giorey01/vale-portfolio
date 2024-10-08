import React from "react";
import Image from "next/image";
import TopPage from "@/app/components/top-page";

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
            className="row-span-2 object-cover"
          />
          <div className="relative">
            <Image
              src="https://d321io5nxf2wuu.cloudfront.net/ValePortfolio/Progetti/AliensPack/sticker_mockup.webp"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative">
            <Image
              src="https://d321io5nxf2wuu.cloudfront.net/ValePortfolio/Progetti/AliensPack/t-shirt_mockup.webp"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AliensPack;
