import type { CSSProperties } from "react";
import svgPaths from "./svg-nby02nlaqg";
import imgFrame17 from "/assets/5e9207bcb735441d972e642ef3dc91e8c03e307c.png";
import imgFrame22 from "/assets/f23eb893348f59a0eef3df0739393d997b419cfd.png";
import imgHero from "/assets/857ca1a3aac5701949e3af6a86e751253a0af20c.png";
import imgImagw from "/assets/aeb2717050b8a016c376bef2963b717132266221.png";
import imgImagw1 from "/assets/c7c1437d32e5d96d914055f2258eadea8b0ce7b9.png";
import imgImagw2 from "/assets/c6eb38dcd73fc74b02ab1fd906ac1e453ac4d4b3.png";
import imgImagw3 from "/assets/f63e52b8f45122222e1f17960c3a1dc6854bd58a.png";
import imgImagw4 from "/assets/72f66d3e7acb92eb92c527dd49faafdec13db680.png";
import imgImagw5 from "/assets/287162d3326dca5991c0757aaed3696b8bcf2b7f.png";
import imgFrame23 from "/assets/966bdcc20de9d1146da18068833210d399cd593e.png";
import imgFrame24 from "/assets/9e03314b6be949db4da5ca3cd5c60d680034189d.png";
import imgFrame25 from "/assets/d0400c167c2b5599f72e19a01b70f51fb477fb65.png";
import { imgGroup } from "./svg-q563e";

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-center justify-start max-w-[700px] relative shrink-0 w-full" data-name="text">
      <div className="flex flex-col font-['Newsreader:Bold',_sans-serif] font-bold justify-center leading-[77px] relative shrink-0 text-[#ffffff] text-[64px] w-full">
        <p className="mb-0">Agents. Tours.</p>
        <p>Loans. Homes.</p>
      </div>
    </div>
  );
}

function InputField() {
  return (
    <div className="content-stretch flex flex-col gap-3 h-9 items-start justify-start relative shrink-0 w-[482px]" data-name="Input field">
      <div className="flex flex-col font-['Newsreader:Regular',_sans-serif] font-normal h-9 justify-center leading-[0] relative shrink-0 text-[#6c757d] text-[24px] w-full">
        <p className="leading-[normal]">Enter an address, neighborhood, city, or ZIP code</p>
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="h-9 relative shrink-0 w-[38px]" data-name="Search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 36">
        <g clipPath="url(#clip0_1_1319)" id="Search">
          <g id="Vector"></g>
          <path d={svgPaths.p3b03e900} fill="var(--fill-0, #0B3557)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1319">
            <rect fill="white" height="36" width="38" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Search1() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex items-center justify-between max-w-[1350px] px-6 py-[23px] relative rounded-[15px] shrink-0 w-[592px]" data-name="Search">
      <InputField />
      <Search />
    </div>
  );
}

function Content() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[83px] h-[510px] items-start justify-center left-0.5 px-40 py-0 right-[-2px] translate-y-[-50%]" data-name="Content" style={{ top: "calc(50% + 43px)" }}>
      <Text />
      <Search1 />
    </div>
  );
}

function PageLink1() {
  return (
    <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0" data-name="pageLink1">
      <div className="font-['Newsreader:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[15px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Buy</p>
      </div>
    </div>
  );
}

function PageLink3() {
  return (
    <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0" data-name="pageLink3">
      <div className="font-['Newsreader:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[15px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Sell</p>
      </div>
    </div>
  );
}

function PageLink2() {
  return (
    <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0" data-name="pageLink2">
      <div className="font-['Newsreader:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[15px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Invest</p>
      </div>
    </div>
  );
}

function PageLink4() {
  return (
    <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0" data-name="pageLink4">
      <div className="font-['Newsreader:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[15px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Agents</p>
      </div>
    </div>
  );
}

function PageLinks() {
  return (
    <div className="content-stretch flex gap-7 items-start justify-start relative shrink-0" data-name="pageLinks">
      <PageLink1 />
      <PageLink3 />
      <PageLink2 />
      <PageLink4 />
    </div>
  );
}

function A() {
  return <div className="absolute bg-center bg-cover bg-no-repeat h-[709px] left-0 top-0 w-[800px]" style={{ backgroundImage: `url('${imgFrame17}')` }} />;
}

function Group() {
  return <div className="absolute bg-[#ffffff] bg-size-[100%_152.05%,auto] h-[185px] left-9 top-0 w-48" style={{ backgroundImage: `url('${imgFrame22}')` }} />;
}

function Group1() {
  return (
    <div className="font-['Newsreader:Regular',_sans-serif] font-normal h-4 relative shrink-0 text-[#495057] text-[16px] w-full">
      <p className="leading-[20px]">malak.khraisat@inspirejo.com</p>
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute inset-[38.65%_53.13%_26.53%_20.52%]" data-name="Body/Long Sleeve 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 81">
        <g id="Body/Long Sleeve 1">
          <path clipRule="evenodd" d={svgPaths.p329a5a00} fill="var(--fill-0, #B28B67)" fillRule="evenodd" id="Skin_2" />
          <path clipRule="evenodd" d={svgPaths.p2ffba400} fill="var(--fill-0, #E87613)" fillRule="evenodd" id="Coat Back" />
          <path clipRule="evenodd" d={svgPaths.pcb75140} fill="var(--fill-0, #DDE3E9)" fillRule="evenodd" id="Shirt" />
          <path clipRule="evenodd" d={svgPaths.p261e5eb0} fill="var(--fill-0, #FF9B21)" fillRule="evenodd" id="Coat Front" />
          <path clipRule="evenodd" d={svgPaths.pc63ca80} fill="var(--fill-0, black)" fillOpacity="0.1" fillRule="evenodd" id="Shade" />
        </g>
      </svg>
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute inset-[47.5%_22.86%_7.38%_58.23%]" data-name="Bottom_2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 105">
        <g id="Bottom_2">
          <path clipRule="evenodd" d={svgPaths.pcc5ea00} fill="var(--fill-0, #997659)" fillRule="evenodd" id="Leg" />
          <path clipRule="evenodd" d={svgPaths.p16bad180} fill="var(--fill-0, #B28B67)" fillRule="evenodd" id="Leg_2" />
          <g id="Left Shoe">
            <path clipRule="evenodd" d={svgPaths.p2b006900} fill="var(--fill-0, #E4E4E4)" fillRule="evenodd" id="shoe_3" />
          </g>
          <g id="Right Shoe_3">
            <path clipRule="evenodd" d={svgPaths.p312abcc0} fill="var(--fill-0, #E4E4E4)" fillRule="evenodd" id="shoe_4" />
          </g>
          <path clipRule="evenodd" d={svgPaths.p30e049f2} fill="var(--fill-0, #69A1AC)" fillRule="evenodd" id="Bottom_3" />
          <path clipRule="evenodd" d={svgPaths.p1817f380} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Bottom_4" />
        </g>
      </svg>
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute bottom-0 contents left-[20.56%] right-[21.98%] top-[62.68%]" data-name="Bottom/Skinny Jeans 1">
      <div className="absolute bottom-0 contents left-[20.56%] right-[51.42%] top-[72.12%]" data-name="Seat">
        <div className="absolute bottom-0 left-[20.56%] right-[51.42%] top-[72.12%]" data-name="Seat_2">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 65">
            <g id="Seat_2">
              <path clipRule="evenodd" d={svgPaths.p6b8fc00} fill="var(--fill-0, #C5CFD6)" fillRule="evenodd" id="Seat Stuff" />
              <path clipRule="evenodd" d={svgPaths.p19c52440} fill="var(--fill-0, black)" fillOpacity="0.1" fillRule="evenodd" id="Seat Stuff_2" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[66.03%_27.05%_0.94%_51.03%]" data-name="Skin">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47 77">
          <path clipRule="evenodd" d={svgPaths.p9770f00} fill="var(--fill-0, #B28B67)" fillRule="evenodd" id="Skin" />
        </svg>
      </div>
      <div className="absolute inset-[65.74%_31.08%_9.8%_51.23%]" data-name="LegLower">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 57">
          <path clipRule="evenodd" d={svgPaths.pb1dd100} fill="var(--fill-0, #1F28CF)" fillRule="evenodd" id="LegLower" />
        </svg>
      </div>
      <div className="absolute inset-[90.59%_38.59%_0.4%_48.76%]" data-name="Right Shoe">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 21">
          <g id="Right Shoe">
            <path clipRule="evenodd" d={svgPaths.pc2bd800} fill="var(--fill-0, #E4E4E4)" fillRule="evenodd" id="shoe" />
          </g>
        </svg>
      </div>
      <div className="absolute bottom-0 left-[63.93%] right-[21.98%] top-[95.42%]" data-name="Right Shoe_2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 11">
          <g id="Right Shoe_2">
            <path clipRule="evenodd" d={svgPaths.pdf11800} fill="var(--fill-0, #E4E4E4)" fillRule="evenodd" id="shoe_2" />
          </g>
        </svg>
      </div>
      <div className="absolute inset-[62.68%_26.38%_7.91%_32.01%]" data-name="Leg and Butt">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 89 69">
          <path clipRule="evenodd" d={svgPaths.p1652ba00} fill="var(--fill-0, #2B44FF)" fillRule="evenodd" id="Leg and Butt" />
        </svg>
      </div>
    </div>
  );
}

