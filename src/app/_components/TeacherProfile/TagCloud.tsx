import React from 'react';

const tags: string[] = [
  "فیزیک اتمی", "فیزیک", "نوسان و امواج", "دینامیک",
  "ریاضی", "فیزیک هسته ای", "فیزیک اتمی", "فیزیک",
  "نوسان و امواج", "دینامیک", "ریاضی", "فیزیک هسته ای"
];

const TagCloud: React.FC = () => {
  return (
    <div className="w-1/5 h-fit flex-wrap px-2 gap-2 justify-start mr-5 hidden md:flex">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="bg-MokhWhite2 h-8 text-MokhFont2 px-3 py-1 rounded-xl mb-1
          flex-grow-0 flex-shrink-0"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default TagCloud;
