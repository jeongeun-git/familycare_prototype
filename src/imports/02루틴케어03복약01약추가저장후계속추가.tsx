import svgPaths from "./svg-agmrh24ixd";

function Frame1000004644() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-neutral-700 tracking-[-0.32px] w-full">
        <p className="font-['Pretendard:Bold',_sans-serif] leading-[24px] text-[16px]">약물명</p>
      </div>
    </div>
  );
}

function InputField() {
  return (
    <div className="box-border content-stretch flex flex-col h-[48px] items-start justify-center px-[12px] py-[16px] relative shrink-0 w-[296px]" data-name="InputField">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-neutral-300 border-solid inset-0 pointer-events-none" />
      <p className="font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-neutral-400 text-nowrap tracking-[-0.28px] whitespace-pre">ex) 고혈압 약</p>
    </div>
  );
}

function Frame1000005103() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame1000004644 />
      <InputField />
    </div>
  );
}

function DaysOption() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[296px]" data-name="Days Option">
      <p className="font-['Pretendard:Bold',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-700 text-nowrap tracking-[-0.32px] whitespace-pre">복용 주기</p>
    </div>
  );
}

function CircleIconSets() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[99px] shrink-0 w-full" data-name="circle_icon_sets">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[2px] relative size-full">
          <div className="h-[2px] relative shrink-0 w-[11px]" data-name="Line 22 (Stroke)">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 2">
              <path d={svgPaths.p1b5c3f00} fill="var(--fill-0, #E5E5E5)" id="Line 22 (Stroke)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconBtn() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[2px] relative shrink-0 size-[30px]" data-name="icon_btn">
      <CircleIconSets />
    </div>
  );
}

function Component2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 2">
          <path d={svgPaths.p196ef80} fill="var(--fill-0, #022C22)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function CircleIconSets1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative rounded-[99px] shrink-0" data-name="circle_icon_sets">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[2px] relative size-full">
          <Component2 />
        </div>
      </div>
    </div>
  );
}

function IconBtn1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[2px] relative shrink-0 size-[30px]" data-name="icon_btn">
      <CircleIconSets1 />
    </div>
  );
}

function Frame1000004553() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <IconBtn />
      <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-neutral-700 text-nowrap tracking-[-0.32px]">
        <p className="font-['Pretendard:Bold',_sans-serif] leading-[24px] text-[16px] whitespace-pre">1번</p>
      </div>
      <IconBtn1 />
    </div>
  );
}

function InputQuantityItem() {
  return (
    <div className="h-[48px] relative rounded-[12px] shrink-0 w-full" data-name="input_quantity_item">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col h-[48px] items-center justify-between p-[8px] relative w-full">
          <Frame1000004553 />
        </div>
      </div>
    </div>
  );
}

function Minus() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="minus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="minus">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Frame1000005095() {
  return (
    <div className="bg-neutral-300 box-border content-stretch flex items-center p-[2px] relative rounded-[9999px] shrink-0">
      <Minus />
    </div>
  );
}

function Frame1000005059() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center p-[2px] relative shrink-0">
      <Frame1000005095 />
    </div>
  );
}

function InputField1() {
  return (
    <div className="basis-0 bg-neutral-50 grow h-[48px] min-h-px min-w-px relative shrink-0" data-name="InputField">
      <div className="flex flex-col items-end justify-center size-full">
        <div className="box-border content-stretch flex flex-col h-[48px] items-end justify-center p-[16px] relative w-full">
          <p className="font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-neutral-700 text-nowrap tracking-[-0.28px] whitespace-pre">오전 8:00</p>
        </div>
      </div>
    </div>
  );
}

function Frame1000005092() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame1000005059 />
      <InputField1 />
    </div>
  );
}

function Frame1000005085() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[296px]">
      <Frame1000005092 />
    </div>
  );
}

function Frame1000005099() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[296px]">
      <p className="font-['Pretendard:Bold',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-700 text-nowrap tracking-[-0.32px] whitespace-pre">하루 복용 횟수</p>
      <InputQuantityItem />
      <Frame1000005085 />
    </div>
  );
}

function Frame1000004645() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-neutral-700 tracking-[-0.32px] w-full">
        <p className="font-['Pretendard:Bold',_sans-serif] leading-[24px] text-[16px]">1회 복용량</p>
      </div>
    </div>
  );
}

