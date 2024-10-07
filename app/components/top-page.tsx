import React from "react";

interface TopPageProps {
  titolo: string;
  sottotitolo: string;
  descrizione: string;
}

function TopPage({ titolo, sottotitolo, descrizione }: TopPageProps) {
  return (
    <div className="mx-64 mt-24 mb-24">
      <h1 className="text-5xl">{titolo}</h1>
      <div className="flex items-center justify-between mt-10">
        <h2 className="text-4xl">{sottotitolo}</h2>
        <p className="text-2xl max-w-96">{descrizione}</p>
      </div>
    </div>
  );
}

export default TopPage;
