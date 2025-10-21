function InputTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-center relative shrink-0 w-full" data-name="Input Title">
      <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-neutral-700 tracking-[-0.32px] w-full">
        <p className="font-['Pretendard:Bold',_sans-serif] leading-[22px] text-[16px]">복용 주기</p>
      </div>
    </div>
  );
}

function CircleRadioOff() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[20px]" data-name="CircleRadio/off">
      <div aria-hidden="true" className="absolute border-[1.5px] border-neutral-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function CircleRadio() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[8px] grow items-center min-h-px min-w-px px-0 py-[8px] relative shrink-0" data-name="CircleRadio">
      <CircleRadioOff />
      <p className="font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-neutral-700 text-nowrap tracking-[-0.28px] whitespace-pre">매일</p>
    </div>
  );
}

function CircleRadioOn() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="CircleRadio/on">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="CircleRadio/on">
          <rect height="18.5" rx="9.25" stroke="var(--stroke-0, #10B981)" strokeWidth="1.5" width="18.5" x="0.75" y="0.75" />
          <circle cx="10" cy="10" fill="var(--fill-0, #10B981)" id="Ellipse 522" r="6" />
        </g>
      </svg>
    </div>
  );
}

function CircleRadio1() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[8px] grow items-center min-h-px min-w-px px-0 py-[8px] relative shrink-0" data-name="CircleRadio">
      <CircleRadioOn />
      <p className="font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-neutral-700 text-nowrap tracking-[-0.28px] whitespace-pre">요일 선택</p>
    </div>
  );
}

function RadioContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Radio Container">
      <CircleRadio />
      <CircleRadio1 />
    </div>
  );
}

function ChipLunch() {
  return (
    <div className="bg-neutral-200 h-[44px] relative rounded-[8px] shadow-[0px_4px_11px_0px_rgba(0,0,0,0.04)] shrink-0 w-[35.571px]" data-name="chip_lunch">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[44px] items-center justify-center px-[61px] py-[18px] relative w-[35.571px]">
          <p className="font-['Pretendard:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-50 text-nowrap tracking-[-0.32px] whitespace-pre">월</p>
        </div>
      </div>
    </div>
  );
}

function ChipLunch1() {
  return (
    <div className="bg-neutral-200 h-[44px] relative rounded-[8px] shadow-[0px_4px_11px_0px_rgba(0,0,0,0.04)] shrink-0 w-[35.571px]" data-name="chip_lunch">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[44px] items-center justify-center px-[61px] py-[18px] relative w-[35.571px]">
          <p className="font-['Pretendard:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-50 text-nowrap tracking-[-0.32px] whitespace-pre">화</p>
        </div>
      </div>
    </div>
  );
}

function ChipLunch2() {
  return (
    <div className="bg-neutral-200 h-[44px] relative rounded-[8px] shadow-[0px_4px_11px_0px_rgba(0,0,0,0.04)] shrink-0 w-[35.571px]" data-name="chip_lunch">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[44px] items-center justify-center px-[61px] py-[18px] relative w-[35.571px]">
          <p className="font-['Pretendard:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-50 text-nowrap tracking-[-0.32px] whitespace-pre">수</p>
        </div>
      </div>
    </div>
  );
}

function ChipLunch3() {
  return (
    <div className="bg-neutral-200 h-[44px] relative rounded-[8px] shadow-[0px_4px_11px_0px_rgba(0,0,0,0.04)] shrink-0 w-[35.571px]" data-name="chip_lunch">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[44px] items-center justify-center px-[61px] py-[18px] relative w-[35.571px]">
          <p className="font-['Pretendard:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-50 text-nowrap tracking-[-0.32px] whitespace-pre">목</p>
        </div>
      </div>
    </div>
  );
}

function ChipLunch4() {
  return (
    <div className="bg-neutral-200 h-[44px] relative rounded-[8px] shadow-[0px_4px_11px_0px_rgba(0,0,0,0.04)] shrink-0 w-[35.571px]" data-name="chip_lunch">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[44px] items-center justify-center px-[61px] py-[18px] relative w-[35.571px]">
          <p className="font-['Pretendard:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-50 text-nowrap tracking-[-0.32px] whitespace-pre">금</p>
        </div>
      </div>
    </div>
  );
}

function ChipLunch5() {
  return (
    <div className="bg-neutral-200 h-[44px] relative rounded-[8px] shadow-[0px_4px_11px_0px_rgba(0,0,0,0.04)] shrink-0 w-[35.571px]" data-name="chip_lunch">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[44px] items-center justify-center px-[61px] py-[18px] relative w-[35.571px]">
          <p className="font-['Pretendard:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-50 text-nowrap tracking-[-0.32px] whitespace-pre">토</p>
        </div>
      </div>
    </div>
  );
}

function ChipLunch6() {
  return (
    <div className="bg-neutral-200 h-[44px] relative rounded-[8px] shadow-[0px_4px_11px_0px_rgba(0,0,0,0.04)] shrink-0 w-[35.571px]" data-name="chip_lunch">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[44px] items-center justify-center px-[61px] py-[18px] relative w-[35.571px]">
          <p className="font-['Pretendard:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-50 text-nowrap tracking-[-0.32px] whitespace-pre">일</p>
        </div>
      </div>
    </div>
  );
}

function DayPick() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Day Pick">
      <ChipLunch />
      <ChipLunch1 />
      <ChipLunch2 />
      <ChipLunch3 />
      <ChipLunch4 />
      <ChipLunch5 />
      <ChipLunch6 />
    </div>
  );
}

export default function DaysOption() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full" data-name="Days Option">
      <InputTitle />
      <RadioContainer />
      <DayPick />
    </div>
  );
}