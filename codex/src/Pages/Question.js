import React from "react";
function Question() {
  return (
    <div className="w-full relative bg-gray-200 overflow-hidden flex flex-col items-start justify-start pt-[2.5rem] px-[0rem] pb-[13.106rem] box-border gap-[8.5rem] leading-[normal] tracking-[normal] text-left text-[3rem] font-noto-rashi-hebrew mq450:gap-[2.125rem] mq750:gap-[4.25rem]">
      <div className="flex flex-row items-start justify-start py-[0rem] px-[2.5rem]">
        <div className="flex flex-row items-start justify-start">
          <div className="flex flex-col items-start justify-start pt-[0.425rem] px-[0rem] pb-[0rem]">
            <h2 className="m-0 h-[2.75rem] relative text-inherit font-extrabold font-inherit text-transparent !bg-clip-text [background:linear-gradient(96.81deg,_#a602c3_0.5%,_#e84907_51.5%,_#fbc02b_84%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block mq450:text-[1.813rem] mq1050:text-[2.375rem]">
              CODE
            </h2>
          </div>
          <img
            className="self-stretch w-[3.75rem] relative max-h-full object-cover min-h-[3.25rem]"
            loading="lazy"
            alt=""
            src="/codex-1@2x.png"
          />
        </div>
      </div>
      <section className="self-stretch flex flex-col items-end justify-start pt-[0rem] pb-[1.188rem] pr-[10.938rem] pl-[0rem] box-border gap-[2.188rem] max-w-full text-left text-[2rem] text-darkgray-100 font-inter lg:pr-[5.438rem] lg:box-border mq450:pr-[1.25rem] mq450:box-border mq750:gap-[1.063rem] mq750:pr-[2.688rem] mq750:box-border">
        <div className="w-[72.875rem] flex flex-row items-start justify-between py-[0rem] pr-[0rem] pl-[1.25rem] box-border gap-[1.25rem] max-w-full mq1050:flex-wrap">
          <div className="w-[10.313rem] flex flex-col items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] box-border">
            <div className="relative capitalize font-semibold mq450:text-[1.188rem] mq1050:text-[1.625rem]">
              Question
            </div>
          </div>
          <div className="relative capitalize font-semibold mq450:text-[1.188rem] mq1050:text-[1.625rem]">
            Examples
          </div>
          <div className="w-[12.438rem] flex flex-col items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] box-border text-darkorange">
            <div className="relative capitalize font-semibold mq450:text-[1.188rem] mq1050:text-[1.625rem]">
              Test Cases
            </div>
          </div>
          <div className="relative capitalize font-semibold inline-block min-w-[8rem] mq450:text-[1.188rem] mq1050:text-[1.625rem]">
            Solution
          </div>
        </div>
        <img
          className="mr-[-11rem] w-[94.563rem] relative max-h-full max-w-[113%] shrink-0"
          loading="lazy"
          alt=""
          src="/group-37976.svg"
        />
      </section>
      <section className="w-[82.813rem] flex flex-row items-start justify-start pt-[0rem] px-[2.5rem] pb-[6.313rem] box-border max-w-full text-left text-[2.75rem] text-darkorange font-inter">
        <div className="flex-1 flex flex-col items-start justify-start gap-[2.5rem] max-w-full mq750:gap-[1.25rem]">
          <h3 className="m-0 relative text-inherit capitalize font-semibold font-inherit mq450:text-[1.625rem] mq1050:text-[2.188rem]">
            Test cases *
          </h3>
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.25rem] box-border max-w-full text-[2.25rem] text-darkgray-100">
            <div className="flex-1 relative capitalize font-semibold inline-block max-w-full mq450:text-[1.375rem] mq1050:text-[1.813rem]">
              What does the input/output look like?
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-row items-start justify-start pt-[0rem] px-[2.5rem] pb-[10.419rem] box-border max-w-full mq450:pb-[6.75rem] mq450:box-border">
        <div className="w-[87.525rem] flex flex-row flex-wrap items-start justify-start gap-[3.544rem_2.475rem] min-h-[13.313rem] max-w-full mq750:gap-[1.25rem]">
          <button className="cursor-pointer pt-[1.375rem] px-[2.731rem] pb-[1.438rem] bg-gray-100 rounded-14xl flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-darkorange hover:bg-dimgray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate">
            <div className="h-[4.894rem] w-[15.463rem] relative rounded-14xl bg-gray-100 box-border hidden border-[1px] border-solid border-darkorange" />
            <div className="relative text-[1.75rem] leading-[1.844rem] capitalize font-semibold font-inter text-darkgray-200 text-left z-[1]">
              Test case 1
            </div>
          </button>
          <button className="cursor-pointer pt-[1.375rem] px-[2.731rem] pb-[1.438rem] bg-gray-100 rounded-14xl flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-darkorange hover:bg-dimgray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate">
            <div className="h-[4.894rem] w-[15.463rem] relative rounded-14xl bg-gray-100 box-border hidden border-[1px] border-solid border-darkorange" />
            <div className="relative text-[1.75rem] leading-[1.844rem] capitalize font-semibold font-inter text-darkgray-200 text-left z-[1]">
              Test case 1
            </div>
          </button>
          <button className="cursor-pointer pt-[1.375rem] px-[2.731rem] pb-[1.438rem] bg-gray-100 rounded-14xl flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-darkorange hover:bg-dimgray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate">
            <div className="h-[4.894rem] w-[15.463rem] relative rounded-14xl bg-gray-100 box-border hidden border-[1px] border-solid border-darkorange" />
            <div className="relative text-[1.75rem] leading-[1.844rem] capitalize font-semibold font-inter text-darkgray-200 text-left z-[1]">
              Test case 1
            </div>
          </button>
          <button className="cursor-pointer pt-[1.375rem] px-[2.731rem] pb-[1.438rem] bg-gray-100 rounded-14xl flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-darkorange hover:bg-dimgray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate">
            <div className="h-[4.894rem] w-[15.463rem] relative rounded-14xl bg-gray-100 box-border hidden border-[1px] border-solid border-darkorange" />
            <div className="relative text-[1.75rem] leading-[1.844rem] capitalize font-semibold font-inter text-darkgray-200 text-left z-[1]">
              Test case 1
            </div>
          </button>
          <button className="cursor-pointer pt-[1.375rem] px-[2.731rem] pb-[1.438rem] bg-gray-100 rounded-14xl flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-darkorange hover:bg-dimgray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate">
            <div className="h-[4.894rem] w-[15.463rem] relative rounded-14xl bg-gray-100 box-border hidden border-[1px] border-solid border-darkorange" />
            <div className="relative text-[1.75rem] leading-[1.844rem] capitalize font-semibold font-inter text-darkgray-200 text-left z-[1]">
              Test case 1
            </div>
          </button>
          <button className="cursor-pointer pt-[1.375rem] px-[2.731rem] pb-[1.438rem] bg-gray-100 rounded-14xl flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-darkorange hover:bg-dimgray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate">
            <div className="h-[4.894rem] w-[15.463rem] relative rounded-14xl bg-gray-100 box-border hidden border-[1px] border-solid border-darkorange" />
            <div className="relative text-[1.75rem] leading-[1.844rem] capitalize font-semibold font-inter text-darkgray-200 text-left z-[1]">
              Test case 1
            </div>
          </button>
          <button className="cursor-pointer pt-[1.375rem] px-[2.731rem] pb-[1.438rem] bg-gray-100 rounded-14xl flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-darkorange hover:bg-dimgray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate">
            <div className="h-[4.894rem] w-[15.463rem] relative rounded-14xl bg-gray-100 box-border hidden border-[1px] border-solid border-darkorange" />
            <div className="relative text-[1.75rem] leading-[1.844rem] capitalize font-semibold font-inter text-darkgray-200 text-left z-[1]">
              Test case 1
            </div>
          </button>
          <button className="cursor-pointer pt-[1.375rem] px-[2.731rem] pb-[1.438rem] bg-gray-100 rounded-14xl flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-darkorange hover:bg-dimgray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate">
            <div className="h-[4.894rem] w-[15.463rem] relative rounded-14xl bg-gray-100 box-border hidden border-[1px] border-solid border-darkorange" />
            <div className="relative text-[1.75rem] leading-[1.844rem] capitalize font-semibold font-inter text-darkgray-200 text-left z-[1]">
              Test case 1
            </div>
          </button>
          <button className="cursor-pointer pt-[1.375rem] px-[2.731rem] pb-[1.438rem] bg-gray-100 rounded-14xl flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-darkorange hover:bg-dimgray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate">
            <div className="h-[4.894rem] w-[15.463rem] relative rounded-14xl bg-gray-100 box-border hidden border-[1px] border-solid border-darkorange" />
            <div className="relative text-[1.75rem] leading-[1.844rem] capitalize font-semibold font-inter text-darkgray-200 text-left z-[1]">
              Test case 1
            </div>
          </button>
          <button className="cursor-pointer pt-[1.375rem] px-[2.731rem] pb-[1.438rem] bg-gray-100 rounded-14xl flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-darkorange hover:bg-dimgray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate">
            <div className="h-[4.894rem] w-[15.463rem] relative rounded-14xl bg-gray-100 box-border hidden border-[1px] border-solid border-darkorange" />
            <div className="relative text-[1.75rem] leading-[1.844rem] capitalize font-semibold font-inter text-darkgray-200 text-left z-[1]">
              Test case 1
            </div>
          </button>
        </div>
      </section>
      <div className="w-[26.438rem] flex flex-row items-start justify-start py-[0rem] px-[2.5rem] box-border max-w-full">
        <button className="cursor-pointer pt-[0.5rem] px-[1.25rem] pb-[0.563rem] bg-gray-100 flex-1 rounded-mini box-border flex flex-row items-start justify-center max-w-full border-[2px] border-solid border-darkorange hover:bg-dimgray-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-chocolate">
          <div className="h-[3.831rem] w-[21.438rem] relative rounded-mini bg-gray-100 box-border hidden max-w-full border-[2px] border-solid border-darkorange" />
          <div className="relative text-[2rem] capitalize font-semibold font-inter text-darkorange text-left inline-block min-w-[7.813rem] z-[1] mq450:text-[1.188rem] mq1050:text-[1.625rem]">
            SUBMIT
          </div>
        </button>
      </div>
    </div>
  );
}

export default Question;
