import Image from 'next/image';
import React from 'react';
import paysuccess from "../../../public/icons/pay successful.svg"


const PaymentSuccess = () => {
  return (
    <div className="flex justify-center  mx-auto container items-center h-screen ">
      <div className="bg-white w-full  md:w-1/3 p-8 m-4 rounded-lg shadow-custom text-center">
        <div className="flex justify-center items-center mb-4">
       <Image src={paysuccess} alt="success"   width={100}
      height={100}/>
        </div>
        <h2 className="text-xl font-semibold text-MokhBlue mb-2">
          پرداخت موفق
        </h2>
        <p className="text-MokhFont2 text-base mb-6">
          کلاس های انتخابی شما با موفقیت رزرو شد!
        </p>
        <button className="bg-MokhBlue text-lg text-white py-2 px-6 rounded-lg shadow hover:bg-MokhBlueHover focus:outline-none">
          مشاهده زمانبندی کلاس ها
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
