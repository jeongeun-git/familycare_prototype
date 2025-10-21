import svgPaths from "./svg-8swzskh356";

function IconSetsCheck() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="icon_sets/check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon_sets/check">
          <path d={svgPaths.p107c6b00} fill="var(--fill-0, #FAFAFA)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconBtn() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[2px] relative shrink-0 size-[24px]" data-name="icon_btn">
      <IconSetsCheck />
    </div>
  );
}

function Frame427318957() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.28px] whitespace-pre">완료!</p>
    </div>
  );
}

function Frame427318956() {
  return (
    <div className="content-stretch flex gap-[4px] items-start justify-center relative shrink-0">
      <p className="font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.28px] whitespace-pre">점심 기록</p>
      <Frame427318957 />
    </div>
  );
}

export default function ToastMessage() {
  return (
    <div className="bg-[rgba(0,0,0,0.6)] relative rounded-[999px] size-full" data-name="Toast Message">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[16px] py-0 relative size-full">
          <IconBtn />
          <Frame427318956 />
        </div>
      </div>
    </div>
  );
}