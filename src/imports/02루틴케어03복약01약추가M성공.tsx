import svgPaths from "./svg-f4fqvn6nnw";

function ActivityIcon() {
  return (
    <div className="relative size-full" data-name="Activity Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Activity Icon">
          <path d={svgPaths.pa61470} fill="var(--fill-0, #10B981)" id="Vector" />
          <path d={svgPaths.p4ac83f1} fill="var(--fill-0, #D1FAE5)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function TwemojiPill() {
  return (
    <div className="overflow-clip relative size-[38px]" data-name="twemoji:pill">
      <div className="absolute flex inset-[-2.14%_-2.14%_-2.13%_-2.13%] items-center justify-center">
        <div className="flex-none h-[31.666px] rotate-[17.223deg] w-[31.668px]">
          <ActivityIcon />
        </div>
      </div>
    </div>
  );
}

function Group1000004234() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-emerald-600 h-[45px] ml-0 mt-[9px] rounded-[11.848px] w-[68px]" />
      <div className="[grid-area:1_/_1] flex h-[calc(1px*((var(--transform-inner-width)*0.05644913762807846)+(var(--transform-inner-height)*0.9984054565429688)))] items-center justify-center ml-[18.227px] mt-0 relative w-[calc(1px*((var(--transform-inner-height)*0.05644913762807846)+(var(--transform-inner-width)*0.9984054565429688)))]" style={{ "--transform-inner-width": "38", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="flex-none rotate-[183.236deg] scale-y-[-100%]">
          <TwemojiPill />
        </div>
      </div>
      <div className="[grid-area:1_/_1] h-[34.683px] ml-0 mt-[18.988px] relative w-[68px]" data-name="Union">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68 35">
          <path d={svgPaths.p18647c00} fill="url(#paint0_linear_33_3976)" id="Union" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_33_3976" x1="34" x2="34" y1="0" y2="34.6826">
              <stop stopColor="#A7F3D0" stopOpacity="0.64" />
              <stop offset="1" stopColor="#059669" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame1000005293() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center leading-[0] relative shrink-0 text-center text-nowrap">
      <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center not-italic relative shrink-0 text-[0px] text-neutral-600 tracking-[-0.32px]">
        <p className="font-['Pretendard:Bold',_sans-serif] leading-[22px] text-[16px] text-nowrap whitespace-pre">내 약 등록이 완료되었어요!</p>
      </div>
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] font-medium justify-center relative shrink-0 text-[14px] text-neutral-500 tracking-[-0.28px]">
        <p className="leading-[20px] text-nowrap whitespace-pre">앞으로 복용 후 체크만 하면 돼요 :)</p>
      </div>
    </div>
  );
}

function Frame1000005254() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[156px] items-center justify-center relative shrink-0 w-full">
      <Group1000004234 />
      <Frame1000005293 />
    </div>
  );
}

function Frame1000004509() {
  return (
    <div className="bg-neutral-700 box-border content-stretch flex gap-[16px] h-[48px] items-center justify-center p-[8px] relative rounded-[12px] shrink-0 w-[328px]">
      <p className="font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-neutral-50 text-nowrap tracking-[-0.28px] whitespace-pre">기록하러 가기</p>
    </div>
  );
}

function BottomsheetItem() {
  return (
    <div className="absolute bg-white bottom-0 box-border content-stretch flex flex-col h-[236px] items-center justify-between left-1/2 overflow-clip px-0 py-[16px] rounded-tl-[24px] rounded-tr-[24px] shadow-[0px_0px_26.6px_0px_rgba(0,0,0,0.1)] translate-x-[-50%] w-[360px]" data-name="bottomsheet_item">
      <Frame1000005254 />
      <Frame1000004509 />
    </div>
  );
}

export default function Component020301M() {
  return (
    <div className="bg-[rgba(0,0,0,0.1)] relative size-full" data-name="02루틴케어_03복약_01약추가_M성공">
      <BottomsheetItem />
    </div>
  );
}