import Image from "next/image";
import React from "react";
import Erroricon from "../../../public/icons/payfailed.svg";

const PaymentError = () => {
  return (
    <div className="flex justify-center  mx-auto container items-center h-screen ">
      <div className="bg-white w-full  md:w-1/3 p-8 m-4 rounded-lg shadow-custom text-center">
        <div className="flex justify-center items-center mb-4">
          <Image src={Erroricon} alt="success" width={100} height={100} />
        </div>
        <h2 className="text-xl font-semibold text-MokhPink mb-2">
          پرداخت ناموفق
        </h2>
        <p className="text-MokhDarkBlue text-base mb-6">
          در فرآیند پرداخت مشکلی پیش آمده است
        </p>
        <div className="flex justify-center gap-8 mt-4 ">
          <button className="bg-MokhBlue hover:bg-MokhBlueHover text-white py-2 px-4 rounded-xl">
            تلاش مجدد
          </button>
          <button className="text-white bg-MokhFont2 border border-MokhFont3 py-2 px-4 rounded-xl">
            بازگشت
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentError;
