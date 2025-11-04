import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  Calendar as CalendarIcon,
  Plus,
  Sunrise,
  Sun,
  Moon,
} from "lucide-react";
import svgPaths from "../imports/svg-2x9qdf13yv";
import svgPaths2 from "../imports/svg-0uklke9s9y";
import svgPathsCalendar from "../imports/svg-hyyftpuisl";
import imgEllipse492 from "figma:asset/3e1e39abc144a5887ca6a7090dac2a8475f60989.png";
import imgEllipse486 from "figma:asset/74cec6bc2b83dc280b98504c16beda17020a85ae.png";
import imgEllipse488 from "figma:asset/971ddfb779400850a30393ec5788c784e462c84f.png";
import { imgEllipse491 } from "../imports/svg-ssw8n";
import imgFire from "figma:asset/3d6b605608139f4862bf5b26accdd0daefb82269.png";
import PointToast from "../components/PointToast";
import {
  getMedicationRecordsByDate,
  getMedications,
  getTodayDate,
  getDatesThatHaveRecords,
  getCompletionRateForDate,
  saveMedicationRecord,
  getConsecutiveDays,
  MedicationRecord,
} from "../utils/medicationStorage";
import {
  getToday,
  getMonthName,
  getCalendarDates,
  isSameDate,
} from "../utils/dateUtils";
import MedicationSuccessModal from "../components/MedicationSuccessModal";
import MedicationTooltip from "../components/MedicationTooltip";

function StatusBar() {
  return (
    <div className="bg-white h-[40px] shrink-0 sticky top-0 w-full z-20">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[40px] items-center justify-between px-[24px] py-[10px] relative w-full">
          <p className="text-[#1d1b20] text-[14px] leading-[20px] tracking-[0.14px]">
            9:30
          </p>
          <div className="flex gap-[6px] items-center">
            {/* Wifi */}
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
            >
              <path
                d={svgPaths.p34567080}
                fill="#1D1B20"
                opacity="0.1"
              />
            </svg>
            {/* Signal */}
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
            >
              <path d={svgPaths.p112c6500} fill="#1D1B20" />
            </svg>
            {/* Battery */}
            <svg
              width="8"
              height="15"
              viewBox="0 0 8 15"
              fill="none"
            >
              <path
                d={svgPaths.p2dfd100}
                fill="#1D1B20"
                opacity="0.3"
              />
              <path d={svgPaths.p2657cc00} fill="#1D1B20" />
            </svg>
          </div>
          <div className="absolute left-1/2 size-[24px] top-[7px] translate-x-[-50%]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                clipRule="evenodd"
                d={svgPaths.p34df7200}
                fill="#1D1B20"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      className="relative shrink-0 size-[24px]"
      onClick={() => navigate(-1)}
    >
      <ChevronLeft
        size={24}
        className="text-neutral-800"
        strokeWidth={1.5}
      />
    </button>
  );
}

function SettingsButton() {
  return (
    <button className="relative shrink-0 size-[24px]">
      <svg
        className="block size-full"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          d={svgPaths2.p38ffec00}
          stroke="#404040"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d={svgPaths2.p3cccb600}
          stroke="#404040"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </svg>
    </button>
  );
}

function HeaderContainer() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full">
      <BackButton />
      <div className="content-stretch flex gap-[11px] items-center justify-center relative shrink-0">
        <h1 className="font-medium text-[16px] text-neutral-800 tracking-[-0.32px] leading-[22px]">
          복약 기록
        </h1>
      </div>
      <SettingsButton />
    </div>
  );
}

