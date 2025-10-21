import svgPaths from "./svg-4jtcgdmor9";

function TabChips() {
  return (
    <div className="basis-0 bg-emerald-950 grow h-[32px] min-h-px min-w-px relative rounded-[50px] shrink-0" data-name="tab_chips">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[12px] py-[6px] relative w-full">
          <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-neutral-100 text-nowrap">
            <p className="font-['Pretendard:Bold',_sans-serif] leading-[20px] text-[13px] whitespace-pre">전체</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackButton() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Back Button">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_35_5599)" id="Back Button">
          <path d={svgPaths.p2181f900} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_35_5599">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TabChips1() {
  return (
    <div className="basis-0 bg-[#e6eadf] grow h-[32px] min-h-px min-w-px relative rounded-[50px] shrink-0" data-name="tab_chips">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[12px] py-[6px] relative w-full">
          <BackButton />
          <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-neutral-500 text-nowrap">
            <p className="leading-[20px] text-[13px] whitespace-pre">아침</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackButton1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Back Button">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_35_5599)" id="Back Button">
          <path d={svgPaths.p2181f900} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_35_5599">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TabChips2() {
  return (
    <div className="basis-0 bg-[#e6eadf] grow h-[32px] min-h-px min-w-px relative rounded-[50px] shrink-0" data-name="tab_chips">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[12px] py-[6px] relative w-full">
          <BackButton1 />
          <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-neutral-500 text-nowrap">
            <p className="leading-[20px] whitespace-pre">점심</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackButton2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Back Button">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Back Button">
          <path d={svgPaths.p1dccb100} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function TabChips3() {
  return (
    <div className="basis-0 bg-[#e6eadf] grow h-[32px] min-h-px min-w-px relative rounded-[50px] shrink-0" data-name="tab_chips">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[12px] py-[6px] relative w-full">
          <BackButton2 />
          <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-neutral-500 text-nowrap">
            <p className="leading-[20px] whitespace-pre">저녁</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Tabs() {
  return (
    <div className="content-stretch flex gap-[8px] h-[41px] items-center justify-center relative rounded-[12px] w-[287.804px]" data-name="Tabs">
      <TabChips />
      <TabChips1 />
      <TabChips2 />
      <TabChips3 />
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

function TabBar() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative rounded-[99px] shrink-0 w-[328px]" data-name="Tab Bar">
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*0.0038405638188123703)+(var(--transform-inner-height)*0.9999926090240479)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*0.0038405638188123703)+(var(--transform-inner-width)*0.9999926090240479)))]" style={{ "--transform-inner-width": "287.796875", "--transform-inner-height": "41" } as React.CSSProperties}>
        <div className="flex-none rotate-[359.78deg]">
          <Tabs />
        </div>
      </div>
      <Plus />
    </div>
  );
}

function ListTit() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative rounded-[6px] shrink-0" data-name="list-tit">
      <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-neutral-700 text-nowrap tracking-[-0.32px]">
        <p className="font-['Pretendard:Bold',_sans-serif] leading-[24px] text-[16px] whitespace-pre">유산균</p>
      </div>
    </div>
  );
}

function ListCaption() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="list_caption">
      <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-neutral-500 text-nowrap tracking-[-0.28px]">
        <p className="leading-[20px] text-[14px] whitespace-pre">매일 · 1캡슐</p>
      </div>
    </div>
  );
}

function ListContent() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="ListContent">
      <ListTit />
      <ListCaption />
    </div>
  );
}

function BtnTitS() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="btn_tit_S">
      <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-nowrap text-white">
        <p className="leading-[20px] whitespace-pre">복용하기</p>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="bg-gradient-to-b box-border content-stretch flex from-[#2cd5a5] gap-[10px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[12px] shrink-0 to-[#56d284] via-50% via-[#41d395]" data-name="Buttons">
      <BtnTitS />
    </div>
  );
}

function MedicineListItem() {
  return (
    <div className="bg-[#e6eadf] box-border content-stretch flex items-center justify-between p-[16px] relative rounded-[12px] shrink-0 w-[328px]" data-name="MedicineListItem">
      <ListContent />
      <Buttons />
    </div>
  );
}

function MedicineItem() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Medicine Item">
      <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-neutral-700 text-nowrap tracking-[-0.32px]">
        <p className="font-['Pretendard:Bold',_sans-serif] leading-[22px] text-[16px] whitespace-pre">오전 8:00</p>
      </div>
      <MedicineListItem />
    </div>
  );
}

function ListTit1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative rounded-[6px] shrink-0" data-name="list-tit">
      <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-neutral-700 text-nowrap tracking-[-0.32px]">
        <p className="font-['Pretendard:Bold',_sans-serif] leading-[24px] text-[16px] whitespace-pre">비타민</p>
      </div>
    </div>
  );
}

