import React from "react";
import CategoryCard from "./CategoryCard";
import artpic from "../../../public/images/art.png";
import course from "../../../public/images/course.png";
import language from "../../../public/images/language.png";
import skill from "../../../public/images/skill.png";
import sport from "../../../public/images/sport.png";
import tec from "../../../public/images/tec.png";
import basketball from "../../../public/images/basket.png"
import statue from "../../../public/images/statue.png"
import gitar from "../../../public/images/gitar.png"
import DiscountCard from "./Discount";

const Category = () => {
  const categories = [
    { image: skill, title: "مهارت" },
    { image: course, title: "درس" },
    { image: tec, title: "تکنولوژی" },
    { image: artpic, title: "هنر" },
    { image: sport, title: "ورزش" },
    { image: language, title: "زبان" },
  ];

  const discountCardData = [
    {
      image: statue,
      category: "12 جلسه آموزش مجسمه سازی",
      sessions: "12 Sessions",
      instructor: "فرید انصاری فرد",
      originalPrice: "480000 تومان",
      discountedPrice: "380000 تومان",
    },
    {
      image: gitar,
      category: "8 جلسه آموزش گیتار",
      sessions: "8 Sessions",
      instructor: "آرمان پیروزه",
      originalPrice: "1200000 تومان",
      discountedPrice: "950000 تومان",
    },
    {
      image: basketball,
      category: "10 جلسه آموزش بسکتبال",
      sessions: "10 Sessions",
      instructor: "پژمان نصیری",
      originalPrice: "520000 تومان",
      discountedPrice: "440000 تومان",
    },
  ];

  return (
    <div className=" container mx-auto p-8 sm:mt-6 mt-6 md:mt-16">
      {/* Content for categories*/}
      <div className="grid gap-2  sm:gap-3 grid-cols-2 sm:grid-cols-2  md:grid-cols-3 md:gap-12">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            image={category.image}
            title={category.title}
          />
        ))}
      </div>

      {/* content for sale */}
      <div className="hidden container mx-auto md:grid grid-cols-3 gap-16 mt-20 mb-25">
        {discountCardData.map((card, index) => (
          <DiscountCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Category;
