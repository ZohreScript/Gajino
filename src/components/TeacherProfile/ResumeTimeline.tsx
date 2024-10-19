import React from "react";
import Image from "next/image";
import educationicon from "../../../public/icons/eduvationicon.svg";
import workicon from "../../../public/icons/workicon.svg";
import honorsicon from "../../../public/icons/honors.svg";
import { GoDotFill } from "react-icons/go";

interface TimelineItem {
  title: string;
  date: string;
  description: string;
}

const education: TimelineItem[] = [
  {
    title: "کارشناسی ارشد فیزیک هسته‌ای",
    date: "۱۳۹۶/۰۷ - ۱۳۹۴/۱۱",
    description: "دانشگاه صنعتی شریف",
  },
  {
    title: "کارشناسی فیزیک محض",
    date: "۱۳۹۴/۰۷ - ۱۳۸۶/۰۴",
    description: "دانشگاه آزاد واحد تهران جنوب",
  },
];

const workExperience: TimelineItem[] = [
  {
    title: "مدرس ادبیات پایه دوازدهم ریاضی",
    date: "۱۳۹۹/۰۱ - در حال حاضر",
    description: "آموزشگاه علوی تمام شعب",
  },
  {
    title: "مدرس ادبیات کنکور",
    date: "۱۳۸۶/۰۴ - ۱۳۹۶/۰۴",
    description: "مدرسه شهید فهمیده منطقه ۳ تهران",
  },
];

const honors: TimelineItem[] = [
  {
    title: "بهترین مدرس فیزیک سال ۹۷",
    date: "۱۳۹۷/۰۳",
    description: "آموزش و پرورش منطقه ۵",
  },
];

const TimelineSection: React.FC<{
  title: string;
  items: TimelineItem[];
  iconSrc: string;
  showVerticalLine?: boolean; 
}> = ({ title, items, iconSrc, showVerticalLine = true }) => (
  <div className="relative mb-12">
    <div className="flex items-center">
      <Image
        src={iconSrc}
        width={32}
        height={32}
        alt="Section Icon"
        className="mr-2"
      />
      <h2 className="text-xl font-bold text-MokhDarkBlue mx-1">{title}</h2>
    </div>
    {showVerticalLine && (
      <div className="absolute  right-6 top-10 w-[2px] h-full bg-MokhDarkBlue"></div>
    )}
    <ul className="pl-2 pr-2 space-y-4 mt-4 ">
      {items.map((item, index) => (
        <li key={index} className="flex items-start space-x-4">
          <div className="flex flex-col md:flex-row md:items-center justify-start text-right pr-8 w-full md:space-x-4">
            <h3 className="text-sm font-semibold flex items-center text-MokhDarkBlue w-full">
              <GoDotFill className="text-MokhBlue text-lg" />
              {item.title}
            </h3>
            <div className="text-sm text-MokhFont2 w-full flex justify-between mt-2 md:mt-0 pr-1  items-center">
              <p className="text-xs md:text-sm text-justify">{item.description}</p>
              <time className=" text-justify ">
                {item.date}
              </time>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

const ResumeTimeline: React.FC = () => {
  return (
    <div className="relative w-full px-5 py-10">
      {/* Timeline Sections */}
      <div className="relative">
        <TimelineSection
          title="سوابق تحصیلی"
          items={education}
          iconSrc={educationicon}
        />
        <TimelineSection
          title="سوابق شغلی"
          items={workExperience}
          iconSrc={workicon}
        />
        <TimelineSection
          title="افتخارات و دست‌آوردها"
          items={honors}
          iconSrc={honorsicon}
          showVerticalLine={false} 
        />
      </div>
    </div>
  );
};

export default ResumeTimeline;
