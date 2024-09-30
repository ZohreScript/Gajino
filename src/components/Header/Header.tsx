"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Logo from "../../../public/icons/logo.svg";
import signup from "../../../public/icons/signupicon.svg";
import Menu from "./Menu";
import SignUp from "@/app/feature/auth/SignUp";
import MobileMenu from "./MobileMenu";
import TeacherRole from "./TeacherRole";
import UserRoll from "./UserRoll";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-white w-full">
      <header className=" mx-auto flex justify-between items-center h-[3.5rem] md:h-[6.5rem] px-4 md:px-8">
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
          {/* signup mobile */}
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
          {/* signup desktop */}

          {/* <div className="flex justify-between">
            <button
              className="text-primary-main hidden p-2 text-sm font-semibold md:block"
              onClick={() => {
                openModal();
              }}
            >
              ورود/ثبت نام
            </button>
            <button className="bg-primary-main text-sm p-2 text-white py-2 px-4 rounded-xl hidden md:block">
              معلم خصوصی شو
            </button>
            <SignUp isOpen={isModalOpen} onClose={closeModal} />
          </div> */}
          {/* <TeacherRole/> */}
          <UserRoll cartItemCount={5} />
          </div>
      </header>
    </div>
  );
};

export default Header;
