import React from "react";
import { X } from "lucide-react";
import svgPaths from "../imports/svg-6g51wunes0";

interface NutritionInfo {
  calories: number;
  carbs: number;
  sugar: number;
  protein: number;
  fat: number;
}

interface NutritionModalProps {
  isOpen: boolean;
  onClose: () => void;
  foodName: string;
  nutrition: NutritionInfo;
}

export default function NutritionModal({
  isOpen,
  onClose,
  foodName,
  nutrition,
}: NutritionModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[rgba(0,0,0,0.2)]"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white box-border content-stretch flex flex-col items-center overflow-clip px-0 py-[16px] rounded-tl-[24px] rounded-tr-[24px] w-full max-w-[360px] animate-in slide-in-from-bottom-4 duration-300">
        {/* Header */}
        <div className="content-stretch flex h-[49px] items-center justify-between relative shrink-0 w-full px-[16px]">
          <p className="font-bold leading-[26px] text-[20px] text-black tracking-[-0.4px]">
            영양 정보
          </p>
          <button
            onClick={onClose}
            className="relative shrink-0 size-[24px]"
          >
            <X
              size={24}
              className="text-neutral-700"
              strokeWidth={1.5}
            />
          </button>
        </div>

        {/* Content */}
        <div className="bg-neutral-50 box-border content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[12px] shrink-0 w-[328px] mt-[8px]">
          {/* Food Name */}
          <div className="flex flex-col justify-center relative shrink-0 text-neutral-700">
            <p className="leading-[28px] text-[18px] tracking-[-0.36px]">
              {foodName}
            </p>
          </div>

          {/* Total Calories */}
          <div className="box-border content-stretch flex flex-col gap-[16px] items-start justify-center px-0 py-[8px] relative shrink-0 w-full border-b border-dashed border-neutral-200">
            <div className="box-border content-stretch flex items-start justify-between px-0 py-[4px] relative shrink-0 w-full">
              <p className="font-medium leading-[24px] text-[16px] text-neutral-400 tracking-[-0.32px]">
                총 칼로리
              </p>
              <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
                <p className="font-bold leading-[24px] text-[16px] text-neutral-700 tracking-[-0.32px]">
                  {nutrition.calories} Kcal
                </p>
              </div>
            </div>
          </div>

          {/* Carbs */}
          <div className="box-border content-stretch flex flex-col gap-[4px] items-end justify-end px-0 py-[8px] relative shrink-0 w-full border-b border-dashed border-neutral-200">
            <div className="box-border content-stretch flex items-start justify-between px-0 py-[4px] relative shrink-0 w-full">
              <p className="font-medium leading-[24px] text-[16px] text-neutral-400 tracking-[-0.32px]">
                탄수화물
              </p>
              <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
                <p className="leading-[24px] text-[16px] text-neutral-700 tracking-[-0.32px]">
                  <span className="font-bold">
                    {nutrition.carbs}
                  </span>
                  <span className="font-medium"> g</span>
                </p>
              </div>
            </div>
            {/* Sugar (sub-item) */}
            <div className="box-border content-stretch flex items-start justify-between px-0 py-[4px] relative shrink-0 w-full">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                <div className="h-[8.501px] relative shrink-0 w-[7.75px]">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 8 9"
                  >
                    <path
                      d={svgPaths.p1eb85a00}
                      fill="#A3A3A3"
                    />
                  </svg>
                </div>
                <p className="font-medium leading-[24px] text-[16px] text-neutral-400 tracking-[-0.32px]">
                  당
                </p>
              </div>
              <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
                <p className="font-medium leading-[24px] text-[16px] text-neutral-500 tracking-[-0.32px]">
                  {nutrition.sugar} g
                </p>
              </div>
            </div>
          </div>

          {/* Protein */}
          <div className="box-border content-stretch flex items-start justify-between px-0 py-[8px] relative shrink-0 w-full border-b border-dashed border-neutral-200">
            <p className="font-medium leading-[24px] text-[16px] text-neutral-400 tracking-[-0.32px]">
              단백질
            </p>
            <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
              <p className="leading-[24px] text-[16px] text-neutral-700 tracking-[-0.32px]">
                <span className="font-bold">
                  {nutrition.protein}
                </span>
                <span className="font-medium"> g</span>
              </p>
            </div>
          </div>

          {/* Fat */}
          <div className="box-border content-stretch flex items-start justify-between px-0 py-[8px] relative shrink-0 w-full">
            <p className="font-medium leading-[24px] text-[16px] text-neutral-400 tracking-[-0.32px]">
              지방
            </p>
            <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
              <p className="leading-[24px] text-[16px] text-neutral-700 tracking-[-0.32px]">
                <span className="font-bold">
                  {nutrition.fat}
                </span>
                <span className="font-medium"> g</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export type { NutritionInfo };