import Photocard from "@/app/components/photocard";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center m-7">
      <Link href="/Progetti/AliensPack">
        <Photocard
          src="https://d321io5nxf2wuu.cloudfront.net/ValePortfolio/Home/riflessi.jpg"
          alt="ciao"
        />
      </Link>
      <Link href="/Progetti/AliensPack">
        <Photocard
          src="https://d321io5nxf2wuu.cloudfront.net/ValePortfolio/Home/gabbiani.webp"
          alt="ciao"
        />
      </Link>
      <Link href="/Progetti/AliensPack">
        <Photocard
          src="https://d321io5nxf2wuu.cloudfront.net/ValePortfolio/Home/statue.webp"
          alt="statue"
        />
      </Link>
      <Link href="/Progetti/CouldntBeBetter">
        <Photocard
          src="https://d321io5nxf2wuu.cloudfront.net/ValePortfolio/Home/itcouldntbebetter.webp"
          alt="statue"
        />
      </Link>
      <Link href="/Progetti/ElTiempoDelMundo">
        <Photocard
          src="https://d321io5nxf2wuu.cloudfront.net/ValePortfolio/Home/eltiempodelmundo.webp"
          alt="statue"
        />
      </Link>
      <Link href="/Progetti/AliensPack">
        <Photocard
          src="https://d321io5nxf2wuu.cloudfront.net/ValePortfolio/Home/alienscup.webp"
          alt="statue"
        />
      </Link>
      <Link href="/Progetti/TheProcedure">
        <Photocard
          src="https://d321io5nxf2wuu.cloudfront.net/ValePortfolio/Home/theprocedure.webp"
          alt="statue"
        />
      </Link>
      <Link href="/Progetti/Equilibrio">
        <Photocard
          src="https://d321io5nxf2wuu.cloudfront.net/ValePortfolio/Home/equilibrio.webp"
          alt="statue"
        />
      </Link>
      <Link href="/Progetti/Riflessi">
        <Photocard
          src="https://d321io5nxf2wuu.cloudfront.net/ValePortfolio/Home/riflessibook.webp"
          alt="statue"
        />
      </Link>
    </div>
  );
}
