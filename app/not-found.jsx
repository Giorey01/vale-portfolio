import Link from "next/link";
import React from "react";
import Image from "next/image";

function NotFound() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-background">
        {/* Gabbiano con nuvoletta di fumetto */}
        <div className="relative">
          {/* Immagine del gabbiano */}
          <Image
            src="https://giorgio-paoloni-gallery-storage.s3.eu-north-1.amazonaws.com/ValePortfolio/NotFound/gabbiano.png"
            width={300}
            height={300}
            className="mx-auto"
          />

          {/* Nuvoletta di fumetto */}
          <div className="absolute top-0 left-0 transform -translate-x-8 -translate-y-8 bg-foreground text-background p-4 rounded-lg shadow-lg">
            <p>La pagina non è disponibile!</p>
          </div>
        </div>

        {/* Link per tornare alla home */}
        <div className="text-center mt-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Oops!
          </h1>
          <Link
            href="/"
            className="text-lg md:text-xl text-foreground underline"
          >
            Torna alla home
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;

//https://s1.qwant.com/thumbr/474x451/b/0/3a6a0aeb4d04e9ea8d80caefeb0535f081d1f74a3b76560b0c29d8e4c474a0/th.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%3Fid%3DOIP.CalsGbjLcmz3NRT3W4p2XgHaHD%26pid%3DApi&q=0&b=1&p=0&a=0
