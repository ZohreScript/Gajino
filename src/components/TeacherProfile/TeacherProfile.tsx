"use client";
import BannerSlider from "../BannerSlider/BannerSlider";
import teacher1 from "../../../public/images/teacher (1).png";
import TeacherProfileSummary from "../SearchBox/TeacherProfileSummary";
import TagCloud from "./TagCloud";
import Image from "next/image";
import classicon from "../../../public/icons/aboutclassa.svg";
import classicond from "../../../public/icons/aboutclassd.svg";
import resumeicon from "../../../public/icons/baga.svg";
import resumeicond from "../../../public/icons/bagd.svg";
import videoicon from "../../../public/icons/classtimea.svg";
import videoicond from "../../../public/icons/classtimed.svg";
import commenticon from "../../../public/icons/commentsa.svg";
import commenticond from "../../../public/icons/commentsd.svg";
import { useState } from "react";
import AboutTeacher from "./AboutTeacher";
import ResumeTimeline from "./ResumeTimeline";
import VideoGallery from "./VideoGallery";

interface Tab {
  name: string;
  icon: React.ReactNode;
  inactiveIcon: React.ReactNode;
}
const tabs: Tab[] = [
  {
    name: "درباره کلاس ها ",
    icon: (
      <Image
        src={classicon.src}
        alt="درباره کلاس  "
        width={24}
        height={24}
        className="ml-1 text-MokhFont2"
      />
    ),
    inactiveIcon: (
      <Image
        src={classicond.src}
        alt="درباره کلاس  "
        width={24}
        height={24}
        className="ml-1 text-MokhFont2"
      />
    ),
  },
  {
    name: "رزومه مدرس ",
    icon: (
      <Image
        src={resumeicon.src}
        alt="درباره کلاس  "
        width={24}
        height={24}
        className="ml-1 text-MokhFont2"
      />
    ),
    inactiveIcon: (
      <Image
        src={resumeicond.src}
        alt="درباره کلاس  "
        width={24}
        height={24}
        className="ml-1 text-MokhFont2"
      />
    ),
  },
  {
    name: "   کالکشن ویدیوها",
    icon: (
      <Image
        src={videoicon.src}
        alt=" کالکشن ویدیوها  "
        width={24}
        height={24}
        className="ml-1 text-MokhFont2"
      />
    ),
    inactiveIcon: (
      <Image
        src={videoicond.src}
        alt=" کالکشن ویدیوها  "
        width={24}
        height={24}
        className="ml-1 text-MokhFont2"
      />
    ),
  },
  {
    name: "نظرات و امتیازات ",
    icon: (
      <Image
        src={commenticon.src}
        alt="نظرات  "
        width={24}
        height={24}
        className="ml-1"
      />
    ),
    inactiveIcon: (
      <Image
        src={commenticond.src}
        alt="نظرات  "
        width={24}
        height={24}
        className="ml-1 text-MokhFont2"
      />
    ),
  },
];

const TeacherProfile = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const teacherProfileData = [
    {
      id: 1,
      firstName: "بهرام",
      lastName: "موسوی راد ",
      subjects: [
        { name: "ادبیات", description: "پایه دوازدهم تجربی و کنکور" },
        { name: "نویسندگی" },
        { name: "شعر نویسی" },
      ],
      location: "تهران",
      hoursTaught: 87,
      rating: 4.2,
      ratingCount: 87,
      ratePerHour: "140 هزار تومان",
      description:
        " لورم ایپسوم متن ساختگیورم ایپسوم متن ساختگی برای توضیح در مورد  معلم.ورم ایپسوم متن ساختگی برای توضیح در مورد  معلم. برای توضیح در مورد  معلم.",
      profileImage: teacher1,
    },
  ];

  const teacherData = teacherProfileData[0];

  return (
    <>
      <BannerSlider />
      <div className=" bg-white container mx-auto m-8 rounded-lg shadow-custom">
        <TeacherProfileSummary
          firstName={teacherData.firstName}
          lastName={teacherData.lastName}
          subjects={teacherData.subjects}
          location={teacherData.location}
          hoursTaught={teacherData.hoursTaught}
          rating={teacherData.rating}
          ratingCount={teacherData.ratingCount}
          ratePerHour={teacherData.ratePerHour}
          description={teacherData.description}
          profileImage={teacherData.profileImage}
        />

        <div className=" flex w-full gap-6 rounded-lg ">
          <TagCloud />
          <div className=" flex-1 flex-col items-center mx-5">
            {/* Tabs */}
            <div className="md:bg-MokhWhite2 bg-white rounded-lg flex justify-center mb-4">
              {tabs.map((tab, index) => (
                <div className="flex items-center" key={index}>
                  <button
                    className={`px-4 py-2 flex flex-col md:flex-row items-center rounded-lg transition-colors duration-200 ${
                      activeTab === index + 1
                        ? "bg-white text-MokhFont1 shadow-custom"
                        : "text-MokhFont2 hover:bg-white"
                    }`}
                    onClick={() => setActiveTab(index + 1)}
                  >
                    <div>
                      {activeTab === index + 1 ? tab.icon : tab.inactiveIcon}
                    </div>
                    <div className="mt-1 md:mt-0 text-xs md:text-balance ">
                      {tab.name}
                    </div>
                  </button>
                  {index < tabs.length - 1 && (
                    <div className="border-r-2 border-MokhFont3/50 h-6"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Tab Content */}
            <div className="container mx-auto">
              {activeTab === 1 && (
                <div>
                  <AboutTeacher />
                </div>
              )}
              {activeTab === 2 && <div>
                <ResumeTimeline/>
                  </div>}
              {activeTab === 3 && <div><VideoGallery/>  </div>}
              {activeTab === 4 && <div>محتوای تب ۴</div>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherProfile;
