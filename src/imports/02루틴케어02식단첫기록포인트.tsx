import svgPaths from "./svg-0x3z7epafr";
import imgFire from "figma:asset/3d6b605608139f4862bf5b26accdd0daefb82269.png";

function Wifi() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[17px]" data-name="Wifi">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="Wifi">
          <g id="Path"></g>
          <g id="Rectangle"></g>
          <g id="Path_2"></g>
          <path d={svgPaths.p34567080} fill="var(--fill-0, #1D1B20)" id="Path_3" opacity="0.1" />
        </g>
      </svg>
    </div>
  );
}

function Signal() {
  return (
    <div className="[grid-area:1_/_1] ml-[34.783%] mt-0 relative size-[17px]" data-name="Signal">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="Signal">
          <g id="Path"></g>
          <path d={svgPaths.p112c6500} fill="var(--fill-0, #1D1B20)" id="Path_2" />
        </g>
      </svg>
    </div>
  );
}

function Battery() {
  return (
    <div className="[grid-area:1_/_1] h-[15px] ml-[38px] mt-px relative w-[8px]" data-name="Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 15">
        <g id="Battery">
          <path d={svgPaths.p2dfd100} fill="var(--fill-0, #1D1B20)" id="Base" opacity="0.3" />
          <path d={svgPaths.p2657cc00} fill="var(--fill-0, #1D1B20)" id="Charge" />
        </g>
      </svg>
    </div>
  );
}

function RightIcons() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="right icons">
      <Wifi />
      <Signal />
      <Battery />
    </div>
  );
}

function StatusBar() {
  return (
    <div className="box-border content-stretch flex h-[40px] items-center justify-between pointer-events-auto px-[24px] py-[10px] sticky top-0" data-name="status_bar">
      <div className="css-mrh0t0 flex flex-col font-['Roboto:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[14px] text-nowrap tracking-[0.14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre">9:30</p>
      </div>
      <RightIcons />
      <div className="absolute left-1/2 size-[24px] top-[7px] translate-x-[-50%]" data-name="Camera Cutout">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path clipRule="evenodd" d={svgPaths.p34df7200} fill="var(--fill-0, #1D1B20)" fillRule="evenodd" id="Camera Cutout" />
        </svg>
      </div>
    </div>
  );
}

function BackButton() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Back Button">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Back Button">
          <path d="M15 18L9 12L15 6" id="Vector" stroke="var(--stroke-0, #262626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function TitleContainer() {
  return (
    <div className="content-stretch flex gap-[11px] items-center justify-center relative shrink-0 w-[91px]" data-name="Title Container">
      <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-neutral-800 text-nowrap tracking-[-0.32px]">
        <p className="leading-[22px] whitespace-pre">식단 기록</p>
      </div>
    </div>
  );
}

function Bin() {
  return <div className="shrink-0 size-[24px]" data-name="bin" />;
}

function HeaderContainer() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full" data-name="Header Container">
      <BackButton />
      <TitleContainer />
      <Bin />
    </div>
  );
}

function DetailHeaders() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[10px] h-[48px] items-start left-1/2 overflow-clip px-[16px] py-[8px] shadow-[0px_4px_11px_0px_rgba(232,232,232,0.2)] top-[40px] translate-x-[-50%] w-[360px]" data-name="DetailHeaders">
      <HeaderContainer />
    </div>
  );
}

function Plus() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="plus">
          <path d="M5 12H19M12 5V19" id="Vector" stroke="var(--stroke-0, #065F46)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame1000005295() {
  return (
    <div className="absolute content-stretch flex h-[26px] items-start justify-between left-[16px] top-[24px] w-[328px]">
      <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-neutral-700 text-nowrap tracking-[-0.4px]">
        <p className="font-['Pretendard:Bold',_sans-serif] leading-[26px] text-[20px] whitespace-pre">오늘의 식단</p>
      </div>
      <Plus />
    </div>
  );
}

function Image() {
  return (
    <div className="absolute left-1/2 size-[32px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="image">
          <path d={svgPaths.p3484d000} id="Vector" stroke="var(--stroke-0, #D4D4D4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function ListContentListPhotobox() {
  return (
    <div className="bg-neutral-100 overflow-clip relative rounded-[12px] shrink-0 size-[80px]" data-name="ListContent/list_photobox">
      <Image />
    </div>
  );
}

function ListTit() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative rounded-[6px] shrink-0" data-name="list-tit">
      <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-neutral-700 text-nowrap tracking-[-0.32px]">
        <p className="font-['Pretendard:Bold',_sans-serif] leading-[24px] text-[16px] whitespace-pre">아침</p>
      </div>
    </div>
  );
}