function DetailHeaders() {
  return (
    <div className="sticky top-[40px] z-10 box-border content-stretch flex flex-col gap-[10px] items-start overflow-clip px-[16px] py-[8px] shadow-[0px_4px_11px_0px_rgba(232,232,232,0.2)] w-full bg-white">
      <HeaderContainer />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[33.556%] mt-[62.682%] place-items-start relative">
      <div className="[grid-area:1_/_1] flex h-[5.49px] items-center justify-center ml-0 mt-[2.745px] relative w-[6.863px]">
        <div className="flex-none h-[5.49px] rotate-[180deg] scale-y-[-100%] w-[6.863px]">
          <div
            className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-2.745px] mask-size-[6.863px_4.118px] relative size-full"
            style={{ maskImage: `url('${imgEllipse491}')` }}
          >
            <img
              alt=""
              className="block max-w-none size-full"
              height="5.49"
              src={imgEllipse492}
              width="6.863"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Group1000004215() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[46.288%] mt-[31.995%] place-items-start relative">
      <div className="[grid-area:1_/_1] flex h-[4.489px] items-center justify-center ml-[17.673px] mt-0 relative w-[4.242px]">
        <div className="flex-none h-[4.489px] rotate-[180deg] scale-y-[-100%] w-[4.242px]">
          <div className="relative size-full">
            <img
              alt=""
              className="block max-w-none size-full"
              height="4.489"
              src={imgEllipse486}
              width="4.242"
            />
          </div>
        </div>
      </div>
      <div className="[grid-area:1_/_1] flex h-[4.118px] items-center justify-center ml-[7.354px] mt-[6.917px] relative w-[6.863px]">
        <div className="flex-none h-[4.118px] rotate-[180deg] scale-y-[-100%] w-[6.863px]">
          <div className="relative size-full">
            <img
              alt=""
              className="block max-w-none size-full"
              height="4.118"
              src={imgEllipse488}
              width="6.863"
            />
          </div>
        </div>
      </div>
      <MaskGroup />
      <div className="[grid-area:1_/_1] flex h-[4.489px] items-center justify-center ml-0 mt-0 relative w-[4.242px]">
        <div className="flex-none h-[4.489px] rotate-[180deg] scale-y-[-100%] w-[4.242px]">
          <div className="relative size-full">
            <img
              alt=""
              className="block max-w-none size-full"
              height="4.489"
              src={imgEllipse486}
              width="4.242"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Group1000004222() {
  return (
    <div className="[grid-area:1_/_1] aspect-[49.5413/49.5413] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[24.486px] place-items-start relative">
      <div
        className="[grid-area:1_/_1] aspect-[100/100] ml-0 mt-0 relative rounded-bl-[198px] rounded-br-[198px] rounded-tl-[40px] rounded-tr-[198px] w-[68px]"
        style={{ background: "var(--gradient-03)" }}
      >
        <div className="absolute inset-0 pointer-events-none shadow-[0px_4px_8px_0px_inset_rgba(253,253,253,0.5)]" />
      </div>
      <Group1000004215 />
    </div>
  );
}

function ActivityIcon() {
  return (
    <div className="relative size-full">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 15 15"
      >
        <path d={svgPaths2.p13e30480} fill="#10B981" />
        <path d={svgPaths2.pb4d4c00} fill="#FAFAFA" />
      </svg>
    </div>
  );
}

function TwemojiPill() {
  return (
    <div className="overflow-clip relative size-[18px]">
      <div className="absolute flex inset-[-2.14%] items-center justify-center">
        <div className="flex-none h-[15px] rotate-[17.223deg] w-[15.001px]">
          <ActivityIcon />
        </div>
      </div>
    </div>
  );
}

function Frame1000004499() {
  return (
    <div className="[grid-area:1_/_1] bg-neutral-800 box-border content-stretch flex gap-[10px] items-center justify-center ml-0 mt-0 p-[10px] relative rounded-[25px] size-[29px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <TwemojiPill />
        </div>
      </div>
    </div>
  );
}

function Group1000004217() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[59.951px] mt-0 place-items-start relative">
      <Frame1000004499 />
      <div className="[grid-area:1_/_1] h-[6px] ml-[2.75px] mt-[24px] relative w-[8px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 8 6"
        >
          <path d="M0 6L2.66667 0L8 4L0 6Z" fill="#262626" />
        </svg>
      </div>
    </div>
  );
}

