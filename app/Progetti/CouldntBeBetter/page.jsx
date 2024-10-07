import React from "react";
import TopPage from "@/app/components/top-page";
import Image from "next/image";

function CouldntBeBetter() {
  return (
    <>
      <TopPage
        titolo="Couldn’t be better"
        sottotitolo="Cover Design"
        descrizione="Single Cover Design for Sakazan, a musician from Korea, specializing
          in electro-pop music."
      />
      <div className="grid grid-cols-2 place-items-center gap-10 px-20">
        <Image
          src="https://giorgio-paoloni-gallery-storage.s3.eu-north-1.amazonaws.com/ValePortfolio/Home/itcouldntbebetter.webp"
          alt="ciao"
          width={700}
          height={600}
          className="hover:rounded-lg duration-300"
        />
        <Image
          src="https://giorgio-paoloni-gallery-storage.s3.eu-north-1.amazonaws.com/ValePortfolio/Home/itcouldntbebetter.webp"
          alt="ciao"
          width={700}
          height={600}
        />
        <Image
          className="col-span-2"
          src="https://giorgio-paoloni-gallery-storage.s3.eu-north-1.amazonaws.com/ValePortfolio/Home/itcouldntbebetter.webp"
          alt="ciao"
          width={700}
          height={600}
        />
      </div>
    </>
  );
}

export default CouldntBeBetter;
