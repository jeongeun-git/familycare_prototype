import svgPaths from "./svg-e0y40i4v4w";
import imgImg from "figma:asset/f203d29e3f3fe838a18a8621e839115b96c04798.png";

function Img() {
  return (
    <div className="h-[232px] relative rounded-[8px] w-[172px]" data-name="img">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <div className="absolute bg-white inset-0 rounded-[8px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgImg} />
      </div>
    </div>
  );
}

function PhotoUploadContainer() {
  return (
    <div className="box-border content-stretch flex gap-[16px] h-[296px] items-center justify-center p-[16px] relative rounded-[16px]" data-name="Photo Upload Container">
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "172", "--transform-inner-height": "232" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Img />
        </div>
      </div>
    </div>
  );
}

function MealMenuHeaderContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-center relative shrink-0 w-full" data-name="Meal Menu Header Container">
      <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-neutral-700 tracking-[-0.32px] w-full">
        <p className="font-['Pretendard:Bold',_sans-serif] leading-[24px] text-[16px]">식사 메뉴</p>
      </div>
    </div>
  );
}

function IconBtn() {
  return (
    <div className="h-[16px] relative shrink-0 w-[10px]" data-name="icon_btn">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 16">
        <g id="icon_btn">
          <path d="M2 14L8 8L2 2" id="Vector" stroke="var(--stroke-0, #D4D4D4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function FoodNameContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Food Name Container">
      <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-neutral-700 tracking-[-0.32px] w-[101px]">
        <p className="leading-[22px]">부채살 스테이크</p>
      </div>
      <IconBtn />
    </div>
  );
}

function FoodDetailsContainer() {
  return (
    <div className="content-stretch flex font-['Pretendard:Medium',_sans-serif] gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[14px] text-neutral-400 text-nowrap tracking-[-0.28px]" data-name="Food Details Container">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[20px] text-nowrap whitespace-pre">362 Kcal</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[20px] text-nowrap whitespace-pre">·</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[20px] text-nowrap whitespace-pre">1인분</p>
      </div>
    </div>
  );
}

function FoodInfoContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Food Info Container">
      <FoodNameContainer />
      <FoodDetailsContainer />
    </div>
  );
}

function IconBtn1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon_btn">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon_btn">
          <path d="M12 4L4 12M4 4L12 12" id="Vector" stroke="var(--stroke-0, #FF3B30)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function RemoveFoodButton() {
  return (
    <div className="bg-neutral-100 box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Remove Food Button">
      <IconBtn1 />
    </div>
  );
}

function RemoveFoodContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Remove Food Container">
      <RemoveFoodButton />
    </div>
  );
}

function FoodItemContainer() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Food Item Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[80px] items-center justify-between px-[16px] py-0 relative w-full">
          <FoodInfoContainer />
          <RemoveFoodContainer />
        </div>
      </div>
    </div>
  );
}

function FoodListItem() {
  return (
    <div className="bg-neutral-50 content-stretch flex flex-col items-start relative rounded-[12px] shrink-0 w-full" data-name="food_list_item">
      <FoodItemContainer />
    </div>
  );
}

function IconBtn2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[10px]" data-name="icon_btn">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 16">
        <g id="icon_btn">
          <path d="M2 14L8 8L2 2" id="Vector" stroke="var(--stroke-0, #D4D4D4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function FoodNameContainer1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Food Name Container">
      <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-neutral-700 tracking-[-0.32px] w-[101px]">
        <p className="leading-[22px]">트러플 감자튀김</p>
      </div>
      <IconBtn2 />
    </div>
  );
}

function FoodDetailsContainer1() {
  return (
    <div className="content-stretch flex font-['Pretendard:Medium',_sans-serif] gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[14px] text-neutral-400 text-nowrap tracking-[-0.28px]" data-name="Food Details Container">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[20px] text-nowrap whitespace-pre">362 Kcal</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[20px] text-nowrap whitespace-pre">·</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[20px] text-nowrap whitespace-pre">1인분</p>
      </div>
    </div>
  );
}

function FoodInfoContainer1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Food Info Container">
      <FoodNameContainer1 />
      <FoodDetailsContainer1 />
    </div>
  );
}

function IconBtn3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon_btn">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon_btn">
          <path d="M12 4L4 12M4 4L12 12" id="Vector" stroke="var(--stroke-0, #FF3B30)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function RemoveFoodButton1() {
  return (
    <div className="bg-neutral-100 box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Remove Food Button">
      <IconBtn3 />
    </div>
  );
}

function RemoveFoodContainer1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Remove Food Container">
      <RemoveFoodButton1 />
    </div>
  );
}

function FoodItemContainer1() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Food Item Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[80px] items-center justify-between px-[16px] py-0 relative w-full">
          <FoodInfoContainer1 />
          <RemoveFoodContainer1 />
        </div>
      </div>
    </div>
  );
}

function FoodListItem1() {
  return (
    <div className="bg-neutral-50 content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-[296px]" data-name="food_list_item">
      <FoodItemContainer1 />
    </div>
  );
}

function MealMenuContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[296px]" data-name="Meal Menu Container">
      <MealMenuHeaderContainer />
      <FoodListItem />
      <FoodListItem1 />
    </div>
  );
}

function Pen() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Pen">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Pen">
          <path d={svgPaths.p32f01b00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function MealMenuHeaderContainer1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Meal Menu Header Container">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[0px] text-neutral-500 text-nowrap tracking-[-0.28px]">
        <p className="font-['Pretendard_Variable:Bold',_sans-serif] font-bold leading-[20px] text-[14px] whitespace-pre">직접 입력</p>
      </div>
      <Pen />
    </div>
  );
}

function MealMenuContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Meal Menu Container">
      <MealMenuHeaderContainer1 />
    </div>
  );
}

function MealMenuContainer2() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-[8px] py-0 relative shrink-0 w-[296px]" data-name="Meal Menu Container">
      <MealMenuContainer1 />
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-neutral-400 tracking-[-0.24px] w-[286px]">
        <p className="leading-[16px]">칼로리, 영양성분 기록 없이 음식명만 기록됩니다.</p>
      </div>
    </div>
  );
}

function Frame1000005301() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "264", "--transform-inner-height": "296" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <PhotoUploadContainer />
        </div>
      </div>
      <MealMenuContainer />
      <MealMenuContainer2 />
    </div>
  );
}

function InputRadioSqaureItem() {
  return (
    <div className="[grid-area:1_/_1] bg-neutral-700 relative rounded-[8px] shrink-0" data-name="InputRadioSqaureItem">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[62px] py-[13px] relative size-full">
          <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.28px]">
            <p className="leading-[20px] whitespace-pre">아침</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputRadioSqaureItem1() {
  return (
    <div className="[grid-area:1_/_2] bg-neutral-100 relative rounded-[8px] shrink-0" data-name="InputRadioSqaureItem">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[45px] py-[13px] relative size-full">
          <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-neutral-600 text-nowrap tracking-[-0.28px]">
            <p className="leading-[20px] whitespace-pre">점심</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputRadioSqaureItem2() {
  return (
    <div className="[grid-area:1_/_3] bg-neutral-100 relative rounded-[8px] shrink-0" data-name="InputRadioSqaureItem">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[45px] py-[13px] relative size-full">
          <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-neutral-600 text-nowrap tracking-[-0.28px]">
            <p className="leading-[20px] whitespace-pre">저녁</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputRadioSqaureItem3() {
  return (
    <div className="[grid-area:2_/_1] bg-neutral-100 relative rounded-[8px] shrink-0" data-name="InputRadioSqaureItem">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[45px] py-[13px] relative size-full">
          <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-neutral-600 text-nowrap tracking-[-0.28px]">
            <p className="leading-[20px] whitespace-pre">간식</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputRadioSqaureItem4() {
  return (
    <div className="[grid-area:2_/_2] bg-neutral-100 relative rounded-[8px] shrink-0" data-name="InputRadioSqaureItem">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[45px] py-[13px] relative size-full">
          <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-neutral-600 text-nowrap tracking-[-0.28px]">
            <p className="leading-[20px] whitespace-pre">야식</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputRadioSqaureItem5() {
  return (
    <div className="[grid-area:2_/_3] bg-neutral-100 relative rounded-[8px] shrink-0" data-name="InputRadioSqaureItem">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[45px] py-[13px] relative size-full">
          <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-neutral-600 text-nowrap tracking-[-0.28px]">
            <p className="leading-[20px] whitespace-pre">기타</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function EatingTimeContainer() {
  return (
    <div className="gap-[8px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[96px] relative shrink-0 w-[296px]" data-name="Eating_time_container">
      <InputRadioSqaureItem />
      <InputRadioSqaureItem1 />
      <InputRadioSqaureItem2 />
      <InputRadioSqaureItem3 />
      <InputRadioSqaureItem4 />
      <InputRadioSqaureItem5 />
    </div>
  );
}

function Frame1000005300() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[0px] text-neutral-700 tracking-[-0.32px] w-[min-content]">
        <p className="font-['Pretendard:Bold',_sans-serif] leading-[24px] text-[16px]">끼니 선택</p>
      </div>
      <EatingTimeContainer />
    </div>
  );
}

function MealTimeHeaderContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-center relative shrink-0 w-full" data-name="Meal Time Header Container">
      <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-neutral-700 tracking-[-0.32px] w-full">
        <p className="font-['Pretendard:Bold',_sans-serif] leading-[24px] text-[16px]">식사 시간</p>
      </div>
    </div>
  );
}

function MealTimeChevron() {
  return (
    <div className="relative size-[24px]" data-name="Meal Time Chevron">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Meal Time Chevron">
          <path d="M9 18L15 12L9 6" id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function MealTimeSelectionContainer() {
  return (
    <div className="opacity-80 relative rounded-[12px] shrink-0 w-full" data-name="Meal Time Selection Container">
      <div aria-hidden="true" className="absolute border border-neutral-100 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[16px] relative w-full">
          <p className="font-['Pretendard:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-700 text-nowrap tracking-[-0.32px] whitespace-pre">오전 12:30</p>
          <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "24", "--transform-inner-height": "24" } as React.CSSProperties}>
            <div className="flex-none rotate-[90deg]">
              <MealTimeChevron />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MealTimeContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[88px] items-start relative shrink-0 w-[296px]" data-name="Meal Time Container">
      <MealTimeHeaderContainer />
      <MealTimeSelectionContainer />
    </div>
  );
}

function RecordCommentHeaderContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-center relative shrink-0 w-full" data-name="Record Comment Header Container">
      <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-neutral-700 tracking-[-0.32px] w-full">
        <p className="font-['Pretendard:Bold',_sans-serif] leading-[24px] text-[16px]">기록 한마디</p>
      </div>
    </div>
  );
}

function Frame1000004622() {
  return (
    <div className="h-[104px] relative rounded-[12px] shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[104px] items-start p-[16px] relative w-full">
          <p className="font-['Pretendard_Variable:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-neutral-400 text-nowrap tracking-[-0.28px] whitespace-pre">오늘 식사 어떠셨나요? 기록 한마디를 남겨보세요!</p>
        </div>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative rounded-[12px] shrink-0 w-[296px]" data-name="Textarea">
      <div aria-hidden="true" className="absolute border border-neutral-100 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame1000004622 />
    </div>
  );
}

function RecordCommentContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Record Comment Container">
      <RecordCommentHeaderContainer />
      <Textarea />
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Content Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[16px] relative w-full">
          <Frame1000005301 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(229, 229, 229, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 296 1">
                <line id="Line 172" stroke="var(--stroke-0, #E5E5E5)" x2="296" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <Frame1000005300 />
          <MealTimeContainer />
          <RecordCommentContainer />
        </div>
      </div>
    </div>
  );
}

function PointsInfoIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Points Info Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_19_862)" id="Points Info Icon">
          <path d={svgPaths.p3b51300} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_19_862">
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
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[0px] text-neutral-500 tracking-[-0.28px] w-[227px]">
        <p className="font-['Pretendard_Variable:Bold',_sans-serif] font-bold leading-[20px] text-[14px]">포인트 적립 안내</p>
      </div>
    </div>
  );
}

function PointsInfoContainer() {
  return (
    <div className="bg-[#f2f5ed] box-border content-stretch flex flex-col gap-[4px] items-start p-[16px] relative rounded-[16px] shrink-0 w-[328px]" data-name="Points Info Container">
      <PointsInfoHeaderContainer />
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-neutral-500 tracking-[-0.28px] w-full">
        <p className="leading-[20px]">포인트는 하루 최초 기록에만 지급되며, 이후 기록은 포인트 적립 없이 저장됩니다.</p>
      </div>
    </div>
  );
}

function MainContainer() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-center left-1/2 top-[146px] translate-x-[-50%] w-[328px]" data-name="Main Container">
      <ContentContainer />
      <PointsInfoContainer />
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
    <div className="bg-white h-[48px] relative shadow-[0px_4px_11px_0px_rgba(232,232,232,0.2)] shrink-0 w-full" data-name="DetailHeaders">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[48px] items-start px-[16px] py-[8px] relative w-full">
          <HeaderContainer />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[360px]" data-name="Header">
      <StatusBar />
      <DetailHeaders />
    </div>
  );
}