function CircleIconSets2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[99px] shrink-0 w-full" data-name="circle_icon_sets">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[2px] relative size-full">
          <div className="h-[2px] relative shrink-0 w-[11px]" data-name="Line 22 (Stroke)">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 2">
              <path d={svgPaths.p1b5c3f00} fill="var(--fill-0, #E5E5E5)" id="Line 22 (Stroke)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconBtn2() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[2px] relative shrink-0 size-[30px]" data-name="icon_btn">
      <CircleIconSets2 />
    </div>
  );
}

function Component3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 2">
          <path d={svgPaths.p196ef80} fill="var(--fill-0, #022C22)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function CircleIconSets3() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative rounded-[99px] shrink-0" data-name="circle_icon_sets">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[2px] relative size-full">
          <Component3 />
        </div>
      </div>
    </div>
  );
}

function IconBtn3() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[2px] relative shrink-0 size-[30px]" data-name="icon_btn">
      <CircleIconSets3 />
    </div>
  );
}

function Frame1000004554() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <IconBtn2 />
      <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-neutral-700 text-nowrap tracking-[-0.32px]">
        <p className="font-['Pretendard:Bold',_sans-serif] leading-[24px] text-[16px] whitespace-pre">1</p>
      </div>
      <IconBtn3 />
    </div>
  );
}

function InputQuantityItem1() {
  return (
    <div className="h-[48px] relative rounded-[12px] shrink-0 w-full" data-name="input_quantity_item">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col h-[48px] items-center justify-between p-[8px] relative w-full">
          <Frame1000004554 />
        </div>
      </div>
    </div>
  );
}

function TabChips() {
  return (
    <div className="basis-0 bg-neutral-700 grow h-[40px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="tab_chips">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center justify-center px-[12px] py-[4px] relative w-full">
          <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-neutral-50 text-nowrap tracking-[-0.28px]">
            <p className="leading-[20px] text-[14px] whitespace-pre">캡슐</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TabChips1() {
  return (
    <div className="basis-0 bg-neutral-100 grow h-[40px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="tab_chips">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center justify-center px-[12px] py-[4px] relative w-full">
          <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-neutral-700 text-nowrap tracking-[-0.28px]">
            <p className="leading-[20px] whitespace-pre">정</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TabChips2() {
  return (
    <div className="basis-0 bg-neutral-100 grow h-[40px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="tab_chips">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center justify-center px-[12px] py-[4px] relative w-full">
          <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-neutral-700 text-nowrap tracking-[-0.28px]">
            <p className="leading-[20px] whitespace-pre">ml</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1000004555() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <TabChips />
      <TabChips1 />
      <TabChips2 />
    </div>
  );
}

function Frame1000005060() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame1000004645 />
      <InputQuantityItem1 />
      <Frame1000004555 />
    </div>
  );
}

function Frame1000004646() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-neutral-700 tracking-[-0.32px] w-full">
        <p className="font-['Pretendard:Bold',_sans-serif] leading-[24px] text-[16px]">메모 (선택)</p>
      </div>
    </div>
  );
}

function Frame1000004622() {
  return (
    <div className="h-[104px] relative rounded-[12px] shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[104px] items-start p-[16px] relative w-full">
          <p className="font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-neutral-400 text-nowrap tracking-[-0.28px] whitespace-pre">특이사항이 있다면 입력해주세요.</p>
        </div>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative rounded-[12px] shrink-0 w-full" data-name="Textarea">
      <div aria-hidden="true" className="absolute border border-neutral-100 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame1000004622 />
    </div>
  );
}

function Frame1000005102() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame1000004646 />
      <Textarea />
    </div>
  );
}

function Frame1000004135() {
  return (
    <div className="bg-white relative rounded-[16px] shadow-[0px_4px_11px_0px_rgba(0,0,0,0.04)] shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[16px] relative w-full">
          <Frame1000005103 />
          <DaysOption />
          <Frame1000005099 />
          <Frame1000005060 />
          <Frame1000005102 />
        </div>
      </div>
    </div>
  );
}

function IconSetsIconBellFill() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon_sets/icon_bell_fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon_sets/icon_bell_fill">
          <path d={svgPaths.p24c3f000} fill="var(--fill-0, #FACC15)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1000004336() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <IconSetsIconBellFill />
      <p className="font-['Pretendard:Bold',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-700 text-nowrap tracking-[-0.32px] whitespace-pre">알림 받기</p>
    </div>
  );
}

