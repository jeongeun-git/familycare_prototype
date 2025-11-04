import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  Calendar as CalendarIcon,
  Plus,
} from "lucide-react";
import svgPaths from "../imports/svg-mh9z9jnxc3";
import DietListItem from "../components/DietListItem";
import {
  getDietRecordsByDate,
  getTodayDate,
  getDatesThatHaveRecords,
} from "../utils/dietStorage";
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

function CharacterFace() {
  return (
    <div className="absolute left-[40.37%] top-[34.314%] w-[23.402px] h-[10.446px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 11"
      >
        <ellipse
          cx="2.26479"
          cy="2.26478"
          rx="2.26479"
          ry="2.26478"
          fill="#262626"
        />
        <ellipse
          cx="21.1379"
          cy="2.26478"
          rx="2.26479"
          ry="2.26478"
          fill="#262626"
        />
        <path d={svgPaths.p3d41d580} fill="#262626" />
      </svg>
    </div>
  );
}

function EmptyStateIllustration() {
  return (
    <div className="relative w-[120px] h-[120px]">
      <div className="absolute inset-0">
        {/* Character body */}
        <div
          className="absolute left-[15.084%] w-[68px] h-[68px] rounded-tl-[40px] rounded-tr-[198px] rounded-bl-[198px] rounded-br-[198px]"
          style={{ background: "var(--gradient-03)" }}
        >
          <div className="absolute inset-0 shadow-[0px_4px_8px_0px_inset_rgba(253,253,253,0.5)]" />
        </div>
        <CharacterFace />

        {/* Chopsticks and spoon */}
        <div className="absolute right-[10px] bottom-[30px]">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <rect
              x="32"
              y="10"
              width="3"
              height="30"
              rx="1.5"
              fill="#737373"
              transform="rotate(23.728 32 10)"
            />
            <rect
              x="36"
              y="10"
              width="3"
              height="30"
              rx="1.5"
              fill="#737373"
              transform="rotate(23.728 36 10)"
            />
            <rect
              x="33"
              y="35"
              width="3"
              height="3"
              fill="#34D399"
            />
            <rect
              x="37"
              y="35"
              width="3"
              height="3"
              fill="#34D399"
            />
          </svg>
        </div>

        {/* Food items */}
        <div className="absolute left-[8px] bottom-[47px]">
          <svg
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
          >
            <ellipse
              cx="9"
              cy="7"
              rx="8.5"
              ry="6.7"
              fill="url(#paint0_linear_food1)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_food1"
                x1="15.8"
                y1="2.3"
                x2="2.9"
                y2="12.7"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#A7F3D0" />
                <stop offset="0.55" stopColor="#4CD38C" />
                <stop offset="1" stopColor="#2CD5A5" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="absolute right-[20px] bottom-[43px]">
          <svg
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
          >
            <ellipse
              cx="9"
              cy="7"
              rx="8.5"
              ry="6.7"
              fill="url(#paint0_linear_food2)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_food2"
                x1="15.8"
                y1="2.3"
                x2="2.9"
                y2="12.7"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#A7F3D0" />
                <stop offset="0.55" stopColor="#4CD38C" />
                <stop offset="1" stopColor="#2CD5A5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function EmptyStateContent() {
  const navigate = useNavigate();

  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center w-full max-w-[296px]">
      <div className="flex flex-col gap-[8px] items-center">
        <p className="font-medium text-[14px] text-center text-neutral-700 leading-[20px] tracking-[-0.28px]">
          오늘{" "}
          <span className="font-bold">
            첫 식단 기록하고 50P
          </span>{" "}
          받으세요!
          <br />
          지금 시작해볼까요?
        </p>
      </div>

      <button
        onClick={() => navigate("/diet/write")}
        className="bg-emerald-800 h-[48px] w-full rounded-[999px] shadow-[0px_4px_11px_0px_rgba(0,0,0,0.04)] flex items-center justify-center gap-[4px] px-[16px] py-[8px]"
      >
        <Plus size={24} color="#ECFDF5" strokeWidth={1.5} />
        <span className="font-bold text-[14px] text-emerald-50 tracking-[-0.28px] leading-[20px]">
          식단기록 하기
        </span>
      </button>
    </div>
  );
}

function RTContent({
  hasRecords,
  selectedDate,
}: {
  hasRecords: boolean;
  selectedDate: string;
}) {
  const navigate = useNavigate();

  if (!hasRecords) {
    return (
      <div className="bg-[#f2f5ed] box-border content-stretch flex flex-col gap-[16px] flex-1 items-center justify-center overflow-clip px-[16px] py-[24px] rounded-tl-[30px] rounded-tr-[30px] w-full h-full">
        <EmptyStateIllustration />
        <EmptyStateContent />
      </div>
    );
  }

  const isToday = isSameDate(selectedDate, getTodayDate());
  const dateObj = new Date(selectedDate);
  const displayDate = isToday
    ? "오늘"
    : `${dateObj.getMonth() + 1}월 ${dateObj.getDate()}일`;

  return (
    <div className="bg-[#f2f5ed] box-border content-stretch flex flex-col gap-[16px] flex-1 items-start overflow-clip px-[16px] py-[24px] rounded-tl-[30px] rounded-tr-[30px] w-full">
      <div className="flex items-center justify-between w-full">
        <p className="font-bold text-[20px] text-neutral-800 tracking-[-0.4px] leading-[28px]">
          {displayDate} 식단
        </p>
        {isToday && (
          <button
            onClick={() => navigate("/diet/write")}
            className="bg-emerald-600 h-[36px] rounded-[999px] flex items-center justify-center gap-[4px] px-[12px] py-[6px]"
          >
            <Plus size={16} color="white" strokeWidth={2} />
            <span className="font-medium text-[12px] text-white tracking-[-0.24px] leading-[16px]">
              추가
            </span>
          </button>
        )}
      </div>
      <DietRecordsList selectedDate={selectedDate} />
    </div>
  );
}

