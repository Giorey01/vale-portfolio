import React from "react";
import Image from "next/image";
import TopPage from "@/app/components/top-page";
//import ProjectImage from "@/app/components/project-image";
function AliensPack() {
  return (
    <>
      <div className="animate-scale-up-ver-top">
        <TopPage
          titolo="Aliens Pack"
          sottotitolo="Custom product design"
          descrizione="Collage illustration and Design 
                    for T-Shirts, Mugs 
                    and Stickers"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  mx-40 mt-10">
          {/* Tazza */}
          <div className="flex justify-center">
            <Image
              src="https://d321io5nxf2wuu.cloudfront.net/ValePortfolio/Progetti/AliensPack/alienscup.webp"
              alt="Mug"
              width={800} // Dimensioni desiderate per la tazza
              height={300} // Dimensioni desiderate per la tazza
              className="min-w-80" // Dimensione minima
            />
          </div>

          {/* Sottobicchiere e Maglietta */}
          <div className="flex flex-col gap-4">
            {/* Sottobicchiere */}
            <div className="flex justify-center">
              <Image
                src="https://d321io5nxf2wuu.cloudfront.net/ValePortfolio/Progetti/AliensPack/sticker_mockup.webp"
                alt="Coaster"
                width={800} // Dimensioni desiderate per il sottobicchiere
                height={300} // Dimensioni desiderate per il sottobicchiere
                className="min-w-80"
              />
            </div>

            {/* Maglietta */}
            <div className="flex justify-center">
              <Image
                src="https://d321io5nxf2wuu.cloudfront.net/ValePortfolio/Progetti/AliensPack/t-shirt_mockup.webp"
                alt="T-Shirt"
                width={800} // Dimensioni desiderate per la maglietta
                height={300} // Dimensioni desiderate per la maglietta
                className="min-w-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AliensPack;
