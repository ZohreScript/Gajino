"use client";
import TagCloud from "./TagCloud";
import Image from "next/image";
import classicon from "../../../../public/icons/aboutclassa.svg";
import classicond from "../../../../public/icons/aboutclassd.svg";
import resumeicon from "../../../../public/icons/baga.svg";
import resumeicond from "../../../../public/icons/bagd.svg";
import videoicon from "../../../../public/icons/classtimea.svg";
import videoicond from "../../../../public/icons/classtimed.svg";
import commenticon from "../../../../public/icons/commentsa.svg";
import commenticond from "../../../../public/icons/commentsd.svg";
import { useState } from "react";
import AboutTeacher from "./AboutTeacher";
import ResumeTimeline from "./ResumeTimeline";
import VideoGallery from "./VideoGallery";
import ReviewsList from "./ReviewsList";
import ScheduleClass from "./ScheduleClass";
import Teacher from "../Teacher/Teacher";
import teacher12 from "../../../../public/images/teacher (1).png"
import teacher2 from "../../../../public/images/teacher (2).png";
import teacher3 from "../../../../public/images/teacher (3).png";
import teacher4 from "../../../../public/images/teacher (4).png";
import TeacherSlider from "./TeacherSlider";
import BannerVideo from "./BannerVideo";
import TeacherProfileSummary from "../SearchBox/TeacherProfileSummary";
interface Tab {
  name: string;
  icon: React.ReactNode;
  inactiveIcon: React.ReactNode;
}

const TeacherCardData = [
  {
    id: 1,
    name: "مینا جعفری زاده همدانی",
    subject: "زبان انگلیسی",
    rating: "4/2",
    image: teacher3,
    comments: "586",
  },
  {
    id: 2,
    name: "علیرضا محمدیان",
    subject: "زبان آلمانی",
    rating: "4/2",
    image: teacher2,
    comments: "586",
  },
  {
    id: 3,
    name: "بهرام موسوی راد",
    subject: "ادبیات فارسی",
    rating: "4/4",
    image: teacher12,
    comments: "586",
  },
  {
    id: 4,
    name: "پژمان نوری",
    subject: "بستکتبال",
    rating: "4/4",
    image: teacher4,
    comments: "586",
  },
  {
    id: 5,
    name: "علیرضا محمدیان",
    subject: "زبان آلمانی",
    rating: "4/4",
    image: teacher2,
    comments: "586",
  },
  {
    id: 6,
    name: "بهرام موسوی راد",
    subject: "ادبیات فارسی",
    rating: "4/4",
    image: teacher12,
    comments: "586",
  },
];

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
      profileImage: teacher12,
    },
  ];

  const teacherData = teacherProfileData[0];

  return (
    <>
      <BannerVideo />
      <div className=" bg-white container mx-auto m-8 rounded-2xl shadow-custom">
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
                    className={`px-2 gap-1  py-2 flex flex-col  md:flex-row items-center rounded-lg transition-colors duration-200 ${
                      activeTab === index + 1
                        ? "bg-white text-MokhFont1 shadow-custom"
                        : "text-MokhFont2 hover:bg-white"
                    }`}
                    onClick={() => setActiveTab(index + 1)}
                  >
                    <div>
                      {activeTab === index + 1 ? tab.icon : tab.inactiveIcon}
                    </div>
                    <div className="mt-1 md:mt-0 md:text-sm text-xs md:text-balance ">
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
              {activeTab === 2 && (
                <div>
                  <ResumeTimeline />
                </div>
              )}
              {activeTab === 3 && (
                <div>
                  <VideoGallery />{" "}
                </div>
              )}
              {activeTab === 4 && (
                <div>
                  <ReviewsList />{" "}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <ScheduleClass />
      {/* Slider Section */}
      <div className="container mx-auto block my-9 items-center justify-center">
      <h2 className="font-bold text-MokhDarkBlue block text-center justify-center items-center text-heading-2 mb-6">
             مدرسین مشابه
          </h2>

        <TeacherSlider teacherCardData={TeacherCardData} />
      </div>
    </>
  );
};

export default TeacherProfile;
