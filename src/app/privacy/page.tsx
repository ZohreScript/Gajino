import React from "react";
import slide3 from "../../../public/images/contactus.png";
import Image from "next/image";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="relative w-full h-72 overflow-hidden">
        <div className="absolute inset-0 bg-[#42246E] z-10"></div>
        <div className="absolute top-1/2 transform -translate-y-1/2 px-4 sm:px-10 md:px-12 lg:px-15 z-20 w-full text-white text-center">
          <h2 className="text-lg sm:text-2xl font-bold mb-4 ">
            قوانین و مقررات{" "}
          </h2>
          <p className="mb-4 text-lg sm:text-xl leading-10">
            هرچی که در مورد قوانین و مقررات وبسایت مخ میخوای بدونی رو اینجا
            نوشتیم
          </p>
        </div>
      </div>

      <div className="flex-grow flex items-center justify-center w-full">
        <div className="relative -mt-10 mb-10 mx-4 sm:mx-6 lg:mx-10 z-30 bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10 max-w-xl sm:max-w-2xl lg:max-w-7xl w-full flex flex-col md:flex-row items-start justify-between space-y-4 sm:space-y-0">
          <div className="w-full flex flex-col h-full">
            <div>
              <h2 className="text-lg text-right font-bold text-MokhDarkBlue mb-1 sm:mb-4">
                تعاریف و اصلاحات
              </h2>
              <p className="text-MokhFont1 mb-12 text-right">
                .دشاب یم نآ یاوتحم و ونیجاگ نشیکیلپا یونعم و یدام تیکلام قوقح هیلک یاراد هک جاگ یللملا نیب تاراشتنا : جاگ
                .ناربراک هب فلتخم قرط هب جاگ یللملا نیب تاراشتنا یشزومآ یوتحم هئارا و طابترا تهج یرازفا مرن رتسب و ونیجاگ نشیکیلپا : ونیجاگ
                .دیامن یم مادقا تامدخ تفایرد هب تبسن ونیجاگ نشیکیلپا زا هدافتسا اب و تنرتنیا یطابترا رتسب قیرط زا هک دشاب یم یقوقح ای یقیقح صخش : ربراک
                .تسا ‌هدرک داجیا نشیکیلپا رد ونیجاگ تامدخ زا هدافتسا یارب دوخ هارمه نفلت هرامش تبث اب ربراک هک تسا یباسح : (لیافورپ) یربراک باسح
                ،اه‌همانشخب ،ییارجا یاه همان نییآ ،یداع نیناوق ،یساسا نوناق : ناریا یمالسا یروهمج تاررقم و نیناوق .دوش‌یم ونیجاگ دراو ناربراک یوس زا میقتسم تروص هب هک یتاعالطا : یتیوه تاعالطا
                .هعماج رب مکاح ینوناق طباوض هیلک و اه‌لمعلاروتسد
              </p>
            </div>
            <div>
              <h2 className="text-lg text-right font-bold text-MokhDarkBlue mb-1 sm:mb-4">
                حساب کاربری
              </h2>
              <p className="text-MokhFont1 mb-12 text-right">
                .دشاب یم نآ یاوتحم و ونیجاگ نشیکیلپا یونعم و یدام تیکلام قوقح هیلک یاراد هک جاگ یللملا نیب تاراشتنا : جاگ
                .ناربراک هب فلتخم قرط هب جاگ یللملا نیب تاراشتنا یشزومآ یوتحم هئارا و طابترا تهج یرازفا مرن رتسب و ونیجاگ نشیکیلپا : ونیجاگ
                .دیامن یم مادقا تامدخ تفایرد هب تبسن ونیجاگ نشیکیلپا زا هدافتسا اب و تنرتنیا یطابترا رتسب قیرط زا هک دشاب یم یقوقح ای یقیقح صخش : ربراک
                .تسا ‌هدرک داجیا نشیکیلپا رد ونیجاگ تامدخ زا هدافتسا یارب دوخ هارمه نفلت هرامش تبث اب ربراک هک تسا یباسح : (لیافورپ) یربراک باسح
                ،اه‌همانشخب ،ییارجا یاه همان نییآ ،یداع نیناوق ،یساسا نوناق : ناریا یمالسا یروهمج تاررقم و نیناوق .دوش‌یم ونیجاگ دراو ناربراک یوس زا میقتسم تروص هب هک یتاعالطا : یتیوه تاعالطا
                .هعماج رب مکاح ینوناق طباوض هیلک و اه‌لمعلاروتسد
              </p>
            </div>
            <div>
              <h2 className="text-lg text-right font-bold text-MokhDarkBlue mb-1 sm:mb-4">
                تعاریف و اصلاحات
              </h2>
              <p className="text-MokhFont1 mb-12 text-right">
                .دشاب یم نآ یاوتحم و ونیجاگ نشیکیلپا یونعم و یدام تیکلام قوقح هیلک یاراد هک جاگ یللملا نیب تاراشتنا : جاگ
                .ناربراک هب فلتخم قرط هب جاگ یللملا نیب تاراشتنا یشزومآ یوتحم هئارا و طابترا تهج یرازفا مرن رتسب و ونیجاگ نشیکیلپا : ونیجاگ
                .دیامن یم مادقا تامدخ تفایرد هب تبسن ونیجاگ نشیکیلپا زا هدافتسا اب و تنرتنیا یطابترا رتسب قیرط زا هک دشاب یم یقوقح ای یقیقح صخش : ربراک
                .تسا ‌هدرک داجیا نشیکیلپا رد ونیجاگ تامدخ زا هدافتسا یارب دوخ هارمه نفلت هرامش تبث اب ربراک هک تسا یباسح : (لیافورپ) یربراک باسح
                ،اه‌همانشخب ،ییارجا یاه همان نییآ ،یداع نیناوق ،یساسا نوناق : ناریا یمالسا یروهمج تاررقم و نیناوق .دوش‌یم ونیجاگ دراو ناربراک یوس زا میقتسم تروص هب هک یتاعالطا : یتیوه تاعالطا
                .هعماج رب مکاح ینوناق طباوض هیلک و اه‌لمعلاروتسد
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
