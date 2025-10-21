function TitleAndControls() {
  return (
    <div className="content-stretch flex font-['Pretendard:Bold',_sans-serif] items-center justify-between not-italic relative shrink-0 text-center text-nowrap w-full whitespace-pre" data-name="Title and Controls">
      <p className="leading-[26px] relative shrink-0 text-[20px] text-neutral-800 tracking-[-0.4px]">시간 선택</p>
      <p className="leading-[22px] relative shrink-0 text-[16px] text-emerald-500 tracking-[-0.32px]">저장</p>
    </div>
  );
}

function Toobar() {
  return (
    <div className="relative shrink-0 w-full" data-name="Toobar">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col items-center pb-[10px] pt-0 px-[16px] relative w-full">
          <TitleAndControls />
        </div>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[100.5px] mt-0 place-items-start relative" data-name="시">
      <div className="[grid-area:1_/_1] flex h-[calc(1px*((var(--transform-inner-width)*0)+(var(--transform-inner-height)*0.5039999485015869)))] items-center justify-center ml-[11.5px] mt-[129.056px] relative translate-x-[-50%] translate-y-[-50%]" style={{ "--transform-inner-width": "19.984375", "--transform-inner-height": "27.984375" } as React.CSSProperties}>
        <div className="flex-none scale-y-[50.4%]">
          <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] not-italic relative text-[18px] text-center text-neutral-500 text-nowrap">
            <p className="leading-[28px] whitespace-pre">11</p>
          </div>
        </div>
      </div>
      <div className="[grid-area:1_/_1] flex h-[calc(1px*((var(--transform-inner-width)*0)+(var(--transform-inner-height)*0.7199999690055847)))] items-center justify-center ml-[12px] mt-[101.08px] relative translate-x-[-50%] translate-y-[-50%]" style={{ "--transform-inner-width": "19.984375", "--transform-inner-height": "27.984375" } as React.CSSProperties}>
        <div className="flex-none scale-y-[72%]">
          <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] not-italic relative text-[18px] text-center text-neutral-500 text-nowrap">
            <p className="leading-[28px] whitespace-pre">10</p>
          </div>
        </div>
      </div>
      <div className="[grid-area:1_/_1] flex h-[calc(1px*((var(--transform-inner-width)*0)+(var(--transform-inner-height)*0.7199999690055847)))] items-center justify-center ml-[24px] mt-[30px] relative translate-x-[-100%] translate-y-[-50%] w-[24px]" style={{ "--transform-inner-width": "23.984375", "--transform-inner-height": "16.65625" } as React.CSSProperties}>
        <div className="flex-none scale-y-[72%]">
          <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] h-[16.667px] justify-center leading-[0] not-italic relative text-[18px] text-neutral-400 text-right w-[24px]">
            <p className="leading-[28px]">06</p>
          </div>
        </div>
      </div>
      <div className="[grid-area:1_/_1] flex h-[calc(1px*((var(--transform-inner-width)*0)+(var(--transform-inner-height)*0.5039999485015869)))] items-center justify-center ml-[24px] mt-[4px] relative translate-x-[-100%] translate-y-[-50%] w-[24px]" style={{ "--transform-inner-width": "23.984375", "--transform-inner-height": "15.859375" } as React.CSSProperties}>
        <div className="flex-none scale-y-[50.4%]">
          <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] h-[15.873px] justify-center leading-[0] not-italic relative text-[18px] text-neutral-400 text-right w-[24px]">
            <p className="leading-[28px]">05</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[159.5px] mt-0 place-items-start relative" data-name="분">
      <div className="[grid-area:1_/_1] flex h-[calc(1px*((var(--transform-inner-width)*0)+(var(--transform-inner-height)*0.5039999485015869)))] items-center justify-center ml-[16.304px] mt-[129px] relative translate-x-[-50%] translate-y-[-50%] w-[32.609px]" style={{ "--transform-inner-width": "32.59375", "--transform-inner-height": "15.859375" } as React.CSSProperties}>
        <div className="flex-none scale-y-[50.4%]">
          <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] h-[15.873px] justify-center leading-[0] not-italic relative text-[18px] text-center text-neutral-500 w-[32.609px]">
            <p className="leading-[28px]">03</p>
          </div>
        </div>
      </div>
      <div className="[grid-area:1_/_1] flex h-[calc(1px*((var(--transform-inner-width)*0)+(var(--transform-inner-height)*0.7199999690055847)))] items-center justify-center ml-[17px] mt-[102.76px] relative translate-x-[-50%] translate-y-[-50%]" style={{ "--transform-inner-width": "19.984375", "--transform-inner-height": "27.984375" } as React.CSSProperties}>
        <div className="flex-none scale-y-[72%]">
          <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] not-italic relative text-[18px] text-center text-neutral-500 text-nowrap">
            <p className="leading-[28px] whitespace-pre">02</p>
          </div>
        </div>
      </div>
      <div className="[grid-area:1_/_1] flex h-[calc(1px*((var(--transform-inner-width)*0)+(var(--transform-inner-height)*0.7199999690055847)))] items-center justify-center ml-[16.304px] mt-[30px] relative translate-x-[-50%] translate-y-[-50%] w-[32.609px]" style={{ "--transform-inner-width": "32.59375", "--transform-inner-height": "16.65625" } as React.CSSProperties}>
        <div className="flex-none scale-y-[72%]">
          <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] h-[16.667px] justify-center leading-[0] not-italic relative text-[18px] text-center text-neutral-400 w-[32.609px]">
            <p className="leading-[28px]">58</p>
          </div>
        </div>
      </div>
      <div className="[grid-area:1_/_1] flex h-[calc(1px*((var(--transform-inner-width)*0)+(var(--transform-inner-height)*0.5039999485015869)))] items-center justify-center ml-[16.761px] mt-[4px] relative translate-x-[-50%] translate-y-[-50%] w-[31.522px]" style={{ "--transform-inner-width": "31.5", "--transform-inner-height": "15.859375" } as React.CSSProperties}>
        <div className="flex-none scale-y-[50.4%]">
          <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] h-[15.873px] justify-center leading-[0] not-italic relative text-[18px] text-center text-neutral-400 w-[31.522px]">
            <p className="leading-[28px]">57</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="[grid-area:1_/_1] bg-[rgba(52,211,153,0.12)] box-border content-stretch flex font-['Pretendard:Medium',_sans-serif] gap-[15px] h-[36px] items-center justify-center ml-0 mt-[49px] not-italic px-[15px] py-px relative rounded-[7px] text-[18px] text-neutral-700 w-[329px]" data-name="선택">
      <div className="flex flex-col justify-center relative shrink-0 text-center w-[34px]">
        <p className="leading-[28px]">08</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-center text-nowrap">
        <p className="leading-[28px] whitespace-pre">:</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-center text-nowrap">
        <p className="leading-[28px] whitespace-pre">00</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-nowrap">
        <p className="leading-[28px] whitespace-pre">오전</p>
      </div>
    </div>
  );
}

