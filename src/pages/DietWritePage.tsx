import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Pen, ChevronDown } from "lucide-react";
import svgPaths from "../imports/svg-2x9qdf13yv";
import imgChatGptImage20259250403501 from "figma:asset/4a645916c966c58fc583c735a61d2ec0ae1024cb.png";
import TimePicker from "../components/TimePicker";
import PhotoCaptureModal from "../components/PhotoCaptureModal";
import FoodListItem, {
  FoodItem,
} from "../components/FoodListItem";
import {
  saveDietRecord,
  getTodayDate,
} from "../utils/dietStorage";

type MealType =
  | "아침"
  | "점심"
  | "저녁"
  | "간식"
  | "야식"
  | "기타";

function PhotoUploadContainer({
  onClick,
  photoUrl,
}: {
  onClick: () => void;
  photoUrl: string | null;
}) {
  if (photoUrl) {
    return (
      <div className="box-border content-stretch flex gap-[16px] h-[296px] items-center justify-center p-[16px] relative rounded-[16px] w-full">
        <div className="flex h-[232px] items-center justify-center relative shrink-0 w-[172px]">
          <div className="rotate-[270deg]">
            <div className="h-[232px] relative rounded-[8px] w-[172px]">
              <img
                alt=""
                className="absolute object-cover rounded-[8px] size-full"
                src={photoUrl}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={onClick}
      className="bg-[#e0f0e9] box-border content-stretch flex flex-col gap-[16px] h-[172px] items-center justify-center p-[16px] relative rounded-[16px] w-full"
    >
      <div className="relative w-[40px] h-[40px] bg-[rgba(255,255,255,0.6)] rounded-[8px] flex items-center justify-center">
        <img
          alt="AI 아이콘"
          className="w-[34px] h-[35px] object-cover"
          src={imgChatGptImage20259250403501}
        />
        <div className="absolute -bottom-1 -right-1 bg-emerald-900 rounded-full size-[18px] flex items-center justify-center">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M2.5 6H9.5M6 2.5V9.5"
              stroke="url(#paint0_linear)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="8.8"
                x2="4.25"
                y1="2.675"
                y2="8.975"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FDE68A" />
                <stop offset="0.5" stopColor="#FCD34D" />
                <stop offset="1" stopColor="#F59E0B" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="flex flex-col gap-[4px] items-center">
        <p className="text-emerald-950 text-center tracking-[-0.32px] leading-[22px]">
          사진으로 간편하게 기록하기
        </p>
        <p className="text-emerald-900 text-center text-[14px] tracking-[-0.28px] leading-[20px]">
          AI가 음식의 칼로리, 영양성분을 분석해줘요.
        </p>
      </div>
    </button>
  );
}

function MealMenuContainer({
  isExpanded,
  onToggle,
  foodInput,
  onFoodInputChange,
}: {
  isExpanded: boolean;
  onToggle: () => void;
  foodInput: string;
  onFoodInputChange: (value: string) => void;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
      <button
        onClick={onToggle}
        className="content-stretch flex gap-[4px] items-center w-full"
      >
        <p className="text-neutral-500 tracking-[-0.28px] leading-[20px]">
          <span className="text-neutral-800 font-bold">직접 입력</span>
        </p>
        <div
          className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
        >
          <Pen size={16} className="text-neutral-500" />
        </div>
      </button>

      {!isExpanded && (
        <p className="text-neutral-400 text-[12px] leading-[16px] tracking-[-0.24px]">
          칼로리, 영양성분 기록 없이 음식명만 기록됩니다.
        </p>
      )}

      {isExpanded && (
        <div className="w-full flex flex-col gap-[8px]">
          <input
            type="text"
            placeholder="음식명을 입력하세요 (쉼표로 구분)"
            value={foodInput}
            onChange={(e) => onFoodInputChange(e.target.value)}
            className="w-full border border-neutral-200 rounded-[12px] px-[16px] py-[12px] text-[14px] text-neutral-700 tracking-[-0.28px] leading-[20px] outline-none focus:border-emerald-600"
          />
          <p className="text-neutral-400 text-[12px] leading-[16px] tracking-[-0.24px]">
            칼로리, 영양성분 기록 없이 음식명만 기록됩니다.
          </p>
        </div>
      )}
    </div>
  );
}

function EatingTimeContainer({
  selectedMeal,
  onSelectMeal,
}: {
  selectedMeal: MealType;
  onSelectMeal: (meal: MealType) => void;
}) {
  const meals: MealType[] = [
    "아침",
    "점심",
    "저녁",
    "간식",
    "야식",
    "기타",
  ];

  return (
    <div className="gap-[8px] grid grid-cols-3 grid-rows-2 w-full">
      {meals.map((meal) => (
        <button
          key={meal}
          onClick={() => onSelectMeal(meal)}
          className={`box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[13px] rounded-[8px] transition-colors ${
            selectedMeal === meal
              ? "bg-neutral-700 text-white"
              : "bg-neutral-100 text-neutral-600"
          }`}
        >
          <p className="text-[14px] text-nowrap tracking-[-0.28px] leading-[20px]">
            {meal}
          </p>
        </button>
      ))}
    </div>
  );
}

function MealTimeContainer({
  hour,
  minute,
  period,
  onTimeChange,
}: {
  hour: number;
  minute: number;
  period: "오전" | "오후";
  onTimeChange: (time: {
    hour: number;
    minute: number;
    period: "오전" | "오후";
  }) => void;
}) {
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  const displayTime = `${period} ${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;

  return (
    <>
      <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
        <p className="text-neutral-700 tracking-[-0.32px] leading-[24px] font-bold">
          식사 시간
        </p>

        <button
          onClick={() => setIsPickerOpen(true)}
          className="opacity-80 border border-neutral-100 rounded-[12px] w-full"
        >
          <div className="box-border content-stretch flex items-center justify-between p-[16px] w-full">
            <p className="text-neutral-700 text-nowrap tracking-[-0.32px] leading-[24px]">
              {displayTime}
            </p>
            <ChevronDown
              size={24}
              className="text-neutral-400"
            />
          </div>
        </button>
      </div>

      <TimePicker
        isOpen={isPickerOpen}
        onClose={() => setIsPickerOpen(false)}
        onSave={onTimeChange}
        initialTime={{ hour, minute, period }}
      />
    </>
  );
}

function RecordCommentContainer({
  comment,
  onCommentChange,
}: {
  comment: string;
  onCommentChange: (text: string) => void;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
      <p className="text-neutral-700 tracking-[-0.32px] leading-[24px] font-bold">
        기록 한마디
      </p>

      <textarea
        value={comment}
        onChange={(e) => onCommentChange(e.target.value)}
        placeholder="오늘 식사 어떠셨나요? 기록 한마디를 남겨보세요!"
        className="w-full h-[104px] border border-neutral-100 rounded-[12px] p-[16px] text-[14px] text-neutral-700 tracking-[-0.28px] leading-[20px] outline-none focus:border-emerald-600 resize-none placeholder:text-neutral-400"
      />
    </div>
  );
}

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

function DetailHeaders() {
  const navigate = useNavigate();

  return (
    <div className="bg-white sticky top-[40px] z-10 shadow-[0px_4px_11px_0px_rgba(232,232,232,0.2)] w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[48px] items-start px-[16px] py-[8px] w-full">
          <div className="content-stretch flex h-[32px] items-center justify-between w-full">
            <button
              onClick={() => navigate(-1)}
              className="relative shrink-0 size-[24px]"
            >
              <ChevronLeft
                size={24}
                className="text-neutral-800"
                strokeWidth={1.5}
              />
            </button>
            <h1 className="text-neutral-800 tracking-[-0.32px] leading-[22px]">
              식단 기록
            </h1>
            <div className="shrink-0 size-[24px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function PointsInfoContainer() {
  return (
    <div className="bg-[#f2f5ed] box-border content-stretch flex flex-col gap-[4px] items-start p-[16px] rounded-[16px] w-full">
      <div className="content-stretch flex gap-[4px] items-center w-full">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d={svgPaths.p3b51300}
            stroke="#737373"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
        <p className="text-neutral-500 tracking-[-0.28px] leading-[20px]">
          <span className="font-bold">포인트 적립 안내</span>
        </p>
      </div>
      <p className="text-neutral-500 text-[14px] tracking-[-0.28px] leading-[20px]">
        포인트는 하루 최초 기록에만 지급되며, 이후 기록은 포인트
        적립 없이 저장됩니다.
      </p>
    </div>
  );
}

export default function DietWritePage() {
  const navigate = useNavigate();
  const [isDirectInputExpanded, setIsDirectInputExpanded] =
    useState(false);
  const [selectedMeal, setSelectedMeal] =
    useState<MealType>("아침");
  const [hour, setHour] = useState(8);
  const [minute, setMinute] = useState(0);
  const [period, setPeriod] = useState<"오전" | "오후">("오전");
  const [comment, setComment] = useState("");
  const [foodInput, setFoodInput] = useState("");
  const [isPhotoCaptureOpen, setIsPhotoCaptureOpen] =
    useState(false);
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [foodList, setFoodList] = useState<FoodItem[]>([]);

  const handleTimeChange = (time: {
    hour: number;
    minute: number;
    period: "오전" | "오후";
  }) => {
    setHour(time.hour);
    setMinute(time.minute);
    setPeriod(time.period);
  };

  const handlePhotoSelected = (url: string) => {
    setPhotoUrl(url);
    // Add mock food items when photo is selected
    setFoodList([
      {
        id: "1",
        name: "부채살 스테이크",
        calories: 335,
        serving: "1인분",
        nutrition: {
          calories: 335,
          carbs: 19,
          sugar: 7,
          protein: 30,
          fat: 15,
        },
      },
      {
        id: "2",
        name: "트러플 감자튀김",
        calories: 362,
        serving: "1인분",
        nutrition: {
          calories: 362,
          carbs: 45,
          sugar: 2,
          protein: 8,
          fat: 18,
        },
      },
    ]);
  };

  const handleRemoveFood = (id: string) => {
    setFoodList((prev) =>
      prev.filter((food) => food.id !== id),
    );
  };

  const handleEditFood = (id: string) => {
    // TODO: Open food edit modal
    console.log("Edit food:", id);
  };

  const handleSubmit = () => {
    const foodItems = foodInput.trim()
      ? foodInput
          .split(",")
          .map((item) => item.trim())
          .filter((item) => item.length > 0)
      : foodList.length > 0
        ? foodList.map((food) => food.name)
        : ["음식명 없음"];

    const record = {
      id: Date.now().toString(),
      date: getTodayDate(),
      meal: selectedMeal,
      time: `${period} ${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`,
      foodItems,
      comment,
      imageUrl: photoUrl || undefined,
    };

    const isFirstRecord = saveDietRecord(record);

    console.log("Submitting record:", record);
    console.log("Is first record:", isFirstRecord);

    // Navigate back with state
    navigate("/diet", {
      state: {
        showToast: isFirstRecord,
        newRecord: !isFirstRecord,
      },
    });
  };

  return (
    <div className="bg-neutral-50 min-h-screen w-full flex flex-col">
      <StatusBar />
      <DetailHeaders />

      {/* Points Badge */}
      <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[16px]">
        <div className="bg-emerald-900 box-border content-stretch flex gap-[7px] items-center px-[8px] py-[4px] rounded-[999px]">
          <p className="text-white text-[12px] tracking-[-0.24px] leading-[16px]">
            + 50P
          </p>
        </div>
        <p className="text-neutral-700 text-[14px] text-center tracking-[-0.28px] leading-[20px]">
          오늘 첫 기록 시 적립!
        </p>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-[16px] pb-[100px]">
        <div className="content-stretch flex flex-col gap-[24px] items-start w-full">
          {/* Content Container */}
          <div className="bg-white rounded-[16px] w-full">
            <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[16px] w-full">
              <PhotoUploadContainer
                onClick={() => setIsPhotoCaptureOpen(true)}
                photoUrl={photoUrl}
              />

              {/* Meal Menu Section - Only show when photo is uploaded */}
              {photoUrl && foodList.length > 0 && (
                <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
                  <p className="font-bold text-neutral-700 text-[20px] tracking-[-0.4px] leading-[26px]">
                    식사 메뉴
                  </p>
                  {foodList.map((food) => (
                    <FoodListItem
                      key={food.id}
                      food={food}
                      onRemove={handleRemoveFood}
                      onEdit={handleEditFood}
                    />
                  ))}
                </div>
              )}

              <MealMenuContainer
                isExpanded={isDirectInputExpanded}
                onToggle={() =>
                  setIsDirectInputExpanded(
                    !isDirectInputExpanded,
                  )
                }
                foodInput={foodInput}
                onFoodInputChange={setFoodInput}
              />

              <div className="h-0 w-full border-t border-neutral-200" />

              <div className="content-stretch flex flex-col gap-[16px] items-start w-full">
                <p className="text-neutral-700 tracking-[-0.32px] leading-[24px] font-bold">
                  끼니 선택
                </p>
                <EatingTimeContainer
                  selectedMeal={selectedMeal}
                  onSelectMeal={setSelectedMeal}
                />
              </div>

              <MealTimeContainer
                hour={hour}
                minute={minute}
                period={period}
                onTimeChange={handleTimeChange}
              />

              <RecordCommentContainer
                comment={comment}
                onCommentChange={setComment}
              />
            </div>
          </div>

          <PointsInfoContainer />
        </div>
      </div>

      {/* Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white p-[16px] shadow-[0px_-4px_11px_0px_rgba(0,0,0,0.04)]">
        <button
          onClick={handleSubmit}
          className="bg-gradient-to-b from-[#2cd5a5] via-[#41d395] to-[#56d284] h-[48px] rounded-[12px] w-full flex items-center justify-center"
        >
          <p className="text-white tracking-[-0.32px] leading-[24px]">
            기록하기
          </p>
        </button>
      </div>

      {/* Photo Capture Modal */}
      <PhotoCaptureModal
        isOpen={isPhotoCaptureOpen}
        onClose={() => setIsPhotoCaptureOpen(false)}
        onPhotoSelected={handlePhotoSelected}
      />
    </div>
  );
}