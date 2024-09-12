import art from "../../public/icons/art.svg";
import course from "../../public/icons/course.svg";
import language from "../../public/icons/language.svg";
import skill from "../../public/icons/skill.svg";
import sport from "../../public/icons/sport.svg";
import tec from "../../public/icons/tec.svg";
import activecourse from "../../public/icons/courseActive.svg";
import activeart from "../../public/icons/artActive.svg";
import activelanguage from "../../public/icons/languageactive.svg";
import activeskill from "../../public/icons/skillActive.svg";
import sportactive from "../../public/icons/sportActive.svg";
import tecactive from "../../public/icons/tecActive.svg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

// Define the interface for the third level of pages
export interface ThirdSubPage {
  id: number;
  type: string;
  url: string;
}

// Update the interface for the second level to include third level pages
export interface SubSubPage {
  id: number;
  url: string;
  type: string;
  thirdsubPages?: ThirdSubPage[]; // Example of additional nested pages
}

export interface SubPage {
  id: number;
  type: string;
  url: string;
  icon?: string;
  activeicon?: string;
  subsubPages?: SubSubPage[]; // This is for the second level
}

export interface Page {
  id: number;
  type: string;
  url: string;
  icon?: StaticImport | string;
  activeicon?: string;
  subPages?: SubPage[]; // This is for the first level
}

export const Pages: Page[] = [
  {
    id: 1,
    type: "موضوعات",
    url: "topics",
    subPages: [
      {
        id: 1,
        type: "درسی",
        url: "topics/education",
        icon: course,
        activeicon: activecourse,
        subsubPages: [
          {
            id: 1,
            type: "پایه اول",
            url: "topics/education/grade-1",
            thirdsubPages: [
              { id: 1, type: "فارسی", url: "topics/education/grade-1/persian" },
              { id: 2, type: "قرآن", url: "topics/education/grade-1/quran" },
              { id: 3, type: "علوم", url: "topics/education/grade-1/science" },
              { id: 4, type: "ریاضی", url: "topics/education/grade-1/math" },
              { id: 5, type: "نگارش فارسی", url: "topics/education/grade-1/writing" },
            ],
          },
          { id: 2, type: "پایه دوم", url: "topics/education/grade-2" },
          { id: 3, type: "پایه سوم", url: "topics/education/grade-3" },
          { id: 4, type: "پایه چهارم", url: "topics/education/grade-4" },
          { id: 5, type: "پایه پنجم", url: "topics/education/grade-5" },
          { id: 6, type: "پایه ششم", url: "topics/education/grade-6" },
          { id: 7, type: "تکمیلی", url: "topics/education/advanced" },
          { id: 8, type: "کارشناسی ارشد", url: "topics/education/masters" },
          { id: 9, type: "دکترا", url: "topics/education/phd" },
        ],
      },
      {
        id: 2,
        type: "زبان",
        url: "topics/language",
        icon: language,
        activeicon: activelanguage,
        subsubPages: [
          { id: 1, type: "انگلیسی", url: "topics/language/english" },
          { id: 2, type: "فرانسوی", url: "topics/language/french" },
          { id: 3, type: "آلمانی", url: "topics/language/german" },
          { id: 4, type: "اسپانیایی", url: "topics/language/spanish" },
          { id: 5, type: "ایتالیایی", url: "topics/language/italian" },
          { id: 6, type: "چینی", url: "topics/language/chinese" },
          { id: 7, type: "ژاپنی", url: "topics/language/japanese" },
          { id: 8, type: "کره‌ای", url: "topics/language/korean" },
          { id: 9, type: "عربی", url: "topics/language/arabic" },
        ],
      },
      {
        id: 3,
        type: "هنر",
        url: "topics/art",
        icon: art,
        activeicon: activeart,
        subsubPages: [
          { id: 1, type: "گیتار", url: "topics/art/guitar" },
          { id: 2, type: "نقاشی", url: "topics/art/painting" },
          { id: 3, type: "مجسمه‌سازی", url: "topics/art/sculpture" },
          { id: 4, type: "عکاسی", url: "topics/art/photography" },
          { id: 5, type: "طراحی", url: "topics/art/design" },
          { id: 6, type: "هنر دیجیتال", url: "topics/art/digital-art" },
          { id: 7, type: "خوشنویسی", url: "topics/art/calligraphy" },
          { id: 8, type: "کاشی‌کاری", url: "topics/art/tile-work" },
          { id: 9, type: "آهنگسازی", url: "topics/art/composing" },
        ],
      },
      {
        id: 4,
        type: "ورزش",
        url: "topics/sport",
        icon: sport,
        activeicon: sportactive,
        subsubPages: [
          { id: 1, type: "فوتبال", url: "topics/sport/football" },
          { id: 2, type: "بسکتبال", url: "topics/sport/basketball" },
          { id: 3, type: "والیبال", url: "topics/sport/volleyball" },
          { id: 4, type: "شنا", url: "topics/sport/swimming" },
          { id: 5, type: "دویدن", url: "topics/sport/running" },
          { id: 6, type: "دوچرخه‌سواری", url: "topics/sport/cycling" },
          { id: 7, type: "کشتی", url: "topics/sport/wrestling" },
          { id: 8, type: "کاراته", url: "topics/sport/karate" },
          { id: 9, type: "تکواندو", url: "topics/sport/taekwondo" },
        ],
      },
      {
        id: 5,
        type: "مهارت",
        url: "topics/skill",
        icon: skill,
        activeicon: activeskill,
        subsubPages: [
          { id: 1, type: "برنامه‌نویسی", url: "topics/skill/programming" },
          { id: 2, type: "مدیریت پروژه", url: "topics/skill/project-management" },
          { id: 3, type: "تحلیل داده", url: "topics/skill/data-analysis" },
          { id: 4, type: "طراحی UX/UI", url: "topics/skill/ux-ui-design" },
          { id: 5, type: "بازاریابی دیجیتال", url: "topics/skill/digital-marketing" },
          { id: 6, type: "نوشتن محتوا", url: "topics/skill/content-writing" },
          { id: 7, type: "امنیت سایبری", url: "topics/skill/cyber-security" },
          { id: 8, type: "مدیریت شبکه", url: "topics/skill/network-management" },
          { id: 9, type: "مدیریت کسب و کار", url: "topics/skill/business-management" },
        ],
      },
      {
        id: 6,
        type: "تکنولوژی",
        url: "topics/technology",
        icon: tec,
        activeicon: tecactive,
        subsubPages: [
          { id: 1, type: "هوش مصنوعی", url: "topics/technology/ai" },
          { id: 2, type: "بلوک‌چین", url: "topics/technology/blockchain" },
          { id: 3, type: "رایانش ابری", url: "topics/technology/cloud-computing" },
          { id: 4, type: "اینترنت اشیاء", url: "topics/technology/iot" },
          { id: 5, type: "امنیت اطلاعات", url: "topics/technology/information-security" },
          { id: 6, type: "واقعیت افزوده", url: "topics/technology/augmented-reality" },
          { id: 7, type: "واقعیت مجازی", url: "topics/technology/virtual-reality" },
          { id: 8, type: "پایگاه داده", url: "topics/technology/database" },
          { id: 9, type: "شبکه", url: "topics/technology/network" },
        ],
      },
    ],
  },
  { id: 2, type: "درباره ما", url: "about-us" },
  { id: 3, type: "تماس با ما", url: "contact-us" },
  { id: 4, type: "سوالات متداول", url: "fq" },
];
