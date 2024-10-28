import React, { useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const monthNames = [
  "فروردین", "اردیبهشت", "خرداد", "تیر",
  "مرداد", "شهریور", "مهر", "آبان",
  "آذر", "دی", "بهمن", "اسفند"
];
const WeekPicker: React.FC = () => {
  // Initialize the current week starting from the most recent Saturday
  const today = new Date();
  const firstDayOfWeek = new Date(today);
  firstDayOfWeek.setDate(today.getDate() - ((today.getDay() + 1) % 7)); // Set to last Saturday

  const [currentWeekStart, setCurrentWeekStart] = useState(firstDayOfWeek);
  const [currentDayIndex, setCurrentDayIndex] = useState(0); // To track the current day in the week

  // Function to update the week
  const updateWeek = (weekShift: number) => {
    const newStart = new Date(currentWeekStart);
    newStart.setDate(currentWeekStart.getDate() + weekShift * 7); // Shift week by 7 days
    setCurrentWeekStart(newStart);
    setCurrentDayIndex(0); // Reset to the first day of the new week
  };

  // Function to update the current day
  const updateDay = (dayShift: number) => {
    const newIndex = currentDayIndex + dayShift;
    if (newIndex >= 0 && newIndex < 7) {
      setCurrentDayIndex(newIndex);
    }
  };

  // Create an array of week days (Saturday to Friday)
  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(currentWeekStart);
    date.setDate(currentWeekStart.getDate() + i); // Increment date for each day of the week
    return date;
  });
  const daysOfWeek = weekDays.map((day) => ({
    day: day.toLocaleDateString('fa-IR', { weekday: 'long' }), // Get the Persian name of the day
    date: day.toLocaleDateString('fa-IR', { year: 'numeric', month: '2-digit', day: '2-digit' }), // Format the date
  }));

  // Formatting function for Persian dates
  const formatPersianDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      calendar: "persian",
    };
    return date.toLocaleDateString("fa-IR", options);
  };

  return (
    <div>
      {/* ناوبری هفته */}
      <div className=" flex justify-center text-MokhFont2">
        <button
          onClick={() => updateWeek(-1)}
          className="mx-2 p-4 bg-white  shadow-custom rounded-lg"
        >
          <FaChevronRight className="text-MokhFont2" />
        </button>
        <span
          className="px-4 py-2 bg-white shadow-custom  flex 
       justify-center items-center rounded-lg"
        >
          {` ${formatPersianDate(weekDays[0])} - ${formatPersianDate(weekDays[6])}`}{" "}
        </span>
        <button
          onClick={() => updateWeek(1)}
          className="mx-2 p-4 bg-white shadow-custom rounded-lg"
        >
          <FaChevronLeft className="text-MokhFont2" />
        </button>
      </div>

      {/* نمایش روزهای هفته */}
      <div className="hidden md:grid grid-cols-7 py-6 gap-4 m-4">
        {daysOfWeek.map((day, idx) => (
          <div
            key={idx}
            className="text-center p-2 bg-MokhWhite2 text-MokhFont2 rounded-lg"
          >
            <h2 className="text-sm font-semibold">{day.day}</h2>
            <p className="text-sm">{day.date}</p>
          </div>
        ))}
      </div>

      {/* Mobile Navigation for Previous and Next Day */}
      <div className=" flex justify-center text-MokhFont2">
        <button
          onClick={() => updateDay(-1)}
          disabled={currentDayIndex === 0}
          className="mx-2 p-4 bg-white  shadow-custom rounded-lg"
        >
          <FaChevronRight className="text-MokhFont2" />
        </button>
        <span
          className="px-4 py-2 bg-white shadow-custom  flex 
          justify-center items-center rounded-lg"
        >
          {formatPersianDate(weekDays[currentDayIndex])}
        </span>
        <button
          onClick={() => updateDay(1)}
          disabled={currentDayIndex === 6}
          className="mx-2 p-4 bg-white shadow-custom rounded-lg"
        >
          <FaChevronLeft className="text-MokhFont2" />
        </button>
      </div>
    </div>
  );
};

export default WeekPicker;
