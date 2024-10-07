import React from "react";
import Image from "next/image";
function About() {
  return (
    <>
      <div className="flex gap-16 mx-auto items-center p-16 relative max-w-5xl">
        <div>
          <h1 className="text-6xl mb-7">About me</h1>
          <Image
            src="https://d321io5nxf2wuu.cloudfront.net/ValePortfolio/About/about-main.webp"
            width={450}
            height={450}
            className="hover:rotate-2 hover:scale-[1.025] duration-300"
          />
        </div>
        <div className="max-w-96 ">
          <p className="mb-5 text-2xl">
            I’m Valentina, Gabbiani Lover and Editorial Designer from Argentina,
            currently established in Rome.
          </p>
          <p className="text-2xl">
            My first job was at the age of 12, in the editorial field, when I
            decided to create a newspaper called “El Barrio”, along with my best
            friend to publish news, interviews and absurd stories from our
            neighborhood, illustrated with the best default images of Word 2004
            :) ↓
          </p>
        </div>
        <Image
          src="https://d321io5nxf2wuu.cloudfront.net/ValePortfolio/About/about-diario.png"
          width={300}
          height={300}
          className="absolute bottom-0 right-0 translate-y-10 hover:rotate-3 hover:scale-105 duration-300
        "
        />
      </div>
    </>
  );
}

export default About;
