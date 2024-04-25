import React from "react";
import logo from "../Assets/logo.png";
const Mcq = () => {
  return (
    <div className="bg-[#01042D] h-screen ">
      <div>
        <img
          src={logo}
          className="px-3 h-12 py-2 cursor-pointer hover:scale-105 duration-300 "
        />
      </div>

      <div className="mt-3">
        <div className="text-5xl text-[#D68536] font-bold p-4 border-b-2 border-b-[#707070]">
          Hack The Interview V
        </div>
      </div>
      <div className="grid grid-cols-2 ">
        <div className="h- border-r-2 border-r-[#707070] text-[#D68536] p-8 text-lg">
          Two spherical stars A and B have densities ρA and ρB,
          respectively. A and B have the same radius, and their
          masses MA and MB are related by MB = 2MA. Due to an interaction
          process, star A loses some of its mass, so that its radius is halved,
          while its spherical shape is retained, and its density remains ρA. The
          entire mass lost by A is deposited as a thick spherical shell
          on B with the density of the shell being ρA. If vA and vB are the
          escape velocities from A and B after the interaction process, the
          ratio.
        </div>
        <div className="p-8 text-xl">
          <ul class="text-[#D68536] h-[27rem]">
            <li class="">
              <div class="flex items-center ps-3">
                <input
                  id="list-radio-license"
                  type="radio"
                  value=""
                  name="list-radio"
                  class="w-4 h-4"
                />
                <label
                  for="list-radio-license"
                  class=" pl-4 py-3 ms-2 text-2xl font-medium text-[#D68536]"
                >
                  12 34 12 43
                </label>
              </div>
            </li>
            <li class="w-full rounded-t-lg ">
              <div class="flex items-center ps-3">
                <input
                  id="list-radio-license"
                  type="radio"
                  value=""
                  name="list-radio"
                  class="w-4 h-4 text-[#D68536] border-[#D68536] "
                />
                <label
                  for="list-radio-license"
                  class="pl-4 py-3 ms-2 text-2xl font-medium text-[#D68536]"
                >
                  23 64 72 13
                </label>
              </div>
            </li>
            <li class="w-full  rounded-t-lg ">
              <div class="flex items-center ps-3">
                <input
                  id="list-radio-license"
                  type="radio"
                  value=""
                  name="list-radio"
                  class="w-4 h-4 text-[#D68536] border-[#D68536]"
                />
                <label
                  for="list-radio-license"
                  class="pl-4 py-3 ms-2 text-2xl font-medium text-[#D68536]"
                >
                  22 34 19 4
                </label>
              </div>
            </li>
            <li class="w-full =rounded-t-lg ">
              <div class="flex items-center ps-3">
                <input
                  id="list-radio-license"
                  type="radio"
                  value=""
                  name="list-radio"
                  class="w-4 h-4 text-[#D68536]"
                />
                <label
                  for="list-radio-license"
                  class="pl-4 py-3 ms-2 text-2xl font-medium text-[#D68536]"
                >
                  8 12 92 18
                </label>
              </div>
            </li>
          </ul>
          <button className="text-[#F59837] mt-8 text-2xl font-medium border-[#F59837] border-[1px] w-[250px] rounded-lg p-1 hover:scale-110 duration-300 hover:bg-[#22243E]">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mcq;
