import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  ChevronLeft,
  Calendar as CalendarIcon,
  Plus,
} from "lucide-react";
import DietListItem from "../components/DietListItem";
import PointToast from "../components/PointToast";
import { getTodayDate, getDatesThatHaveRecords } from "../utils/dietStorage";
import imgFire from "figma:asset/3d6b605608139f4862bf5b26accdd0daefb82269.png";
import {
  getToday,
  getMonthName,
  getCalendarDates,
  isSameDate,
} from "../utils/dateUtils";

function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      className="relative shrink-0 size-[24px]"
      onClick={() => navigate(-1)}
    >
      <ChevronLeft
        size={24}
        style={{ color: "var(--neutral-800)" }}
        strokeWidth={1.5}
      />
    </button>
  );
}

function HeaderContainer() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full">
      <BackButton />
      <div className="content-stretch flex gap-[11px] items-center justify-center relative shrink-0">
        <h1 className="font-medium text-[16px] text-neutral-800 tracking-[-0.32px] leading-[22px]">
          식단 기록
        </h1>
      </div>
      <div className="shrink-0 size-[24px]" />
    </div>
  );
}

function DetailHeaders() {
  return (
    <div className="sticky top-0 z-10 box-border content-stretch flex flex-col gap-[10px] items-start overflow-clip px-[16px] py-[8px] shadow-[0px_4px_11px_0px_rgba(232,232,232,0.2)] w-full bg-white">
      <HeaderContainer />
    </div>
  );
}

