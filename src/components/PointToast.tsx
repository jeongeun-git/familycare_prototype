import React from "react";

interface PointToastProps {
  show: boolean;
  points?: number;
  message?: string;
  variant?: "received" | "given"; // "받았어요" vs "지급"
}

export default function PointToast({ 
  show, 
  points, 
  message,
  variant = "received" 
}: PointToastProps) {
  if (!show) return null;

  // Point toast (with coin icon)
  if (points !== undefined) {
    const pointText = variant === "given" 
      ? `+${points}P` 
      : `${points}포인트`;
    const suffixText = variant === "given"
      ? "지급"
      : "를 받았어요.";
    
    return (
      <div className="fixed bottom-[32px] left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-bottom-2 duration-300">
        <div className="bg-[rgba(255,255,255,0.9)] box-border content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[16px] py-0 rounded-[999px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.13)] border border-[rgba(255,255,255,0.1)]">
          <div className="relative shrink-0 size-[24px]">
            <svg
              className="block size-full"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                cx="12"
                cy="12"
                fill="#10B981"
                r="10"
                stroke="#A7F3D0"
                strokeWidth="1.5"
              />
              <path
                d="M12.6454 7.54688H9.42802C9.26233 7.54688 9.12802 7.68119 9.12802 7.84688V16.7C9.12802 16.8657 9.26233 17 9.42802 17H10.6985C10.8644 17 10.9988 16.8653 10.9985 16.6994L10.993 13.9128C10.9926 13.7469 11.127 13.6122 11.293 13.6122H12.6019C13.2814 13.6122 13.8655 13.4859 14.3544 13.2331C14.8474 12.9763 15.2224 12.622 15.4792 12.1705C15.7402 11.7147 15.8707 11.1865 15.8707 10.5858C15.8707 9.98917 15.7444 9.46094 15.4917 9.00107C15.2389 8.54119 14.8681 8.1849 14.3793 7.93217C13.8945 7.67531 13.3166 7.54688 12.6454 7.54688Z"
                fill="#ECFDF5"
              />
              <path
                d="M12.3097 12.1085H10.9922V9.08203H12.3034C12.668 9.08203 12.9725 9.14418 13.217 9.26847C13.4656 9.38861 13.6499 9.56262 13.7701 9.79048C13.8902 10.0142 13.9503 10.2794 13.9503 10.5859C13.9503 10.8925 13.8902 11.1597 13.7701 11.3876C13.6499 11.6155 13.4656 11.7936 13.217 11.9221C12.9725 12.0463 12.6701 12.1085 12.3097 12.1085Z"
                fill="#10B981"
              />
            </svg>
          </div>
          <p className="text-neutral-700 text-[14px] tracking-[-0.28px] leading-[20px]">
            <span className="font-bold">{pointText}</span>
            {variant === "received" && "를"}
            {" "}{suffixText}
          </p>
        </div>
      </div>
    );
  }

  // Simple message toast (dark background)
  return (
    <div className="fixed bottom-[32px] left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="bg-[rgba(2,44,34,0.8)] box-border content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[16px] py-0 rounded-[999px]">
        <p className="font-medium text-white text-[14px] tracking-[-0.28px] leading-[20px]">
          {message}
        </p>
      </div>
    </div>
  );
}