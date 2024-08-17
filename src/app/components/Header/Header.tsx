"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Logo from "../../../../public/icons/logo.svg";
import signup from "../../../../public/icons/signupicon.svg";
import MobileMenu from "./MobileMenu";
import Menu from "./Menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="bg-white w-full">
      <header className="container mx-auto flex justify-between items-center h-[3.5rem] md:h-[6.5rem] px-4 md:px-8">
        <div className="md:hidden">
          <MobileMenu />
        </div>

        <div className="flex items-center gap-x-4 md:gap-x-16">
          <div className="w-[37px] h-[40px] md:w-[54px] md:h-[60px] relative">
            <Image
              src={Logo.src}
              alt="Logo"
              layout="fill"
              objectFit="contain"
              className="w-full h-full"
            />
          </div>

          <div className="hidden md:block">
            <Menu />
          </div>
        </div>

        <div className="flex items-center gap-x-2.5 md:gap-x-[2rem]">
          <button
            className="py-2 px-4 md:hidden"
            onClick={() => {
              localStorage.getItem("phoneNumber")
                ? router.push("/login")
                : openModal();
            }}
          >
            <Image src={signup.src} width={24} height={24} alt="user" />
          </button>

          <Link
            href="/teacher"
            className="text-primary-main hidden font-semibold md:block"
          >
            ورود/ثبت نام
          </Link>

          <button
            className="bg-primary-main text-white py-2 px-4 rounded-xl hidden md:block"
            onClick={() => {
              localStorage.getItem("phoneNumber")
                ? router.push("/login")
                : openModal();
            }}
          >
            معلم خصوصی شو
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