function Group31() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[7px] h-[123px] items-center justify-start leading-[0] px-6 py-0 relative shrink-0 text-center w-[412px]">
      <div className="font-['Newsreader:Medium',_sans-serif] font-medium relative shrink-0 text-[#000000] text-[24px] w-[412px]">
        <p className="leading-[24px]">Sell a home</p>
      </div>
      <div className="flex flex-col font-['Newsreader:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#6c757d] text-[16px] w-[372px]">
        <p className="leading-[24px]">No matter what path you take to sell your home, we can help you navigate a successful sale.</p>
      </div>
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute bottom-[63.11%] contents left-0 right-[42.48%] top-[19.11%]" data-name="Group_5">
      <div className="absolute inset-[19.11%_42.48%_63.11%_19.43%] opacity-[0.59]" data-name="Vector_17">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 42">
          <path d={svgPaths.p22d9ef70} fill="var(--fill-0, #EDF3F4)" id="Vector_17" opacity="0.59" />
        </svg>
      </div>
      <div className="absolute bottom-[63.79%] left-0 opacity-[0.59] right-[80.8%] top-[20.22%]" data-name="Group_6">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 38">
          <g id="Group_6" opacity="0.59">
            <path d={svgPaths.p2709af00} fill="var(--fill-0, #EDF3F4)" id="Vector_18" opacity="0.59" />
          </g>
        </svg>
      </div>
      <div className="absolute inset-[25.56%_83%_71.3%_1.25%] opacity-[0.59]" data-name="Group_7">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 8">
          <g id="Group_7" opacity="0.32">
            <path d={svgPaths.p1c187480} fill="var(--fill-0, white)" id="Vector_19" opacity="0.32" />
          </g>
        </svg>
      </div>
      <div className="absolute contents inset-[19.51%_43.29%_63.88%_20.23%]" data-name="Group_8">
        <div className="absolute inset-[19.51%_43.29%_63.88%_20.23%] opacity-[0.348]" data-name="Group_9">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 39">
            <g id="Group_9" opacity="0.59">
              <path d={svgPaths.p22714b00} fill="var(--fill-0, #E0DCD3)" id="Vector_20" opacity="0.59" />
              <path d={svgPaths.p368f5b00} fill="var(--fill-0, #F1F1F2)" id="Vector_21" opacity="0.59" />
              <path d={svgPaths.p1a404700} fill="var(--fill-0, #F1F1F2)" id="Vector_22" opacity="0.59" />
              <path d={svgPaths.p12e84ff0} fill="var(--fill-0, #9FB18F)" id="Vector_23" opacity="0.59" />
              <path d={svgPaths.p39c6e480} fill="var(--fill-0, #F1F1F2)" id="Vector_24" opacity="0.59" />
              <path d={svgPaths.p24908700} fill="var(--fill-0, #F1F1F2)" id="Vector_25" opacity="0.59" />
              <path d={svgPaths.p2e56f2f0} fill="var(--fill-0, #F1F1F2)" id="Vector_26" opacity="0.59" />
              <path d={svgPaths.p1869b780} fill="var(--fill-0, #F1F1F2)" id="Vector_27" opacity="0.59" />
              <path d={svgPaths.p15f8a300} fill="var(--fill-0, #F1F1F2)" id="Vector_28" opacity="0.59" />
              <path d={svgPaths.p15b56180} fill="var(--fill-0, #F1F1F2)" id="Vector_29" opacity="0.59" />
              <path d={svgPaths.p3e82e030} fill="var(--fill-0, #F1F1F2)" id="Vector_30" opacity="0.59" />
              <path d={svgPaths.pa318240} fill="var(--fill-0, #A84749)" id="XMLID 4" opacity="0.59" />
              <path d={svgPaths.pc982200} fill="var(--fill-0, #A84749)" id="XMLID 1" opacity="0.59" />
              <path d={svgPaths.p964380} fill="var(--fill-0, #B3CDDD)" id="Vector_31" opacity="0.59" />
              <path d={svgPaths.p3e73be00} fill="var(--fill-0, #F1F1F2)" id="Vector_32" opacity="0.59" />
              <path d={svgPaths.peea1880} fill="var(--fill-0, #F1F1F2)" id="Vector_33" opacity="0.59" />
              <path d={svgPaths.p30622b00} fill="var(--fill-0, #F1F1F2)" id="Vector_34" opacity="0.59" />
              <path d={svgPaths.p1fe2a300} fill="var(--fill-0, #F1F1F2)" id="Vector_35" opacity="0.59" />
              <path d={svgPaths.p11405400} fill="var(--fill-0, #F1F1F2)" id="Vector_36" opacity="0.59" />
              <path d={svgPaths.p3b4e3630} fill="var(--fill-0, #F1F1F2)" id="Vector_37" opacity="0.59" />
              <path d={svgPaths.pf61df00} fill="var(--fill-0, #F1F1F2)" id="Vector_38" opacity="0.59" />
              <path d={svgPaths.p27f53400} fill="var(--fill-0, #F1F1F2)" id="Vector_39" opacity="0.59" />
              <path d={svgPaths.pd33fb80} fill="var(--fill-0, #F1F1F2)" id="Vector_40" opacity="0.59" />
              <path d={svgPaths.p2281da00} fill="var(--fill-0, #F1F1F2)" id="Vector_41" opacity="0.59" />
            </g>
          </svg>
        </div>
        <div className="absolute contents inset-[26.16%_55.88%_67.85%_31.89%]" data-name="Group_10">
          <div className="absolute inset-[26.16%_66.29%_73.16%_31.89%] opacity-[0.205]" data-name="Group_11">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
              <g id="Group_11" opacity="0.59">
                <path d={svgPaths.p22c9df00} fill="var(--fill-0, #4675B8)" id="Vector_42" opacity="0.59" />
              </g>
            </svg>
          </div>
          <div className="absolute inset-[26.29%_56.11%_69.92%_34.09%] opacity-[0.205]" data-name="Group_12">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 9">
              <g id="Group_12" opacity="0.59">
                <path d={svgPaths.p2433fbf0} fill="var(--fill-0, #4675B8)" id="Vector_43" opacity="0.59" />
              </g>
            </svg>
          </div>
          <div className="absolute inset-[31.05%_62.73%_68.03%_35.4%] opacity-[0.205]" data-name="Group_13">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
              <g id="Group_13" opacity="0.59">
                <path d={svgPaths.p26a49d00} fill="var(--fill-0, #4675B8)" id="Vector_44" opacity="0.59" />
              </g>
            </svg>
          </div>
          <div className="absolute inset-[31.29%_57.28%_67.94%_37.33%] opacity-[0.205]" data-name="Group_14">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 2">
              <g id="Group_14" opacity="0.59">
                <path d={svgPaths.p1a1fe600} fill="var(--fill-0, #4675B8)" id="Vector_45" opacity="0.59" />
              </g>
            </svg>
          </div>
          <div className="absolute inset-[31.45%_55.88%_67.85%_42.24%] opacity-[0.205]" data-name="Group_15">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
              <g id="Group_15" opacity="0.59">
                <path d={svgPaths.p32cd4780} fill="var(--fill-0, #4675B8)" id="Vector_46" opacity="0.59" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute inset-[33%_82.84%_66.51%_13.29%] opacity-[0.59]" data-name="Group_16">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2">
          <g id="Group_16" opacity="0.18">
            <g id="Group_17" opacity="0.18">
              <path d={svgPaths.p5cf2400} fill="var(--fill-0, black)" id="Vector_47" opacity="0.18" />
              <path d={svgPaths.p3379be00} fill="var(--fill-0, black)" id="Vector_48" opacity="0.18" />
            </g>
            <path d={svgPaths.p26d30f00} fill="var(--fill-0, black)" id="Vector_49" opacity="0.18" />
            <path d={svgPaths.p2ad4a680} fill="var(--fill-0, black)" id="Vector_50" opacity="0.18" />
            <g id="Group_18" opacity="0.18">
              <path d={svgPaths.p58d3700} fill="var(--fill-0, black)" id="Vector_51" opacity="0.18" />
              <path d={svgPaths.p300d9400} fill="var(--fill-0, black)" id="Vector_52" opacity="0.18" />
              <path d={svgPaths.p120fa40} fill="var(--fill-0, black)" id="Vector_53" opacity="0.18" />
            </g>
          </g>
        </svg>
      </div>
      <div className="absolute inset-[32.22%_94.57%_66.39%_3.88%] opacity-[0.59]" data-name="Vector_54">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 4">
          <path d={svgPaths.p1fdefe00} fill="var(--fill-0, black)" id="Vector_54" opacity="0.21" />
        </svg>
      </div>
      <div className="absolute contents inset-[26.9%_87.32%_72.2%_6.33%]" data-name="Group_19">
        <div className="absolute inset-[26.9%_87.32%_72.2%_6.33%] opacity-[0.189]" data-name="Group_20">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 3">
            <g id="Group_20" opacity="0.32">
              <path d={svgPaths.p2bb20a00} fill="var(--fill-0, black)" id="Vector_55" opacity="0.32" />
              <path d={svgPaths.p6f17100} fill="var(--fill-0, black)" id="Vector_56" opacity="0.32" />
              <path d={svgPaths.p30dc2f00} fill="var(--fill-0, black)" id="Vector_57" opacity="0.32" />
              <path d={svgPaths.p3b12c400} fill="var(--fill-0, black)" id="Vector_58" opacity="0.32" />
              <path d={svgPaths.p182d9b00} fill="var(--fill-0, black)" id="Vector_59" opacity="0.32" />
              <path d={svgPaths.p3b130100} fill="var(--fill-0, black)" id="Vector_60" opacity="0.32" />
              <path d={svgPaths.p352e2600} fill="var(--fill-0, black)" id="Vector_61" opacity="0.32" />
              <path d={svgPaths.p20889840} fill="var(--fill-0, black)" id="Vector_62" opacity="0.32" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.37%_90.08%_70.42%_7.87%] opacity-[0.59]" data-name="Group_21">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
          <g id="Group_21" opacity="0.24">
            <path d={svgPaths.p6f47880} fill="var(--fill-0, black)" id="Vector_63" opacity="0.24" />
            <path d={svgPaths.p11210440} fill="var(--fill-0, black)" id="Vector_64" opacity="0.24" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group34() {
  return (
    <div className="content-stretch flex gap-14 items-start justify-start relative shrink-0 w-full" data-name="pageLinks">
      <div className="basis-0 content-stretch flex flex-col gap-4 grow items-start justify-start min-h-px min-w-px relative shrink-0" data-name="logos">
        <div className="content-stretch flex flex-col gap-2.5 items-center justify-center relative shrink-0 w-[121px]" data-name="logo">
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
            <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="Clip path group">
              <div className="[grid-area:1_/_1] h-[38px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[114px_38px] ml-0 mt-0 relative w-[114.008px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 114 38">
                  <g id="Group">
                    <g id="Group_2">
                      <path d={svgPaths.p236b5800} fill="var(--fill-0, #1A3353)" id="Vector" />
                    </g>
                    <g id="Group_3">
                      <path d={svgPaths.p23ee7800} fill="var(--fill-0, #1A3353)" id="Vector_2" />
                    </g>
                    <g id="Group_4">
                      <path d={svgPaths.p1953fc80} fill="var(--fill-0, #1A3353)" id="Vector_3" />
                    </g>
                    <g id="Group_5">
                      <path d={svgPaths.pc2335c0} fill="var(--fill-0, #1A3353)" id="Vector_4" />
                    </g>
                    <g id="Group_6">
                      <path d={svgPaths.p3eb20380} fill="var(--fill-0, #1A3353)" id="Vector_5" />
                    </g>
                    <g id="Group_7">
                      <path d={svgPaths.p2fe08800} fill="var(--fill-0, #1A3353)" id="Vector_6" />
                    </g>
                    <g id="Group_8">
                      <path d={svgPaths.p52bd100} fill="var(--fill-0, #1A3353)" id="Vector_7" />
                    </g>
                    <g id="Group_9">
                      <path d={svgPaths.p3de11c00} fill="var(--fill-0, #1A3353)" id="Vector_8" />
                    </g>
                    <g id="Group_10">
                      <path d={svgPaths.p140c5c00} fill="var(--fill-0, #1A3353)" id="Vector_9" />
                    </g>
                    <g id="Group_11">
                      <path d={svgPaths.p2c59cf00} fill="var(--fill-0, #1A3353)" id="Vector_10" />
                    </g>
                    <path d={svgPaths.p26fea700} fill="var(--fill-0, #1A3353)" id="Vector_11" />
                    <g id="Group_12">
                      <path d={svgPaths.p22cbf400} fill="var(--fill-0, #1A3353)" id="Vector_12" />
                    </g>
                    <g id="Group_13">
                      <path d={svgPaths.p3ef24b40} fill="var(--fill-0, #1A3353)" id="Vector_13" />
                    </g>
                    <g id="Group_14">
                      <path d={svgPaths.p719f500} fill="var(--fill-0, #1A3353)" id="Vector_14" />
                    </g>
                    <g id="Group_15">
                      <path d={svgPaths.p2f5bb80} fill="var(--fill-0, #1A3353)" id="Vector_15" />
                    </g>
                    <path d={svgPaths.p12333900} fill="var(--fill-0, #1A3353)" id="Vector_16" />
                    <path d={svgPaths.p457c700} fill="var(--fill-0, #1A3353)" id="Vector_17" />
                    <path d={svgPaths.p16690280} fill="var(--fill-0, #1A3353)" id="Vector_18" />
                    <path d={svgPaths.p1f041600} fill="var(--fill-0, #1A3353)" id="Vector_19" />
                    <path d={svgPaths.p31c35200} fill="var(--fill-0, #1A3353)" id="Vector_20" />
                    <g id="Group_16">
                      <path d={svgPaths.p87daa00} fill="var(--fill-0, #1A3353)" id="Vector_21" />
                    </g>
                    <path d={svgPaths.pdb05000} fill="var(--fill-0, #1A3353)" id="Vector_22" />
                    <path d={svgPaths.p265a3200} fill="var(--fill-0, #1A3353)" id="Vector_23" />
                    <g id="Group_17">
                      <path d={svgPaths.p3545cd00} fill="var(--fill-0, #1A3353)" id="Vector_24" />
                    </g>
                    <g id="Group_18">
                      <path d={svgPaths.p36147180} fill="var(--fill-0, #1A3353)" id="Vector_25" />
                    </g>
                    <path d={svgPaths.p28ffb000} fill="var(--fill-0, #1A3353)" id="Vector_26" />
                    <path d={svgPaths.p2c967b00} fill="var(--fill-0, #1A3353)" id="Vector_27" />
                    <path d={svgPaths.p211b9f00} fill="var(--fill-0, #1A3353)" id="Vector_28" />
                    <g id="Group_19">
                      <path d={svgPaths.p3e490600} fill="var(--fill-0, #1A3353)" id="Vector_29" />
                    </g>
                    <g id="Group_20">
                      <path d={svgPaths.p3c357900} fill="var(--fill-0, #1A3353)" id="Vector_30" />
                    </g>
                    <g id="Group_21">
                      <path d={svgPaths.p2ad6de00} fill="var(--fill-0, #1A3353)" id="Vector_31" />
                    </g>
                    <path d={svgPaths.p1c7018c0} fill="var(--fill-0, #1A3353)" id="Vector_32" />
                    <path d={svgPaths.p3eec8e00} fill="var(--fill-0, #1A3353)" id="Vector_33" />
                    <g id="Group_22">
                      <path d={svgPaths.p9c40380} fill="var(--fill-0, #1A3353)" id="Vector_34" />
                    </g>
                    <g id="Group_23">
                      <path d={svgPaths.p2353a340} fill="var(--fill-0, #1A3353)" id="Vector_35" />
                    </g>
                    <path d={svgPaths.p3ad90000} fill="var(--fill-0, #1A3353)" id="Vector_36" />
                    <path d={svgPaths.p14b5280} fill="var(--fill-0, #1A3353)" id="Vector_37" />
                    <path d={svgPaths.peef600} fill="var(--fill-0, #1A3353)" id="Vector_38" />
                    <g id="Group_24">
                      <path d={svgPaths.pd71fa00} fill="var(--fill-0, #1A3353)" id="Vector_39" />
                    </g>
                    <g id="Group_25">
                      <path d={svgPaths.p35902000} fill="var(--fill-0, #1A3353)" id="Vector_40" />
                    </g>
                    <path d={svgPaths.p34644b00} fill="var(--fill-0, #1A3353)" id="Vector_41" />
                    <path d={svgPaths.p193e3500} fill="var(--fill-0, #1A3353)" id="Vector_42" />
                    <path d={svgPaths.p1e4e4300} fill="var(--fill-0, #1A3353)" id="Vector_43" />
                    <path d={svgPaths.p1d037500} fill="var(--fill-0, #1A3353)" id="Vector_44" />
                    <path d={svgPaths.p35ea8980} fill="var(--fill-0, #1A3353)" id="Vector_45" />
                    <g id="Group_26">
                      <path d={svgPaths.p1a673300} fill="var(--fill-0, #1A3353)" id="Vector_46" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-4 items-start justify-start relative shrink-0" data-name="socials">
          <div className="relative shrink-0 size-6" data-name="facebook">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="facebook">
                <path d={svgPaths.p6a67100} fill="var(--fill-0, black)" fillOpacity="0.6" id="Vector" />
              </g>
            </svg>
          </div>
          <div className="relative shrink-0 size-6" data-name="instagram">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="instagram">
                <path d={svgPaths.p39559c70} fill="var(--fill-0, black)" fillOpacity="0.6" id="Vector" />
              </g>
            </svg>
          </div>
          <div className="relative shrink-0 size-6" data-name="twitter">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="twitter">
                <path d={svgPaths.p20e7b7c0} fill="var(--fill-0, black)" fillOpacity="0.6" id="Vector" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col font-['Newsreader:Regular',_sans-serif] font-normal gap-3 items-start justify-center leading-[0] relative shrink-0 text-[15px] w-[200px]" data-name="footerLinkColumn">
        <div className="relative shrink-0 text-[#000000] w-full">
          <p className="leading-[20px]">Explore</p>
        </div>
        <div className="relative shrink-0 text-[rgba(0,0,0,0.6)] w-full">
          <p className="leading-[20px]">Buy</p>
        </div>
        <div className="relative shrink-0 text-[rgba(0,0,0,0.6)] w-full">
          <p className="leading-[20px]">Rent</p>
        </div>
        <div className="relative shrink-0 text-[rgba(0,0,0,0.6)] w-full">
          <p className="leading-[20px]">Sell</p>
        </div>
        <div className="relative shrink-0 text-[rgba(0,0,0,0.6)] w-full">
          <p className="leading-[20px]">Agents</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col font-['Newsreader:Regular',_sans-serif] font-normal gap-3 items-start justify-center leading-[0] relative shrink-0 text-[15px] w-[200px]" data-name="footerLinkColumn">
        <div className="relative shrink-0 text-[#000000] w-full">
          <p className="leading-[20px]">About</p>
        </div>
        <div className="relative shrink-0 text-[rgba(0,0,0,0.6)] w-full">
          <p className="leading-[20px]">Company</p>
        </div>
        <div className="relative shrink-0 text-[rgba(0,0,0,0.6)] w-full">
          <p className="leading-[20px]">Contact</p>
        </div>
        <div className="relative shrink-0 text-[rgba(0,0,0,0.6)] w-full">
          <p className="leading-[20px]">Careers</p>
        </div>
        <div className="relative shrink-0 text-[rgba(0,0,0,0.6)] w-full">
          <p className="leading-[20px]">Blog</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-6 items-start justify-center relative shrink-0 w-[400px]" data-name="newsletter">
        <div className="content-stretch flex flex-col gap-1 items-start justify-start shrink-0 w-full" data-name="Container" />
      </div>
    </div>
  );
}

