import svgPaths from "./svg-mh9z9jnxc3";

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

function CharacterFace() {
  return (
    <div className="[grid-area:1_/_1] h-[10.446px] ml-[40.37%] mt-[34.314%] relative w-[23.402px]" data-name="Character Face">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 11">
        <g id="Character Face">
          <path d={svgPaths.pf050080} fill="var(--fill-0, #262626)" id="Ellipse 486" />
          <path d={svgPaths.p289d9600} fill="var(--fill-0, #262626)" id="Ellipse 487" />
          <path d={svgPaths.p3d41d580} fill="var(--fill-0, #262626)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group1000004222() {
  return (
    <div className="[grid-area:1_/_1] aspect-[49.5413/49.5413] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[-0.001%] mt-0 place-items-start relative">
      <div className="[grid-area:1_/_1] aspect-[100/100] ml-0 mt-0 relative rounded-bl-[198px] rounded-br-[198px] rounded-tl-[40px] rounded-tr-[198px] w-[68px]">
        <div className="absolute inset-0 pointer-events-none shadow-[0px_4px_8px_0px_inset_rgba(253,253,253,0.5)]" />
      </div>
      <CharacterFace />
    </div>
  );
}

function Group1000004232() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[15.084%] mt-0 place-items-start relative">
      <Group1000004222 />
    </div>
  );
}

function Group1000004242() {
  return (
    <div className="relative size-full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 41">
        <g id="Group 1000004242">
          <path d={svgPaths.p15688080} fill="var(--fill-0, #737373)" id="Vector" />
          <rect fill="var(--fill-0, #34D399)" height="3.66014" id="Activity Icon Part" width="3.66022" x="0.000973794" y="36.6009" />
        </g>
      </svg>
    </div>
  );
}

function Group1000004243() {
  return (
    <div className="relative size-full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 41">
        <g id="Group 1000004243">
          <path d={svgPaths.p3ec29a00} fill="var(--fill-0, #737373)" id="Vector" />
          <rect fill="var(--fill-0, #34D399)" height="3.66014" id="Activity Icon Part" width="3.66022" x="0.00102548" y="36.6007" />
        </g>
      </svg>
    </div>
  );
}

function Chopstick() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[73.89%] mt-[38.424%] place-items-start relative" data-name="Chopstick">
      <div className="[grid-area:1_/_1] flex h-[38.331px] items-center justify-center ml-0 mt-0 relative w-[19.554px]">
        <div className="flex-none h-[40.262px] rotate-[23.728deg] w-[3.661px]">
          <Group1000004242 />
        </div>
      </div>
      <div className="[grid-area:1_/_1] flex h-[38.331px] items-center justify-center ml-[63.627%] mt-[0.001%] relative w-[19.554px]">
        <div className="flex-none h-[40.262px] rotate-[23.728deg] w-[3.661px]">
          <Group1000004243 />
        </div>
      </div>
    </div>
  );
}

function Spoon() {
  return (
    <div className="relative size-full" data-name="Spoon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 41">
        <g id="Spoon">
          <g id="Group 1000004204">
            <path d={svgPaths.p3159e000} fill="var(--fill-0, #737373)" id="Vector" />
            <path d={svgPaths.p2639ee00} fill="var(--fill-0, #34D399)" id="Intersect" />
          </g>
          <path d={svgPaths.p148750f0} fill="var(--fill-0, #737373)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group1000004244() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group1000004232 />
      <Chopstick />
      <div className="[grid-area:1_/_1] flex h-[43.404px] items-center justify-center ml-0 mt-[37.191%] relative w-[29.334px]">
        <div className="flex-none h-[40.189px] rotate-[339.803deg] w-[16.471px]">
          <Spoon />
        </div>
      </div>
      <div className="[grid-area:1_/_1] flex h-[calc(1px*((var(--transform-inner-width)*0.1303929090499878)+(var(--transform-inner-height)*0.9914624691009521)))] items-center justify-center ml-[8.106px] mt-[46.988px] relative w-[calc(1px*((var(--transform-inner-height)*0.1303929090499878)+(var(--transform-inner-width)*0.9914624691009521)))]" style={{ "--transform-inner-width": "17.09375", "--transform-inner-height": "13.3125" } as React.CSSProperties}>
        <div className="flex-none rotate-[172.508deg] scale-y-[-100%]">
          <div className="h-[13.325px] relative w-[17.095px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 14">
              <ellipse cx="8.54764" cy="6.66258" fill="url(#paint0_linear_14_623)" id="Ellipse 552" rx="8.54764" ry="6.66258" />
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_14_623" x1="15.7876" x2="2.92799" y1="2.30778" y2="12.6618">
                  <stop stopColor="#A7F3D0" />
                  <stop offset="0.552885" stopColor="#4CD38C" />
                  <stop offset="1" stopColor="#2CD5A5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="[grid-area:1_/_1] flex h-[calc(1px*((var(--transform-inner-width)*0.6908456087112427)+(var(--transform-inner-height)*0.7230024337768555)))] items-center justify-center ml-[72.636px] mt-[43.402px] relative w-[calc(1px*((var(--transform-inner-height)*0.6908456087112427)+(var(--transform-inner-width)*0.7230024337768555)))]" style={{ "--transform-inner-width": "17.09375", "--transform-inner-height": "13.3125" } as React.CSSProperties}>
        <div className="flex-none rotate-[316.303deg]">
          <div className="h-[13.325px] relative w-[17.095px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 14">
              <ellipse cx="8.54764" cy="6.66258" fill="url(#paint0_linear_14_621)" id="Ellipse 552" rx="8.54764" ry="6.66258" />
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_14_621" x1="15.7876" x2="2.92799" y1="2.30778" y2="12.6618">
                  <stop stopColor="#A7F3D0" />
                  <stop offset="0.552885" stopColor="#4CD38C" />
                  <stop offset="1" stopColor="#2CD5A5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1000005002() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] font-medium justify-center leading-[20px] relative shrink-0 text-[0px] text-[14px] text-center text-neutral-700 text-nowrap tracking-[-0.28px] whitespace-pre">
        <p className="mb-0">
          <span>{`오늘 `}</span>
          <span className="font-['Pretendard_Variable:Bold',_sans-serif] font-bold tracking-[-0.28px]">첫 식단 기록하고 50P</span>
          <span>{` 받으세요!`}</span>
        </p>
        <p>지금 시작해볼까요?</p>
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
        <p className="font-['Pretendard:Bold',_sans-serif] leading-[20px] text-[14px] whitespace-pre">식단기록 하기</p>
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

function Frame1000004995() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[296px]">
      <Frame1000005002 />
      <Buttons />
    </div>
  );
}

function RtContent() {
  return (
    <div className="absolute bg-[#f2f5ed] box-border content-stretch flex flex-col gap-[16px] h-[422px] items-center justify-center left-1/2 overflow-clip px-[16px] py-[24px] rounded-tl-[30px] rounded-tr-[30px] top-[218px] translate-x-[-50%] w-[360px]" data-name="RT Content">
      <Group1000004244 />
      <Frame1000004995 />
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

export default function Component0202() {
  return (
    <div className="bg-neutral-50 relative size-full" data-name="02루틴케어_02식단_기록없음">
      <div className="absolute inset-0 pointer-events-none">
        <StatusBar />
      </div>
      <DetailHeaders />
      <RtContent />
      <HorizontalCalendar />
    </div>
  );
}