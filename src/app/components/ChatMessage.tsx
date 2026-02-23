import svgPaths from "../../imports/svg-vq4gq15iui";
import { imgGroup, imgGroup1 } from "../../imports/svg-tlkwj";

interface ChatMessageProps {
  message: string;
  timestamp: string;
  type: string;
  files?: number;
}

function Frame15({ timestamp, type, files }: { timestamp: string; type: string; files?: number }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#919191] text-[12px]">{timestamp}</p>
      <div className="relative shrink-0 size-[3px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <circle cx="1.5" cy="1.5" fill="var(--fill-0, #919191)" id="Ellipse 28" r="1.5" />
        </svg>
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#919191] text-[12px]">{type}</p>
      {files && files > 0 && (
        <>
          <div className="relative shrink-0 size-[3px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
              <circle cx="1.5" cy="1.5" fill="var(--fill-0, #919191)" id="Ellipse 28" r="1.5" />
            </svg>
          </div>
        </>
      )}
    </div>
  );
}

function Frame16({ timestamp, type, files }: { timestamp: string; type: string; files?: number }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame15 timestamp={timestamp} type={type} files={files} />
      {files && files > 0 && (
        <div className="bg-[#fafafa] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Chips">
          <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[9999.5px]" />
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#0d0d0d] text-[12px]">{files} files</p>
        </div>
      )}
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[5px] items-center p-[5px] relative shrink-0">
      <div className="h-[13.125px] relative shrink-0 w-[14px]" data-name="Icon">
        <div className="absolute inset-[9.64%_6.25%_7.4%_6.25%]" data-name="Vector">
          <div className="absolute inset-[-5.51%_-4.9%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.45 12.0889">
              <path d={svgPaths.p20fa5e20} id="Vector" stroke="var(--stroke-0, #595959)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Poppins:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#595959] text-[12px]">Rewrite</p>
    </div>
  );
}

function Copy() {
  return (
    <div className="absolute inset-[3.2%_4.56%_3.58%_4.24%]" data-name="Copy">
      <div className="absolute inset-[-3.86%_-4.7%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9683 16.7601">
          <g id="Copy">
            <path d={svgPaths.p2ece4d80} id="Vector" stroke="var(--stroke-0, #595959)" strokeDasharray="2.4 2.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" strokeWidth="1.2" />
            <path clipRule="evenodd" d={svgPaths.p8ee8d00} fillRule="evenodd" id="Vector_2" stroke="var(--stroke-0, #595959)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" strokeWidth="1.2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[5px] items-center p-[5px] relative shrink-0">
      <div className="h-[16.692px] relative shrink-0 w-[14px]" data-name="Icon">
        <Copy />
      </div>
      <p className="font-['Poppins:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#595959] text-[12px]">Copy</p>
    </div>
  );
}

function Copy1() {
  return (
    <div className="absolute inset-[3.2%_4.56%_3.58%_4.24%]" data-name="Copy">
      <div className="absolute inset-[-3.86%_-4.7%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9683 16.7601">
          <g id="Copy">
            <path d={svgPaths.p2ece4d80} id="Vector" stroke="var(--stroke-0, #595959)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" strokeWidth="1.2" />
            <path clipRule="evenodd" d={svgPaths.p8ee8d00} fillRule="evenodd" id="Vector_2" stroke="var(--stroke-0, #595959)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" strokeWidth="1.2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[5px] items-center p-[5px] relative shrink-0">
      <div className="h-[16.692px] relative shrink-0 w-[14px]" data-name="Icon">
        <Copy1 />
      </div>
      <p className="font-['Poppins:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#595959] text-[12px]">Copy Without Links</p>
    </div>
  );
}

