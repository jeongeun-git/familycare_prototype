import React, { useState, useRef, useEffect } from "react";

interface TimePickerProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (time: { hour: number; minute: number; period: "오전" | "오후" }) => void;
  initialTime?: { hour: number; minute: number; period: "오전" | "오후" };
}

function TitleAndControls({ onSave }: { onSave: () => void }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="leading-[26px] relative shrink-0 text-[20px] text-neutral-800 tracking-[-0.4px]">
        시간 선택
      </p>
      <button onClick={onSave}>
        <p className="leading-[22px] relative shrink-0 text-emerald-500 tracking-[-0.32px]">
          저장
        </p>
      </button>
    </div>
  );
}

function Toolbar({ onSave }: { onSave: () => void }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col items-center pb-[10px] pt-0 px-[16px] relative w-full">
          <TitleAndControls onSave={onSave} />
        </div>
      </div>
    </div>
  );
}

function ScrollPicker({
  items,
  value,
  onChange,
  width = "60px",
}: {
  items: (string | number)[];
  value: string | number;
  onChange: (value: string | number) => void;
  width?: string;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemHeight = 36;

  useEffect(() => {
    const index = items.indexOf(value);
    if (scrollRef.current && index !== -1) {
      scrollRef.current.scrollTop = index * itemHeight - itemHeight;
    }
  }, [value, items]);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollTop = scrollRef.current.scrollTop;
      const index = Math.round((scrollTop + itemHeight) / itemHeight);
      const clampedIndex = Math.max(0, Math.min(index, items.length - 1));
      if (items[clampedIndex] !== value) {
        onChange(items[clampedIndex]);
      }
    }
  };

  return (
    <div className="relative" style={{ width }}>
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="h-[108px] overflow-y-scroll scroll-smooth snap-y snap-mandatory scrollbar-hide"
        style={{ scrollSnapType: "y mandatory" }}
      >
        <div style={{ height: `${itemHeight}px` }} />
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center text-neutral-500 transition-all"
            style={{
              height: `${itemHeight}px`,
              scrollSnapAlign: "center",
            }}
          >
            <p className="text-[18px] leading-[28px]">{item}</p>
          </div>
        ))}
        <div style={{ height: `${itemHeight}px` }} />
      </div>
      <div className="absolute top-0 left-0 right-0 h-[36px] bg-gradient-to-b from-white to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[36px] bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </div>
  );
}

export default function TimePicker({ isOpen, onClose, onSave, initialTime }: TimePickerProps) {
  const [hour, setHour] = useState(initialTime?.hour || 8);
  const [minute, setMinute] = useState(initialTime?.minute || 0);
  const [period, setPeriod] = useState<"오전" | "오후">(initialTime?.period || "오전");

  const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, "0"));
  const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, "0"));
  const periods: ("오전" | "오후")[] = ["오전", "오후"];

  const handleSave = () => {
    onSave({ hour, minute, period });
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-[rgba(0,0,0,0.2)] z-50 flex items-end justify-center"
      onClick={handleBackdropClick}
    >
      <div className="bg-white box-border content-stretch flex flex-col items-center overflow-clip px-0 py-[16px] rounded-tl-[24px] rounded-tr-[24px] w-full animate-slide-up">
        <Toolbar onSave={handleSave} />
        
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[24px] pt-0 px-0 relative shrink-0 w-full">
          <div className="relative rounded-[12px] shrink-0 w-full">
            <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative w-full">
                {/* Selection highlight */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[rgba(52,211,153,0.12)] h-[36px] w-[calc(100%-32px)] rounded-[7px] pointer-events-none z-0" />
                
                {/* Pickers container */}
                <div className="flex items-center justify-center gap-[15px] relative z-10">
                  <ScrollPicker
                    items={hours}
                    value={hour.toString().padStart(2, "0")}
                    onChange={(val) => setHour(parseInt(val as string))}
                    width="60px"
                  />
                  
                  <div className="flex flex-col justify-center text-neutral-700 text-[18px]">
                    <p className="leading-[28px]">:</p>
                  </div>
                  
                  <ScrollPicker
                    items={minutes}
                    value={minute.toString().padStart(2, "0")}
                    onChange={(val) => setMinute(parseInt(val as string))}
                    width="60px"
                  />
                  
                  <ScrollPicker
                    items={periods}
                    value={period}
                    onChange={(val) => setPeriod(val as "오전" | "오후")}
                    width="60px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
