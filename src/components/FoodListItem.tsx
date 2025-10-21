import React, { useState } from "react";
import { ChevronRight, X } from "lucide-react";
import NutritionModal, { NutritionInfo } from "./NutritionModal";

interface FoodItem {
  id: string;
  name: string;
  calories: number;
  serving: string;
  nutrition?: NutritionInfo;
}

interface FoodListItemProps {
  food: FoodItem;
  onRemove: (id: string) => void;
  onEdit: (id: string) => void;
}

export default function FoodListItem({
  food,
  onRemove,
  onEdit,
}: FoodListItemProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-neutral-50 content-stretch flex flex-col items-start relative rounded-[12px] shrink-0 w-full">
        <div className="h-[80px] relative shrink-0 w-full">
          <div className="flex flex-row items-center size-full">
            <div className="box-border content-stretch flex h-[80px] items-center justify-between px-[16px] py-0 relative w-full">
              {/* Food Info */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="content-stretch flex flex-col items-start relative shrink-0"
              >
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <p className="text-neutral-700 tracking-[-0.32px] leading-[22px]">
                    {food.name}
                  </p>
                  <ChevronRight
                    size={18}
                    className="text-neutral-400"
                    strokeWidth={1.5}
                  />
                </div>
              <div className="content-stretch flex gap-[4px] items-start relative shrink-0 text-[14px] text-neutral-400 text-nowrap tracking-[-0.28px]">
                <p className="leading-[20px] text-nowrap whitespace-pre">
                  {food.calories} Kcal
                </p>
                <p className="leading-[20px] text-nowrap whitespace-pre">
                  ·
                </p>
                <p className="leading-[20px] text-nowrap whitespace-pre">
                  {food.serving}
                </p>
              </div>
              </button>

              {/* Remove Button */}
              <button
                onClick={() => onRemove(food.id)}
                className="bg-neutral-100 box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[8px] shrink-0 size-[32px]"
              >
                <X
                  size={16}
                  className="text-[#FF3B30]"
                  strokeWidth={1.5}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Nutrition Modal */}
      {food.nutrition && (
        <NutritionModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          foodName={food.name}
          nutrition={food.nutrition}
        />
      )}
    </>
  );
}

export type { FoodItem };