function PointsValueContainer() {
  return (
    <div className="bg-emerald-900 box-border content-stretch flex gap-[7px] items-center px-[8px] py-[4px] relative rounded-[999px] shrink-0" data-name="Points Value Container">
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[0px] text-nowrap text-white tracking-[-0.24px]">
        <p className="font-['Pretendard_Variable:Bold',_sans-serif] font-bold leading-[16px] text-[12px] whitespace-pre">+ 50P</p>
      </div>
    </div>
  );
}

function Frame1000005296() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[16px] top-[104px] w-[328px]">
      <PointsValueContainer />
      <div className="flex flex-col font-['Pretendard_Variable:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-neutral-700 text-nowrap tracking-[-0.28px]">
        <p className="leading-[20px] whitespace-pre">오늘 첫 기록 시 적립!</p>
      </div>
    </div>
  );
}

function BtnTit() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="btn_tit">
      <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.32px]">
        <p className="leading-[24px] whitespace-pre">기록하기</p>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="bg-gradient-to-b from-[#2cd5a5] h-[48px] relative rounded-[12px] shrink-0 to-[#56d284] via-50% via-[#41d395] w-full" data-name="Buttons">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[48px] items-center justify-center px-[20px] py-[8px] relative w-full">
          <BtnTit />
        </div>
      </div>
    </div>
  );
}

function BottomButtons() {
  return (
    <div className="absolute bg-white bottom-0 box-border content-stretch flex flex-col gap-[10px] items-start justify-center left-1/2 overflow-clip p-[16px] translate-x-[-50%] w-[360px]" data-name="Bottom Buttons">
      <Buttons />
    </div>
  );
}

export default function Component020201() {
  return (
    <div className="bg-neutral-50 relative size-full" data-name="02루틴케어_02식단_01식단기록_사진추가">
      <MainContainer />
      <Header />
      <Frame1000005296 />
      <BottomButtons />
    </div>
  );
}