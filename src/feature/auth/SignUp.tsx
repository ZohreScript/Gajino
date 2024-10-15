import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import OTPInput from "react-otp-input";
import { HiArrowRight } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMobile } from "react-icons/ai";
import Logo from "../../../..//public/icons/logo.svg"; // Ensure the path to the logo is correct

// Define the Zod schema for validation
const mobileSchema = z.object({
  mobile: z
    .string()
    .min(11, { message: "شماره موبایل را به درستی وارد کنید." })
    .regex(/^09\d{9}$/, "شماره موبایل معتبر نیست"),
});

type FormData = z.infer<typeof mobileSchema>;

interface SignUpProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignUp: React.FC<SignUpProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<"login" | "otp">("login");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState<string>("");
  const [time, setTime] = useState<number>(51);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(mobileSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    setPhoneNumber(data.mobile); // Save phone number
    handlePhoneSubmit();
  };

  const handlePhoneSubmit = () => {
    // Simulate sending OTP and move to OTP step
    setStep("otp");
    setTime(51); // Reset timer
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle OTP verification here (e.g., API call)
    console.log(`OTP entered: ${otp}`);
    onClose();
  };

  const handleResendOtp = () => {
    // Logic for resending OTP
    setTime(51); // Reset timer
    console.log("OTP resent");
  };

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Black overlay */}
      <div
        className="fixed inset-0 bg-black opacity-40"
        onClick={onClose}
      ></div>

      {/* Modal content */}
      <div className="relative z-50 bg-white shadow-lg rounded-lg p-4 max-w-sm  mx-auto">
        {step === "login" ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex mb-6 justify-center">
              <div className="w-[37px] h-[40px] md:w-[54px] md:h-[60px] relative">
                <Image
                  src={Logo.src}
                  alt="Logo"
                  layout="fill"
                  objectFit="contain"
                  className="w-full h-full"
                />
              </div>
            </div>

            <h2 className="text-center px-4 text-MokhFont1 text-xl font-semibold mb-4">
              ورود/ثبت نام
            </h2>
            <p className="text-center px-2 mx-4 text-MokhFont1 text-base mb-6">
              برای شروع شماره موبایل خود را وارد کنید:
            </p>

            <div className="relative ">
              <input
                type="text"
                placeholder="مثال: 09121234567"
                {...register("mobile")}
                className={`w-full bg-gray-100 rounded-xl py-3 pr-12 text-gray-700 focus:outline-none ${
                  errors.mobile ? "text-pink-700" : "focus:border-none"
                }`}
              />
              <AiOutlineMobile
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
            <div className=" mb-6">
              {errors.mobile && (
                <p className="text-pink-700 text-sm ">
                  {errors.mobile.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className={`w-full py-3 rounded-2xl transition ${
                errors.mobile
                  ? "bg-MokhBlue opacity-50 text-white"
                  : "bg-MokhBlue text-white hover:bg-MokhBlue"
              }`}
            >
              تایید
            </button>

            <div className="flex justify-center text-MokhBlue items-center mt-4">
              <Link href="#" className="text-sm">
                شرایط و قوانین
              </Link>
              <span className="mx-2 text-gray-600">|</span>
              <Link href="#" className="text-sm">
                حریم خصوصی
              </Link>
            </div>
          </form>
        ) : (
          <div>
            <div className="flex mb-6 justify-center">
              <div className="w-[37px] h-[40px] md:w-[54px] md:h-[60px] relative">
                <Image
                  src={Logo.src}
                  alt="Logo"
                  layout="fill"
                  objectFit="contain"
                  className="w-full h-full"
                />
              </div>
            </div>

            <h2 className="text-center px-4 text-MokhFont1 text-xl font-semibold mb-4">
              کد تایید
            </h2>
            <p className="text-center  w-full  text-MokhFont1 text-sm md:text-base  mb-6 ">
              کد 5 رقمی ارسال شده به شماره{" "}
              <strong className="mx-1 ">{phoneNumber}</strong>
              را در کادر زیر وارد نمایید:
            </p>

            <form onSubmit={handleOtpSubmit}>
              <div className="mb-6">
                <OTPInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={5}
                  renderInput={(props) => <input {...props} />}
                  containerStyle="lex flex-row-reverse gap-x-2  justify-center"
                  inputStyle={{
                    width: "2.5rem",
                    padding: "0.5rem 0.2rem",
                    borderRadius: "0.5rem",
                    backgroundColor: "#ECEAEF",
                    border: "none",
                    outline: "none",
                    direction: "rtl",
                  }}
                />
              </div>

              {time > 0 ? (
                <p className="text-center  w-full px-4 mx-auto text-MokhFont1 text-sm  mb-6 ">
                  ارسال مجدد کد بعد از
                  <strong className="mr-1">{time}ثانیه</strong>
                </p>
              ) : (
                <button
                  className="text-center  w-full px-4 mx-auto text-MokhBlue font-bold text-sm  mb-6 "
                  onClick={handleResendOtp}
                >
                  ارسال مجدد کد
                </button>
              )}
              <p className="text-center  w-full text-MokhFont1 text-sm  mb-6 ">
                آیا میخواهید شماره موبایل تغییر دهید؟
                <strong className="mr-1 text-MokhBlue">
                  تغییر شماره موبایل
                </strong>
              </p>
              {/* Submit Button */}
              <button
    type="submit"
    className={`w-full text-white bg-MokhBlue py-3 rounded-2xl transition ${
      otp.length === 5 ? "opacity-100 hover:bg-teal-600" : "opacity-50"
    }`}
    disabled={otp.length !== 5}
  >
                تایید
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;
