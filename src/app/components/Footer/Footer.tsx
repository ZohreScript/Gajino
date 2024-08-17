import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack, IoMdMail } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import Logo from "../../../../public/icons/logo.svg";
import Footerlogos from "./Footerlogos";
import { MdLocationOn } from "react-icons/md";
import { TiLocation } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="bg-white py-10 sm:py-10 pt-28 sm:pt-28 md:pt-48 text-center md:text-right">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-4">
          <div className="md:col-span-3 font-light flex flex-col gap-y-4 justify-center md:justify-start">
            <div className="w-[37px] h-[40px] md:w-[54px] md:h-[60px] relative">
              <Image
                src={Logo}
                alt="Logo"
                layout="fill"
                objectFit="contain"
                className="w-full h-full"
              />
            </div>
            <p className="justify-start font-normal text-base text-justify text-primary-textLight line-clamp-5">
              مخ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است
            </p>
          </div>
          <div className="  md:col-span-9 grid grid-cols-12 gap-2 sm:gap-4 md:gap-6 p-4">
            <div className=" col-span-12 sm:col-span-12 md:col-span-2 md:col-start-2">
              <h6 className="text-primary-text font-bold mb-3 text-right ">
                موضوعات
              </h6>

              <ul className="grid grid-cols-2 sm:grid sm:grid-cols-2 space-y-2 text-primary-textLight text-sm font-light md:flex md:flex-col gap-y-2">
                <li className="flex items-center">
                  <Link href="#" className="flex items-center">
                    <IoIosArrowBack className="fill-primary-main" />
                    <span className="hover:text-secondary-main mr-1">درسی</span>
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link href="#" className="flex items-center">
                    <IoIosArrowBack className="fill-primary-main" />
                    <span className="hover:text-secondary-main mr-1">زبان</span>
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link href="#" className="flex items-center">
                    <IoIosArrowBack className="fill-primary-main" />
                    <span className="hover:text-secondary-main mr-1">هنر</span>
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link href="#" className="flex items-center">
                    <IoIosArrowBack className="fill-primary-main" />
                    <span className="hover:text-secondary-main mr-1">ورزش</span>
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link href="#" className="flex items-center">
                    <IoIosArrowBack className="fill-primary-main" />
                    <span className="hover:text-secondary-main mr-1">
                      مهارت
                    </span>
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link href="#" className="flex items-center">
                    <IoIosArrowBack className="fill-primary-main" />
                    <span className="hover:text-secondary-main mr-1">
                      تکنولوژی
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-6 sm:col-span-6 md:col-span-4 mt-6 sm:mt-4 md:mt-0">
              <h6 className="text-primary-text font-bold mb-3 text-right ">
                سوالات متداول
              </h6>
              <ul className="text-primary-textLight text-[10px] sm:text-xs md:text-sm font-light flex flex-col gap-y-6">
                <li className="flex items-center">
                  <Link href="#" className="flex items-center">
                    <GoDotFill className="fill-primary-main" />
                    <span className="hover:text-secondary-main">
                      آیا مخ لورم اپیسوم متن ساختگی است؟
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center">
                    <GoDotFill className="fill-primary-main" />
                    <span className="hover:text-secondary-main">
                      آیا مخ لورم اپیسوم متن ساختگی است؟
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center">
                    <GoDotFill className="fill-primary-main" />
                    <span className="hover:text-secondary-main">
                      آیا مخ لورم اپیسوم متن ساختگی است؟
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center">
                    <GoDotFill className="fill-primary-main" />
                    <span className="hover:text-secondary-main">
                      آیا مخ لورم اپیسوم متن ساختگی است؟
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-6  sm:col-span-6 md:col-span-5 mt-6 sm:mt-4 md:mt-0">
              <h6 className="text-primary-text font-bold mb-3 text-right text-right ">
                تماس با ما
              </h6>
              <ul className="text-primary-textLight text-xs sm:text-xs md:text-sm font-light flex flex-col gap-y-4">
                <li className="flex items-center">
                  <Link
                    href="#"
                    className="hover:text-primary-500 flex items-center"
                  >
                    <IoMdMail className="fill-primary-main text-lg" />
                    <span className="mr-2">info@gajino.com</span>
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link
                    href="#"
                    className="hover:text-primary-500 flex items-center"
                  >
                    <FaPhone className="fill-primary-main text-lg" />
                    <span className="mr-2">021-6420</span>
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link
                    href="#"
                    className="hover:text-primary-500 flex text-right sm:text-right items-start md:items-center"
                  >
                    <FaMapMarkerAlt
                      className="fill-primary-main"
                      style={{
                        fontSize: "20px",
                        width: "28px",
                        height: "24px",
                      }}
                    />
                    <span className="mr-1 ">
                      تهران، کیلومتر ۱۴ جاده مخصوص، بلوار ایران خودرو نرسیده به
                      فتح پلاک ۲
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Footerlogos />

        <div className="text-primary-textLight text-center justify-center text-sm mt-8">
          تمامی حقوق برای گاج محفوظ است
        </div>
      </div>
    </footer>
  );
};

export default Footer;
