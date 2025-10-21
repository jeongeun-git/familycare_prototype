import React from "react";

export default function SavedToast() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[12px] rounded-[999px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.13)] border border-[rgba(255,255,255,0.1)]">
      <div className="relative shrink-0 size-[24px]">
        <svg className="block size-full" fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="url(#paint0_linear_saved)" />
          <path
            d="M8.10397 14.2539L14.6808 8.21381C14.836 8.07127 15.017 8 15.224 8C15.4309 8 15.612 8.07127 15.7672 8.21381C15.9224 8.35635 16 8.52573 16 8.72196C16 8.91819 15.9224 9.08734 15.7672 9.2294L8.64718 15.7862C8.49198 15.9287 8.31091 16 8.10397 16C7.89703 16 7.71596 15.9287 7.56075 15.7862L4.22385 12.7216C4.06865 12.5791 3.99415 12.4099 4.00036 12.2142C4.00657 12.0184 4.08753 11.849 4.24325 11.706C4.39898 11.563 4.58341 11.4917 4.79656 11.4922C5.00971 11.4927 5.19388 11.5639 5.34909 11.706L8.10397 14.2539Z"
            fill="white"
          />
          <defs>
            <linearGradient
              id="paint0_linear_saved"
              x1="18.5455"
              y1="5.45455"
              x2="5.45455"
              y2="18.5455"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#A7F3D0" />
              <stop offset="0.55" stopColor="#4CD38C" />
              <stop offset="1" stopColor="#2CD5A5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p className="text-neutral-700 text-[14px] tracking-[-0.28px] leading-[20px]">
        저장되었습니다
      </p>
    </div>
  );
}