function Group45() {
  return (
    <div className="[grid-area:1_/_1] h-[38px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[114px_38px] ml-0 mt-0 relative w-[114.008px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 114 38">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.p236b5800} fill="var(--fill-0, #1A3353)" id="Vector" />
          </g>
          <g id="Group_3">
            <path d={svgPaths.p23ee7800} fill="var(--fill-0, #1A3353)" id="Vector_2" />
          </g>
          <g id="Group_4">
            <path d={svgPaths.p1953fc80} fill="var(--fill-0, #1A3353)" id="Vector_3" />
          </g>
          <g id="Group_5">
            <path d={svgPaths.pc2335c0} fill="var(--fill-0, #1A3353)" id="Vector_4" />
          </g>
          <g id="Group_6">
            <path d={svgPaths.p3eb20380} fill="var(--fill-0, #1A3353)" id="Vector_5" />
          </g>
          <g id="Group_7">
            <path d={svgPaths.p2fe08800} fill="var(--fill-0, #1A3353)" id="Vector_6" />
          </g>
          <g id="Group_8">
            <path d={svgPaths.p52bd100} fill="var(--fill-0, #1A3353)" id="Vector_7" />
          </g>
          <g id="Group_9">
            <path d={svgPaths.p3de11c00} fill="var(--fill-0, #1A3353)" id="Vector_8" />
          </g>
          <g id="Group_10">
            <path d={svgPaths.p140c5c00} fill="var(--fill-0, #1A3353)" id="Vector_9" />
          </g>
          <g id="Group_11">
            <path d={svgPaths.p2c59cf00} fill="var(--fill-0, #1A3353)" id="Vector_10" />
          </g>
          <path d={svgPaths.p26fea700} fill="var(--fill-0, #1A3353)" id="Vector_11" />
          <g id="Group_12">
            <path d={svgPaths.p22cbf400} fill="var(--fill-0, #1A3353)" id="Vector_12" />
          </g>
          <g id="Group_13">
            <path d={svgPaths.p3ef24b40} fill="var(--fill-0, #1A3353)" id="Vector_13" />
          </g>
          <g id="Group_14">
            <path d={svgPaths.p719f500} fill="var(--fill-0, #1A3353)" id="Vector_14" />
          </g>
          <g id="Group_15">
            <path d={svgPaths.p2f5bb80} fill="var(--fill-0, #1A3353)" id="Vector_15" />
          </g>
          <path d={svgPaths.p12333900} fill="var(--fill-0, #1A3353)" id="Vector_16" />
          <path d={svgPaths.p457c700} fill="var(--fill-0, #1A3353)" id="Vector_17" />
          <path d={svgPaths.p16690280} fill="var(--fill-0, #1A3353)" id="Vector_18" />
          <path d={svgPaths.p1f041600} fill="var(--fill-0, #1A3353)" id="Vector_19" />
          <path d={svgPaths.p31c35200} fill="var(--fill-0, #1A3353)" id="Vector_20" />
          <g id="Group_16">
            <path d={svgPaths.p87daa00} fill="var(--fill-0, #1A3353)" id="Vector_21" />
          </g>
          <path d={svgPaths.pdb05000} fill="var(--fill-0, #1A3353)" id="Vector_22" />
          <path d={svgPaths.p265a3200} fill="var(--fill-0, #1A3353)" id="Vector_23" />
          <g id="Group_17">
            <path d={svgPaths.p3545cd00} fill="var(--fill-0, #1A3353)" id="Vector_24" />
          </g>
          <g id="Group_18">
            <path d={svgPaths.p36147180} fill="var(--fill-0, #1A3353)" id="Vector_25" />
          </g>
          <path d={svgPaths.p28ffb000} fill="var(--fill-0, #1A3353)" id="Vector_26" />
          <path d={svgPaths.p2c967b00} fill="var(--fill-0, #1A3353)" id="Vector_27" />
          <path d={svgPaths.p211b9f00} fill="var(--fill-0, #1A3353)" id="Vector_28" />
          <g id="Group_19">
            <path d={svgPaths.p3e490600} fill="var(--fill-0, #1A3353)" id="Vector_29" />
          </g>
          <g id="Group_20">
            <path d={svgPaths.p3c357900} fill="var(--fill-0, #1A3353)" id="Vector_30" />
          </g>
          <g id="Group_21">
            <path d={svgPaths.p2ad6de00} fill="var(--fill-0, #1A3353)" id="Vector_31" />
          </g>
          <path d={svgPaths.p1c7018c0} fill="var(--fill-0, #1A3353)" id="Vector_32" />
          <path d={svgPaths.p3eec8e00} fill="var(--fill-0, #1A3353)" id="Vector_33" />
          <g id="Group_22">
            <path d={svgPaths.p9c40380} fill="var(--fill-0, #1A3353)" id="Vector_34" />
          </g>
          <g id="Group_23">
            <path d={svgPaths.p2353a340} fill="var(--fill-0, #1A3353)" id="Vector_35" />
          </g>
          <path d={svgPaths.p3ad90000} fill="var(--fill-0, #1A3353)" id="Vector_36" />
          <path d={svgPaths.p14b5280} fill="var(--fill-0, #1A3353)" id="Vector_37" />
          <path d={svgPaths.peef600} fill="var(--fill-0, #1A3353)" id="Vector_38" />
          <g id="Group_24">
            <path d={svgPaths.pd71fa00} fill="var(--fill-0, #1A3353)" id="Vector_39" />
          </g>
          <g id="Group_25">
            <path d={svgPaths.p35902000} fill="var(--fill-0, #1A3353)" id="Vector_40" />
          </g>
          <path d={svgPaths.p34644b00} fill="var(--fill-0, #1A3353)" id="Vector_41" />
          <path d={svgPaths.p193e3500} fill="var(--fill-0, #1A3353)" id="Vector_42" />
          <path d={svgPaths.p1e4e4300} fill="var(--fill-0, #1A3353)" id="Vector_43" />
          <path d={svgPaths.p1d037500} fill="var(--fill-0, #1A3353)" id="Vector_44" />
          <path d={svgPaths.p35ea8980} fill="var(--fill-0, #1A3353)" id="Vector_45" />
          <g id="Group_26">
            <path d={svgPaths.p1a673300} fill="var(--fill-0, #1A3353)" id="Vector_46" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="Clip path group">
      <Group45 />
    </div>
  );
}

function Group46() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
      <ClipPathGroup />
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex flex-col gap-2.5 items-center justify-center relative shrink-0 w-[377px]" data-name="logo">
      <Group46 />
    </div>
  );
}

function PageLink5() {
  return (
    <div className="bg-[#ffffff] content-stretch flex gap-1.5 items-center justify-start relative shrink-0" data-name="pageLink5">
      <div className="font-['Newsreader:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[15px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Contact</p>
      </div>
    </div>
  );
}

function PageLink6() {
  return (
    <div className="bg-[#ffffff] content-stretch flex gap-1.5 items-center justify-start relative shrink-0" data-name="pageLink5">
      <div className="font-['Newsreader:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[15px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Sign In</p>
      </div>
    </div>
  );
}

