"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "چگونه در پلتفرم مخ ثبت نام کنیم؟",
    answer:
      "شما می‌توانید با استفاده از فرم ثبت نام و وارد کردن اطلاعات مورد نظر، حساب خود را ایجاد کنید.",
  },
  {
    question:
      "آیا مخ رزومه شما نشان دادن تناسب شما با شغل اولویت بندی آن ها حتماً دارد؟",
    answer:
      "بله، پلتفرم مخ به شما کمک می‌کند با رزومه‌ای که به‌درستی تنظیم شده باشد، شانس بیشتری برای انتخاب شدن داشته باشید.",
  },
  {
    question: "چگونه در پلتفرم مخ میتوانم مدرس شوم؟",
    answer:
      "برای تبدیل شدن به مدرس در مخ، کافیست به صفحه ثبت نام مدرسین مراجعه و فرم مربوطه را پر کنید.",
  },
  // Add more FAQ items here...
];

const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex justify-center py-8 px-4">
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-center mb-2 text-MokhDarkBlue">
          سوالات متداول
        </h2>
        <p className="text-MokhDarkBlue justify-center mb-4 items-center text-center">
          اگر سوالی در خصوص پلتفرم مخ دارید در این صفحه سعی کردیم به سوالات شما
          پاسخ دهیم
        </p>
        <div className="p-4 space-y-8">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`border-b last:border-none justify-center rounded-lg shadow-lg transition-all ${
                activeIndex === index ? "bg-gray-50" : "bg-white"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex text-sm md:text-lg justify-between items-center py-4 px-6 text-right  font-medium text-MokhFont1"
              >
                <span
                  className={`${
                    activeIndex === index
                      ? "text-MokhBlue"
                      : "text-MokhFont1"
                  } flex-1`}
                >
                  {faq.question}
                </span>
                <FaChevronDown
                  className={`transition-transform text-MokhBlue duration-300  sm:text-sm md:text-xl flex-shrink-0 ${
                    activeIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {activeIndex === index && (
                <div className="px-6 py-4 border-t border-gray-200 text-MokhFont1Light text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
