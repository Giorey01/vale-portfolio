import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export const metadata: Metadata = {
  title: "Valentina Soldano – Collage Illust. & Editorial Design",
  description: "Collage Illust. & Editorial Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <head>
        <link rel="icon" href="./favicon.ico" />
      </head>
      <body className="font-grotesk ">
        <Header />
        <div className="m-5 mb-24 md:mb-36">{children}</div>
        <div className="absolute bottom-0 w-full ">
          <Footer />
        </div>
      </body>
    </html>
  );
}
