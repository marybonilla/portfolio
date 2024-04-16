import type { Metadata } from "next";
import {  Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from '../components/navbar';
import Header from '../components/header';

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EmeDev 👩🏾‍💻 ",
  description: "Web Development Full Stack",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <style>{`
          body {
            ${urbanist.className}
            margin: 0;
            padding: 0;
            overflow-x: hidden; /* Evitar desplazamiento horizontal */
            position: relative;
          }
          .bg-gradient-radial {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1; /* Mover el fondo detrás del contenido */
          }
          .content-wrapper {
            position: relative;
            z-index: 1; /* Asegurar que el contenido esté por encima del fondo */
          }
        `}</style>
      </head>
      <body>
        <Navbar />
        <Header />
        <div className="content-wrapper">{children}</div>
        <div className="bg-gradient-radial"></div>
      </body>
    </html>
  );
};

export default RootLayout;