function Download() {
  return (
    <div className="absolute inset-[3.03%_2.48%_3.53%_3.32%]" data-name="Download">
      <div className="absolute inset-[-4.66%_-4.55%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3873 14.0637">
          <g id="Download">
            <path d={svgPaths.p14c76140} id="Vector" stroke="var(--stroke-0, #595959)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" strokeWidth="1.2" />
            <path d="M7.36758 0.6V10.683" id="Vector_2" stroke="var(--stroke-0, #595959)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" strokeWidth="1.2" />
            <path d={svgPaths.p19892280} id="Vector_3" stroke="var(--stroke-0, #595959)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" strokeWidth="1.2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[12.5%_22.04%_12.5%_16.86%] mask-position-[-1.349px_-1.75px,_-1.349px_-1.75px]" data-name="Group" style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}')` }}>
      <div className="absolute inset-[-8%_-16.37%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.86567 8.7">
          <g id="Group">
            <path d={svgPaths.p24d6f6c0} id="Vector" stroke="var(--stroke-0, #595959)" strokeLinecap="round" strokeWidth="1.2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Mask group">
      <Group1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <MaskGroup />
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[14px]">
      <div className="flex h-[6px] items-center justify-center relative shrink-0 w-[10px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-[10px] overflow-clip relative w-[6px]" data-name="Icon">
            <ClipPathGroup />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[5px] items-center p-[5px] relative shrink-0">
      <div className="h-[13.767px] relative shrink-0 w-[14px]" data-name="DarkM Icon">
        <Download />
      </div>
      <p className="font-['Poppins:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#595959] text-[12px]">Download</p>
      <Frame14 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative shrink-0">
      <Frame6 />
      <div className="h-[17.5px] relative shrink-0 w-0">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 17.5">
            <path d="M0.5 0V17.5" id="Vector 44" stroke="var(--stroke-0, #919191)" />
          </svg>
        </div>
      </div>
      <Frame5 />
      <div className="h-[17.5px] relative shrink-0 w-0">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 17.5">
            <path d="M0.5 0V17.5" id="Vector 44" stroke="var(--stroke-0, #919191)" />
          </svg>
        </div>
      </div>
      <Frame7 />
      <div className="h-[17.5px] relative shrink-0 w-0">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 17.5">
            <path d="M0.5 0V17.5" id="Vector 44" stroke="var(--stroke-0, #919191)" />
          </svg>
        </div>
      </div>
      <Frame8 />
    </div>
  );
}

function ThumbsUp() {
  return (
    <div className="absolute inset-[1.66%_0.07%_1.48%_-0.07%]" data-name="thumbs-up">
      <div className="absolute inset-[-4.42%_-4.29%_-4.43%_-4.29%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2 14.7605">
          <g id="thumbs-up">
            <path d={svgPaths.p2c7ef540} id="Vector" stroke="var(--stroke-0, #595959)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Complete() {
  return (
    <div className="absolute contents inset-[1.66%_0.07%_1.48%_-0.07%]" data-name="Complete">
      <ThumbsUp />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center overflow-clip p-[5px] relative shrink-0">
      <div className="relative shrink-0 size-[14px]" data-name="Icon">
        <Complete />
      </div>
    </div>
  );
}

function ThumbsDown() {
  return (
    <div className="absolute inset-[1.48%_0.07%_1.66%_-0.07%]" data-name="thumbs-down">
      <div className="absolute inset-[-4.42%_-4.29%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2 14.7604">
          <g id="thumbs-down">
            <path d={svgPaths.p3bf813a0} id="Vector" stroke="var(--stroke-0, #595959)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Complete1() {
  return (
    <div className="absolute contents inset-[1.48%_0.07%_1.66%_-0.07%]" data-name="Complete">
      <ThumbsDown />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center overflow-clip p-[5px] relative shrink-0">
      <div className="relative shrink-0 size-[14px]" data-name="Icon">
        <Complete1 />
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[3.49%_2.97%_3%_3.52%]" data-name="Group">
      <div className="absolute inset-[-4.58%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2921 14.2921">
          <g id="Group">
            <path clipRule="evenodd" d={svgPaths.p23161980} fillRule="evenodd" id="Vector" stroke="var(--stroke-0, #595959)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" strokeWidth="1.2" />
            <path d="M7.10781 2.829V9.23315" id="Vector_2" stroke="var(--stroke-0, #595959)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" strokeWidth="1.2" />
            <path d={svgPaths.p23382680} fill="var(--fill-0, #595959)" id="Vector_3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Report() {
  return (
    <div className="absolute contents inset-[3.49%_2.97%_3%_3.52%]" data-name="Report">
      <Group2 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center overflow-clip p-[5px] relative shrink-0">
      <div className="relative shrink-0 size-[14px]" data-name="Icon">
        <Report />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative shrink-0">
      <Frame9 />
      <div className="h-[17.5px] relative shrink-0 w-0">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 17.5">
            <path d="M0.5 0V17.5" id="Vector 44" stroke="var(--stroke-0, #919191)" />
          </svg>
        </div>
      </div>
      <Frame10 />
      <div className="h-[17.5px] relative shrink-0 w-0">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 17.5">
            <path d="M0.5 0V17.5" id="Vector 44" stroke="var(--stroke-0, #919191)" />
          </svg>
        </div>
      </div>
      <Frame11 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

export default function ChatMessage({ message, timestamp, type, files }: ChatMessageProps) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative w-full">
      <Frame16 timestamp={timestamp} type={type} files={files} />
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px relative rounded-[10px] w-full">
        <div className="content-stretch flex items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
            <div className="w-full whitespace-pre-wrap" style={{ fontFamily: 'Inter, sans-serif', color: 'var(--color-foreground)', fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-regular)', lineHeight: '1.5' }}>
              {message}
            </div>
          </div>
        </div>
        <Frame4 />
      </div>
    </div>
  );
}