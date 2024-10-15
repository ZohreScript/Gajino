import Image from "next/image";
import React from "react";
import warningicon from "../../../public/icons/warning.svg";

const PaymentWarning = () => {
  return (
    <div className="flex justify-center  mx-auto container items-center h-screen ">
      <div className="bg-white w-full  md:w-1/3 p-8 m-4 rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.20)] text-center">
         <div className="flex justify-center items-center mb-4">
          <Image src={warningicon} alt="success" width={100} height={100} />
        </div>
        <h2 className="text-xl font-semibold text-MokhYellow mb-2">
حذف کلاس از سبد خرید
        </h2>
        <p className="text-MokhFont2 text-base mb-6">
آیا کلاس موردنظر از سبدخرید حذف شود؟        </p>
<div className="flex justify-center gap-8  mt-4 ">
      
          <button className="text-white bg-MokhFont2 border border-MokhFont3 py-2 px-6 rounded-xl">
            بله
          </button>
          <button className="bg-MokhBlue hover:bg-MokhBlueHover text-white py-2 px-6 rounded-xl">
             خیر
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentWarning;