function PageLinks1() {
  return (
    <div className="content-stretch flex gap-[13px] items-center justify-start relative shrink-0 w-[191px]" data-name="pageLinks">
      <PageLink5 />
      <PageLink6 />
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute bg-[#ffffff] box-border content-stretch flex items-center justify-between left-0 overflow-clip px-[140px] py-6 right-0 top-0" data-name="Nav">
      <PageLinks />
      <Logo />
      <PageLinks1 />
    </div>
  );
}

function Hero() {
  return (
    <div className="bg-[#3c2f0f29] bg-[position:0%_0%,_0%_15.73%] bg-size-[auto,100%_169.02%] h-[596px] overflow-clip relative shrink-0 w-full" data-name="Hero" style={{ backgroundImage: `url('${imgHero}')` }}>
      <Content />
      <Nav />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-1 items-start justify-start leading-[0] max-w-[1000px] relative shrink-0 text-[#0b3557] w-full" data-name="Content">
      <div className="flex flex-col font-['Newsreader:SemiBold',_sans-serif] font-semibold justify-center relative shrink-0 text-[32px] w-full">
        <p className="leading-[normal]">Homes For You</p>
      </div>
      <div className="font-['Newsreader:Regular',_sans-serif] font-normal relative shrink-0 text-[20px] w-full">
        <p className="leading-[normal]">From cozy apartments to spacious family homes, our diverse listings cater to various needs and preferences.</p>
      </div>
    </div>
  );
}

function Slider() {
  return (
    <div className="absolute bottom-[17px] content-stretch flex gap-1 items-center justify-center left-0 right-0" data-name="slider">
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, white)" id="Ellipse 92" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
    </div>
  );
}

function Imagw() {
  return (
    <div className="bg-center bg-cover bg-no-repeat h-[222px] overflow-clip relative rounded-tl-[25px] rounded-tr-[25px] shrink-0 w-full" data-name="Imagw" style={{ backgroundImage: `url('${imgImagw}')` }}>
      <Slider />
    </div>
  );
}

function DoubleBed() {
  return (
    <div className="h-5 relative shrink-0 w-[21px]" data-name="Double Bed">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 20">
        <g id="Double Bed">
          <path d={svgPaths.p56c5400} fill="var(--fill-0, #6C757D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <DoubleBed />
      <div className="flex flex-col font-['Newsreader:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 size-2.5 text-[#000000] text-[12px] text-center">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Bathtub() {
  return (
    <div className="h-3 relative shrink-0 w-[13px]" data-name="Bathtub">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 12">
        <g clipPath="url(#clip0_1_1323)" id="Bathtub">
          <path d={svgPaths.p3ff9d000} fill="var(--fill-0, #6C757D)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1323">
            <rect fill="white" height="12" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[3px] items-start justify-start relative shrink-0">
      <Bathtub />
      <div className="flex flex-col font-['Newsreader:Regular',_sans-serif] font-normal h-[13px] justify-center leading-[0] relative shrink-0 text-[#000000] text-[12px] text-center w-2">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function ScaleArea() {
  return (
    <div className="h-3 relative shrink-0 w-[13px]" data-name="Scale Area">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 12">
        <g clipPath="url(#clip0_1_1273)" id="Scale Area">
          <path d={svgPaths.p2834e800} fill="var(--fill-0, #6C757D)" id="Vector" />
          <g id="Group">
            <path d={svgPaths.p34b7d080} fill="var(--fill-0, #6C757D)" id="Vector_2" />
            <path d={svgPaths.p10a6e670} fill="var(--fill-0, #6C757D)" id="Vector_3" />
            <g id="Group_2">
              <path d={svgPaths.p361b9380} fill="var(--fill-0, #6C757D)" id="Vector_4" />
              <path d={svgPaths.p251fff80} fill="var(--fill-0, #6C757D)" id="Vector_5" />
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_1273">
            <rect fill="white" height="12" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[3px] items-start justify-start relative shrink-0">
      <ScaleArea />
      <div className="flex flex-col font-['Newsreader:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#000000] text-[12px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">200 sqft</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[7px] items-center justify-start relative shrink-0">
      <Frame6 />
      <div className="flex h-[9px] items-center justify-center relative shrink-0 w-[0px]">
        <div className="flex-none rotate-[270deg]">
          <div className="h-0 relative w-[9px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-0.5px]" style={{ "--stroke-0": "rgba(173, 181, 189, 1)" } as CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 1">
                <line id="Line 2" stroke="var(--stroke-0, #ADB5BD)" strokeWidth="0.5" x2="9" y1="0.75" y2="0.75" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame8 />
      <div className="flex h-[9px] items-center justify-center relative shrink-0 w-[0px]">
        <div className="flex-none rotate-[270deg]">
          <div className="h-0 relative w-[9px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-0.5px]" style={{ "--stroke-0": "rgba(173, 181, 189, 1)" } as CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 1">
                <line id="Line 2" stroke="var(--stroke-0, #ADB5BD)" strokeWidth="0.5" x2="9" y1="0.75" y2="0.75" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame7 />
    </div>
  );
}

function LocationOn() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Location on">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_1256)" id="Location on">
          <g id="Vector"></g>
          <path d={svgPaths.p7f3a2c0} fill="var(--fill-0, #666666)" id="Vector_2" />
          <path d={svgPaths.p3ca14860} fill="var(--fill-0, #666666)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_1_1256">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <LocationOn />
      <div className="flex flex-col font-['Newsreader:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6c757d] text-[12px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Saudi Arabia, Maca</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="h-[165px] relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1.5 h-[165px] items-start justify-start pb-3 pt-6 px-6 relative w-full">
          <Frame9 />
          <div className="font-['Newsreader:Medium',_sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px]" style={{ width: "min-content" }}>
            <p className="leading-[24px] whitespace-pre-wrap">{`Cozy Apartment in Manhatta,  Manhatta`}</p>
          </div>
          <Frame10 />
          <div className="font-['Newsreader:Medium',_sans-serif] font-medium leading-[0] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#ad7c00] text-[24px] text-nowrap" style={{ width: "min-content" }}>
            <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] leading-[24px] overflow-inherit">$5,200,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-3.5 relative shrink-0 w-4">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14">
        <g id="Frame 1">
          <path d={svgPaths.p1b11b100} fill="var(--fill-0, #0B3557)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Btn6() {
  return (
    <div className="h-10 relative rounded-lg shrink-0 w-full" data-name="BTN 6">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2.5 h-10 items-center justify-center px-[17px] py-6 relative w-full">
          <div className="font-['Newsreader:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#0b3557] text-[16px] text-nowrap">
            <p className="leading-[normal] whitespace-pre" dir="auto">
              More Details
            </p>
          </div>
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-[#ffffff] h-[447px] relative rounded-[25px] shrink-0 w-[412px]" data-name="Card 1">
      <div className="box-border content-stretch flex flex-col h-[447px] items-start justify-start overflow-clip pb-3 pt-0 px-0 relative w-[412px]">
        <Imagw />
        <Frame11 />
        <Btn6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dee2e6] border-solid inset-0 pointer-events-none rounded-[25px] shadow-[0px_0px_4px_0px_rgba(165,165,165,0.25)]" />
    </div>
  );
}

function Slider1() {
  return (
    <div className="absolute bottom-[17px] content-stretch flex gap-1 items-center justify-center left-0 right-0" data-name="slider">
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, white)" id="Ellipse 92" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
    </div>
  );
}

function Imagw1() {
  return (
    <div className="bg-center bg-cover bg-no-repeat h-[222px] overflow-clip relative rounded-tl-[25px] rounded-tr-[25px] shrink-0 w-full" data-name="Imagw" style={{ backgroundImage: `url('${imgImagw1}')` }}>
      <Slider1 />
    </div>
  );
}

function DoubleBed1() {
  return (
    <div className="h-5 relative shrink-0 w-[21px]" data-name="Double Bed">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 20">
        <g id="Double Bed">
          <path d={svgPaths.p56c5400} fill="var(--fill-0, #6C757D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <DoubleBed1 />
      <div className="flex flex-col font-['Newsreader:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 size-2.5 text-[#000000] text-[12px] text-center">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Bathtub1() {
  return (
    <div className="h-3 relative shrink-0 w-[13px]" data-name="Bathtub">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 12">
        <g clipPath="url(#clip0_1_1323)" id="Bathtub">
          <path d={svgPaths.p3ff9d000} fill="var(--fill-0, #6C757D)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1323">
            <rect fill="white" height="12" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[3px] items-start justify-start relative shrink-0">
      <Bathtub1 />
      <div className="flex flex-col font-['Newsreader:Regular',_sans-serif] font-normal h-[13px] justify-center leading-[0] relative shrink-0 text-[#000000] text-[12px] text-center w-2">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function ScaleArea1() {
  return (
    <div className="h-3 relative shrink-0 w-[13px]" data-name="Scale Area">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 12">
        <g clipPath="url(#clip0_1_1273)" id="Scale Area">
          <path d={svgPaths.p2834e800} fill="var(--fill-0, #6C757D)" id="Vector" />
          <g id="Group">
            <path d={svgPaths.p34b7d080} fill="var(--fill-0, #6C757D)" id="Vector_2" />
            <path d={svgPaths.p10a6e670} fill="var(--fill-0, #6C757D)" id="Vector_3" />
            <g id="Group_2">
              <path d={svgPaths.p361b9380} fill="var(--fill-0, #6C757D)" id="Vector_4" />
              <path d={svgPaths.p251fff80} fill="var(--fill-0, #6C757D)" id="Vector_5" />
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_1273">
            <rect fill="white" height="12" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[3px] items-start justify-start relative shrink-0">
      <ScaleArea1 />
      <div className="flex flex-col font-['Newsreader:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#000000] text-[12px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">200 sqft</p>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[7px] items-center justify-start relative shrink-0">
      <Frame12 />
      <div className="flex h-[9px] items-center justify-center relative shrink-0 w-[0px]">
        <div className="flex-none rotate-[270deg]">
          <div className="h-0 relative w-[9px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-0.5px]" style={{ "--stroke-0": "rgba(173, 181, 189, 1)" } as CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 1">
                <line id="Line 2" stroke="var(--stroke-0, #ADB5BD)" strokeWidth="0.5" x2="9" y1="0.75" y2="0.75" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame28 />
      <div className="flex h-[9px] items-center justify-center relative shrink-0 w-[0px]">
        <div className="flex-none rotate-[270deg]">
          <div className="h-0 relative w-[9px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-0.5px]" style={{ "--stroke-0": "rgba(173, 181, 189, 1)" } as CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 1">
                <line id="Line 2" stroke="var(--stroke-0, #ADB5BD)" strokeWidth="0.5" x2="9" y1="0.75" y2="0.75" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame29 />
    </div>
  );
}

function LocationOn1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Location on">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_1256)" id="Location on">
          <g id="Vector"></g>
          <path d={svgPaths.p7f3a2c0} fill="var(--fill-0, #666666)" id="Vector_2" />
          <path d={svgPaths.p3ca14860} fill="var(--fill-0, #666666)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_1_1256">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <LocationOn1 />
      <div className="flex flex-col font-['Newsreader:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6c757d] text-[12px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Saudi Arabia, Maca</p>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="h-[165px] relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1.5 h-[165px] items-start justify-start pb-3 pt-6 px-6 relative w-full">
          <Frame30 />
          <div className="font-['Newsreader:Medium',_sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px]" style={{ width: "min-content" }}>
            <p className="leading-[24px] whitespace-pre-wrap">{`Cozy Apartment in Manhatta,  Manhatta`}</p>
          </div>
          <Frame31 />
          <div className="font-['Newsreader:Medium',_sans-serif] font-medium leading-[0] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#ad7c00] text-[24px] text-nowrap" style={{ width: "min-content" }}>
            <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] leading-[24px] overflow-inherit">$5,200,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-3.5 relative shrink-0 w-4">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14">
        <g id="Frame 1">
          <path d={svgPaths.p1b11b100} fill="var(--fill-0, #0B3557)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Btn7() {
  return (
    <div className="h-10 relative rounded-lg shrink-0 w-full" data-name="BTN 6">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2.5 h-10 items-center justify-center px-[17px] py-6 relative w-full">
          <div className="font-['Newsreader:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#0b3557] text-[16px] text-nowrap">
            <p className="leading-[normal] whitespace-pre" dir="auto">
              More Details
            </p>
          </div>
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-[#ffffff] h-[447px] relative rounded-[25px] shrink-0 w-[412px]" data-name="Card 2">
      <div className="box-border content-stretch flex flex-col h-[447px] items-start justify-start overflow-clip pb-3 pt-0 px-0 relative w-[412px]">
        <Imagw1 />
        <Frame32 />
        <Btn7 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dee2e6] border-solid inset-0 pointer-events-none rounded-[25px] shadow-[0px_0px_4px_0px_rgba(165,165,165,0.25)]" />
    </div>
  );
}

function Slider2() {
  return (
    <div className="absolute bottom-[17px] content-stretch flex gap-1 items-center justify-center left-0 right-0" data-name="slider">
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, white)" id="Ellipse 92" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
    </div>
  );
}

function Imagw2() {
  return (
    <div className="bg-center bg-cover bg-no-repeat h-[222px] overflow-clip relative rounded-tl-[25px] rounded-tr-[25px] shrink-0 w-full" data-name="Imagw" style={{ backgroundImage: `url('${imgImagw2}')` }}>
      <Slider2 />
    </div>
  );
}

function DoubleBed2() {
  return (
    <div className="h-5 relative shrink-0 w-[21px]" data-name="Double Bed">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 20">
        <g id="Double Bed">
          <path d={svgPaths.p56c5400} fill="var(--fill-0, #6C757D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <DoubleBed2 />
      <div className="flex flex-col font-['Newsreader:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 size-2.5 text-[#000000] text-[12px] text-center">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Bathtub2() {
  return (
    <div className="h-3 relative shrink-0 w-[13px]" data-name="Bathtub">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 12">
        <g clipPath="url(#clip0_1_1323)" id="Bathtub">
          <path d={svgPaths.p3ff9d000} fill="var(--fill-0, #6C757D)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1323">
            <rect fill="white" height="12" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[3px] items-start justify-start relative shrink-0">
      <Bathtub2 />
      <div className="flex flex-col font-['Newsreader:Regular',_sans-serif] font-normal h-[13px] justify-center leading-[0] relative shrink-0 text-[#000000] text-[12px] text-center w-2">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function ScaleArea2() {
  return (
    <div className="h-3 relative shrink-0 w-[13px]" data-name="Scale Area">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 12">
        <g clipPath="url(#clip0_1_1273)" id="Scale Area">
          <path d={svgPaths.p2834e800} fill="var(--fill-0, #6C757D)" id="Vector" />
          <g id="Group">
            <path d={svgPaths.p34b7d080} fill="var(--fill-0, #6C757D)" id="Vector_2" />
            <path d={svgPaths.p10a6e670} fill="var(--fill-0, #6C757D)" id="Vector_3" />
            <g id="Group_2">
              <path d={svgPaths.p361b9380} fill="var(--fill-0, #6C757D)" id="Vector_4" />
              <path d={svgPaths.p251fff80} fill="var(--fill-0, #6C757D)" id="Vector_5" />
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_1273">
            <rect fill="white" height="12" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[3px] items-start justify-start relative shrink-0">
      <ScaleArea2 />
      <div className="flex flex-col font-['Newsreader:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#000000] text-[12px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">200 sqft</p>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[7px] items-center justify-start relative shrink-0">
      <Frame33 />
      <div className="flex h-[9px] items-center justify-center relative shrink-0 w-[0px]">
        <div className="flex-none rotate-[270deg]">
          <div className="h-0 relative w-[9px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-0.5px]" style={{ "--stroke-0": "rgba(173, 181, 189, 1)" } as CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 1">
                <line id="Line 2" stroke="var(--stroke-0, #ADB5BD)" strokeWidth="0.5" x2="9" y1="0.75" y2="0.75" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame34 />
      <div className="flex h-[9px] items-center justify-center relative shrink-0 w-[0px]">
        <div className="flex-none rotate-[270deg]">
          <div className="h-0 relative w-[9px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-0.5px]" style={{ "--stroke-0": "rgba(173, 181, 189, 1)" } as CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 1">
                <line id="Line 2" stroke="var(--stroke-0, #ADB5BD)" strokeWidth="0.5" x2="9" y1="0.75" y2="0.75" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame35 />
    </div>
  );
}

function LocationOn2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Location on">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_1256)" id="Location on">
          <g id="Vector"></g>
          <path d={svgPaths.p7f3a2c0} fill="var(--fill-0, #666666)" id="Vector_2" />
          <path d={svgPaths.p3ca14860} fill="var(--fill-0, #666666)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_1_1256">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <LocationOn2 />
      <div className="flex flex-col font-['Newsreader:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6c757d] text-[12px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Saudi Arabia, Maca</p>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="h-[165px] relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1.5 h-[165px] items-start justify-start pb-3 pt-6 px-6 relative w-full">
          <Frame36 />
          <div className="font-['Newsreader:Medium',_sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px]" style={{ width: "min-content" }}>
            <p className="leading-[24px] whitespace-pre-wrap">{`Cozy Apartment in Manhatta,  Manhatta`}</p>
          </div>
          <Frame37 />
          <div className="font-['Newsreader:Medium',_sans-serif] font-medium leading-[0] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#ad7c00] text-[24px] text-nowrap" style={{ width: "min-content" }}>
            <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] leading-[24px] overflow-inherit">$5,200,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-3.5 relative shrink-0 w-4">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14">
        <g id="Frame 1">
          <path d={svgPaths.p1b11b100} fill="var(--fill-0, #0B3557)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Btn8() {
  return (
    <div className="h-10 relative rounded-lg shrink-0 w-full" data-name="BTN 6">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2.5 h-10 items-center justify-center px-[17px] py-6 relative w-full">
          <div className="font-['Newsreader:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#0b3557] text-[16px] text-nowrap">
            <p className="leading-[normal] whitespace-pre" dir="auto">
              More Details
            </p>
          </div>
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-[#ffffff] h-[447px] relative rounded-[25px] shrink-0 w-[412px]" data-name="Card 3">
      <div className="box-border content-stretch flex flex-col h-[447px] items-start justify-start overflow-clip pb-3 pt-0 px-0 relative w-[412px]">
        <Imagw2 />
        <Frame38 />
        <Btn8 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dee2e6] border-solid inset-0 pointer-events-none rounded-[25px] shadow-[0px_0px_4px_0px_rgba(165,165,165,0.25)]" />
    </div>
  );
}

function Cards() {
  return (
    <div className="content-center flex flex-wrap gap-9 items-center justify-between relative shrink-0 w-full" data-name="Cards">
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
}

function PropertyListings() {
  return (
    <div className="relative shrink-0 w-full" data-name="Property Listings">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-12 items-start justify-start px-[150px] py-[85px] relative w-full">
          <Content1 />
          <Cards />
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-1 items-start justify-start leading-[0] max-w-[1000px] relative shrink-0 text-[#0b3557] w-full" data-name="Content">
      <div className="flex flex-col font-['Newsreader:SemiBold',_sans-serif] font-semibold justify-center relative shrink-0 text-[32px] w-full">
        <p className="leading-[normal]">Find homes you can afford with BuyAbility</p>
      </div>
      <div className="font-['Newsreader:Regular',_sans-serif] font-normal relative shrink-0 text-[20px] w-full">
        <p className="leading-[normal]">From cozy apartments to spacious family homes, our diverse listings cater to various needs and preferences.</p>
      </div>
    </div>
  );
}

function Slider3() {
  return (
    <div className="absolute bottom-[17px] content-stretch flex gap-1 items-center justify-center left-0 right-0" data-name="slider">
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, white)" id="Ellipse 92" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
    </div>
  );
}

function Imagw3() {
  return (
    <div className="bg-center bg-cover bg-no-repeat h-[222px] overflow-clip relative rounded-tl-[25px] rounded-tr-[25px] shrink-0 w-full" data-name="Imagw" style={{ backgroundImage: `url('${imgImagw3}')` }}>
      <Slider3 />
    </div>
  );
}

function DoubleBed3() {
  return (
    <div className="h-5 relative shrink-0 w-[21px]" data-name="Double Bed">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 20">
        <g id="Double Bed">
          <path d={svgPaths.p56c5400} fill="var(--fill-0, #6C757D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <DoubleBed3 />
      <div className="flex flex-col font-['Newsreader:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 size-2.5 text-[#000000] text-[12px] text-center">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Bathtub3() {
  return (
    <div className="h-3 relative shrink-0 w-[13px]" data-name="Bathtub">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 12">
        <g clipPath="url(#clip0_1_1323)" id="Bathtub">
          <path d={svgPaths.p3ff9d000} fill="var(--fill-0, #6C757D)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1323">
            <rect fill="white" height="12" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[3px] items-start justify-start relative shrink-0">
      <Bathtub3 />
      <div className="flex flex-col font-['Newsreader:Regular',_sans-serif] font-normal h-[13px] justify-center leading-[0] relative shrink-0 text-[#000000] text-[12px] text-center w-2">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function ScaleArea3() {
  return (
    <div className="h-3 relative shrink-0 w-[13px]" data-name="Scale Area">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 12">
        <g clipPath="url(#clip0_1_1273)" id="Scale Area">
          <path d={svgPaths.p2834e800} fill="var(--fill-0, #6C757D)" id="Vector" />
          <g id="Group">
            <path d={svgPaths.p34b7d080} fill="var(--fill-0, #6C757D)" id="Vector_2" />
            <path d={svgPaths.p10a6e670} fill="var(--fill-0, #6C757D)" id="Vector_3" />
            <g id="Group_2">
              <path d={svgPaths.p361b9380} fill="var(--fill-0, #6C757D)" id="Vector_4" />
              <path d={svgPaths.p251fff80} fill="var(--fill-0, #6C757D)" id="Vector_5" />
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_1273">
            <rect fill="white" height="12" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[3px] items-start justify-start relative shrink-0">
      <ScaleArea3 />
      <div className="flex flex-col font-['Newsreader:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#000000] text-[12px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">200 sqft</p>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[7px] items-center justify-start relative shrink-0">
      <Frame39 />
      <div className="flex h-[9px] items-center justify-center relative shrink-0 w-[0px]">
        <div className="flex-none rotate-[270deg]">
          <div className="h-0 relative w-[9px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-0.5px]" style={{ "--stroke-0": "rgba(173, 181, 189, 1)" } as CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 1">
                <line id="Line 2" stroke="var(--stroke-0, #ADB5BD)" strokeWidth="0.5" x2="9" y1="0.75" y2="0.75" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame40 />
      <div className="flex h-[9px] items-center justify-center relative shrink-0 w-[0px]">
        <div className="flex-none rotate-[270deg]">
          <div className="h-0 relative w-[9px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-0.5px]" style={{ "--stroke-0": "rgba(173, 181, 189, 1)" } as CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 1">
                <line id="Line 2" stroke="var(--stroke-0, #ADB5BD)" strokeWidth="0.5" x2="9" y1="0.75" y2="0.75" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame41 />
    </div>
  );
}

function LocationOn3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Location on">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_1256)" id="Location on">
          <g id="Vector"></g>
          <path d={svgPaths.p7f3a2c0} fill="var(--fill-0, #666666)" id="Vector_2" />
          <path d={svgPaths.p3ca14860} fill="var(--fill-0, #666666)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_1_1256">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <LocationOn3 />
      <div className="flex flex-col font-['Newsreader:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6c757d] text-[12px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Saudi Arabia, Maca</p>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="h-[165px] relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1.5 h-[165px] items-start justify-start pb-3 pt-6 px-6 relative w-full">
          <Frame42 />
          <div className="font-['Newsreader:Medium',_sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px]" style={{ width: "min-content" }}>
            <p className="leading-[24px] whitespace-pre-wrap">{`Cozy Apartment in Manhatta,  Manhatta`}</p>
          </div>
          <Frame43 />
          <div className="font-['Newsreader:Medium',_sans-serif] font-medium leading-[0] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#ad7c00] text-[24px] text-nowrap" style={{ width: "min-content" }}>
            <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] leading-[24px] overflow-inherit">$5,200,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-3.5 relative shrink-0 w-4">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14">
        <g id="Frame 1">
          <path d={svgPaths.p1b11b100} fill="var(--fill-0, #0B3557)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Btn9() {
  return (
    <div className="h-10 relative rounded-lg shrink-0 w-full" data-name="BTN 6">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2.5 h-10 items-center justify-center px-[17px] py-6 relative w-full">
          <div className="font-['Newsreader:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#0b3557] text-[16px] text-nowrap">
            <p className="leading-[normal] whitespace-pre" dir="auto">
              More Details
            </p>
          </div>
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-[#ffffff] h-[447px] relative rounded-[25px] shrink-0 w-[412px]" data-name="Card 1">
      <div className="box-border content-stretch flex flex-col h-[447px] items-start justify-start overflow-clip pb-3 pt-0 px-0 relative w-[412px]">
        <Imagw3 />
        <Frame44 />
        <Btn9 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dee2e6] border-solid inset-0 pointer-events-none rounded-[25px] shadow-[0px_0px_4px_0px_rgba(165,165,165,0.25)]" />
    </div>
  );
}

function Slider4() {
  return (
    <div className="absolute bottom-[17px] content-stretch flex gap-1 items-center justify-center left-0 right-0" data-name="slider">
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, white)" id="Ellipse 92" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
    </div>
  );
}

function Imagw4() {
  return (
    <div className="bg-center bg-cover bg-no-repeat h-[222px] overflow-clip relative rounded-tl-[25px] rounded-tr-[25px] shrink-0 w-full" data-name="Imagw" style={{ backgroundImage: `url('${imgImagw4}')` }}>
      <Slider4 />
    </div>
  );
}

function DoubleBed4() {
  return (
    <div className="h-5 relative shrink-0 w-[21px]" data-name="Double Bed">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 20">
        <g id="Double Bed">
          <path d={svgPaths.p56c5400} fill="var(--fill-0, #6C757D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <DoubleBed4 />
      <div className="flex flex-col font-['Newsreader:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 size-2.5 text-[#000000] text-[12px] text-center">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Bathtub4() {
  return (
    <div className="h-3 relative shrink-0 w-[13px]" data-name="Bathtub">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 12">
        <g clipPath="url(#clip0_1_1323)" id="Bathtub">
          <path d={svgPaths.p3ff9d000} fill="var(--fill-0, #6C757D)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1323">
            <rect fill="white" height="12" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex gap-[3px] items-start justify-start relative shrink-0">
      <Bathtub4 />
      <div className="flex flex-col font-['Newsreader:Regular',_sans-serif] font-normal h-[13px] justify-center leading-[0] relative shrink-0 text-[#000000] text-[12px] text-center w-2">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function ScaleArea4() {
  return (
    <div className="h-3 relative shrink-0 w-[13px]" data-name="Scale Area">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 12">
        <g clipPath="url(#clip0_1_1273)" id="Scale Area">
          <path d={svgPaths.p2834e800} fill="var(--fill-0, #6C757D)" id="Vector" />
          <g id="Group">
            <path d={svgPaths.p34b7d080} fill="var(--fill-0, #6C757D)" id="Vector_2" />
            <path d={svgPaths.p10a6e670} fill="var(--fill-0, #6C757D)" id="Vector_3" />
            <g id="Group_2">
              <path d={svgPaths.p361b9380} fill="var(--fill-0, #6C757D)" id="Vector_4" />
              <path d={svgPaths.p251fff80} fill="var(--fill-0, #6C757D)" id="Vector_5" />
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_1273">
            <rect fill="white" height="12" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[3px] items-start justify-start relative shrink-0">
      <ScaleArea4 />
      <div className="flex flex-col font-['Newsreader:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#000000] text-[12px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">200 sqft</p>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex gap-[7px] items-center justify-start relative shrink-0">
      <Frame45 />
      <div className="flex h-[9px] items-center justify-center relative shrink-0 w-[0px]">
        <div className="flex-none rotate-[270deg]">
          <div className="h-0 relative w-[9px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-0.5px]" style={{ "--stroke-0": "rgba(173, 181, 189, 1)" } as CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 1">
                <line id="Line 2" stroke="var(--stroke-0, #ADB5BD)" strokeWidth="0.5" x2="9" y1="0.75" y2="0.75" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame46 />
      <div className="flex h-[9px] items-center justify-center relative shrink-0 w-[0px]">
        <div className="flex-none rotate-[270deg]">
          <div className="h-0 relative w-[9px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-0.5px]" style={{ "--stroke-0": "rgba(173, 181, 189, 1)" } as CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 1">
                <line id="Line 2" stroke="var(--stroke-0, #ADB5BD)" strokeWidth="0.5" x2="9" y1="0.75" y2="0.75" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame47 />
    </div>
  );
}

function LocationOn4() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Location on">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_1256)" id="Location on">
          <g id="Vector"></g>
          <path d={svgPaths.p7f3a2c0} fill="var(--fill-0, #666666)" id="Vector_2" />
          <path d={svgPaths.p3ca14860} fill="var(--fill-0, #666666)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_1_1256">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <LocationOn4 />
      <div className="flex flex-col font-['Newsreader:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6c757d] text-[12px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Saudi Arabia, Maca</p>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="h-[165px] relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1.5 h-[165px] items-start justify-start pb-3 pt-6 px-6 relative w-full">
          <Frame48 />
          <div className="font-['Newsreader:Medium',_sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px]" style={{ width: "min-content" }}>
            <p className="leading-[24px] whitespace-pre-wrap">{`Cozy Apartment in Manhatta,  Manhatta`}</p>
          </div>
          <Frame49 />
          <div className="font-['Newsreader:Medium',_sans-serif] font-medium leading-[0] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#ad7c00] text-[24px] text-nowrap" style={{ width: "min-content" }}>
            <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] leading-[24px] overflow-inherit">$5,200,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-3.5 relative shrink-0 w-4">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14">
        <g id="Frame 1">
          <path d={svgPaths.p1b11b100} fill="var(--fill-0, #0B3557)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Btn10() {
  return (
    <div className="h-10 relative rounded-lg shrink-0 w-full" data-name="BTN 6">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2.5 h-10 items-center justify-center px-[17px] py-6 relative w-full">
          <div className="font-['Newsreader:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#0b3557] text-[16px] text-nowrap">
            <p className="leading-[normal] whitespace-pre" dir="auto">
              More Details
            </p>
          </div>
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="bg-[#ffffff] h-[447px] relative rounded-[25px] shrink-0 w-[412px]" data-name="Card 3">
      <div className="box-border content-stretch flex flex-col h-[447px] items-start justify-start overflow-clip pb-3 pt-0 px-0 relative w-[412px]">
        <Imagw4 />
        <Frame50 />
        <Btn10 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dee2e6] border-solid inset-0 pointer-events-none rounded-[25px] shadow-[0px_0px_4px_0px_rgba(165,165,165,0.25)]" />
    </div>
  );
}

function Slider5() {
  return (
    <div className="absolute bottom-[17px] content-stretch flex gap-1 items-center justify-center left-0 right-0" data-name="slider">
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, white)" id="Ellipse 92" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="relative shrink-0 size-2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 91" r="3.5" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
    </div>
  );
}

function Imagw5() {
  return (
    <div className="bg-center bg-cover bg-no-repeat h-[222px] overflow-clip relative rounded-tl-[25px] rounded-tr-[25px] shrink-0 w-full" data-name="Imagw" style={{ backgroundImage: `url('${imgImagw5}')` }}>
      <Slider5 />
    </div>
  );
}

function DoubleBed5() {
  return (
    <div className="h-5 relative shrink-0 w-[21px]" data-name="Double Bed">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 20">
        <g id="Double Bed">
          <path d={svgPaths.p56c5400} fill="var(--fill-0, #6C757D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <DoubleBed5 />
      <div className="flex flex-col font-['Newsreader:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 size-2.5 text-[#000000] text-[12px] text-center">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Bathtub5() {
  return (
    <div className="h-3 relative shrink-0 w-[13px]" data-name="Bathtub">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 12">
        <g clipPath="url(#clip0_1_1323)" id="Bathtub">
          <path d={svgPaths.p3ff9d000} fill="var(--fill-0, #6C757D)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1323">
            <rect fill="white" height="12" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex gap-[3px] items-start justify-start relative shrink-0">
      <Bathtub5 />
      <div className="flex flex-col font-['Newsreader:Regular',_sans-serif] font-normal h-[13px] justify-center leading-[0] relative shrink-0 text-[#000000] text-[12px] text-center w-2">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function ScaleArea5() {
  return (
    <div className="h-3 relative shrink-0 w-[13px]" data-name="Scale Area">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 12">
        <g clipPath="url(#clip0_1_1273)" id="Scale Area">
          <path d={svgPaths.p2834e800} fill="var(--fill-0, #6C757D)" id="Vector" />
          <g id="Group">
            <path d={svgPaths.p34b7d080} fill="var(--fill-0, #6C757D)" id="Vector_2" />
            <path d={svgPaths.p10a6e670} fill="var(--fill-0, #6C757D)" id="Vector_3" />
            <g id="Group_2">
              <path d={svgPaths.p361b9380} fill="var(--fill-0, #6C757D)" id="Vector_4" />
              <path d={svgPaths.p251fff80} fill="var(--fill-0, #6C757D)" id="Vector_5" />
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_1273">
            <rect fill="white" height="12" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[3px] items-start justify-start relative shrink-0">
      <ScaleArea5 />
      <div className="flex flex-col font-['Newsreader:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#000000] text-[12px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">200 sqft</p>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex gap-[7px] items-center justify-start relative shrink-0">
      <Frame51 />
      <div className="flex h-[9px] items-center justify-center relative shrink-0 w-[0px]">
        <div className="flex-none rotate-[270deg]">
          <div className="h-0 relative w-[9px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-0.5px]" style={{ "--stroke-0": "rgba(173, 181, 189, 1)" } as CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 1">
                <line id="Line 2" stroke="var(--stroke-0, #ADB5BD)" strokeWidth="0.5" x2="9" y1="0.75" y2="0.75" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame52 />
      <div className="flex h-[9px] items-center justify-center relative shrink-0 w-[0px]">
        <div className="flex-none rotate-[270deg]">
          <div className="h-0 relative w-[9px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-0.5px]" style={{ "--stroke-0": "rgba(173, 181, 189, 1)" } as CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 1">
                <line id="Line 2" stroke="var(--stroke-0, #ADB5BD)" strokeWidth="0.5" x2="9" y1="0.75" y2="0.75" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame53 />
    </div>
  );
}

function LocationOn5() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Location on">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_1256)" id="Location on">
          <g id="Vector"></g>
          <path d={svgPaths.p7f3a2c0} fill="var(--fill-0, #666666)" id="Vector_2" />
          <path d={svgPaths.p3ca14860} fill="var(--fill-0, #666666)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_1_1256">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <LocationOn5 />
      <div className="flex flex-col font-['Newsreader:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6c757d] text-[12px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Saudi Arabia, Maca</p>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="h-[165px] relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1.5 h-[165px] items-start justify-start pb-3 pt-6 px-6 relative w-full">
          <Frame54 />
          <div className="font-['Newsreader:Medium',_sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[#000000] text-[24px]" style={{ width: "min-content" }}>
            <p className="leading-[24px] whitespace-pre-wrap">{`Cozy Apartment in Manhatta,  Manhatta`}</p>
          </div>
          <Frame55 />
          <div className="font-['Newsreader:Medium',_sans-serif] font-medium leading-[0] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#ad7c00] text-[24px] text-nowrap" style={{ width: "min-content" }}>
            <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] leading-[24px] overflow-inherit">$5,200,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="h-3.5 relative shrink-0 w-4">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14">
        <g id="Frame 1">
          <path d={svgPaths.p1b11b100} fill="var(--fill-0, #0B3557)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Btn11() {
  return (
    <div className="h-10 relative rounded-lg shrink-0 w-full" data-name="BTN 6">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2.5 h-10 items-center justify-center px-[17px] py-6 relative w-full">
          <div className="font-['Newsreader:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#0b3557] text-[16px] text-nowrap">
            <p className="leading-[normal] whitespace-pre" dir="auto">
              More Details
            </p>
          </div>
          <Frame57 />
        </div>
      </div>
    </div>
  );
}

function Card6() {
  return (
    <div className="bg-[#ffffff] h-[447px] relative rounded-[25px] shrink-0 w-[412px]" data-name="Card 2">
      <div className="box-border content-stretch flex flex-col h-[447px] items-start justify-start overflow-clip pb-3 pt-0 px-0 relative w-[412px]">
        <Imagw5 />
        <Frame56 />
        <Btn11 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dee2e6] border-solid inset-0 pointer-events-none rounded-[25px] shadow-[0px_0px_4px_0px_rgba(165,165,165,0.25)]" />
    </div>
  );
}

function Cards1() {
  return (
    <div className="content-center flex flex-wrap gap-9 items-center justify-between relative shrink-0 w-full" data-name="Cards">
      <Card4 />
      <Card5 />
      <Card6 />
    </div>
  );
}

function PropertyListings1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Property Listings">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-12 items-start justify-start pb-[85px] pt-0 px-[150px] relative w-full">
          <Content2 />
          <Cards1 />
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f8f9fa] h-[50px] relative rounded-[15px] shrink-0 w-[340px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#ced4da] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

function InputField1() {
  return (
    <div className="content-stretch flex flex-col gap-3 h-[84px] items-start justify-start relative shrink-0" data-name="Input field">
      <div className="font-['Newsreader:Regular',_sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#ffffff] text-[22px]" style={{ width: "min-content" }}>
        <p className="leading-[normal]">First Name</p>
      </div>
      <Input />
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#f8f9fa] h-[50px] relative rounded-[15px] shrink-0 w-[340px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#ced4da] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

function InputField2() {
  return (
    <div className="content-stretch flex flex-col gap-3 items-start justify-start relative shrink-0" data-name="Input field">
      <div className="font-['Newsreader:Regular',_sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#ffffff] text-[22px]" style={{ width: "min-content" }}>
        <p className="leading-[normal]">Last Name</p>
      </div>
      <Input1 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-10 items-center justify-start relative shrink-0">
      <InputField1 />
      <InputField2 />
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-[#f8f9fa] h-[50px] relative rounded-[15px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center relative size-full">
        <div className="h-[50px] w-full" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ced4da] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

function InputField3() {
  return (
    <div className="content-stretch flex flex-col gap-3 items-start justify-start relative shrink-0 w-[720px]" data-name="Input field">
      <div className="font-['Newsreader:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[22px] w-full">
        <p className="leading-[normal]">I want to</p>
      </div>
      <Input2 />
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-[#f8f9fa] h-[85px] relative rounded-[15px] shrink-0 w-full" data-name="Input">
      <div className="relative size-full">
        <div className="h-[85px] w-full" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ced4da] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

function InputField4() {
  return (
    <div className="content-stretch flex flex-col gap-3 h-[119px] items-start justify-start relative shrink-0 w-[720px]" data-name="Input field">
      <div className="font-['Newsreader:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[22px] w-full">
        <p className="leading-[normal]">Notes</p>
      </div>
      <Input3 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0">
      <Frame20 />
      <InputField3 />
      <InputField4 />
    </div>
  );
}

function Btn4() {
  return (
    <div className="bg-[#f8f9fa] box-border content-stretch flex gap-2.5 h-[49px] items-center justify-center overflow-clip px-[17px] py-2 relative rounded-[15px] shrink-0 w-[203px]" data-name="BTN 4">
      <div className="font-['Newsreader:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#1a3353] text-[16px] text-nowrap">
        <p className="leading-[normal] whitespace-pre" dir="auto">
          Submit
        </p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute bg-[#0b3557] box-border content-stretch flex flex-col gap-[50px] h-[709px] items-start justify-start left-[800px] overflow-clip px-[34px] py-[79px] top-0 w-[800px]">
      <div className="flex flex-col font-['Newsreader:Regular',_sans-serif] font-normal h-20 justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[40px] w-[602px]">
        <p className="leading-[44px]">Still Haven’t found what you’re looking for?</p>
      </div>
      <Frame19 />
      <Btn4 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#ffffff] h-[709px] overflow-clip relative shrink-0 w-[1600px]">
      <A />
      <Frame18 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-1 items-start justify-start leading-[0] max-w-[1000px] relative shrink-0 text-[#0b3557] w-full" data-name="Content">
      <div className="flex flex-col font-['Newsreader:SemiBold',_sans-serif] font-semibold justify-center relative shrink-0 text-[32px] w-full">
        <p className="leading-[normal]">Meet Out Agents</p>
      </div>
      <div className="font-['Newsreader:Regular',_sans-serif] font-normal relative shrink-0 text-[20px] w-full">
        <p className="leading-[normal]">From cozy apartments to spacious family homes, our diverse listings cater to various needs and preferences.</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="absolute content-stretch flex flex-col gap-3 h-[73px] items-center justify-start leading-[0] left-[26px] text-center top-[113px] w-[217px]">
      <div className="font-['Newsreader:Medium',_sans-serif] font-medium h-4 relative shrink-0 text-[#000000] text-[24px] w-full">
        <p className="leading-[20px]">Malak Khraisat</p>
      </div>
      <div className="font-['Newsreader:Regular',_sans-serif] font-normal h-4 relative shrink-0 text-[#495057] text-[18px] w-full">
        <p className="leading-[20px]">Saudi Arabia, Jada</p>
      </div>
      <div className="font-['Newsreader:Regular',_sans-serif] font-normal h-4 relative shrink-0 text-[#495057] text-[16px] w-full">
        <p className="leading-[20px]">malak.khraisat@inspirejo.com</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute bg-[#ffffff] h-[225px] left-0 top-[93px] w-[269px]">
      <div className="h-[225px] overflow-clip relative w-[269px]">
        <Frame23 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#adb5bd] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame24() {
  return (
    <div className="h-[318px] relative shrink-0 w-[269px]">
      <Frame21 />
      <Group />
    </div>
  );
}

function Frame58() {
  return (
    <div className="absolute content-stretch flex flex-col gap-3 h-[73px] items-center justify-start leading-[0] left-[26px] text-center top-[113px] w-[217px]">
      <div className="font-['Newsreader:Medium',_sans-serif] font-medium h-4 relative shrink-0 text-[#000000] text-[24px] w-full">
        <p className="leading-[20px]">Malak Khraisat</p>
      </div>
      <div className="font-['Newsreader:Regular',_sans-serif] font-normal h-4 relative shrink-0 text-[#495057] text-[18px] w-full">
        <p className="leading-[20px]">Saudi Arabia, Jada</p>
      </div>
      <div className="font-['Newsreader:Regular',_sans-serif] font-normal h-4 relative shrink-0 text-[#495057] text-[16px] w-full">
        <p className="leading-[20px]">malak.khraisat@inspirejo.com</p>
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="absolute bg-[#ffffff] h-[225px] left-0 top-[93px] w-[269px]">
      <div className="h-[225px] overflow-clip relative w-[269px]">
        <Frame58 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#adb5bd] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame60() {
  return <div className="absolute bg-[#ffffff] bg-size-[100%_152.05%,auto] h-[185px] left-9 top-0 w-48" style={{ backgroundImage: `url('${imgFrame23}')` }} />;
}

function Frame25() {
  return (
    <div className="h-[318px] relative shrink-0 w-[269px]">
      <Frame59 />
      <Frame60 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="absolute content-stretch flex flex-col gap-3 h-[73px] items-center justify-start leading-[0] left-[26px] text-center top-[113px] w-[217px]">
      <div className="font-['Newsreader:Medium',_sans-serif] font-medium h-4 relative shrink-0 text-[#000000] text-[24px] w-full">
        <p className="leading-[20px]">Malak Khraisat</p>
      </div>
      <div className="font-['Newsreader:Regular',_sans-serif] font-normal h-4 relative shrink-0 text-[#495057] text-[18px] w-full">
        <p className="leading-[20px]">Saudi Arabia, Jada</p>
      </div>
      <div className="font-['Newsreader:Regular',_sans-serif] font-normal h-4 relative shrink-0 text-[#495057] text-[16px] w-full">
        <p className="leading-[20px]">malak.khraisat@inspirejo.com</p>
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="absolute bg-[#ffffff] h-[225px] left-0 top-[93px] w-[269px]">
      <div className="h-[225px] overflow-clip relative w-[269px]">
        <Frame61 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#adb5bd] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame63() {
  return <div className="absolute bg-[#ffffff] bg-size-[100%_98.87%,auto] h-[185px] left-9 top-0 w-48" style={{ backgroundImage: `url('${imgFrame24}')` }} />;
}

function Frame26() {
  return (
    <div className="h-[318px] relative shrink-0 w-[269px]">
      <Frame62 />
      <Frame63 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="absolute content-stretch flex flex-col gap-3 h-[73px] items-center justify-start leading-[0] left-[26px] text-center top-[113px] w-[217px]">
      <div className="font-['Newsreader:Medium',_sans-serif] font-medium h-4 relative shrink-0 text-[#000000] text-[24px] w-full">
        <p className="leading-[20px]">Malak Khraisat</p>
      </div>
      <div className="font-['Newsreader:Regular',_sans-serif] font-normal h-4 relative shrink-0 text-[#495057] text-[18px] w-full">
        <p className="leading-[20px]">Saudi Arabia, Jada</p>
      </div>
      <Group1 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="absolute bg-[#ffffff] h-[225px] left-0 top-[93px] w-[269px]">
      <div className="h-[225px] overflow-clip relative w-[269px]">
        <Frame64 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#adb5bd] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame66() {
  return <div className="absolute bg-[#ffffff] bg-size-[100%_152.05%,auto] h-[185px] left-9 top-0 w-48" style={{ backgroundImage: `url('${imgFrame25}')` }} />;
}

function Frame27() {
  return (
    <div className="h-[318px] relative shrink-0 w-[269px]">
      <Frame65 />
      <Frame66 />
    </div>
  );
}

function Cards2() {
  return (
    <div className="content-center flex flex-wrap gap-9 h-[363px] items-center justify-between relative shrink-0 w-[1300px]" data-name="Cards">
      <Frame24 />
      <Frame25 />
      <Frame26 />
      <Frame27 />
    </div>
  );
}

function PropertyListings2() {
  return (
    <div className="h-[637px] relative shrink-0 w-full" data-name="Property Listings">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-12 h-[637px] items-start justify-start px-[150px] py-[85px] relative w-full">
          <Content3 />
          <Cards2 />
        </div>
      </div>
    </div>
  );
}

function SceneHome() {
  return (
    <div className="absolute inset-[3.16%_12.19%_14.84%_9.64%]" data-name="Scene/Home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 190 191">
        <g id="Scene/Home">
          <path clipRule="evenodd" d={svgPaths.p1abeb700} fill="var(--fill-0, #F2F2F2)" fillRule="evenodd" id="Background Shape" />
          <g id="Cells" opacity="0.5">
            <path clipRule="evenodd" d={svgPaths.p2ff9da00} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 5" />
            <path clipRule="evenodd" d={svgPaths.p1cd7e470} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 7" />
            <path clipRule="evenodd" d={svgPaths.p1fc0f300} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 9" />
            <path clipRule="evenodd" d={svgPaths.p1fd68f00} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="face" />
            <path clipRule="evenodd" d={svgPaths.p1abd7600} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 13" />
            <path clipRule="evenodd" d={svgPaths.p2013b940} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 15" />
            <path clipRule="evenodd" d={svgPaths.p2c154200} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 17" />
            <path clipRule="evenodd" d={svgPaths.p38da5280} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 19" />
            <path clipRule="evenodd" d={svgPaths.p2895cc00} fill="var(--fill-0, #69A1AC)" fillRule="evenodd" id="Fill 21" />
            <path clipRule="evenodd" d={svgPaths.p3616c000} fill="var(--fill-0, #69A1AC)" fillRule="evenodd" id="Fill 23" />
            <path clipRule="evenodd" d={svgPaths.p2de27200} fill="var(--fill-0, #69A1AC)" fillRule="evenodd" id="Fill 25" />
            <path clipRule="evenodd" d={svgPaths.p29a5af00} fill="var(--fill-0, #69A1AC)" fillRule="evenodd" id="Fill 27" />
            <path clipRule="evenodd" d={svgPaths.pf1a61f0} fill="var(--fill-0, #69A1AC)" fillRule="evenodd" id="face_2" />
            <path clipRule="evenodd" d={svgPaths.p35f21d00} fill="var(--fill-0, #69A1AC)" fillRule="evenodd" id="Fill 31" />
            <path clipRule="evenodd" d={svgPaths.p9229a80} fill="var(--fill-0, #69A1AC)" fillRule="evenodd" id="Fill 33" />
            <path clipRule="evenodd" d={svgPaths.p2720e000} fill="var(--fill-0, #69A1AC)" fillRule="evenodd" id="Fill 35" />
            <path clipRule="evenodd" d={svgPaths.p3a667080} fill="var(--fill-0, #69A1AC)" fillRule="evenodd" id="Fill 37" />
            <path clipRule="evenodd" d={svgPaths.p2331880} fill="var(--fill-0, #69A1AC)" fillRule="evenodd" id="point" />
            <path clipRule="evenodd" d={svgPaths.p3e227d80} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 41" />
            <path clipRule="evenodd" d={svgPaths.p11b80f00} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 43" />
            <path clipRule="evenodd" d={svgPaths.p60d9600} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 45" />
            <path clipRule="evenodd" d={svgPaths.p1721800} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 47" />
            <path clipRule="evenodd" d={svgPaths.p16e92e80} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="hola :)" />
            <path clipRule="evenodd" d={svgPaths.p297e14c0} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 51" />
            <path clipRule="evenodd" d={svgPaths.p2d351b00} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 53" />
            <path clipRule="evenodd" d={svgPaths.p9f97e00} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 55" />
            <path clipRule="evenodd" d={svgPaths.p69ede00} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 57" />
            <path clipRule="evenodd" d={svgPaths.p2c59cfb1} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 59" />
          </g>
          <g id="Big Cards" opacity="0.5">
            <path clipRule="evenodd" d={svgPaths.p24947300} fill="var(--fill-0, #69A1AC)" fillRule="evenodd" id="Fill 67" />
            <path clipRule="evenodd" d={svgPaths.p3539480} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 69" />
            <path clipRule="evenodd" d={svgPaths.p209a8480} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 71" />
            <path clipRule="evenodd" d={svgPaths.p1aca180} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 73" />
            <path clipRule="evenodd" d={svgPaths.p125100} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 75" />
            <path clipRule="evenodd" d={svgPaths.p36aedf90} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 77" />
            <path clipRule="evenodd" d={svgPaths.p2dd8ba80} fill="var(--fill-0, #69A1AC)" fillRule="evenodd" id="Image Border" />
            <path clipRule="evenodd" d={svgPaths.p2ce08400} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Image X" />
            <path clipRule="evenodd" d={svgPaths.pa6ecf00} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 117" />
            <path clipRule="evenodd" d={svgPaths.p616d180} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 119" />
            <path clipRule="evenodd" d={svgPaths.p5bf3980} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 121" />
          </g>
          <path clipRule="evenodd" d={svgPaths.p29600c00} fill="var(--fill-0, #C1DEE2)" fillRule="evenodd" id="Fill 79" opacity="0.5" />
          <g id="Cards" opacity="0.5">
            <path clipRule="evenodd" d={svgPaths.p22a9a000} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 173" />
            <path clipRule="evenodd" d={svgPaths.p36692100} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 171" />
            <path clipRule="evenodd" d={svgPaths.p331dc100} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 175" />
            <path clipRule="evenodd" d={svgPaths.p2caefb00} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 177" />
            <path clipRule="evenodd" d={svgPaths.p10bb1f00} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 179" />
            <path clipRule="evenodd" d={svgPaths.pa8f97c0} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 181" />
            <path clipRule="evenodd" d={svgPaths.p39f28c00} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 183" />
            <path clipRule="evenodd" d={svgPaths.p7749400} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 185" />
            <path clipRule="evenodd" d={svgPaths.p6501920} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 187" />
            <path clipRule="evenodd" d={svgPaths.p20602e00} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 189" />
            <path clipRule="evenodd" d={svgPaths.p39cf4d00} fill="var(--fill-0, #69A1AC)" fillRule="evenodd" id="Fill 191" />
            <path clipRule="evenodd" d={svgPaths.p4d5cc00} fill="var(--fill-0, #69A1AC)" fillRule="evenodd" id="Fill 193" />
            <path clipRule="evenodd" d={svgPaths.p2be4d080} fill="var(--fill-0, #69A1AC)" fillRule="evenodd" id="Wireframy Stuff" />
            <path clipRule="evenodd" d={svgPaths.p2877d9c0} fill="var(--fill-0, #C1DEE2)" fillRule="evenodd" id="Fill 199" />
            <path clipRule="evenodd" d={svgPaths.p1b495a00} fill="var(--fill-0, #C1DEE2)" fillRule="evenodd" id="Fill 201" />
            <path clipRule="evenodd" d={svgPaths.p2894ed00} fill="var(--fill-0, #C1DEE2)" fillRule="evenodd" id="Fill 203" />
            <path clipRule="evenodd" d={svgPaths.p1b49d800} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 205" />
            <path clipRule="evenodd" d={svgPaths.p3f6bc340} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 207" />
            <path clipRule="evenodd" d={svgPaths.p3c8e1500} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 209" />
            <path clipRule="evenodd" d={svgPaths.p2a162b80} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 211" />
            <path clipRule="evenodd" d={svgPaths.p30799f80} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 213" />
            <path clipRule="evenodd" d={svgPaths.p211afe80} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 215" />
            <path clipRule="evenodd" d={svgPaths.p36cdb700} fill="var(--fill-0, #69A1AC)" fillRule="evenodd" id="Fill 217" />
            <path clipRule="evenodd" d={svgPaths.p234fba00} fill="var(--fill-0, #69A1AC)" fillRule="evenodd" id="eye" />
            <path clipRule="evenodd" d={svgPaths.p14c6fa00} fill="var(--fill-0, #69A1AC)" fillRule="evenodd" id="Fill 221" />
            <path clipRule="evenodd" d={svgPaths.p15436180} fill="var(--fill-0, #C1DEE2)" fillRule="evenodd" id="Fill 223" />
            <path clipRule="evenodd" d={svgPaths.p23c32200} fill="var(--fill-0, #C1DEE2)" fillRule="evenodd" id="Fill 225" />
            <path clipRule="evenodd" d={svgPaths.p264d2980} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="quare" />
          </g>
          <g id="Profile" opacity="0.5">
            <path clipRule="evenodd" d={svgPaths.p33324a00} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="face_3" />
            <path clipRule="evenodd" d={svgPaths.p21e829c0} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 231" />
            <path clipRule="evenodd" d={svgPaths.p7b54e80} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 233" />
            <path clipRule="evenodd" d={svgPaths.pb0ff680} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 235" />
            <path clipRule="evenodd" d={svgPaths.p96c1100} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 237" />
            <path clipRule="evenodd" d={svgPaths.p33c50600} fill="var(--fill-0, #C1DEE2)" fillRule="evenodd" id="Hola :)" />
            <path clipRule="evenodd" d={svgPaths.p1c2ae600} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 241" />
            <path clipRule="evenodd" d={svgPaths.p3ebc5c80} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 243" />
            <path clipRule="evenodd" d={svgPaths.p1b58c780} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="have a nice day :)" />
            <path clipRule="evenodd" d={svgPaths.p25f16e70} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="espero" />
            <path clipRule="evenodd" d={svgPaths.p3bd6b900} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="hola" />
          </g>
          <path clipRule="evenodd" d={svgPaths.p2dca7180} fill="var(--fill-0, #C1DEE2)" fillRule="evenodd" id="Fill 251" opacity="0.5" />
          <g id="List" opacity="0.5">
            <path clipRule="evenodd" d={svgPaths.p1b0b4b80} fill="var(--fill-0, #C1DEE2)" fillRule="evenodd" id="Fill 253" />
            <path clipRule="evenodd" d={svgPaths.p17ab8400} fill="var(--fill-0, #C1DEE2)" fillRule="evenodd" id="Fill 255" />
            <path clipRule="evenodd" d={svgPaths.p149f1440} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 257" />
            <path clipRule="evenodd" d={svgPaths.p57a2b00} fill="var(--fill-0, #C1DEE2)" fillRule="evenodd" id="Fill 259" />
            <path clipRule="evenodd" d={svgPaths.pe7ea00} fill="var(--fill-0, #C1DEE2)" fillRule="evenodd" id="Fill 261" />
            <path clipRule="evenodd" d={svgPaths.p3b1679f0} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 263" />
            <path clipRule="evenodd" d={svgPaths.p1f87f500} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 265" />
            <path clipRule="evenodd" d={svgPaths.pf507500} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 267" />
            <path clipRule="evenodd" d={svgPaths.p1ff4fc40} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 269" />
            <path clipRule="evenodd" d={svgPaths.p1cedb500} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 271" />
            <path clipRule="evenodd" d={svgPaths.p2d7d9d00} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 273" />
            <path clipRule="evenodd" d={svgPaths.p82fd00} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 275" />
            <path clipRule="evenodd" d={svgPaths.pfc6c000} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 277" />
            <path clipRule="evenodd" d={svgPaths.p13e24d00} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 279" />
            <path clipRule="evenodd" d={svgPaths.p16a31e80} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 281" />
            <path clipRule="evenodd" d={svgPaths.p1bd63e70} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 284" />
            <path clipRule="evenodd" d={svgPaths.pf204100} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 286" />
          </g>
          <g id="Checkmark!" opacity="0.5">
            <path clipRule="evenodd" d={svgPaths.p18e64780} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 292" />
            <path clipRule="evenodd" d={svgPaths.p39d6800} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 294" />
          </g>
          <g id="Whiteboard Stuff" opacity="0.5">
            <path clipRule="evenodd" d={svgPaths.p2d6bcd80} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Wireframy Stuff_2" />
            <path clipRule="evenodd" d={svgPaths.p9483c20} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Wireframy Stuff_3" />
            <path clipRule="evenodd" d={svgPaths.p20976140} fill="var(--fill-0, #C1DEE2)" fillRule="evenodd" id="Fill 135" />
            <path clipRule="evenodd" d={svgPaths.p8b2a700} fill="var(--fill-0, #C1DEE2)" fillRule="evenodd" id="Fill 137" />
            <path clipRule="evenodd" d={svgPaths.pd234080} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 139" />
            <path clipRule="evenodd" d={svgPaths.p34b40500} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 141" />
            <path clipRule="evenodd" d={svgPaths.p364d5800} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 143" />
            <path clipRule="evenodd" d={svgPaths.p14442440} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 145" />
            <path clipRule="evenodd" d={svgPaths.p136b1400} fill="var(--fill-0, #C1DEE2)" fillRule="evenodd" id="Fill 147" />
            <path clipRule="evenodd" d={svgPaths.p4202700} fill="var(--fill-0, #C1DEE2)" fillRule="evenodd" id="Fill 149" />
            <path clipRule="evenodd" d={svgPaths.p1e9e8e40} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 151" />
            <path clipRule="evenodd" d={svgPaths.p97e8680} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 153" />
            <path clipRule="evenodd" d={svgPaths.p2ec0c200} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 155" />
            <path clipRule="evenodd" d={svgPaths.p1097cc0} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Fill 157" />
            <path clipRule="evenodd" d={svgPaths.p27d4b00} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Wireframy Stuff_4" />
            <path clipRule="evenodd" d={svgPaths.p21468500} fill="var(--fill-0, #C1DEE2)" fillRule="evenodd" id="Line" />
            <path clipRule="evenodd" d={svgPaths.pd408800} fill="var(--fill-0, #89C5CC)" fillRule="evenodd" id="Wireframy Stuff_5" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Head() {
  return (
    <div className="absolute inset-[24.61%_65.05%_56.54%_27.85%]" data-name="Head">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 44">
        <g id="Head">
          <g id="Head_2">
            <path clipRule="evenodd" d={svgPaths.p223ec980} fill="var(--fill-0, #B28B67)" fillRule="evenodd" id="Head_3" />
          </g>
          <path clipRule="evenodd" d={svgPaths.p1397f000} fill="var(--fill-0, #191847)" fillRule="evenodd" id="hair" />
        </g>
      </svg>
    </div>
  );
}

function Bottom() {
  return (
    <div className="absolute inset-[59.3%_46.15%_7.9%_19.88%]" data-name="Bottom">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 83 77">
        <g id="Bottom">
          <g id="Seat">
            <path clipRule="evenodd" d={svgPaths.p22a02900} fill="var(--fill-0, #C5CFD6)" fillRule="evenodd" id="Ballsy Ball" />
          </g>
          <path clipRule="evenodd" d={svgPaths.p25237f80} fill="var(--fill-0, #B28B67)" fillRule="evenodd" id="Skin" />
          <path clipRule="evenodd" d={svgPaths.p25af9800} fill="var(--fill-0, #1F28CF)" fillRule="evenodd" id="Leg Back" />
          <path clipRule="evenodd" d={svgPaths.p388edb80} fill="var(--fill-0, #2B44FF)" fillRule="evenodd" id="Leg Front" />
          <g id="Right Shoe">
            <path clipRule="evenodd" d={svgPaths.p23629d00} fill="var(--fill-0, #E4E4E4)" fillRule="evenodd" id="shoe" />
          </g>
          <g id="Right Shoe_2">
            <path clipRule="evenodd" d={svgPaths.pc95580} fill="var(--fill-0, #E4E4E4)" fillRule="evenodd" id="shoe_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group59() {
  return (
    <div className="absolute contents inset-[24.61%_46.15%_7.9%_19.88%]" data-name="Group">
      <Head />
      <Bottom />
      <Group28 />
    </div>
  );
}

function Head5() {
  return (
    <div className="absolute inset-[17.8%_30.21%_68.43%_64.55%]" data-name="Head_5">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 32">
        <g id="Head_5">
          <path clipRule="evenodd" d={svgPaths.p1b683500} fill="var(--fill-0, #B28B67)" fillRule="evenodd" id="Head_6" />
        </g>
      </svg>
    </div>
  );
}

function Hijab() {
  return (
    <div className="absolute inset-[17.37%_28.03%_68.43%_65.05%]" data-name="Hijab">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 33">
        <g id="Hijab">
          <path clipRule="evenodd" d={svgPaths.p3b123a00} fill="var(--fill-0, #2C2C2C)" fillRule="evenodd" id="Front" />
          <path clipRule="evenodd" d={svgPaths.p28915c00} fill="var(--fill-0, #8991DC)" fillRule="evenodd" id="Turban" />
          <path clipRule="evenodd" d={svgPaths.p3f0da080} fill="var(--fill-0, black)" fillOpacity="0.2" fillRule="evenodd" id="Shade_2" />
        </g>
      </svg>
    </div>
  );
}

function Head4() {
  return (
    <div className="absolute contents inset-[17.37%_28.03%_68.43%_64.55%]" data-name="Head_4">
      <Head5 />
      <Hijab />
    </div>
  );
}

function Body() {
  return (
    <div className="absolute inset-[26.39%_16.73%_42%_54.62%]" data-name="Body">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 74">
        <g id="Body">
          <path clipRule="evenodd" d={svgPaths.p3ad31780} fill="var(--fill-0, #B28B67)" fillRule="evenodd" id="Skin_3" />
          <path clipRule="evenodd" d={svgPaths.p1f233200} fill="var(--fill-0, #DB2721)" fillRule="evenodd" id="Clothes Back" />
          <path clipRule="evenodd" d={svgPaths.p32e37b00} fill="var(--fill-0, #FF4133)" fillRule="evenodd" id="Clothes Front" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[17.37%_16.73%_7.38%_19.88%]">
      <Group59 />
      <Head4 />
      <Group29 />
      <Body />
    </div>
  );
}

function SceneSceneWhiteboardSampleTemplateExample() {
  return (
    <div className="absolute contents inset-0" data-name="scene/Scene Whiteboard sample template example">
      <div className="absolute inset-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <SceneHome />
      <Group2 />
    </div>
  );
}

function IllustrationSceneWhiteboardSampleTemplateExample() {
  return (
    <div className="h-[232px] overflow-clip relative shrink-0 w-[242px]" data-name="Illustration - Scene Whiteboard sample template example">
      <SceneSceneWhiteboardSampleTemplateExample />
    </div>
  );
}

function Frame13() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[7px] h-[123px] items-center justify-start leading-[0] px-6 py-0 relative shrink-0 text-center w-[412px]">
      <div className="font-['Newsreader:Medium',_sans-serif] font-medium relative shrink-0 text-[#000000] text-[24px] w-[412px]">
        <p className="leading-[24px]">Buy a home</p>
      </div>
      <div className="flex flex-col font-['Newsreader:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#6c757d] text-[16px] w-[372px]">
        <p className="leading-[24px]">Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
      </div>
    </div>
  );
}

function Btn12() {
  return (
    <div className="h-10 relative rounded-[15px] shrink-0 w-[140px]" data-name="BTN 6">
      <div className="box-border content-stretch flex gap-2.5 h-10 items-center justify-center overflow-clip px-[17px] py-3 relative w-[140px]">
        <div className="font-['Newsreader:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#bb9a74] text-[16px] text-nowrap">
          <p className="leading-[normal] whitespace-pre" dir="auto">
            Browse Homes
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#bb9a74] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

function Frame67() {
  return (
    <div className="h-[225px] relative shrink-0 w-full">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col h-[225px] items-center justify-start pb-3 pt-6 px-6 relative w-full">
          <Frame13 />
          <Btn12 />
        </div>
      </div>
    </div>
  );
}

function Card7() {
  return (
    <div className="bg-[#ffffff] h-[520px] relative rounded-[25px] shrink-0 w-[412px]" data-name="Card 1">
      <div className="box-border content-stretch flex flex-col h-[520px] items-center justify-start overflow-clip pb-3 pt-8 px-0 relative w-[412px]">
        <IllustrationSceneWhiteboardSampleTemplateExample />
        <Frame67 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dee2e6] border-solid inset-0 pointer-events-none rounded-[25px] shadow-[0px_0px_9px_0px_rgba(165,165,165,0.5)]" />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bottom-[14.81%] left-0 right-0 top-0" data-name="Background">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 212 198">
        <g id="Background">
          <path clipRule="evenodd" d={svgPaths.pab03bf0} fill="var(--fill-0, #91FFBD)" fillOpacity="0.7" fillRule="evenodd" id="Weird Shape" />
          <path clipRule="evenodd" d={svgPaths.p8062d00} fill="var(--fill-0, #2B44FF)" fillOpacity="0.6" fillRule="evenodd" id="Weird Shape_2" />
          <path clipRule="evenodd" d={svgPaths.p3603dd00} fill="var(--fill-0, #FF73C6)" fillOpacity="0.7" fillRule="evenodd" id="Weird Shape_3" />
        </g>
      </svg>
    </div>
  );
}

function HeadFront() {
  return (
    <div className="absolute inset-[26.04%_51.28%_55.99%_36.88%]" data-name="Head/Front">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 42">
        <g id="Head/Front">
          <g id="Head">
            <path clipRule="evenodd" d={svgPaths.pb02c100} fill="var(--fill-0, #B28B67)" fillRule="evenodd" id="Head_2" />
          </g>
          <path clipRule="evenodd" d={svgPaths.pb3b4b00} fill="var(--fill-0, #191847)" fillRule="evenodd" id="Hair" />
        </g>
      </svg>
    </div>
  );
}

function BodyLongSleeve2() {
  return (
    <div className="absolute inset-[34.3%_28.46%_29.77%_29.56%]" data-name="Body/Long Sleeve 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 89 84">
        <g id="Body/Long Sleeve 1">
          <path clipRule="evenodd" d={svgPaths.p1655aef0} fill="var(--fill-0, #B28B67)" fillRule="evenodd" id="Skin_2" />
          <path clipRule="evenodd" d={svgPaths.p21622e00} fill="var(--fill-0, #2026A2)" fillRule="evenodd" id="Coat Back" />
          <path clipRule="evenodd" d={svgPaths.p9b02800} fill="var(--fill-0, #F2F2F2)" fillRule="evenodd" id="Shirt" />
          <path clipRule="evenodd" d={svgPaths.p1d5d8380} fill="var(--fill-0, #1F28CF)" fillRule="evenodd" id="Coat Front" />
        </g>
      </svg>
    </div>
  );
}

function HumanAHumanSitting() {
  return (
    <div className="absolute bottom-0 contents left-[20.56%] right-[21.98%] top-[26.04%]" data-name="human/A Human Sitting">
      <HeadFront />
      <Group30 />
      <BodyLongSleeve2 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="h-[232px] relative shrink-0 w-[212px]">
      <Background />
      <HumanAHumanSitting />
    </div>
  );
}

function Btn13() {
  return (
    <div className="h-10 relative rounded-[15px] shrink-0 w-[140px]" data-name="BTN 6">
      <div className="box-border content-stretch flex gap-2.5 h-10 items-center justify-center overflow-clip px-[17px] py-3 relative w-[140px]">
        <div className="font-['Newsreader:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#bb9a74] text-[16px] text-nowrap">
          <p className="leading-[normal] whitespace-pre" dir="auto">
            See your options
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#bb9a74] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

function Frame69() {
  return (
    <div className="h-[225px] relative shrink-0 w-full">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col h-[225px] items-center justify-start pb-3 pt-6 px-6 relative w-full">
          <Group31 />
          <Btn13 />
        </div>
      </div>
    </div>
  );
}

function Card8() {
  return (
    <div className="bg-[#ffffff] h-[520px] relative rounded-[25px] shrink-0 w-[412px]" data-name="Card 2">
      <div className="box-border content-stretch flex flex-col h-[520px] items-center justify-start overflow-clip pb-3 pt-8 px-0 relative w-[412px]">
        <Frame14 />
        <Frame69 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dee2e6] border-solid inset-0 pointer-events-none rounded-[25px] shadow-[0px_0px_9px_0px_rgba(165,165,165,0.5)]" />
    </div>
  );
}

function Group60() {
  return (
    <div className="absolute inset-[95.58%_11.65%_0.13%_6.38%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 115 10">
        <g id="Group">
          <path d={svgPaths.p31e87300} fill="url(#paint0_linear_1_1110)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1110" x1="0.00138311" x2="114.751" y1="4.9743" y2="4.9743">
            <stop stopColor="#4D4D4D" />
            <stop offset="1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Svgid214() {
  return (
    <div className="absolute contents inset-[95.58%_11.65%_0.13%_6.38%]" data-name="SVGID 214">
      <Group60 />
    </div>
  );
}

function Group61() {
  return (
    <div className="absolute bottom-[2.23%] left-[24.47%] right-[0.14%] top-0" data-name="Group_2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 106 227">
        <g id="Group_2">
          <path d={svgPaths.p1ea36f00} fill="var(--fill-0, #D1AC9D)" id="Vector_3" />
          <path d={svgPaths.p31b46a00} fill="var(--fill-0, #D1AC9D)" id="Vector_4" />
          <g id="Group_3">
            <path d={svgPaths.p390c23f0} fill="var(--fill-0, #333333)" id="Vector_5" />
            <g id="Group_4">
              <path d={svgPaths.p155d6c71} fill="var(--fill-0, #333333)" id="Vector_6" />
              <path d={svgPaths.p3a628400} fill="var(--fill-0, #D1AC9D)" id="Vector_7" />
            </g>
            <path d={svgPaths.p25aa9780} fill="var(--fill-0, #282828)" id="Vector_8" />
            <path d={svgPaths.p2cb6e500} fill="var(--fill-0, #333333)" id="Vector_9" />
            <path d={svgPaths.p1296500} fill="var(--fill-0, #682D2C)" id="Vector_10" />
            <path d={svgPaths.p8e5de70} fill="var(--fill-0, #682D2C)" id="Vector_11" />
            <path d={svgPaths.p25a10df0} fill="var(--fill-0, #A78E41)" id="Vector_12" />
            <path d={svgPaths.pf469500} fill="var(--fill-0, #A78E41)" id="Vector_13" />
            <path d={svgPaths.p2dd4aa00} fill="var(--fill-0, #F2F2F2)" id="Vector_14" />
            <path d={svgPaths.p3f824000} fill="var(--fill-0, #D1AC9D)" id="Vector_15" />
            <path d={svgPaths.p17f6daf0} fill="var(--fill-0, #D1AC9D)" id="Vector_16" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Pavan709() {
  return (
    <div className="absolute bottom-[0.13%] contents left-0 right-[0.14%] top-0" data-name="pavan 709">
      <Svgid214 />
      <div className="absolute inset-[95.58%_11.65%_0.13%_6.38%]" data-name="Vector_2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 115 10">
          <path d={svgPaths.p352b4a00} fill="url(#paint0_linear_1_1103)" id="Vector_2" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1103" x1="0.00138401" x2="114.751" y1="4.9743" y2="4.9743">
              <stop />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Group61 />
      <Group32 />
      <div className="absolute inset-[41.82%_63.69%_51.92%_20.53%]" data-name="Vector_65">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 15">
          <path d={svgPaths.p7ef4e00} fill="var(--fill-0, #EBEBEB)" id="Vector_65" />
        </svg>
      </div>
      <div className="absolute inset-[46.4%_51.24%_1.08%_8.06%]" data-name="Vector_66">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57 122">
          <path d={svgPaths.p39547400} fill="var(--fill-0, #F2F2F2)" id="Vector_66" />
        </svg>
      </div>
      <div className="absolute inset-[35.67%_42.95%_55.52%_0.45%]" data-name="Vector_67">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 21">
          <path d={svgPaths.p2030d380} fill="var(--fill-0, #E8EDEF)" id="Vector_67" opacity="0.33" />
        </svg>
      </div>
      <div className="absolute inset-[48.03%_66.04%_1.66%_31.41%]" data-name="Vector_68">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 117">
          <path d={svgPaths.p24baf800} fill="var(--fill-0, #EBEBEB)" id="Vector_68" />
        </svg>
      </div>
      <div className="absolute inset-[92.18%_72.05%_4.9%_12.1%]" data-name="Vector_69">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 7">
          <path d={svgPaths.p2ed42000} fill="var(--fill-0, #BABABA)" id="Vector_69" />
        </svg>
      </div>
      <div className="absolute inset-[87.79%_71.81%_8.87%_11.65%]" data-name="Vector_70">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 8">
          <path d={svgPaths.p15b40ef0} fill="var(--fill-0, #BABABA)" id="Vector_70" />
        </svg>
      </div>
    </div>
  );
}

function IllustrationPavan709() {
  return (
    <div className="h-[232px] overflow-clip relative shrink-0 w-[140px]" data-name="Illustration - pavan 709">
      <Pavan709 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[7px] h-[123px] items-center justify-start leading-[0] px-6 py-0 relative shrink-0 text-center w-[412px]">
      <div className="font-['Newsreader:Medium',_sans-serif] font-medium relative shrink-0 text-[#000000] text-[24px] w-[412px]">
        <p className="leading-[24px]">Invest</p>
      </div>
      <div className="flex flex-col font-['Newsreader:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#6c757d] text-[16px] w-[372px]">
        <p className="leading-[24px]">{` Invest in high income generating properties in Saudi Arabia.`}</p>
      </div>
    </div>
  );
}

function Btn14() {
  return (
    <div className="h-10 relative rounded-[15px] shrink-0 w-[140px]" data-name="BTN 6">
      <div className="box-border content-stretch flex gap-2.5 h-10 items-center justify-center overflow-clip px-[17px] py-3 relative w-[140px]">
        <div className="font-['Newsreader:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#bb9a74] text-[16px] text-nowrap">
          <p className="leading-[normal] whitespace-pre" dir="auto">
            Invest
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#bb9a74] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

function Frame71() {
  return (
    <div className="h-[225px] relative shrink-0 w-full">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col h-[225px] items-center justify-start pb-3 pt-6 px-6 relative w-full">
          <Frame70 />
          <Btn14 />
        </div>
      </div>
    </div>
  );
}

function Card9() {
  return (
    <div className="bg-[#ffffff] h-[520px] relative rounded-[25px] shrink-0 w-[412px]" data-name="Card 3">
      <div className="box-border content-stretch flex flex-col h-[520px] items-center justify-start overflow-clip pb-3 pt-8 px-0 relative w-[412px]">
        <IllustrationPavan709 />
        <Frame71 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dee2e6] border-solid inset-0 pointer-events-none rounded-[25px] shadow-[0px_0px_9px_0px_rgba(165,165,165,0.5)]" />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Card7 />
      <Card8 />
      <Card9 />
    </div>
  );
}

function PropertyListings3() {
  return (
    <div className="bg-[#f8f9fa] relative shrink-0 w-full" data-name="Property Listings">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-12 items-start justify-start px-[150px] py-[85px] relative w-full">
          <Frame15 />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-2 relative shrink-0 w-full" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1300 8">
        <g id="Container">
          <path d="M-0.00365152 6.9687H1300" id="divider" stroke="var(--stroke-0, black)" strokeOpacity="0.16" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function StoreFooter() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-6 h-[393px] items-start justify-start px-[150px] py-14 relative shrink-0 w-[1600px]" data-name="Store Footer">
      <Container />
      <Group34 />
    </div>
  );
}

export default function MacBookPro142() {
  return (
    <div className="bg-[#ffffff] content-stretch flex flex-col items-start justify-start relative size-full" data-name="MacBook Pro 14' - 2">
      <Hero />
      <PropertyListings />
      <PropertyListings1 />
      <Frame16 />
      <PropertyListings2 />
      <PropertyListings3 />
      <StoreFooter />
    </div>
  );
}