function Routiny() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group1000004222 />
      <Group1000004217 />
    </div>
  );
}

function EmptyStateContent() {
  const navigate = useNavigate();

  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[296px]">
      <Routiny />
      <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0">
        <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-center text-neutral-700 text-nowrap tracking-[-0.28px] whitespace-pre">
          <p className="leading-[20px] mb-0 text-[14px]">
            <span className="font-bold">
              현재 복용 중인 약을 등록
            </span>
            <span className="font-medium">해 주세요.</span>
          </p>
          <p className="leading-[20px] text-[14px] text-neutral-600">
            한 번 등록
            <span className="font-medium tracking-[-0.28px]">
              하면 다음부턴 간편하게{" "}
            </span>
            체크만
            <span className="font-medium tracking-[-0.28px]">
              {" "}
              하면 돼요.
            </span>
          </p>
        </div>
      </div>
      <button
        onClick={() => navigate("/medication/register")}
        className="bg-emerald-800 h-[48px] relative rounded-[999px] shadow-[0px_4px_11px_0px_rgba(0,0,0,0.04)] shrink-0 w-full"
      >
        <div className="flex flex-row items-center justify-center size-full">
          <div className="box-border content-stretch flex gap-[10px] h-[48px] items-center justify-center px-[16px] py-[8px] relative w-full">
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
              <Plus
                size={24}
                className="text-emerald-50"
                strokeWidth={1.5}
              />
              <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-emerald-50 text-nowrap tracking-[-0.28px]">
                <p className="font-bold leading-[20px] text-[14px] whitespace-pre">
                  내 약 등록하기
                </p>
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

// Helper function to determine time slot
function getTimeSlot(time: string): string {
  // Parse time string like "오전 8:00" or "오후 12:00"
  const isPM = time.includes("오후");
  const isAM = time.includes("오전");

  // Extract hour and minute
  const timeMatch = time.match(/(\d+):(\d+)/);
  if (!timeMatch) return "저녁"; // Default

  let hour = parseInt(timeMatch[1]);

  // Convert to 24-hour format
  if (isPM && hour !== 12) {
    hour += 12;
  } else if (isAM && hour === 12) {
    hour = 0;
  }

  // Classify by time slot
  if (hour >= 5 && hour <= 10) {
    return "아침";
  } else if (hour >= 11 && hour <= 14) {
    return "점심";
  } else {
    return "저녁";
  }
}

function RTContent({
  hasRecords,
  medications,
  selectedDate,
  onMedicationTaken,
  onShowPointToast,
  onShowCompletedToast,
}: {
  hasRecords: boolean;
  medications: any[];
  selectedDate: string;
  onMedicationTaken: () => void;
  onShowPointToast: () => void;
  onShowCompletedToast: () => void;
}) {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("전체");
  const [showTooltip, setShowTooltip] = useState(true);
  const [takenMedications, setTakenMedications] = useState<
    Set<string>
  >(new Set());

  if (!hasRecords) {
    return (
      <div className="bg-[#f2f5ed] box-border content-stretch flex flex-1 gap-[10px] items-center justify-center overflow-clip p-[16px] rounded-tl-[30px] rounded-tr-[30px] w-full h-full">
        <EmptyStateContent />
      </div>
    );
  }

  // Group medications by time
  const medicationsByTime: { [key: string]: any[] } = {};
  medications.forEach((med) => {
    med.times.forEach((time: string) => {
      if (!medicationsByTime[time]) {
        medicationsByTime[time] = [];
      }
      medicationsByTime[time].push(med);
    });
  });

  // Filter by selected tab
  let filteredMedicationsByTime = { ...medicationsByTime };
  if (selectedTab !== "전체") {
    filteredMedicationsByTime = {};
    Object.entries(medicationsByTime).forEach(
      ([time, meds]) => {
        const timeSlot = getTimeSlot(time);
        if (timeSlot === selectedTab) {
          filteredMedicationsByTime[time] = meds;
        }
      },
    );
  }

  const timeSlots = Object.keys(
    filteredMedicationsByTime,
  ).sort();

  // Calculate completion rate
  const completionData = getCompletionRateForDate(selectedDate);
  const totalMedications = completionData.total;
  const completedMedications = completionData.completed;
  const completionRate = completionData.rate;

  // Calculate consecutive days when completion rate is 100%
  const consecutiveDays =
    completionRate === 100
      ? getConsecutiveDays(selectedDate)
      : 0;

  // Load existing records for selected date
  React.useEffect(() => {
    const records = getMedicationRecordsByDate(selectedDate);
    const takenSet = new Set(
      records
        .filter((r) => r.taken)
        .map((r) => `${r.medicationId}-${r.time}`),
    );
    setTakenMedications(takenSet);
  }, [selectedDate]);

  const handleTakeMedication = (
    medId: string,
    medName: string,
    time: string,
  ) => {
    const recordId = `${medId}-${time}`;

    if (takenMedications.has(recordId)) {
      // Already taken, do nothing or show message
      return;
    }

    const record: MedicationRecord = {
      id: `${Date.now()}-${Math.random()}`,
      date: selectedDate,
      medicationId: medId,
      medicationName: medName,
      time: time,
      taken: true,
    };

    const isFirstRecord = saveMedicationRecord(record);
    setTakenMedications(
      new Set([...takenMedications, recordId]),
    );
    onMedicationTaken();

    // Show toast message
    if (isFirstRecord) {
      onShowPointToast();
    } else {
      onShowCompletedToast();
    }
  };

  return (
    <div className="bg-[#f2f5ed] box-border content-stretch flex flex-col gap-[16px] flex-1 items-start overflow-clip h-full rounded-tl-[30px] rounded-tr-[30px] w-full px-[16px] py-[24px]">
      {/* Completion Rate Graph */}
      <div className="bg-[#f9faf8] rounded-[16px] w-full border border-emerald-500 border-solid shadow-[0px_4px_11px_0px_rgba(0,0,0,0.04)]">
        <div className="box-border content-stretch flex flex-col gap-[14px] items-start overflow-clip p-[16px] relative w-full">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            {/* Title */}
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
              <p className="font-medium leading-[22px] text-[16px] text-neutral-600 tracking-[-0.32px] w-full">
                복용 완료율
              </p>
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0 text-nowrap whitespace-pre">
                  <p className="font-semibold leading-[40px] relative shrink-0 text-[34px] text-neutral-800 tracking-[-0.68px]">
                    {completionRate}
                  </p>
                  <p className="font-medium leading-[22px] not-italic relative shrink-0 text-[16px] text-neutral-500 tracking-[-0.32px]">
                    %
                  </p>
                </div>
                <div className="bg-emerald-950 box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[4px] relative rounded-[99px] shrink-0">
                  <p className="font-medium leading-[16px] relative shrink-0 text-[12px] text-nowrap text-white tracking-[-0.24px] whitespace-pre">
                    <span className="font-bold">
                      {totalMedications - completedMedications}
                      개
                    </span>
                    {" 복용 필요"}
                  </p>
                </div>
              </div>
            </div>
            {/* Graph */}
            <div className="w-full">
              <div className="h-[15px] w-full bg-neutral-200 rounded-[20px] overflow-hidden">
                <div
                  className="h-full bg-gradient-to-b from-[#2cd5a5] via-[#41d395] to-[#56d284] rounded-[20px] transition-all duration-500"
                  style={{ width: `${completionRate}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Consecutive Days Badge - Show only when completion rate is 100% */}
      {consecutiveDays > 0 && (
        <div
          className="absolute bg-[rgba(2,44,34,0.8)] box-border content-stretch flex flex-col gap-[10px] items-start left-[16px] px-[12px] py-[6px] rounded-[999px] z-20"
          style={{
            top: "300px",
            transform: "translateY(-100%)",
          }}
        >
          <div className="content-stretch flex gap-[7px] items-center w-full">
            <p className="font-bold text-white text-[16px] tracking-[-0.28px] leading-[20px]">
              연속 기록 {consecutiveDays}일차
            </p>
            <img
              src={imgFire}
              alt="Fire"
              className="size-[16px]"
            />
          </div>
        </div>
      )}

      {/* Tab Bar */}
      <div className="flex items-center justify-between relative rounded-[99px] w-full">
        {/* 탭 목록 */}
        <div className="flex gap-[8px] items-center overflow-x-auto scrollbar-hide">
          {["전체", "아침", "점심", "저녁"].map((tab) => {
            const getIcon = (tabName: string) => {
              if (selectedTab === tabName) return null;

              switch (tabName) {
                case "아침":
                  return (
                    <Sunrise
                      size={16}
                      className="text-neutral-500"
                    />
                  );
                case "점심":
                  return (
                    <Sun
                      size={16}
                      className="text-neutral-500"
                    />
                  );
                case "저녁":
                  return (
                    <Moon
                      size={16}
                      className="text-neutral-500"
                    />
                  );
                default:
                  return null;
              }
            };

            return (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`h-[32px] min-w-[60px] px-[12px] py-[6px] rounded-[50px] flex justify-center items-center gap-[4px] ${
                  selectedTab === tab
                    ? "bg-emerald-950"
                    : "bg-[#e6eadf]"
                }`}
              >
                {getIcon(tab)}
                <p
                  className={`leading-[20px] text-[13px] text-center ${
                    selectedTab === tab
                      ? "text-neutral-100 font-bold"
                      : "text-neutral-500"
                  }`}
                >
                  {tab}
                </p>
              </button>
            );
          })}
        </div>

        {/* 등록 버튼 */}
        <button
          onClick={() => navigate("/medication/register")}
          className="shrink-0 size-[24px] flex items-center justify-center"
        >
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 24 24"
          >
            <path
              d="M5 12H19M12 5V19"
              stroke="#065F46"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
        </button>
      </div>

      {/* Medicine List */}
      <div className="content-stretch flex flex-col gap-[16px] items-start relative w-full overflow-y-auto flex-1 min-h-0 scrollbar-hide pb-[40px]">
        {timeSlots.length === 0 ? (
          <div className="w-full flex items-center justify-center py-12">
            <p className="text-neutral-500 text-[14px] leading-[20px] tracking-[-0.28px]">
              {selectedTab === "전체"
                ? "등록된 약이 없습니다."
                : `${selectedTab} 시간대에 등록된 약이 없습니다.`}
            </p>
          </div>
        ) : (
          timeSlots.map((time, timeIndex) => (
            <div
              key={time}
              className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
            >
              <p className="font-bold leading-[22px] text-[16px] text-neutral-700 tracking-[-0.32px]">
                {time}
              </p>
              {filteredMedicationsByTime[time].map(
                (med, medIndex) => {
                  const isFirstMed =
                    timeIndex === 0 && medIndex === 0;
                  const isTaken = takenMedications.has(
                    `${med.id}-${time}`,
                  );

                  return (
                    <div
                      key={med.id}
                      className="bg-[#e6eadf] box-border content-stretch flex items-center justify-between p-[16px] relative rounded-[12px] shrink-0 w-full"
                    >
                      <div className="content-stretch flex flex-col items-start relative shrink-0">
                        <p className="font-bold leading-[24px] text-[16px] text-neutral-700 tracking-[-0.32px]">
                          {med.name}
                        </p>
                        <p className="leading-[20px] text-[14px] text-neutral-500 tracking-[-0.28px]">
                          {med.frequency} · {med.dosage}
                        </p>
                      </div>
                      <div className="relative">
                        <button
                          onClick={() =>
                            handleTakeMedication(
                              med.id,
                              med.name,
                              time,
                            )
                          }
                          disabled={isTaken}
                          className={`box-border content-stretch flex gap-[10px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[12px] shrink-0 ${
                            isTaken
                              ? "bg-neutral-300"
                              : "bg-gradient-to-b from-[#2cd5a5] to-[#56d284] via-50% via-[#41d395]"
                          }`}
                        >
                          <p
                            className={`leading-[20px] text-[13px] ${isTaken ? "text-neutral-500" : "text-white"}`}
                          >
                            {isTaken ? "복용 완료" : "복용하기"}
                          </p>
                        </button>
                        {/* Show tooltip only on first medication item */}
                        {isFirstMed &&
                          showTooltip &&
                          !isTaken && (
                            <MedicationTooltip
                              onClose={() =>
                                setShowTooltip(false)
                              }
                            />
                          )}
                      </div>
                    </div>
                  );
                },
              )}
            </div>
          ))
        )}
        {/* Points Info Container */}
          <div className="w-full py-[12px] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M8 10.6667V8M8 5.33333H8.00667M14.6667 8C14.6667 11.6819 11.6819 14.6667 8 14.6667C4.3181 14.6667 1.33333 11.6819 1.33333 8C1.33333 4.3181 4.3181 1.33333 8 1.33333C11.6819 1.33333 14.6667 4.3181 14.6667 8Z"
                  stroke="#A3A3A3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
              <p className="font-bold leading-[20px] text-[14px] text-neutral-400 tracking-[-0.28px]">
                포인트 적립 안내
              </p>
            </div>
            <p className="font-medium leading-[20px] text-[14px] text-neutral-400 tracking-[-0.28px]">
              포인트는 하루 최초 기록에만 지급되며, 이후 기록은
              포인트 적립 없이 저장됩니다.
            </p>
          </div>
        </div>
      </div>
  );
}

function CalendarDate({
  day,
  date,
  isSelected = false,
  hasActivity = false,
  completionRate = 0,
  isToday = false,
  onClick,
}: {
  day: string;
  date: number;
  isSelected?: boolean;
  hasActivity?: boolean;
  completionRate?: number;
  isToday?: boolean;
  onClick?: () => void;
}) {
  if (isSelected) {
    return (
      <button
        onClick={onClick}
        className="bg-emerald-600 box-border content-stretch flex flex-col h-[68px] items-center justify-center rounded-[999px] shrink-0 px-[8px] py-[4px]"
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

  // Date with completion rate (past date with activity)
  if (hasActivity && completionRate > 0) {
    return (
      <button
        onClick={onClick}
        className="box-border content-stretch flex flex-col items-center justify-center px-[2px] py-[4px] rounded-[6px] shrink-0"
      >
        <p className="font-medium text-[14px] text-center text-neutral-500">
          {day}
        </p>
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
          <div className="[grid-area:1_/_1] bg-[#e6f0ec] box-border content-stretch flex flex-col gap-[10px] items-center justify-center ml-0 mt-0 p-[8px] relative rounded-[99px] size-[32px]">
            {isToday && (
              <div className="absolute border-2 border-emerald-800 border-solid inset-0 pointer-events-none rounded-[99px]" />
            )}
            <p className="font-semibold text-[14px] text-center text-emerald-950">
              {date}
            </p>
          </div>
          {/* Completion Rate Arc */}
          <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[32px]">
            <div className="absolute bottom-0 left-1/2 right-0 top-0">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 16 32"
                style={{
                  opacity: completionRate / 100,
                }}
              >
                <path
                  d={svgPathsCalendar.p26178380}
                  fill="#065F46"
                />
              </svg>
            </div>
          </div>
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
          {isToday && (
            <div className="absolute border-2 border-emerald-800 border-solid inset-0 pointer-events-none rounded-[99px]" />
          )}
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
      <div className="font-medium text-[14px] text-center text-neutral-500">
        {day}
      </div>
      <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[7px] py-0 rounded-bl-[10px] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[3px] shrink-0 size-[28px]">
        <div className="font-semibold text-[14px] text-center text-neutral-700">
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
  const todayDate = getTodayDate();

  // Mock data for demonstration
  const mockDatesWithActivity = ["2025-10-14", "2025-10-15"];

  // Mock completion rates for demonstration
  const getMockCompletionRate = (
    dateString: string,
  ): number => {
    const dateObj = new Date(dateString);
    const today = new Date(todayDate);

    // Only show completion rate for past dates with records
    if (
      dateObj >= today ||
      !mockDatesWithActivity.includes(dateString)
    ) {
      return 0;
    }

    // Mock data: different completion rates for different dates
    const mockRates: { [key: string]: number } = {
      "2025-10-14": 100,
      "2025-10-15": 75,
    };

    return mockRates[dateString] || 0;
  };

  React.useEffect(() => {
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
      {calendarDates.map((item, index) => {
        const isDateToday = isSameDate(
          item.fullDate,
          todayDate,
        );
        const hasActivity = mockDatesWithActivity.includes(
          item.fullDate,
        );
        const completionRate = getMockCompletionRate(
          item.fullDate,
        );

        return (
          <CalendarDate
            key={index}
            day={item.day}
            date={item.date}
            isSelected={isSameDate(item.fullDate, selectedDate)}
            hasActivity={hasActivity}
            completionRate={completionRate}
            isToday={isDateToday}
            onClick={() => onDateSelect(item.fullDate)}
          />
        );
      })}
    </div>
  );
}

function HorizontalCalendar({
  selectedDate,
  onDateSelect,
}: {
  selectedDate: string;
  onDateSelect: (date: string) => void;
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
    </div>
  );
}

export default function MedicationPage() {
  const navigate = useNavigate();


  const [selectedDate, setSelectedDate] =
    useState(getTodayDate());
  const [records, setRecords] = useState(() =>
    getMedicationRecordsByDate(selectedDate),
  );
  const [medications, setMedications] = useState(() =>
    getMedications(),
  );

  const [refreshKey, setRefreshKey] = useState(0);
  const [showPointToast, setShowPointToast] = useState(false);
  const [showCompletedToast, setShowCompletedToast] =
    useState(false);

  
  //테스트 시마다 데이터 초기화
  useEffect(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const isMazeTest = urlParams.has("reset");
  if (isMazeTest) {
    localStorage.clear();
  }
  }, []);

  useEffect(() => {
    if (medications.length > 0) {
      navigate('/medication/result', { replace: true });
    }
  }, [medications, navigate]);


  useEffect(() => {
    setRecords(getMedicationRecordsByDate(selectedDate));
    setMedications(getMedications());
  }, [selectedDate, refreshKey]);

  const hasRecords = medications.length > 0;

  const handleMedicationTaken = () => {
    setRefreshKey((prev) => prev + 1);
  };

  const handleShowPointToast = () => {
    setShowPointToast(true);
    setTimeout(() => {
      setShowPointToast(false);
    }, 2000);
  };

  const handleShowCompletedToast = () => {
    setShowCompletedToast(true);
    setTimeout(() => {
      setShowCompletedToast(false);
    }, 2000);
  };

  return (
    <div className="bg-neutral-50 h-screen w-full flex flex-col overflow-hidden">
      <StatusBar />
      <DetailHeaders />
      <HorizontalCalendar
        selectedDate={selectedDate}
        onDateSelect={setSelectedDate}
      />
      <div className="flex-1">
        <div className="bg-[#f2f5ed] h-full flex items-center justify-center p-[16px]">
          <EmptyStateContent />
        </div>
        {/* <RTContent
          hasRecords={hasRecords}
          medications={medications}
          selectedDate={selectedDate}
          onMedicationTaken={handleMedicationTaken}
          onShowPointToast={handleShowPointToast}
          onShowCompletedToast={handleShowCompletedToast}
        /> */}
      </div>

      {/* Toast Messages */}
      {/* <PointToast
        show={showPointToast}
        points={50}
        variant="given"
      />
      <PointToast
        show={showCompletedToast}
        message="복용 기록 완료"
      /> */}
    </div>
  );
}