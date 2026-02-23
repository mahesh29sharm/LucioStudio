import svgPaths from "./svg-xct8axrdwb";

function Search() {
  return (
    <div className="content-stretch flex h-[50px] items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Search">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#919191] text-[14px]">Ask Anything</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="bg-[#fafafa] content-stretch flex gap-[6px] items-center px-[12px] py-[6px] relative rounded-[9999px] shrink-0" data-name="Chips">
        <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[9999.5px]" />
        <div className="overflow-clip relative shrink-0 size-[14px]" data-name="plus">
          <div className="absolute inset-[20.83%]" data-name="Vector">
            <div className="absolute inset-[-7.14%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
                <path d={svgPaths.p1089000} id="Vector" stroke="var(--stroke-0, #0D0D0D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
              </svg>
            </div>
          </div>
        </div>
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0d0d0d] text-[14px]">Upload</p>
      </div>
      <div className="bg-[#fafafa] content-stretch flex gap-[6px] items-center px-[12px] py-[6px] relative rounded-[9999px] shrink-0" data-name="Chips">
        <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[9999.5px]" />
        <div className="overflow-clip relative shrink-0 size-[14px]" data-name="globe">
          <div className="absolute inset-[8.33%]" data-name="Vector">
            <div className="absolute inset-[-5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
                <path d={svgPaths.p2e08fa80} id="Vector" stroke="var(--stroke-0, #0D0D0D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
              </svg>
            </div>
          </div>
        </div>
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0d0d0d] text-[14px]">Prompt library</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[4.37%_3.24%_3.47%_3.57%]" data-name="Group">
      <div className="absolute inset-[-4.65%_-4.6%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2469 14.1023">
          <g id="Group">
            <path clipRule="evenodd" d={svgPaths.p230d9a00} fillRule="evenodd" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" strokeWidth="1.2" />
            <path clipRule="evenodd" d={svgPaths.p38ab4660} fillRule="evenodd" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" strokeWidth="1.2" />
            <path d={svgPaths.p1357d000} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" strokeWidth="1.2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Send1() {
  return (
    <div className="absolute contents inset-[4.37%_3.24%_3.47%_3.57%]" data-name="Send">
      <Group />
    </div>
  );
}

function Send() {
  return (
    <div className="content-stretch flex flex-col h-[14px] items-start relative shrink-0" data-name="Send">
      <div className="relative shrink-0 size-[14px]" data-name="Icon">
        <Send1 />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex h-[15px] items-center relative shrink-0 w-[13px]">
      <Send />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[rgba(10,24,21,0.32)] content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[50px] shrink-0 size-[32px]">
      <Frame3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="content-stretch flex gap-[4px] items-center justify-center px-[16px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Buttons">
        <div className="overflow-clip relative shrink-0 size-[14px]" data-name="mic">
          <div className="absolute inset-[8.33%_20.83%]" data-name="Vector">
            <div className="absolute inset-[-5.71%_-8.16%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5 13">
                <path d={svgPaths.p30d70140} id="Vector" stroke="var(--stroke-0, #0D0D0D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame4 />
      <Frame2 />
    </div>
  );
}

export default function AssistantChatBoxV() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[4px] items-start justify-center px-[16px] py-[12px] relative rounded-[24px] size-full" data-name="Assistant Chat Box v2">
      <div aria-hidden="true" className="absolute border-[#e7e8ec] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1),0px_0px_8px_0px_rgba(0,0,0,0.05)]" />
      <Search />
      <Frame />
    </div>
  );
}