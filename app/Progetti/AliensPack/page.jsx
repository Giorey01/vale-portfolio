import React from "react";
import immagine from "@/app/assets/background.jpg";
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
        <div className="grid grid-cols-2 mx-40 gap-8">
          <Image src={immagine} />
          <Image src={immagine} className="" />
          <Image src={immagine} className="col-span-2" />
        </div>
      </div>
    </>
  );
}

export default AliensPack;
