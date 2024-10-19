import React from "react";
import { GoDotFill } from "react-icons/go";

// Define the structure of each section
interface Section {
  title: string;
  content: string;
}

const AboutTeacher: React.FC = () => {
  // Define the sections with titles and content
  const sections: Section[] = [
    {
      title: "ادبیات",
      content: `درباره مدرس: رزومه شما، نشان دادن تناسب شغلی اولویت بندی آن به یک مخاطب خاص یک نگاه کلی به آن فرصت شغلی باشد و باید بر اساس شرایط موجود رزومه سازی کنید. حتماً باید یک نگاه کلان به این فرصت شغلی باشد و باید بر اساس شرایط موجود رزومه سازی کنید.`,
    },
    {
      title: "نویسندگی",
      content: `درباره مدرس: رزومه شما، نشان دادن تناسب شغلی اولویت بندی آن به یک مخاطب خاص یک نگاه کلی به آن فرصت شغلی باشد و باید بر اساس شرایط موجود رزومه سازی کنید. حتماً باید یک نگاه کلان به این فرصت شغلی باشد و باید بر اساس شرایط موجود رزومه سازی کنید.`,
    },
    {
      title: "شعر نویسی",
      content: `درباره مدرس: رزومه شما، نشان دادن تناسب شغلی اولویت بندی آن به یک مخاطب خاص یک نگاه کلی به آن فرصت شغلی باشد و باید بر اساس شرایط موجود رزومه سازی کنید. حتماً باید یک نگاه کلان به این فرصت شغلی باشد و باید بر اساس شرایط موجود رزومه سازی کنید.`,
    },
  ];

  return (
    <div className="grid  container mx-auto justify-center items-start">
      {sections.map((section, index) => (
        <div key={index} className="mb-4"> 
          <h2 className="text-MokhFont1 font-bold flex items-center text-lg mb-1"> {/* تغییر mb-2 به mb-1 */}
            <GoDotFill className="text-MokhBlue" />
            {section.title}
          </h2>
          <p className="text-MokhFont2 leading-relaxed">
            {section.content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AboutTeacher;
