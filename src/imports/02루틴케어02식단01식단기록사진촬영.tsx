import svgPaths from "./svg-qeju4wu5yf";
import imgFrame1000004799 from "figma:asset/f203d29e3f3fe838a18a8621e839115b96c04798.png";

function Frame1000004799() {
  return (
    <div className="absolute h-[640px] left-0 top-0 w-[360px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-white inset-0" />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[5.281e_9%] left-[-1.74e_10%] max-w-none top-[-6.01e_8%] w-[1.761e_10%]" src={imgFrame1000004799} />
        </div>
      </div>
    </div>
  );
}

function IconGallery() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon_gallery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon_gallery">
          <path d={svgPaths.p11d16a80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1b53d300} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1c7c380} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconGallery1() {
  return (
    <div className="bg-[rgba(179,179,179,0.5)] box-border content-stretch flex gap-[10px] items-center p-[12px] relative rounded-[24px] shrink-0 size-[48px]" data-name="icon+gallery">
      <IconGallery />
    </div>
  );
}

function CameraBtn() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="camera_btn">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="camera_btn">
          <circle cx="30" cy="30" fill="var(--fill-0, white)" id="Ellipse 465" r="25" />
          <circle cx="30" cy="30" id="Ellipse 466" r="29.5" stroke="var(--stroke-0, white)" />
        </g>
      </svg>
    </div>
  );
}

function Frame1000005241() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[35px] top-[510px] w-[175px]">
      <IconGallery1 />
      <CameraBtn />
    </div>
  );
}

function Back() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="back">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="back">
          <path d={svgPaths.p2d3a7c20} id="Vector 40" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Title() {
  return <div className="content-stretch flex gap-[11px] items-center justify-center shrink-0 w-[91px]" data-name="title" />;
}

function Bin() {
  return <div className="shrink-0 size-[24px]" data-name="bin" />;
}

function HeaderContent() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="header_content">
      <Back />
      <Title />
      <Bin />
    </div>
  );
}

function DetailHeaders() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[48px] items-start justify-center overflow-clip pointer-events-auto px-[16px] py-[8px] shadow-[0px_4px_11px_0px_rgba(232,232,232,0.2)] sticky top-0 translate-x-[-50%] w-[360px]" data-name="detail_headers">
      <HeaderContent />
    </div>
  );
}

export default function Component020201() {
  return (
    <div className="bg-black relative size-full" data-name="02루틴케어_02식단_01식단기록_사진촬영">
      <Frame1000004799 />
      <div className="absolute h-[640px] left-1/2 top-0 translate-x-[-50%] w-[360px]" data-name="Subtract">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 640">
          <path d={svgPaths.pcf64b00} fill="var(--fill-0, black)" fillOpacity="0.7" id="Subtract" />
        </svg>
      </div>
      <Frame1000005241 />
      <div className="absolute flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] left-[calc(50%-111px)] not-italic text-[0px] text-neutral-50 text-nowrap top-[137px] tracking-[-0.28px] translate-y-[-50%]">
        <p className="font-['Pretendard:Bold',_sans-serif] leading-[20px] text-[14px] whitespace-pre">사진 촬영 혹은 앨범 사진을 선택 해주세요.</p>
      </div>
      <div className="absolute bottom-0 left-1/2 pointer-events-none top-0">
        <DetailHeaders />
      </div>
    </div>
  );
}