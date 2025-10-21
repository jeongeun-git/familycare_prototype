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

export default function MealMenuContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full" data-name="Meal Menu Container">
      <MealMenuHeaderContainer />
      <FoodListItem />
      <FoodListItem1 />
    </div>
  );
}