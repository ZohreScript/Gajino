import React, { useState } from 'react';
import onlineicon1 from "../../../public/icons/online1.svg";
import onlineicon2 from "../../../public/icons/online2.svg";
import presenticon1 from "../../../public/icons/present1.svg";
import presenticon2 from "../../../public/icons/present2.svg";
import Image from 'next/image';

const MobileClass = () => {
    const [showClassModal, setShowClassModal] = useState<boolean>(false);
    const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);

    // داده‌های کلاس‌ها
    const classData = [
        {
            startTime: 10,
            endTime: 12,
            title: 'درس فیزیک 3',
            grade: 'پایه دوازدهم تجربی',
            backgroundColor: 'bg-yellow-100',
            borderColor: 'border-yellow-500',
        },
        {
            startTime: 14,
            endTime: 16,
            title: 'درس ریاضی 3',
            grade: 'پایه دوازدهم ریاضی',
            backgroundColor: 'bg-blue-100',
            borderColor: 'border-blue-500',
        },
        {
            startTime: 8,
            endTime: 10,
            title: 'درس آمار',
            grade: 'پایه یازدهم انسانی',
            backgroundColor: 'bg-green-100',
            borderColor: 'border-green-500',
        },
    ];

    // محاسبه موقعیت کلاس‌ها
    const getClassPosition = (startTime: number) => {
        return (startTime - 8) *7.85; // هر ساعت 8.33% از ارتفاع کل است
    };

    const getClassHeight = (startTime: number, endTime: number) => {
        let result_height = ((endTime - startTime) *7.85);
        return result_height; // هر ساعت 8.33% ارتفاع می‌گیرد
    };

    return (
        <div className="grid grid-cols-12 md:hidden gap-2 m-4 max-w-sm">
            {/* ستون ساعت‌ها */}
            <div className="block col-span-2 p-2 relative">
                {Array.from({ length: 13 }, (_, index) => (
                 <>
                 <div key={index} className="text-right  text-lg pb-8 relative">
                        {index + 8}:00
                        <div className="absolute bottom-3 w-8 items-center border-b   border-gray-300 "></div>
                    </div>
             </>
             ))}
            </div>

            {/* محتوای کلاس‌ها */}
            <div className="col-span-10  p-2 relative">
                {/* رندر کلاس‌ها */}
                {classData.map((classItem, index) => (
                    <div
                        key={index}
                        className={`absolute w-full ${classItem.backgroundColor} bg-opacity-20 ${classItem.borderColor} border-t-4 rounded-md p-2`}
                        style={{
                            top: `${getClassPosition(classItem.startTime)}%`,
                            height: `${getClassHeight(classItem.startTime, classItem.endTime)}%`,
                        }}
                    >
                        <button className="absolute top-3 left-2 bg-cyan-500 w-8 h-8 rounded-full flex items-center leading-none justify-center text-white text-xl font-bold">
                            +
                        </button>
                        <div className="text-right text-MokhDarkBlue text-lg font-semibold mb-2">
                            {`${classItem.startTime}:00 - ${classItem.endTime}:00`}
                        </div>
                        <div className="text-right text-MokhDarkBlue flex items-center justify-between gap-6">
                            <p className="text-base font-bold">{classItem.title}</p>
                            <p className="text-sm  text-MokhFont2 text-justify">{classItem.grade}</p>
                        </div>
                        <div className="flex justify-start mt-2">
                    <div className="text-center">
                      <Image
                        src={onlineicon1.src}
                        alt="Shopping Cart"
                        width={24}
                        height={24}
                        className="cursor-pointer"
                      />
                    </div>
                    <div className="text-center">
                      <Image
                        src={onlineicon2.src}
                        alt="Shopping Cart"
                        width={24}
                        height={24}
                        className="cursor-pointer"
                      />
                    </div>
                    <div className="text-center">
                      <Image
                        src={presenticon1.src}
                        alt="Shopping Cart"
                        width={24}
                        height={24}
                        className="cursor-pointer"
                      />
                    </div>
                    <div className="text-center">
                      <Image
                        src={presenticon2.src}
                        alt="Shopping Cart"
                        width={24}
                        height={24}
                        className="cursor-pointer"
                      />
                    </div>
                  </div>

                        {/* خط افقی کوتاه بین کلاس‌ها */}
                        {index < classData.length - 1 && classItem.endTime === classData[index + 1].startTime && (
                            <div
                                className="absolute px-2 w-1/2 left-1/4 border-b border-gray-400"
                                style={{
                                    top: '100%', // دقیقاً بعد از پایان کادر کلاس
                                }}
                            ></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MobileClass;
