import React from "react";
import Link from "next/link";
function Header() {
  return (
    <div className="flex justify-between m-5 mx-10 items-center ">
      <div>
        <p className="text-3xl font-bold">Valentina Soldano</p>
        <p>Collage Illust. & Editorial Design</p>
      </div>
      <ol className="flex gap-8 text-2xl">
        <li className="hover:scale-110 transition-all duration-110">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:scale-110 transition-all duration-110">
          <Link href="/About">About me</Link>
        </li>
      </ol>
    </div>
  );
}

export default Header;
