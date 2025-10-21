import React from "react";
import { ChevronRight, ImageIcon } from "lucide-react";

export interface DietRecord {
  id: string;
  date: string;
  meal: string;
  time: string;
  foodItems: string[];
  comment: string;
  imageUrl?: string;
}

interface DietListItemProps {
  record: DietRecord;
  onClick?: () => void;
}

export default function DietListItem({ record, onClick }: DietListItemProps) {
  const foodSummary = record.foodItems.length > 0
    ? record.foodItems.length === 1
      ? record.foodItems[0]
      : `${record.foodItems[0]} 외 ${record.foodItems.length - 1}개`
    : "음식명 없음";

  return (
    <button
      onClick={onClick}
      className="bg-[#e6eadf] box-border content-stretch flex items-center justify-between p-[16px] rounded-[12px] w-full hover:bg-[#d9dfd0] transition-colors"
    >
      <div className="content-stretch flex gap-[16px] items-center">
        {/* Photo Box */}
        <div className="bg-neutral-100 overflow-clip relative rounded-[12px] shrink-0 size-[80px] flex items-center justify-center">
          {record.imageUrl ? (
            <img
              src={record.imageUrl}
              alt={record.meal}
              className="w-full h-full object-cover"
            />
          ) : (
            <ImageIcon size={32} className="text-neutral-300" strokeWidth={1.5} />
          )}
        </div>

        {/* Content */}
        <div className="content-stretch flex flex-col gap-[4px] items-start">
          <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip rounded-[6px]">
            <p className="font-bold text-neutral-700 tracking-[-0.32px] leading-[24px]">
              {record.meal}
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center justify-center">
            <p className="text-[14px] text-neutral-500 tracking-[-0.28px] leading-[20px]">
              {foodSummary}
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center justify-center">
            <p className="text-[14px] text-neutral-500 tracking-[-0.28px] leading-[20px]">
              -
            </p>
          </div>
        </div>
      </div>

      {/* Arrow Icon */}
      <ChevronRight size={24} className="text-neutral-400" strokeWidth={1.5} />
    </button>
  );
}
