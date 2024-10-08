import React from "react";

interface TopPageProps {
  titolo: string;
  sottotitolo: string;
  descrizione: string;
}

function TopPage({ titolo, sottotitolo, descrizione }: TopPageProps) {
  return (
    <div className="mx-40 mt-24 mb-10">
      <h1 className="text-5xl max-w-max animate-typing overflow-hidden whitespace-nowrap">
        {titolo}
      </h1>
      <div className="flex justify-between mt-10">
        <h2 className="text-4xl">{sottotitolo}</h2>
        <p className="text-2xl max-w-96">{descrizione}</p>
      </div>
    </div>
  );
}

export default TopPage;
