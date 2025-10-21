import svgPaths from "./svg-fcfj25hkfl";

function Info() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Info">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_30_3017)" id="Info">
          <path d={svgPaths.p3b51300} id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_30_3017">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Info1() {
  return (
    <div className="bg-[rgba(163,163,163,0.14)] box-border content-stretch flex gap-[4px] items-center px-[16px] py-[8px] relative rounded-[999px] shrink-0" data-name="Info">
      <Info />
      <p className="font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-center text-neutral-500 text-nowrap tracking-[-0.28px] whitespace-pre">{` 약을 한번에 등록하고 간편하게 체크해요`}</p>
    </div>
  );
}

function BtnTit() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="btn_tit">
      <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-neutral-500 text-nowrap tracking-[-0.32px]">
        <p className="leading-[24px] whitespace-pre">등록 완료</p>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="basis-0 bg-neutral-200 grow h-[48px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Buttons">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[48px] items-center justify-center px-[20px] py-[8px] relative w-full">
          <BtnTit />
        </div>
      </div>
    </div>
  );
}

function BtnTit1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="btn_tit">
      <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.32px]">
        <p className="leading-[24px] whitespace-pre">저장 후 계속 추가</p>
      </div>
    </div>
  );
}

function Buttons1() {
  return (
    <div className="basis-0 bg-gradient-to-b from-[#2cd5a5] grow h-[48px] min-h-px min-w-px relative rounded-[12px] shrink-0 to-[#56d284] via-50% via-[#41d395]" data-name="Buttons">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[48px] items-center justify-center px-[20px] py-[8px] relative w-full">
          <BtnTit1 />
        </div>
      </div>
    </div>
  );
}

function BottomButtons() {
  return (
    <div className="relative shrink-0 w-full" data-name="Bottom Buttons">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center p-[16px] relative w-full">
          <Buttons />
          <Buttons1 />
        </div>
      </div>
    </div>
  );
}

export default function BottomButtonsAdd() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-center pb-0 pt-[16px] px-0 relative size-full" data-name="Bottom Buttons Add">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
      <Info1 />
      <BottomButtons />
    </div>
  );
}