function Group1000004080() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Component />
      <Component1 />
      <Component2 />
      <div className="[grid-area:1_/_1] flex h-[calc(1px*((var(--transform-inner-width)*0)+(var(--transform-inner-height)*0.7199999690055847)))] items-center justify-center ml-[218px] mt-[30px] relative translate-x-[-50%] translate-y-[-50%] w-[42px]" style={{ "--transform-inner-width": "41.984375", "--transform-inner-height": "16.65625" } as React.CSSProperties}>
        <div className="flex-none scale-y-[72%]">
          <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] h-[16.667px] justify-center leading-[0] not-italic relative text-[18px] text-center text-neutral-400 w-[42px]">
            <p className="leading-[28px]">오후</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame427318992() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative w-full">
          <Group1000004080 />
        </div>
      </div>
    </div>
  );
}

function Frame1000004558() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] h-[152px] items-start pb-[24px] pt-0 px-0 relative shrink-0 w-full">
      <Frame427318992 />
    </div>
  );
}

function Frame1000004559() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] items-start px-[16px] py-0 relative shrink-0 w-[360px]">
      <Frame1000004558 />
    </div>
  );
}

function BottomsheetItem() {
  return (
    <div className="absolute bg-white bottom-0 box-border content-stretch flex flex-col items-center left-1/2 overflow-clip px-0 py-[16px] rounded-tl-[24px] rounded-tr-[24px] translate-x-[-50%] w-[360px]" data-name="bottomsheet_item">
      <Toobar />
      <Frame1000004559 />
    </div>
  );
}

export default function TimePicker() {
  return (
    <div className="bg-[rgba(0,0,0,0.2)] relative size-full" data-name="TimePicker">
      <BottomsheetItem />
    </div>
  );
}