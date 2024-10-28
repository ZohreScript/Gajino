import React from "react";
import paysuccess from "../../../../public/icons/pay successful.svg";
import Image from "next/image";

interface SuccessModalProps {
  showModal: boolean;
  closeModal: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  showModal,
  closeModal,
}) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 z-10 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl shadow-custom ">
        <div className="text-center">
          <div className="flex justify-center items-center mb-4">
            <Image src={paysuccess} alt="success" width={100} height={100} />
          </div>
          <h2 className="text-lg  text-MokhBlue font-semibold mb-2">
            کلاس مورد نظر به سبد رزرو اضافه شد
          </h2>
          <p className="text-MokhDarkBlue text-base mb-6">
            میخوای کلاس های دیگه ایی هم رزرو کنی؟{" "}
          </p>
          <div className="flex justify-center gap-2 mt-4 ">
            <button
              onClick={closeModal}
              className="bg-MokhBlue hover:bg-MokhBlueHover text-white py-2 px-10 rounded-xl"
            >
              تکمیل رزرو
            </button>
            <button className="bg-white text-MokhFont2 border border-MokhFont3 p-2 rounded-xl">
              رزرو کلاس های بیشتر
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
