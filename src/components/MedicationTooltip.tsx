import { X } from "lucide-react";

interface MedicationTooltipProps {
  onClose: () => void;
}

export default function MedicationTooltip({
  onClose,
}: MedicationTooltipProps) {
  return (
    <div className="absolute bg-[rgba(64,64,64,0.9)] box-border content-stretch flex gap-[8px] items-center px-[12px] py-[6px] rounded-[12px] top-[calc(100%+8px)] right-0 z-10">
      <p className="font-medium leading-[16px] relative shrink-0 text-[12px] text-center text-neutral-50 text-nowrap tracking-[-0.24px] whitespace-pre">
        <span>{`첫 기록 시 `}</span>
        <span className="font-bold">50P</span>
        <span>{` 적립!`}</span>
      </p>
      <button
        onClick={onClose}
        className="relative shrink-0 size-[16px]"
      >
        <X
          size={16}
          className="text-neutral-50"
          strokeWidth={1.5}
        />
      </button>
      <div className="absolute bottom-full flex h-[7px] items-center justify-center right-[16px] w-[12px]">
        <div className="flex-none scale-y-[-100%]">
          <div className="h-[7px] relative w-[12px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 12 7"
            >
              <path
                d="M6 7L0 1.17772e-06L12 0L6 7Z"
                fill="rgba(64, 64, 64, 0.9)"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}