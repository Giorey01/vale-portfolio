import React from "react";
import Image from "next/image";
function About() {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 md:gap-16 mx-auto items-center md:p-16 relative md:max-w-5xl">
        <div>
          <h1 className="text-6xl mb-7 animate-typing overflow-hidden whitespace-nowrap">
            About me
          </h1>
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
          <p className="text-2xl text-pretty">
            My first job was at the age of 12, in the editorial field, when I
            decided to create a newspaper called “El Barrio”, along with my best
            friend to publish news, interviews and absurd stories from our
            neighborhood, illustrated with the best default images of Word 2004
            :) ↓
          </p>
        </div>
        <div className="md:absolute md:w-56 lg:w-80 md:translate-x-[-4rem] lg:translate-x-0 md:right-0 md:translate-y-[22rem] lg:translate-y-80">
          <Image
            src="https://d321io5nxf2wuu.cloudfront.net/ValePortfolio/About/about-diario.png"
            width={300}
            height={300}
            className="hover:rotate-3 hover:scale-105 duration-300 object-contain"
          />
        </div>
      </div>
    </>
  );
}

export default About;
