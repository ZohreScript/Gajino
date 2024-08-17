import React from "react";
import Image from "next/image";
import Link from "next/link";
import gajmag from "../../../public/images/mag.png";
import driq from "../../../public/images/DrIQ New Logo.png";
import gajmarket from "../../../public/images/Gaj Marjet English.png";
import jokar from "../../../public/images/jokar.png";
import senfi from "../../../public/images/senfi.png";
import majazi from "../../../public/images/majazi.png";
import rokh from "../../../public/images/rokh.png";
import enamad from "../../../public/images/namad.png";
const Footerlogos = () => {
    const firstLogos = [
        { src: gajmag, alt: "Gajmag", href: "#" },
        { src: driq, alt: "DrIQ", href: "#" },
        { src: gajmarket, alt: "Gajmarket", href: "#" },
        { src: jokar, alt: "Jokar", href: "#" },
      ];
      const secondLogos = [
        { src: senfi, alt: "Senfi", href: "#" },
        { src: majazi, alt: "Majazi", href: "#" },
        { src: rokh, alt: "Rokh", href: "#" },
        { src: enamad, alt: "Enamad", href: "#" },
      ];
    return (
        <div className="flex-1 md:grid md:grid-cols-2 sm:flex-col justify-between  px-8  gap-4 mt-6 w-full">
        <div className="grid-cols-2 sm:grid sm:grid-cols-2 md:flex md:flex-row  mb-8 sm:mb-2 md:mb-0 grid gap-12 sm:gap-14 md:gap-6 justify-center items-center">
          {firstLogos.map((logo, index) => (
            <div key={index} className="flex justify-start items-center">
              <Link href={logo.href}>
              <div className="relative h-12 w-40">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    layout="fill"
                    objectFit="contain"
                    className="mx-auto"
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="grid-cols-2 sm:grid sm:grid-cols-2 grid md:flex md:flex-row gap-9 sm:gap-9 md:gap-4 justify-end  md:justify-end sm:justify-center items-center">
          {secondLogos.map((logo, index) => (
            <div key={index} className="flex justify-center  items-center">
              <Link href={logo.href}>
          
                <div className="relative h-24 w-24">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    layout="fill"
                    objectFit="contain"
                    className="mx-auto"
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      );
}
 
export default Footerlogos;