function ListCaption() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="list_caption">
      <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-neutral-500 text-nowrap tracking-[-0.28px]">
        <p className="leading-[20px] text-[14px] whitespace-pre">요거트 외 2개</p>
      </div>
    </div>
  );
}

function ListCaption1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="list_caption">
      <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-neutral-500 text-nowrap tracking-[-0.28px]">
        <p className="leading-[20px] whitespace-pre">-</p>
      </div>
    </div>
  );
}

function ListContentDefaultDefault() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="ListContent/default/default">
      <ListTit />
      <ListCaption />
      <ListCaption1 />
    </div>
  );
}

function ListContent() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="ListContent">
      <ListContentListPhotobox />
      <ListContentDefaultDefault />
    </div>
  );
}

function IconBtn() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon_btn">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon_btn">
          <path d="M9 18L15 12L9 6" id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function DietListItem() {
  return (
    <div className="absolute bg-[#e6eadf] box-border content-stretch flex items-center justify-between left-[16px] p-[16px] rounded-[12px] top-[66px] w-[328px]" data-name="DietListItem">
      <ListContent />
      <IconBtn />
    </div>
  );
}

function Component8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Component 8">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Component 8">
          <circle cx="12" cy="12" fill="var(--fill-0, #10B981)" id="Ellipse 484" r="10" stroke="var(--stroke-0, #A7F3D0)" strokeWidth="1.5" />
          <path d={svgPaths.p11be5700} fill="var(--fill-0, #ECFDF5)" id="P" />
          <path d={svgPaths.p33c42f00} fill="var(--fill-0, #10B981)" id="P_2" />
        </g>
      </svg>
    </div>
  );
}

function ToastMessage() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] bottom-[48px] box-border content-stretch flex gap-[8px] h-[48px] items-center justify-center left-[calc(50%-0.5px)] px-[16px] py-0 rounded-[999px] translate-x-[-50%]" data-name="Toast Message">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[999px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.13)]" />
      <Component8 />
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[0px] text-neutral-700 text-nowrap tracking-[-0.28px]">
        <p className="leading-[20px] text-[14px] whitespace-pre">
          <span className="font-['Pretendard_Variable:Bold',_sans-serif] font-bold">50포인트</span>
          <span className="font-['Pretendard_Variable:Medium',_sans-serif] font-medium">를 받았어요.</span>
        </p>
      </div>
    </div>
  );
}

function RtContent() {
  return (
    <div className="absolute bg-[#f2f5ed] h-[416px] left-1/2 overflow-clip rounded-tl-[30px] rounded-tr-[30px] top-[224px] translate-x-[-50%] w-[360px]" data-name="RT Content">
      <Frame1000005295 />
      <DietListItem />
      <ToastMessage />
    </div>
  );
}

function MdiCalendar() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="mdi:calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="mdi:calendar">
          <rect fill="var(--fill-0, #E5E5E5)" height="24" rx="8" width="24" />
          <path d={svgPaths.p656e700} fill="var(--fill-0, #262626)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame5712() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-0 py-[2px] relative shrink-0">
      <p className="font-['Pretendard:Bold',_sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-neutral-800 text-nowrap tracking-[-0.48px] whitespace-pre">9월</p>
      <MdiCalendar />
    </div>
  );
}

function HorizontalCalendarMonth() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalCalendarMonth">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[16px] py-0 relative w-full">
          <Frame5712 />
        </div>
      </div>
    </div>
  );
}

function Frame427319027() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[24px]">
      <p className="font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[normal] relative shrink-0 text-[14px] text-center text-neutral-500 text-nowrap whitespace-pre">금</p>
    </div>
  );
}

function Frame5800() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[7px] py-0 relative rounded-bl-[10px] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[3px] shrink-0 size-[28px]">
      <p className="font-['Pretendard_Variable:SemiBold',_sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-center text-neutral-700 text-nowrap whitespace-pre">5</p>
    </div>
  );
}

function HorizontalCalendarDate() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center px-[2px] py-[4px] relative rounded-[6px] shrink-0" data-name="HorizontalCalendarDate">
      <Frame427319027 />
      <Frame5800 />
    </div>
  );
}

function Frame427319028() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[24px]">
      <p className="font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[normal] relative shrink-0 text-[14px] text-center text-neutral-500 text-nowrap whitespace-pre">토</p>
    </div>
  );
}

