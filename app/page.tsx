import Photocard from "@/app/components/photocard";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center m-7">
      <Link href="/Progetti/AliensPack">
        <Photocard />
      </Link>
      <Link href="/Progetti/AliensPack">
        <Photocard />
      </Link>
      <Link href="/Progetti/AliensPack">
        <Photocard />
      </Link>
      <Link href="/Progetti/AliensPack">
        <Photocard />
      </Link>
      <Link href="/Progetti/AliensPack">
        <Photocard />
      </Link>
      <Link href="/Progetti/AliensPack">
        <Photocard />
      </Link>
      <Link href="/Progetti/AliensPack">
        <Photocard />
      </Link>
      <Link href="/Progetti/AliensPack">
        <Photocard />
      </Link>
      <Link href="/Progetti/AliensPack">
        <Photocard />
      </Link>
    </div>
  );
}
