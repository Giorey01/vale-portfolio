import React from "react";

interface TopPageProps {
  titolo: string;
  sottotitolo: string;
  descrizione: string;
}

function TopPage({ titolo, sottotitolo, descrizione }: TopPageProps) {
  return (
    <div className="mx-11 md:mx-40 mt-16 md:mt-24 mb-10">
      <h1 className="text-4xl md:text-5xl font-bold max-w-max animate-typing overflow-hidden whitespace-nowrap">
        {titolo}
      </h1>
      <div className="flex justify-between mt-10">
        <h2 className="text-xl md:text-4xl">{sottotitolo}</h2>
        <p className="text-md md:text-2xl max-w-96 text-right">{descrizione}</p>
      </div>
    </div>
  );
}

export default TopPage;
