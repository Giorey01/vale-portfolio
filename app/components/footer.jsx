import React from "react";
import Link from "next/link";
function Footer() {
  return (
    <div className="flex flex-col text-center gap-1 md:gap-0 md:flex-row justify-between p-5 pt-10">
      <div>
        <Link href="mailto:valentinasoldano.vs@gmail.com" className="mr-5">
          Mail
        </Link>
        <Link
          href="https://www.instagram.com/_valentinasoldano_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </Link>
      </div>
      <div>
        <Link href="" className="mr-5">
          Informativa sulla privacy
        </Link>
        <Link href="">Terms & Conditions</Link>
      </div>
    </div>
  );
}

export default Footer;
