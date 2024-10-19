"use client";
import Image, { StaticImageData } from "next/image";
import { ChangeEvent, useState } from "react";
import { FaUserGear } from "react-icons/fa6";
import { IoCalendar } from "react-icons/io5";
import SwiperCore from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import carticon from "../../../public/icons/shopcart.svg";
import activecart from "../../../public/icons/activeshopcart.svg";
import cartcheck from "../../../public/icons/shopcartcheckinactive.svg";
import { HiInformationCircle } from "react-icons/hi";
import ClassCard from "./ClassCard";
import { Checkbox, Radio } from "flowbite-react";
import bankmellat from "../../../public/images/melaticon.png";
import sderatbenk from "../../../public/images/saderat.png";
import samanbank from "../../../public/images/saman.png";
import FactorPay from "./FactorPay";
import PaymentSuccess from "./PaymentSucces";
import PaymentError from "./PaymentError";
import PaymentWarning from "./PaymentWarning";

SwiperCore.use([]);

interface Tab {
  name: string;
  icon: React.ReactNode;
  inactiveIcon: React.ReactNode;
}
const classes = [
  {
    title: "ادبیات پایه دوازدهم",
    teacher: "بهرام موسوی راد",
    date: "چهارشنبه1400/04/16  ",
    time: "10:30 - 11:00",
    price: "200,000 تومان",
    classtype: "حضوری خصوصی",
  },
  {
    title: "ادبیات پایه دوازدهم",
    teacher: "بهرام موسوی راد",
    date: "چهارشنبه1400/04/16  ",
    time: "10:30 - 11:00",
    price: "200,000 تومان",
    classtype: "حضوری خصوصی",
  },
  {
    title: "ادبیات پایه دوازدهم",
    teacher: "بهرام موسوی راد",
    date: "چهارشنبه1400/04/16  ",
    time: "10:30 - 11:00",
    price: "200,000 تومان",
    classtype: "حضوری خصوصی",
  },
  {
    title: "ادبیات پایه دوازدهم",
    teacher: "بهرام موسوی راد",
    date: "چهارشنبه1400/04/16  ",
    time: "10:30 - 11:00",
    price: "200,000 تومان",
    classtype: "حضوری خصوصی",
  },
  {
    title: "ادبیات پایه دوازدهم",
    teacher: "بهرام موسوی راد",
    date: "چهارشنبه1400/04/16  ",
    time: "10:30 - 11:00",
    price: "200,000 تومان",
    classtype: "حضوری خصوصی",
  },
  {
    title: "ادبیات پایه دوازدهم",
    teacher: "بهرام موسوی راد",
    date: "چهارشنبه1400/04/16  ",
    time: "10:30 - 11:00",
    price: "200,000 تومان",
    classtype: "حضوری خصوصی",
  },
  {
    title: "ادبیات پایه دوازدهم",
    teacher: "بهرام موسوی راد",
    date: "چهارشنبه1400/04/16  ",
    time: "10:30 - 11:00",
    price: "200,000 تومان",
    classtype: "حضوری خصوصی",
  },
  {
    title: "ادبیات پایه دوازدهم",
    teacher: "بهرام موسوی راد",
    date: "چهارشنبه1400/04/16  ",
    time: "10:30 - 11:00",
    price: "200,000 تومان",
    classtype: "حضوری خصوصی",
  },
];

const tabs: Tab[] = [
  {
    name: "تکمیل اطلاعات",
    icon: <FaUserGear className="w-5 h-5 ml-1 text-MokhFont1" />,
    inactiveIcon: <FaUserGear className="w-5 h-5 ml-1 text-MokhFont2" />,
  },
  {
    name: "زمانبندی کلاس",
    icon: <IoCalendar className="w-5 h-5 ml-1 text-MokhFont1" />,
    inactiveIcon: <IoCalendar className="w-5 h-5 ml-1 text-MokhFont2" />,
  },
  {
    name: " نرخ کلاس ها",
    icon: (
      <Image
        src={activecart.src}
        alt="سبد خرید "
        width={24}
        height={24}
        className="ml-1 text-MokhFont2"
      />
    ),
    inactiveIcon: (
      <Image
        src={carticon.src}
        alt="سبد خرید غیرفعال"
        width={24}
        height={24}
        className="ml-1 text-MokhFont2"
      />
    ),
  },
  {
    name: "خریدهای قبلی",
    icon: (
      <Image
        src={activecart.src}
        alt="سبد خرید "
        width={24}
        height={24}
        className="ml-1"
      />
    ),
    inactiveIcon: (
      <Image
        src={cartcheck.src}
        alt="سبد خرید غیرفعال"
        width={24}
        height={24}
        className="ml-1 text-MokhFont2"
      />
    ),
  },
];
interface Bank {
  id: string;
  name: string;
  image: StaticImageData;
}
const banks: Bank[] = [
  {
    id: "bank1",
    name: "بانک ملت",
    image: bankmellat,
  },
  {
    id: "bank2",
    name: "بانک صادرات",
    image: sderatbenk,
  },
  {
    id: "bank3",
    name: "بانک ستمان",
    image: samanbank,
  },
];

