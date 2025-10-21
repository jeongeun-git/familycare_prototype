import React, { useState, useEffect } from "react";
import svgPaths from "../imports/svg-qeju4wu5yf";
import imgFrame1000004799 from "figma:asset/f203d29e3f3fe838a18a8621e839115b96c04798.png";

type PhotoCaptureState = "capture" | "loading" | "upload";

interface PhotoCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPhotoSelected: (photoUrl: string) => void;
}

function CaptureScreen({ onCameraClick, onBack }: { 
  onCameraClick: () => void;
  onBack: () => void;
}) {
  return (
    <div className="bg-black fixed inset-0 z-50">
      <div className="absolute h-full left-0 top-0 w-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-white inset-0" />
          <div className="absolute inset-0 overflow-hidden">
            <img 
              alt="" 
              className="absolute h-full w-full object-cover" 
              src={imgFrame1000004799} 
            />
          </div>
        </div>
      </div>

      {/* Dark overlay */}
      <div className="absolute h-full left-0 top-0 w-full">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 640">
          <path d={svgPaths.pcf64b00} fill="black" fillOpacity="0.7" />
        </svg>
      </div>

      {/* Top text */}
      <div className="absolute left-1/2 top-[137px] -translate-x-1/2 -translate-y-1/2">
        <p className="font-bold text-[14px] text-neutral-50 tracking-[-0.28px] leading-[20px] whitespace-pre">
          사진 촬영 혹은 앨범 사진을 선택 해주세요.
        </p>
      </div>

      {/* Bottom controls */}
      <div className="absolute content-stretch flex items-center justify-between left-[35px] bottom-[130px] w-[175px]">
        {/* Gallery button */}
        <div className="bg-[rgba(179,179,179,0.5)] box-border content-stretch flex gap-[10px] items-center p-[12px] rounded-[24px] shrink-0 size-[48px]">
          <div className="relative shrink-0 size-[24px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path d={svgPaths.p11d16a80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d={svgPaths.p1b53d300} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d={svgPaths.p1c7c380} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>

        {/* Camera button */}
        <button onClick={onCameraClick} className="relative shrink-0 size-[60px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
            <circle cx="30" cy="30" fill="white" r="25" />
            <circle cx="30" cy="30" r="29.5" stroke="white" />
          </svg>
        </button>
      </div>

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 box-border content-stretch flex flex-col gap-[10px] h-[48px] items-start justify-center px-[16px] py-[8px] shadow-[0px_4px_11px_0px_rgba(232,232,232,0.2)]">
        <div className="content-stretch flex items-center justify-between w-full">
          <button onClick={onBack} className="relative shrink-0 size-[24px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path d={svgPaths.p2d3a7c20} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </button>
          <div className="shrink-0 w-[91px]" />
          <div className="shrink-0 size-[24px]" />
        </div>
      </div>
    </div>
  );
}

function LoadingScreen() {
  return (
    <div className="bg-black fixed inset-0 z-50">
      <div className="absolute h-full left-0 top-0 w-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-white inset-0" />
          <div className="absolute inset-0 overflow-hidden">
            <img 
              alt="" 
              className="absolute h-full w-full object-cover" 
              src={imgFrame1000004799} 
            />
          </div>
        </div>
      </div>

      {/* Dark overlay */}
      <div className="absolute h-full left-0 top-0 w-full">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 640">
          <path d={svgPaths.pcf64b00} fill="black" fillOpacity="0.7" />
        </svg>
      </div>

      {/* Loading overlay */}
      <div className="absolute bg-[rgba(0,0,0,0.5)] inset-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 content-stretch flex flex-col items-center w-[213px]">
          {/* Loading dots */}
          <div className="h-[62px] w-[142px] mb-[16px]">
            <div className="flex items-center justify-center gap-[24px] h-full">
              <div className="size-[14px] rounded-full bg-[#D1FAE5] animate-bounce" style={{ animationDelay: '0s' }} />
              <div className="size-[14px] rounded-full bg-[#6EE7B7] animate-bounce" style={{ animationDelay: '0.15s' }} />
              <div className="size-[14px] rounded-full bg-[#10B981] animate-bounce" style={{ animationDelay: '0.3s' }} />
            </div>
          </div>
          
          {/* Loading text */}
          <div className="content-stretch flex flex-col items-center w-full">
            <p className="text-white tracking-[-0.32px] leading-[24px]">
              AI가 사진 속 음식을 분석 중이에요!
            </p>
          </div>
        </div>
      </div>

      {/* Top text */}
      <div className="absolute left-1/2 top-[137px] -translate-x-1/2 -translate-y-1/2">
        <p className="font-bold text-[14px] text-neutral-50 tracking-[-0.28px] leading-[20px] whitespace-pre">
          사진 촬영 혹은 앨범 사진을 선택 해주세요.
        </p>
      </div>

      {/* Bottom controls (disabled state) */}
      <div className="absolute content-stretch flex items-center justify-between left-[35px] bottom-[130px] w-[175px] pointer-events-none opacity-50">
        <div className="bg-[rgba(179,179,179,0.5)] box-border content-stretch flex gap-[10px] items-center p-[12px] rounded-[24px] shrink-0 size-[48px]">
          <div className="relative shrink-0 size-[24px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path d={svgPaths.p11d16a80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d={svgPaths.p1b53d300} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d={svgPaths.p1c7c380} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="relative shrink-0 size-[60px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
            <circle cx="30" cy="30" fill="white" r="25" />
            <circle cx="30" cy="30" r="29.5" stroke="white" />
          </svg>
        </div>
      </div>

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 box-border content-stretch flex flex-col gap-[10px] h-[48px] items-start justify-center px-[16px] py-[8px] shadow-[0px_4px_11px_0px_rgba(232,232,232,0.2)]">
        <div className="content-stretch flex items-center justify-between w-full">
          <button className="relative shrink-0 size-[24px] pointer-events-none">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path d={svgPaths.p2d3a7c20} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </button>
          <div className="shrink-0 w-[91px]" />
          <div className="shrink-0 size-[24px]" />
        </div>
      </div>
    </div>
  );
}

export default function PhotoCaptureModal({ 
  isOpen, 
  onClose,
  onPhotoSelected 
}: PhotoCaptureModalProps) {
  const [state, setState] = useState<PhotoCaptureState>("capture");

  useEffect(() => {
    if (!isOpen) {
      setState("capture");
    }
  }, [isOpen]);

  const handleCameraClick = () => {
    setState("loading");
    
    // After 800ms, transition to upload state
    setTimeout(() => {
      // Use the same image as placeholder
      onPhotoSelected(imgFrame1000004799);
      onClose();
    }, 800);
  };

  if (!isOpen) return null;

  if (state === "capture") {
    return <CaptureScreen onCameraClick={handleCameraClick} onBack={onClose} />;
  }

  if (state === "loading") {
    return <LoadingScreen />;
  }

  return null;
}