function Frame1000004331() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <Frame1000004336 />
      <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-neutral-400 tracking-[-0.28px] w-full">
        <p className="leading-[20px]">복용 시간에 맞춰 알림 드릴께요!</p>
      </div>
    </div>
  );
}

function Frame1000004608() {
  return <div className="absolute aspect-[22/22] bg-white box-border content-stretch flex flex-col gap-[10px] items-center justify-center left-[42.1%] px-[3px] py-[4px] right-[2.63%] rounded-[99px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.13)] top-1/2 translate-y-[-50%]" />;
}

function Toggle() {
  return (
    <div className="h-[23px] relative shrink-0 w-[38px]" data-name="Toggle">
      <div className="absolute bg-emerald-900 inset-0 rounded-[30px]" />
      <Frame1000004608 />
    </div>
  );
}

function Frame1000004332() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame1000004331 />
      <Toggle />
    </div>
  );
}

function NotificationEdit() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[16px] relative rounded-[16px] shadow-[0px_4px_11px_0px_rgba(0,0,0,0.04)] shrink-0 w-[328px]" data-name="notification_edit">
      <Frame1000004332 />
    </div>
  );
}

function Frame1000004976() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-1/2 top-[104px] translate-x-[-50%] w-[328px]">
      <Frame1000004135 />
      <NotificationEdit />
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
    <div className="bg-white h-[40px] shrink-0 sticky top-0 w-full" data-name="status_bar">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[40px] items-center justify-between px-[24px] py-[10px] relative w-full">
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
        <p className="leading-[22px] whitespace-pre">내 약 추가</p>
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
    <div className="bg-white h-[48px] relative shadow-[0px_4px_11px_0px_rgba(232,232,232,0.2)] shrink-0 w-full" data-name="DetailHeaders">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[48px] items-start px-[16px] py-[8px] relative w-full">
          <HeaderContainer />
        </div>
      </div>
    </div>
  );
}

function Frame1000005249() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-1/2 top-0 translate-x-[-50%] w-[360px]">
      <StatusBar />
      <DetailHeaders />
    </div>
  );
}

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

function IconBtn4() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[2px] relative shrink-0 size-[24px]" data-name="icon_btn">
      <IconSetsCheck />
    </div>
  );
}

function Frame427318957() {
  return (
    <div className="content-stretch flex font-['Pretendard_Variable:Medium',_sans-serif] font-medium items-center leading-[20px] relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.28px] whitespace-pre">
      <p className="relative shrink-0">추가</p>
      <p className="relative shrink-0">되었어요</p>
    </div>
  );
}

function Frame427318956() {
  return (
    <div className="content-stretch flex gap-[4px] items-start justify-center relative shrink-0">
      <p className="font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.28px] whitespace-pre">{`약이 `}</p>
      <Frame427318957 />
    </div>
  );
}

function ToastMessage() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.6)] box-border content-stretch flex gap-[8px] h-[48px] items-center left-1/2 px-[16px] py-0 rounded-[999px] top-[918px] translate-x-[-50%]" data-name="Toast Message">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <IconBtn4 />
      <Frame427318956 />
    </div>
  );
}

function StreamlineDelete1() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="streamline:delete-1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_28_2104)" id="streamline:delete-1">
          <path d={svgPaths.p6719c00} id="Vector" stroke="var(--stroke-0, #464646)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_28_2104">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function AddItem() {
  return (
    <div className="bg-[#e0f0e9] box-border content-stretch flex gap-[10px] h-[34px] items-center justify-center px-[16px] py-[6px] relative rounded-[12px] shrink-0" data-name="Add Item">
      <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#464646] text-[14px] text-nowrap tracking-[-0.28px]">
        <p className="leading-[20px] whitespace-pre">비타민</p>
      </div>
      <StreamlineDelete1 />
    </div>
  );
}

function AddList() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[328px]" data-name="Add List">
      <AddItem />
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

function BottomButtonsAdd() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-center left-0 pb-0 pt-[16px] px-0 top-[950px] w-[360px]" data-name="Bottom Buttons Add">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
      <AddList />
      <BottomButtons />
    </div>
  );
}

export default function Component020301() {
  return (
    <div className="bg-neutral-50 relative size-full" data-name="02루틴케어_03복약_01약추가_저장후계속추가">
      <Frame1000004976 />
      <Frame1000005249 />
      <ToastMessage />
      <BottomButtonsAdd />
    </div>
  );
}