export default function UserPay() {
  const [activeRole, setActiveRole] = useState<string>("فراگیر");
  const [activeTab, setActiveTab] = useState<number>(1);
  const [selectedBank, setSelectedBank] = useState<string>("bank1");
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked); // Update the state with the checkbox value
  };
  const handleRoleChange = (role: string): void => {
    setActiveRole(role);
  };
  const handlebankchange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedBank(e.target.value);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="p-8 container mx-auto">
        <div className="flex justify-center mb-6 relative">
          <div className="absolute -top-1 left-[75%] md:left-[57%] transform translate-x-1/2 text-MokhYellow text-sm flex items-center">
            <HiInformationCircle className="w-5 h-5" />
          </div>
          <button
            className={`px-6 py-2 rounded-lg ${
              activeRole === "مدرس"
                ? "bg-MokhBlue text-white"
                : "bg-MokhWhite2 text-MokhFont2"
            }`}
            onClick={() => handleRoleChange("مدرس")}
          >
            مدرس
          </button>
          <button
            className={`px-6 py-2 rounded-lg ${
              activeRole === "فراگیر"
                ? "bg-MokhBlue text-white"
                : "bg-MokhWhite2 text-MokhFont2"
            }`}
            onClick={() => handleRoleChange("فراگیر")}
          >
            فراگیر
          </button>
        </div>
      </div>

      {/* Swiper for Tabs */}
      <div className="mb-6 md:hidden bg-MokhWhite2 rounded-lg ">
        <Swiper
          spaceBetween={10}
          slidesPerView={2.3}
          className="swiper-container"
        >
          {tabs.map((tab, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-between w-full">
                <button
                  className={`w-full px-4 py-2 flex items-center justify-center rounded-lg transition-colors duration-200 ${
                    activeTab === index + 1
                      ? "bg-white text-MokhFont1 shadow-lg"
                      : "text-MokhFont2 hover:bg-white"
                  }`}
                  onClick={() => setActiveTab(index + 1)}
                >
                  {activeTab === index + 1 ? tab.icon : tab.inactiveIcon}
                  {tab.name}
                </button>
                {index < tabs.length - 1 && (
                  <div className="border-r-2 border-MokhFont3/50 h-6 mx-2"></div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Centered Tabs for Medium Screens and Up */}
      <div className="hidden  w-2/5 bg-MokhWhite2 rounded-lg md:flex justify-center mb-6 mx-auto flex-nowrap">
        {tabs.map((tab, index) => (
          <div className="flex items-center" key={index}>
            <button
              className={`px-4 py-2 flex items-center rounded-lg transition-colors duration-200 ${
                activeTab === index + 1
                  ? "bg-white text-MokhFont1 shadow-lg"
                  : "text-MokhFont2 hover:bg-white"
              }`}
              onClick={() => setActiveTab(index + 1)}
            >
              {activeTab === index + 1 ? tab.icon : tab.inactiveIcon}
              {tab.name}
            </button>
            {index < tabs.length - 1 && (
              <div className="border-r-2 border-MokhFont3/50 h-6"></div>
            )}
          </div>
        ))}
      </div>

      {/* Tab Content  */}
      <div className="container mx-auto  p-4">
        {activeTab === 1 && <div>محتوای تب ۱</div>}
        {activeTab === 2 && <div>محتوای تب ۲</div>}
        {activeTab === 3 && (
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6">
            {/* detailcourse col */}
            <div className="relative h-auto w-full">
              <div className=" h-screen bg-white shadow-custom border border-t-MokhFont3/5 flex flex-col rounded-xl p-4">
                <h1 className="text-lg text-MokhDarkBlue border-b pb-2 border-b-MokhFont3/30 font-bold mb-6">
                  کلاس های انتخابی
                </h1>
                <div
                  className="space-y-4 w-full your-scrollable-div overflow-y-auto p-4 
                "
                >
                  {classes.map((classItem, index) => (
                    <ClassCard
                      key={index}
                      title={classItem.title}
                      teacher={classItem.teacher}
                      date={classItem.date}
                      time={classItem.time}
                      price={classItem.price}
                      classtype={classItem.classtype}
                    />
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
            </div>

            {/* pay col */}
            <div
              className="h-auto  bg-white shadow-custom
                border border-t-MokhFont3/5 flex flex-col rounded-xl p-4"
            >
              <h1 className="text-lg text-MokhDarkBlue border-b pb-2 border-b-MokhFont3/30 font-bold mb-6">
                فاکتور خرید و پرداخت
              </h1>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex flex-col">
                  <label className="text-MokhFont2 text-sm mb- after:content-['*'] after:ml-0.5 after:text-red-500 ">
                    نام
                  </label>
                  <input
                    placeholder=" معین
"
                    className="bg-MokhWhite2 rounded-lg p-2 text-MokhFont2"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-MokhFont2 text-sm mb-1 after:content-['*'] after:ml-0.5 after:text-red-500 ">
                    نام خانوادگی
                  </label>
                  <input
                    placeholder="   گلریز"
                    className="bg-MokhWhite2 rounded-lg p-2 text-MokhFont2"
                  />
                </div>
              </div>

              {/* Session Details */}
              <div className="mb-8 space-y-4">
                <p className="text-MokhFont2 ‌ text-sm font-bold">
                  جلسه رزرو شده:
                  <span className="text-MokhDarkBlue mr-2 font-semibold">
                    6جلسه(9 ساعت)
                  </span>
                </p>
                <p className="text-MokhFont2 text-sm font-bold">
                  مبلغ کل:{" "}
                  <span className="text-MokhDarkBlue mr-2 font-semibold">
                    1,800,000 تومان
                  </span>
                </p>
              </div>

              {/* Discount Code */}
              <div className="mb-8 flex items-center">
                <label className="text-MokhFont2 text-sm ml-2">
                  کد تخفیف:{" "}
                </label>
                <input
                  placeholder="مثال:YLB140063"
                  className="bg-MokhWhite2 rounded-lg px-1 py-2 justify-center items-center block focus:border-MokhFont2 text-MokhFont2 text-center placeholder-MokhFont2 focus:outline-none focus:ring-2 focus:ring-MokhFont2"
                />
              </div>

              {/* Total Payable */}
              <div className="mb-8">
                <p className="text-MokhDarkBlue font-semibold">
                  مبلغ قابل پرداخت:
                  <span className="mr-1 ">1,800,000 تومان</span>
                </p>
              </div>
              <div className="flex-grow"></div>

              {/* Terms and Conditions */}
              <div className="flex items-center bg-MokhWhite2 p-2 rounded-md mb-6">
                <input
                  id="privacy-check"
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className="w-4 h-4 text-MokhBlue bg-gray-100 border-gray-300 rounded focus:ring-MokhBlue focus:ring-2"
                />
                <label
                  htmlFor="green-checkbox"
                  className="mx-4 text-sm text-MokhFont2"
                >
                  قبول{" "}
                  <span className="text-MokhBlue m-1">قوانین و مقررات</span>{" "}
                  سایت مخ
                </label>
              </div>
              <div className="flex-grow"></div>

              {/* Payment Options (Logos) */}
              <div className="flex flex-row justify-between  mb-4">
                {banks.map((bank) => (
                  // eslint-disable-next-line react/jsx-key
                  <div className="relative">
                    <input
                      id="maim-radio"
                      type="radio"
                      value={bank.id}
                      checked={selectedBank === bank.id}
                      onChange={handlebankchange}
                      name={bank.name}
                      className="w-4 h-4 absolute top-0 right-0 text-MokhBlue bg-MokhFont2 border-white ring-4 ring-white focus:ring-white "
                    />

                    <label
                      key={bank.id}
                      className="flex bg-MokhWhite2 rounded-md p-4 md:px-8 md:py-4 items-center space-x-4 cursor-pointer"
                    >
                      <Image
                        src={bank.image}
                        alt={bank.name}
                        className="w-12 h-10 object-cover"
                      />
                    </label>
                  </div>
                ))}
              </div>
              <div className="flex-grow"></div>

              {/* Payment Button */}
              <button
                className={`w-full font-semibold text-white py-2 rounded-lg ${
                  isChecked ? "bg-MokhBlue" : "bg-MokhFont2 cursor-not-allowed"
                }`}
                disabled={!isChecked}
              >
                پرداخت
              </button>
            </div>
          </div>
        )}
        {activeTab === 4 && <div>محتوای تب ۴</div>}
      </div>
  
    </div>
  );
}