function ListCaption1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="list_caption">
      <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-neutral-500 text-nowrap tracking-[-0.28px]">
        <p className="leading-[20px] text-[14px] whitespace-pre">매일 · 1정</p>
      </div>
    </div>
  );
}

function ListContent1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="ListContent">
      <ListTit1 />
      <ListCaption1 />
    </div>
  );
}

function BtnTitS1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="btn_tit_S">
      <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-nowrap text-white">
        <p className="leading-[20px] whitespace-pre">복용하기</p>
      </div>
    </div>
  );
}

function Buttons1() {
  return (
    <div className="bg-gradient-to-b box-border content-stretch flex from-[#2cd5a5] gap-[10px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[12px] shrink-0 to-[#56d284] via-50% via-[#41d395]" data-name="Buttons">
      <BtnTitS1 />
    </div>
  );
}

function MedicineListItem1() {
  return (
    <div className="bg-[#e6eadf] box-border content-stretch flex items-center justify-between p-[16px] relative rounded-[12px] shrink-0 w-[328px]" data-name="MedicineListItem">
      <ListContent1 />
      <Buttons1 />
    </div>
  );
}

function MedicineItem1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Medicine Item">
      <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-neutral-700 text-nowrap tracking-[-0.32px]">
        <p className="font-['Pretendard:Bold',_sans-serif] leading-[22px] text-[16px] whitespace-pre">오후 12:00</p>
      </div>
      <MedicineListItem1 />
    </div>
  );
}

function MedicineList() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Medicine List">
      <MedicineItem />
      <MedicineItem1 />
    </div>
  );
}

function TabContent() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Tab Content">
      <TabBar />
      <MedicineList />
    </div>
  );
}

function PointsInfoIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Points Info Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_35_5596)" id="Points Info Icon">
          <path d={svgPaths.p3b51300} id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_35_5596">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PointsInfoHeaderContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Points Info Header Container">
      <PointsInfoIcon />
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[0px] text-neutral-400 tracking-[-0.28px] w-[227px]">
        <p className="font-['Pretendard_Variable:Bold',_sans-serif] font-bold leading-[20px] text-[14px]">포인트 적립 안내</p>
      </div>
    </div>
  );
}

function PointsInfoContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[328px]" data-name="Points Info Container">
      <PointsInfoHeaderContainer />
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-neutral-400 tracking-[-0.28px] w-full">
        <p className="leading-[20px]">포인트는 하루 최초 기록에만 지급되며, 이후 기록은 포인트 적립 없이 저장됩니다.</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex flex-col h-[379px] items-start justify-between left-[15px] top-[91px] w-[329px]" data-name="Content">
      <TabContent />
      <PointsInfoContainer />
    </div>
  );
}

function RtContent() {
  return (
    <div className="absolute bg-[#f2f5ed] h-[492px] left-0 overflow-clip rounded-tl-[24px] rounded-tr-[24px] top-[276px] w-[360px]" data-name="RT Content">
      <Content />
    </div>
  );
}

function Frame1000005304() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 text-nowrap w-[119.5px] whitespace-pre">
      <p className="font-['Pretendard_Variable:SemiBold',_sans-serif] font-semibold leading-[40px] relative shrink-0 text-[34px] text-neutral-800 tracking-[-0.68px]">0</p>
      <p className="font-['Pretendard:Medium',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-neutral-500 tracking-[-0.32px]">%</p>
    </div>
  );
}

function Frame1000005303() {
  return (
    <div className="bg-emerald-950 box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[4px] relative rounded-[99px] shrink-0">
      <p className="font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[16px] relative shrink-0 text-[0px] text-[12px] text-nowrap text-white tracking-[-0.24px] whitespace-pre">
        <span className="font-['Pretendard_Variable:Bold',_sans-serif] font-bold">2개</span>
        <span>{` 복용 필요`}</span>
      </p>
    </div>
  );
}

function Percent() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Percent">
      <Frame1000005304 />
      <Frame1000005303 />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Title">
      <p className="font-['Pretendard:Medium',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-neutral-600 tracking-[-0.32px] w-full">복용 완료율</p>
      <Percent />
    </div>
  );
}

function Graph() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative w-full" data-name="Graph">
      <div className="[grid-area:1_/_1] bg-neutral-200 h-[296px] ml-0 mt-0 rounded-[20px] w-[15px]" />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[89px] items-start relative shrink-0 w-[296px]" data-name="Content">
      <Title />
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center leading-[0] relative shrink-0 w-full" style={{ "--transform-inner-width": "296", "--transform-inner-height": "296" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] w-full">
          <Graph />
        </div>
      </div>
    </div>
  );
}