function Frame5801() {
  return (
    <div className="bg-[#e6f0ec] box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[8px] relative rounded-[99px] shrink-0 size-[32px]">
      <p className="font-['Pretendard_Variable:SemiBold',_sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-center text-emerald-950 text-nowrap whitespace-pre">6</p>
    </div>
  );
}

function HorizontalCalendarDate1() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center px-[2px] py-[4px] relative rounded-[6px] shrink-0" data-name="HorizontalCalendarDate">
      <Frame427319028 />
      <Frame5801 />
    </div>
  );
}

function Frame427319029() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[24px]">
      <p className="font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[normal] relative shrink-0 text-[14px] text-center text-neutral-500 text-nowrap whitespace-pre">일</p>
    </div>
  );
}

function Frame5802() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[7px] py-0 relative rounded-bl-[10px] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[3px] shrink-0 size-[28px]">
      <p className="font-['Pretendard_Variable:SemiBold',_sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-center text-neutral-700 text-nowrap whitespace-pre">7</p>
    </div>
  );
}

function HorizontalCalendarDate2() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center px-[2px] py-[4px] relative rounded-[6px] shrink-0" data-name="HorizontalCalendarDate">
      <Frame427319029 />
      <Frame5802 />
    </div>
  );
}

function Frame427319030() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[24px]">
      <p className="font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[normal] relative shrink-0 text-[14px] text-center text-neutral-500 text-nowrap whitespace-pre">월</p>
    </div>
  );
}

function Frame5803() {
  return (
    <div className="bg-[#e6f0ec] box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[8px] relative rounded-[99px] shrink-0 size-[32px]">
      <p className="font-['Pretendard_Variable:SemiBold',_sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-center text-emerald-950 text-nowrap whitespace-pre">8</p>
    </div>
  );
}

function HorizontalCalendarDate3() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center px-[2px] py-[4px] relative rounded-[6px] shrink-0" data-name="HorizontalCalendarDate">
      <Frame427319030 />
      <Frame5803 />
    </div>
  );
}

function Frame427319031() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[24px]">
      <p className="font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[normal] relative shrink-0 text-[14px] text-center text-neutral-500 text-nowrap whitespace-pre">화</p>
    </div>
  );
}

function Frame5804() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[7px] py-0 relative rounded-bl-[10px] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[3px] shrink-0 size-[28px]">
      <p className="font-['Pretendard_Variable:SemiBold',_sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-center text-neutral-700 text-nowrap whitespace-pre">9</p>
    </div>
  );
}

function HorizontalCalendarDate4() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center px-[2px] py-[4px] relative rounded-[6px] shrink-0" data-name="HorizontalCalendarDate">
      <Frame427319031 />
      <Frame5804 />
    </div>
  );
}

function Frame427319032() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[24px]">
      <p className="font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[normal] relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">수</p>
    </div>
  );
}

function Frame5805() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[7px] py-0 relative rounded-[99px] shrink-0 size-[28px]">
      <p className="font-['Pretendard_Variable:SemiBold',_sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">10</p>
    </div>
  );
}

function HorizontalCalendarDate5() {
  return (
    <div className="bg-emerald-600 box-border content-stretch flex flex-col h-[68px] items-center justify-center p-[4px] relative rounded-[999px] shrink-0" data-name="HorizontalCalendarDate">
      <Frame427319032 />
      <Frame5805 />
    </div>
  );
}

function Frame427319033() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[24px]">
      <p className="font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[normal] relative shrink-0 text-[14px] text-center text-neutral-500 text-nowrap whitespace-pre">목</p>
    </div>
  );
}

function Frame5806() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[7px] py-0 relative rounded-bl-[10px] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[3px] shrink-0 size-[28px]">
      <p className="font-['Pretendard_Variable:SemiBold',_sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-center text-neutral-700 text-nowrap whitespace-pre">11</p>
    </div>
  );
}

function HorizontalCalendarDate6() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center px-[2px] py-[4px] relative rounded-[6px] shrink-0" data-name="HorizontalCalendarDate">
      <Frame427319033 />
      <Frame5806 />
    </div>
  );
}

function Frame427319034() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[24px]">
      <p className="font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[normal] relative shrink-0 text-[14px] text-center text-neutral-500 text-nowrap whitespace-pre">금</p>
    </div>
  );
}

