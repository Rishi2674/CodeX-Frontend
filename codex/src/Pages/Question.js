import React from "react";
import logo from "../Assets/logo.png";
function Question() {
  return (
    <div className="bg-[#01042D] pb-8">
      {/* Logo start */}
      <div className="justify-between flex border-b-2  border-b-[#707070]">
        <img
          src={logo}
          className="px-3 h-12 py-2 mt-4  cursor-pointer hover:scale-105 duration-300 "
        />
        <p className="text-[#F59837] pt-12 p-6 text-2xl">rishika_g31</p>
      </div>
      <div className=" rounded-lg justify-start gap-10 flex mx-8 mt-10 px-6 py-2 bg-[#282D36] text-[#F59837] text-[24px]">
        <p>Problems</p>
        <p>Submit</p>
        <p>Leaderboard</p>
        <p>My Submissions</p>
      </div>
      <div className="   p-4 mt-6">
        <p className="text-4xl text-[#D68536] font-bold text-center">
          The XOR Problem
        </p>
        <div className="text-2xl text-gray-300 pt-4 px-10">
          <p>
            Alice and Bob play yet another game on an array a of size n. Alice
            starts with an empty array c. Both players take turns playing, with
            Alice starting first. On Alice's turn, she picks one element from a,
            appends that element to c, and then deletes it from a.
            The MEXMEX (minimum excludant) of an array of integers is defined as
            the smallest non-negative integer which does not occur in the array.
            For example:
          </p>
          <ul className="py-2 px-10 list-disc">
            <li className="pt-2">
              The MEX of [2,2,1][2,2,1] is 00, because 00 does not belong to the
              array.
            </li>
            <li className="pt-2">
              The MEX of [3,1,0,1][3,1,0,1] is 22, because 00 and 11 belong to
              the array, but 22 does not.
            </li>
          </ul>
          <div className="pt-8">
            <p className="text-3xl font-semibold">Input</p>
            <p className="mt-3">
              Each test contains multiple test cases. The first line contains a
              single integer t (1≤t≤5001≤500) — the number of test cases. The
              description of the test cases follows.
            </p>
            <p className="m-0">
              The first line of each test case contains two integers m and k
            </p>
            <p className="m-0">
              It is guaranteed the sum of mover all test cases does not exceed
              10001000.
            </p>
          </div>

          <div className="pt-8">
            <p className="text-3xl font-semibold">Output</p>
            <p className="mt-3">
              For each test case, find Alice's score if both players play
              optimally.
            </p>
          </div>
          {/* sample */}

          <div className="pt-8">
            <p className="text-3xl font-semibold">Example 1:</p>
            <div className="rounded-lg grid grid-cols-2 divide-x mt-4 p-3 bg-[#282D36] w-1/2">
              <div className=" border-r-2 border-r-gray-500 flex flex-col">
                <p className=" border-b-2 border-b-gray-500 pb-2">Input</p>
                <p className="pt-4">24 54 29 12 31</p>
              </div>
              <div className="">
                <p className="pl-4 border-b-2 border-b-gray-500 pb-2">Output</p>
                <p className="pl-4 pt-4">24</p>
              </div>
            </div>
          </div>
          <div className="pt-8">
            <p className="text-3xl font-semibold">Example 1:</p>
            <div className="rounded-lg grid grid-cols-2 divide-x mt-4 p-3 bg-[#282D36] w-1/2">
              <div className=" border-r-2 border-r-gray-500 flex flex-col">
                <p className=" border-b-2 border-b-gray-500 pb-2">Input</p>
                <p className="pt-4">24 54 29 12 31</p>
              </div>
              <div className="">
                <p className="pl-4 border-b-2 border-b-gray-500 pb-2">Output</p>
                <p className="pl-4 pt-4">24</p>
              </div>
            </div>
          </div>
          <div className="pt-8">
            <p className="text-3xl font-semibold">Example 1:</p>
            <div className="rounded-lg grid grid-cols-2 divide-x mt-4 p-3 bg-[#282D36] w-1/2">
              <div className=" border-r-2 border-r-gray-500 flex flex-col">
                <p className=" border-b-2 border-b-gray-500 pb-2">Input</p>
                <p className="pt-4">24 54 29 12 31</p>
              </div>
              <div className="">
                <p className="pl-4 border-b-2 border-b-gray-500 pb-2">Output</p>
                <p className="pl-4 pt-4">24</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;