function CalendarDate({
  day,
  date,
  isSelected = false,
  hasActivity = false,
}: {
  day: string;
  date: number;
  isSelected?: boolean;
  hasActivity?: boolean;
}) {
  if (isSelected) {
    return (
      <div className="--spacing-small bg-emerald-600 box-border content-stretch flex flex-col h-[68px] items-center justify-center rounded-[999px] shrink-0 px-[8px] py-[4px]">
        <div className="font-medium text-[14px] text-center text-white">
          {day}
        </div>
        <div className="font-semibold text-[14px] text-center text-white">
          {date}
        </div>
      </div>
    );
  }

  if (hasActivity) {
    return (
      <div className="box-border content-stretch flex flex-col items-center justify-center px-[2px] py-[4px] rounded-[6px] shrink-0">
        <p className="font-medium text-[14px] text-center text-neutral-500">
          {day}
        </p>
        <div className="bg-[#e6f0ec] box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[8px] rounded-[99px] shrink-0 size-[32px]">
          <p className="font-semibold text-[14px] text-center text-emerald-950">
            {date}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center px-[2px] py-[4px] rounded-[6px] shrink-0">
      <div className="font-medium text-[16px] text-center text-neutral-500">
        {day}
      </div>
      <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[7px] py-0 rounded-bl-[10px] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[3px] shrink-0 size-[28px]">
        <div className="font-semibold text-[16px] text-center text-neutral-700">
          {date}
        </div>
      </div>
    </div>
  );
}

function WeeklyCalendar({
  selectedDate,
}: {
  selectedDate: string;
}) {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const currentDate = getToday();
  const calendarDates = getCalendarDates(currentDate);
  const datesWithRecords = getDatesThatHaveRecords();
  const todayDate = getTodayDate();

  React.useEffect(() => {
    // Scroll to today's date on mount
    if (scrollRef.current) {
      const todayIndex = calendarDates.findIndex((item) =>
        isSameDate(item.fullDate, todayDate),
      );

      if (todayIndex !== -1) {
        const scrollContainer = scrollRef.current;
        const dateElements = scrollContainer.children;

        if (dateElements[todayIndex]) {
          const element = dateElements[
            todayIndex
          ] as HTMLElement;
          const containerWidth = scrollContainer.offsetWidth;
          const elementWidth = element.offsetWidth;
          const elementLeft = element.offsetLeft;

          // Center the element
          const scrollPosition =
            elementLeft - containerWidth / 2 + elementWidth / 2;
          scrollContainer.scrollLeft = scrollPosition;
        }
      }
    }
  }, [calendarDates, todayDate]);

  return (
    <div
      ref={scrollRef}
      className="box-border content-stretch flex gap-[10px] items-center shadow-[0px_4px_11px_0px_rgba(0,0,0,0.04)] shrink-0 w-full overflow-x-auto px-4 py-[8px] scrollbar-hide p-[16px]"
    >
      {calendarDates.map((item, index) => (
        <CalendarDate
          key={index}
          day={item.day}
          date={item.date}
          isSelected={isSameDate(item.fullDate, selectedDate)}
          hasActivity={datesWithRecords.includes(item.fullDate)}
        />
      ))}
    </div>
  );
}

function HorizontalCalendar({
  selectedDate,
  streak,
}: {
  selectedDate: string;
  streak: number;
}) {
  const currentDate = getToday();
  const monthName = getMonthName(currentDate);

  return (
    <div className="content-stretch flex flex-col items-start w-full bg-white relative">
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[8px] items-center px-[16px] py-[16px] relative w-full">
            <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-0 py-[2px] relative shrink-0">
              <p className="font-bold text-[24px] text-neutral-800 tracking-[-0.48px] leading-[32px]">
                {monthName}
              </p>
              <button className="size-[24px]">
                <div className="bg-neutral-200 rounded-[8px] size-[24px] flex items-center justify-center">
                  <CalendarIcon size={16} color="#262626" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <WeeklyCalendar selectedDate={selectedDate} />
      <StreakBadge streak={streak} />
    </div>
  );
}

function StreakBadge({ streak }: { streak: number }) {
  return (
    <div
      className="absolute bg-[rgba(2,44,34,0.8)] box-border content-stretch flex flex-col gap-[10px] items-start left-[16px] px-[12px] py-[6px] rounded-[999px] z-20"
      style={{
        top: "208px",
        transform: "translateY(-100%)",
      }}
    >
      <div className="content-stretch flex gap-[7px] items-center w-full">
        <p className="font-bold text-white text-[16px] tracking-[-0.28px] leading-[20px]">
          연속 기록 {streak}일차
        </p>
        <img src={imgFire} alt="Fire" className="size-[16px]" />
      </div>
    </div>
  );
}

export default function DietResultPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPointToast, setShowPointToast] = useState(false);
  const [showSavedToast, setShowSavedToast] = useState(false);

  // DietWritePage에서 전달받은 데이터
  const newRecord = location.state?.newRecord;
  const isFirstRecord = location.state?.isFirstRecord || false;
  const streak = location.state?.streak || 1;

  useEffect(() => {
    // 데이터가 없으면 목록 페이지로 리다이렉트
    if (!newRecord) {
      navigate("/diet", { replace: true });
      return;
    }

    // 첫 기록이면 50P 토스트, 아니면 저장 토스트
    if (isFirstRecord) {
      setShowPointToast(true);
      setTimeout(() => {
        setShowPointToast(false);
      }, 3000);
    } else {
      setShowSavedToast(true);
      setTimeout(() => {
        setShowSavedToast(false);
      }, 2000);
    }
  }, [newRecord, isFirstRecord, navigate]);

  if (!newRecord) {
    return null;
  }

  const selectedDate = getTodayDate();
  const displayDate = "오늘의 식단";

  return (
    <div className="bg-neutral-50 h-screen w-full flex flex-col overflow-hidden">
      <DetailHeaders />
      <HorizontalCalendar selectedDate={selectedDate} streak={streak} />
      <div className="flex-1 overflow-auto mt-[32px]">
        <div className="bg-[#f2f5ed] box-border content-stretch flex flex-col gap-[24px] flex-1 items-start overflow-clip h-full rounded-tl-[30px] rounded-tr-[30px] w-full px-[16px] py-[32px]">
          <div className="content-stretch flex h-[26px] items-center justify-between w-full">
            <p className="font-bold text-[20px] text-neutral-700 tracking-[-0.4px] leading-[26px]">
              {displayDate}
            </p>
            <button onClick={() => navigate("/diet/write")}>
              <Plus
                size={24}
                className="text-emerald-800"
                strokeWidth={1.5}
              />
            </button>
          </div>

          <div className="flex flex-col gap-[12px] w-full">
            <DietListItem
              record={newRecord}
              onClick={() => {
                console.log("Record clicked:", newRecord);
              }}
            />
          </div>
        </div>
      </div>

      <PointToast show={showPointToast} points={50} />
      <PointToast show={showSavedToast} message="저장되었습니다" />
    </div>
  );
}