function Frame5807() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[7px] py-0 relative rounded-bl-[10px] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[3px] shrink-0 size-[28px]">
      <p className="font-['Pretendard_Variable:SemiBold',_sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-center text-neutral-700 text-nowrap whitespace-pre">12</p>
    </div>
  );
}

function HorizontalCalendarDate7() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center px-[2px] py-[4px] relative rounded-[6px] shrink-0" data-name="HorizontalCalendarDate">
      <Frame427319034 />
      <Frame5807 />
    </div>
  );
}

function Frame427319035() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[24px]">
      <p className="font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[normal] relative shrink-0 text-[14px] text-center text-neutral-500 text-nowrap whitespace-pre">토</p>
    </div>
  );
}

function Frame5808() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[7px] py-0 relative rounded-bl-[10px] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[3px] shrink-0 size-[28px]">
      <p className="font-['Pretendard_Variable:SemiBold',_sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-center text-neutral-700 text-nowrap whitespace-pre">13</p>
    </div>
  );
}

function HorizontalCalendarDate8() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center px-[2px] py-[4px] relative rounded-[6px] shrink-0" data-name="HorizontalCalendarDate">
      <Frame427319035 />
      <Frame5808 />
    </div>
  );
}

function Frame427319036() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[24px]">
      <p className="font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[normal] relative shrink-0 text-[14px] text-center text-neutral-500 text-nowrap whitespace-pre">일</p>
    </div>
  );
}

function Frame5809() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[7px] py-0 relative rounded-bl-[10px] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[3px] shrink-0 size-[28px]">
      <p className="font-['Pretendard_Variable:SemiBold',_sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-center text-neutral-700 text-nowrap whitespace-pre">14</p>
    </div>
  );
}

function HorizontalCalendarDate9() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center px-[2px] py-[4px] relative rounded-[6px] shrink-0" data-name="HorizontalCalendarDate">
      <Frame427319036 />
      <Frame5809 />
    </div>
  );
}

function Frame427319037() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[24px]">
      <p className="font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[normal] relative shrink-0 text-[14px] text-center text-neutral-500 text-nowrap whitespace-pre">월</p>
    </div>
  );
}

function Frame5810() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[7px] py-0 relative rounded-bl-[10px] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[3px] shrink-0 size-[28px]">
      <p className="font-['Pretendard_Variable:SemiBold',_sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-center text-neutral-700 text-nowrap whitespace-pre">15</p>
    </div>
  );
}

function HorizontalCalendarDate10() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center px-[2px] py-[4px] relative rounded-[6px] shrink-0" data-name="HorizontalCalendarDate">
      <Frame427319037 />
      <Frame5810 />
    </div>
  );
}

function WeeklyCal02() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center relative shadow-[0px_4px_11px_0px_rgba(0,0,0,0.04)] shrink-0 w-full" data-name="weekly_cal_02">
      <HorizontalCalendarDate />
      <HorizontalCalendarDate1 />
      <HorizontalCalendarDate2 />
      <HorizontalCalendarDate3 />
      <HorizontalCalendarDate4 />
      <HorizontalCalendarDate5 />
      <HorizontalCalendarDate6 />
      <HorizontalCalendarDate7 />
      <HorizontalCalendarDate8 />
      <HorizontalCalendarDate9 />
      <HorizontalCalendarDate10 />
    </div>
  );
}

function HorizontalCalendar() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[88px] w-[431px]" data-name="Horizontal Calendar">
      <HorizontalCalendarMonth />
      <WeeklyCal02 />
    </div>
  );
}

function Fire() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Fire">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFire} />
    </div>
  );
}

function Frame1000005305() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[0px] text-nowrap text-white tracking-[-0.28px]">
        <p className="font-['Pretendard_Variable:Bold',_sans-serif] font-bold leading-[20px] text-[14px] whitespace-pre">연속 기록 1일차</p>
      </div>
      <Fire />
    </div>
  );
}

function Frame1000005306() {
  return (
    <div className="absolute bg-[rgba(2,44,34,0.8)] box-border content-stretch flex flex-col gap-[10px] items-start left-[16px] px-[12px] py-[6px] rounded-[999px] top-[208px]">
      <Frame1000005305 />
    </div>
  );
}

export default function Component0202() {
  return (
    <div className="bg-neutral-50 relative size-full" data-name="02루틴케어_02식단_첫기록포인트">
      <div className="absolute inset-0 pointer-events-none">
        <StatusBar />
      </div>
      <DetailHeaders />
      <RtContent />
      <HorizontalCalendar />
      <Frame1000005306 />
    </div>
  );
}