function CompleteProcess() {
  return (
    <div className="absolute bg-[#f9faf8] left-1/2 rounded-[16px] top-[215px] translate-x-[-50%] w-[328px]" data-name="Complete Process">
      <div className="box-border content-stretch flex flex-col gap-[14px] items-start overflow-clip p-[16px] relative rounded-[inherit] w-[328px]">
        <Content1 />
      </div>
      <div aria-hidden="true" className="absolute border border-emerald-500 border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_11px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function IconSetsClose() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon_sets/close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon_sets/close">
          <path d="M12 4L4 12M4 4L12 12" id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Tooltip() {
  return (
    <div className="absolute bg-[rgba(64,64,64,0.9)] box-border content-stretch flex gap-[8px] items-center left-[172px] px-[12px] py-[6px] rounded-[12px] top-[525px]" data-name="Tooltip">
      <p className="font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[16px] relative shrink-0 text-[0px] text-[12px] text-center text-neutral-50 text-nowrap tracking-[-0.24px] whitespace-pre">
        <span>{`첫 기록 시 `}</span>
        <span className="font-['Pretendard_Variable:Bold',_sans-serif] font-bold">50P</span>
        <span>{` 적립!`}</span>
      </p>
      <IconSetsClose />
      <div className="absolute bottom-[28px] flex h-[7px] items-center justify-center left-[calc(50%+52px)] translate-x-[-50%] w-[12px]">
        <div className="flex-none scale-y-[-100%]">
          <div className="h-[7px] relative w-[12px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 7">
              <path d="M6 7L0 1.17772e-06L12 0L6 7Z" fill="var(--fill-0, #404040)" fillOpacity="0.9" id="Polygon 1" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function MdiCalendar() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="mdi:calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="mdi:calendar">
          <path d={svgPaths.p39a70a80} fill="var(--fill-0, #262626)" id="Vector" />
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

function Frame5799() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame5712 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[16px] py-0 relative w-full">
          <Frame5799 />
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
    <div className="[grid-area:1_/_1] bg-[#e6f0ec] box-border content-stretch flex flex-col gap-[10px] items-center justify-center ml-0 mt-0 p-[8px] relative rounded-[99px] size-[32px]">
      <p className="font-['Pretendard_Variable:SemiBold',_sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-center text-emerald-950 text-nowrap whitespace-pre">6</p>
    </div>
  );
}

function Group1000004235() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame5801 />
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[32px]">
        <div className="absolute bottom-0 left-1/2 right-0 top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 32">
            <path d={svgPaths.p26178380} fill="var(--fill-0, #065F46)" id="Ellipse 549" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function WeeklyDate() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center px-[2px] py-[4px] relative rounded-[6px] shrink-0" data-name="weekly_date">
      <Frame427319028 />
      <Group1000004235 />
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

function HorizontalCalendarDate1() {
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
      <div aria-hidden="true" className="absolute border-2 border-emerald-800 border-solid inset-0 pointer-events-none rounded-[99px]" />
      <p className="font-['Pretendard_Variable:SemiBold',_sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-center text-emerald-950 text-nowrap whitespace-pre">8</p>
    </div>
  );
}

function HorizontalCalendarDate2() {
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

function HorizontalCalendarDate3() {
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

function HorizontalCalendarDate4() {
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

function HorizontalCalendarDate5() {
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

function HorizontalCalendarDate6() {
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

function HorizontalCalendarDate7() {
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

function HorizontalCalendarDate8() {
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

function HorizontalCalendarDate9() {
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
      <WeeklyDate />
      <HorizontalCalendarDate1 />
      <HorizontalCalendarDate2 />
      <HorizontalCalendarDate3 />
      <HorizontalCalendarDate4 />
      <HorizontalCalendarDate5 />
      <HorizontalCalendarDate6 />
      <HorizontalCalendarDate7 />
      <HorizontalCalendarDate8 />
      <HorizontalCalendarDate9 />
    </div>
  );
}

function HorizontalCalendarGraph() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[88px] w-[431px]" data-name="Horizontal Calendar Graph">
      <Frame23 />
      <WeeklyCal02 />
    </div>
  );
}

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

function BackButton3() {
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

function BackButton4() {
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
      <BackButton3 />
      <TitleContainer />
      <BackButton4 />
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

export default function Component020301() {
  return (
    <div className="bg-neutral-50 relative size-full" data-name="02루틴케어_03복약_01약추가_성공">
      <RtContent />
      <CompleteProcess />
      <Tooltip />
      <HorizontalCalendarGraph />
      <div className="absolute inset-0 pointer-events-none">
        <StatusBar />
      </div>
      <DetailHeaders />
    </div>
  );
}