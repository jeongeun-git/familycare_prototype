import svgPaths from "./svg-0uklke9s9y";
import imgEllipse492 from "figma:asset/3e1e39abc144a5887ca6a7090dac2a8475f60989.png";
import imgEllipse486 from "figma:asset/74cec6bc2b83dc280b98504c16beda17020a85ae.png";
import imgEllipse488 from "figma:asset/971ddfb779400850a30393ec5788c784e462c84f.png";
import { imgEllipse491 } from "./svg-ssw8n";

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
        <p className="leading-[22px] whitespace-pre">복약 기록</p>
      </div>
    </div>
  );
}

function BackButton1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Back Button">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Back Button">
          <g id="Vector">
            <path d={svgPaths.p38ffec00} stroke="var(--stroke-0, #404040)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p3cccb600} stroke="var(--stroke-0, #404040)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function HeaderContainer() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full" data-name="Header Container">
      <BackButton />
      <TitleContainer />
      <BackButton1 />
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

function MaskGroup() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[33.556%] mt-[62.682%] place-items-start relative" data-name="Mask group">
      <div className="[grid-area:1_/_1] flex h-[5.49px] items-center justify-center ml-0 mt-[2.745px] relative w-[6.863px]">
        <div className="flex-none h-[5.49px] rotate-[180deg] scale-y-[-100%] w-[6.863px]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-2.745px] mask-size-[6.863px_4.118px] relative size-full" style={{ maskImage: `url('${imgEllipse491}')` }}>
            <img alt="" className="block max-w-none size-full" height="5.49" src={imgEllipse492} width="6.863" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Group1000004215() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[46.288%] mt-[31.995%] place-items-start relative">
      <div className="[grid-area:1_/_1] flex h-[4.489px] items-center justify-center ml-[17.673px] mt-0 relative w-[4.242px]">
        <div className="flex-none h-[4.489px] rotate-[180deg] scale-y-[-100%] w-[4.242px]">
          <div className="relative size-full">
            <img alt="" className="block max-w-none size-full" height="4.489" src={imgEllipse486} width="4.242" />
          </div>
        </div>
      </div>
      <div className="[grid-area:1_/_1] flex h-[4.118px] items-center justify-center ml-[7.354px] mt-[6.917px] relative w-[6.863px]">
        <div className="flex-none h-[4.118px] rotate-[180deg] scale-y-[-100%] w-[6.863px]">
          <div className="relative size-full">
            <img alt="" className="block max-w-none size-full" height="4.118" src={imgEllipse488} width="6.863" />
          </div>
        </div>
      </div>
      <MaskGroup />
      <div className="[grid-area:1_/_1] flex h-[4.489px] items-center justify-center ml-0 mt-0 relative w-[4.242px]">
        <div className="flex-none h-[4.489px] rotate-[180deg] scale-y-[-100%] w-[4.242px]">
          <div className="relative size-full">
            <img alt="" className="block max-w-none size-full" height="4.489" src={imgEllipse486} width="4.242" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Group1000004222() {
  return (
    <div className="[grid-area:1_/_1] aspect-[49.5413/49.5413] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[24.486px] place-items-start relative">
      <div className="[grid-area:1_/_1] aspect-[100/100] ml-0 mt-0 relative rounded-bl-[198px] rounded-br-[198px] rounded-tl-[40px] rounded-tr-[198px] w-[68px]">
        <div className="absolute inset-0 pointer-events-none shadow-[0px_4px_8px_0px_inset_rgba(253,253,253,0.5)]" />
      </div>
      <Group1000004215 />
    </div>
  );
}

function ActivityIcon() {
  return (
    <div className="relative size-full" data-name="Activity Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Activity Icon">
          <path d={svgPaths.p13e30480} fill="var(--fill-0, #10B981)" id="Vector" />
          <path d={svgPaths.pb4d4c00} fill="var(--fill-0, #FAFAFA)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function TwemojiPill() {
  return (
    <div className="overflow-clip relative size-[18px]" data-name="twemoji:pill">
      <div className="absolute flex inset-[-2.14%] items-center justify-center">
        <div className="flex-none h-[15px] rotate-[17.223deg] w-[15.001px]">
          <ActivityIcon />
        </div>
      </div>
    </div>
  );
}

function Frame1000004499() {
  return (
    <div className="[grid-area:1_/_1] bg-neutral-800 box-border content-stretch flex gap-[10px] items-center justify-center ml-0 mt-0 p-[10px] relative rounded-[25px] size-[29px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <TwemojiPill />
        </div>
      </div>
    </div>
  );
}

function Group1000004217() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[59.951px] mt-0 place-items-start relative">
      <Frame1000004499 />
      <div className="[grid-area:1_/_1] h-[6px] ml-[2.75px] mt-[24px] relative w-[8px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 6">
          <path d="M0 6L2.66667 0L8 4L0 6Z" fill="var(--fill-0, #262626)" id="Vector 33" />
        </svg>
      </div>
    </div>
  );
}

function Routiny() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Routiny">
      <Group1000004222 />
      <Group1000004217 />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[0px] text-center text-neutral-700 text-nowrap tracking-[-0.28px] whitespace-pre">
        <p className="leading-[20px] mb-0 text-[14px]">
          <span className="font-['Pretendard_Variable:Bold',_sans-serif] font-bold">현재 복용 중인 약을 등록</span>
          <span className="font-['Pretendard_Variable:Medium',_sans-serif] font-medium">해 주세요.</span>
        </p>
        <p className="leading-[20px] text-[14px] text-neutral-600">
          한 번 등록<span className="font-['Pretendard_Variable:Medium',_sans-serif] font-medium tracking-[-0.28px]">{`하면 다음부턴 간편하게 `}</span>체크만<span className="font-['Pretendard_Variable:Medium',_sans-serif] font-medium tracking-[-0.28px]">{` 하면 돼요.`}</span>
        </p>
      </div>
    </div>
  );
}

function Plus() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="plus">
          <path d="M5 12H19M12 5V19" id="Vector" stroke="var(--stroke-0, #ECFDF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function BtnTit() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="btn_tit">
      <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-emerald-50 text-nowrap tracking-[-0.28px]">
        <p className="font-['Pretendard:Bold',_sans-serif] leading-[20px] text-[14px] whitespace-pre">내 약 등록하기</p>
      </div>
    </div>
  );
}

function Frame1000005202() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Plus />
      <BtnTit />
    </div>
  );
}

function Buttons() {
  return (
    <div className="bg-emerald-800 h-[48px] relative rounded-[999px] shadow-[0px_4px_11px_0px_rgba(0,0,0,0.04)] shrink-0 w-full" data-name="Buttons">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[48px] items-center justify-center px-[16px] py-[8px] relative w-full">
          <Frame1000005202 />
        </div>
      </div>
    </div>
  );
}

function ContentBox() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[296px]" data-name="Content Box">
      <Routiny />
      <Text />
      <Buttons />
    </div>
  );
}

function RtContent() {
  return (
    <div className="absolute bg-[#f2f5ed] box-border content-stretch flex gap-[10px] h-[424px] items-center justify-center left-0 overflow-clip p-[16px] rounded-tl-[30px] rounded-tr-[30px] top-[216px] w-[360px]" data-name="RT Content">
      <ContentBox />
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

export default function Component0203() {
  return (
    <div className="bg-neutral-50 relative size-full" data-name="02루틴케어_03복약">
      <div className="absolute inset-0 pointer-events-none">
        <StatusBar />
      </div>
      <DetailHeaders />
      <RtContent />
      <HorizontalCalendar />
    </div>
  );
}