function DietRecordsList({
  selectedDate,
}: {
  selectedDate: string;
}) {
  const records = getDietRecordsByDate(selectedDate);

  return (
    <div className="flex flex-col gap-[12px] w-full">
      {records.map((record) => (
        <DietListItem
          key={record.id}
          record={record}
          onClick={() => {
            // TODO: Navigate to detail page
            console.log("Record clicked:", record);
          }}
        />
      ))}
    </div>
  );
}

// ✅ onClick 추가된 CalendarDate 컴포넌트
function CalendarDate({
  day,
  date,
  isSelected = false,
  hasActivity = false,
  onClick,
}: {
  day: string;
  date: number;
  isSelected?: boolean;
  hasActivity?: boolean;
  onClick?: () => void;
}) {
  if (isSelected) {
    return (
      <button
        onClick={onClick}
        className="--spacing-small bg-emerald-600 box-border content-stretch flex flex-col h-[68px] items-center justify-center rounded-[999px] shrink-0 px-[8px] py-[4px]"
      >
        <div className="font-medium text-[14px] text-center text-white">
          {day}
        </div>
        <div className="font-semibold text-[14px] text-center text-white">
          {date}
        </div>
      </button>
    );
  }

  if (hasActivity) {
    return (
      <button
        onClick={onClick}
        className="box-border content-stretch flex flex-col items-center justify-center px-[2px] py-[4px] rounded-[6px] shrink-0"
      >
        <p className="font-medium text-[14px] text-center text-neutral-500">
          {day}
        </p>
        <div className="bg-[#e6f0ec] box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[8px] rounded-[99px] shrink-0 size-[32px]">
          <p className="font-semibold text-[14px] text-center text-emerald-950">
            {date}
          </p>
        </div>
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className="box-border content-stretch flex flex-col items-center justify-center px-[2px] py-[4px] rounded-[6px] shrink-0"
    >
      <div className="font-medium text-[16px] text-center text-neutral-500">
        {day}
      </div>
      <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[7px] py-0 rounded-bl-[10px] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[3px] shrink-0 size-[28px]">
        <div className="font-semibold text-[16px] text-center text-neutral-700">
          {date}
        </div>
      </div>
    </button>
  );
}

function WeeklyCalendar({
  selectedDate,
  onDateSelect,
}: {
  selectedDate: string;
  onDateSelect: (date: string) => void;
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
          onClick={() => onDateSelect(item.fullDate)}
        />
      ))}
    </div>
  );
}

function HorizontalCalendar({
  selectedDate,
  onDateSelect,
  hasRecords,
}: {
  selectedDate: string;
  onDateSelect: (date: string) => void;
  hasRecords: boolean;
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
      <WeeklyCalendar
        selectedDate={selectedDate}
        onDateSelect={onDateSelect}
      />
      {hasRecords && <StreakBadge streak={1} />}
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

export default function DietPage() {
  const navigate = useNavigate();
  // ❌ 제거: const location = useLocation();
  const [selectedDate, setSelectedDate] = useState(getTodayDate());
  const [records, setRecords] = useState(() =>
    getDietRecordsByDate(selectedDate)
  );
  // ✅ 유지: 날짜 변경시 레코드 업데이트
  useEffect(() => {
    setRecords(getDietRecordsByDate(selectedDate));
  }, [selectedDate]);

  // ✅ 추가: 페이지 포커스시 레코드 새로고침 (선택사항)
  useEffect(() => {
    const handleFocus = () => {
      // 다른 페이지에서 돌아왔을 때 현재 선택된 날짜의 레코드 새로고침
      setRecords(getDietRecordsByDate(selectedDate));
    };

    window.addEventListener('focus', handleFocus);
    
    // Visibility API를 사용하여 탭이 다시 활성화될 때도 새로고침
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        setRecords(getDietRecordsByDate(selectedDate));
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('focus', handleFocus);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [selectedDate]);

  const hasRecords = records.length > 0;

  return (
    <div className="bg-neutral-50 h-screen w-full flex flex-col overflow-hidden">
      <DetailHeaders />
      <HorizontalCalendar
        selectedDate={selectedDate}
        onDateSelect={setSelectedDate}
        hasRecords={hasRecords}
      />
      <div
        className={`flex-1 overflow-auto ${hasRecords ? "mt-[32px]" : "mt-[26px]"}`}
      >
        <RTContent
          hasRecords={hasRecords}
          selectedDate={selectedDate}
        />
      </div>
    </div>
  );
}