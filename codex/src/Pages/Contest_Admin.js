import React, { useState } from 'react'
import logo from '../Assets/logo.png'
import { MdEdit } from "react-icons/md";
import { IoCalendarClear } from "react-icons/io5";
import { FaLastfm, FaPlus } from "react-icons/fa";

const Contest_Admin = () => {

    const [ifBold1, setIfBold1] = useState("D68536");
    const [ifBold2, setIfBold2] = useState("B49372")
    const [ifBold3, setIfBold3] = useState("B49372")
    const [status,setStatus] = useState("problem");

    const handleProblemChange = () => {
        setIfBold1("D68536");
        setIfBold2("B49372");
        setIfBold3("B49372");
        setStatus("problem");
    }

    const handleGuidelineChange = () => {
        setIfBold2("D68536");
        setIfBold1("B49372");
        setIfBold3("B49372");
        setStatus("guidelines");
    }

    const handleLeaderboardChange = () => {
        setIfBold3("D68536");
        setIfBold1("B49372");
        setIfBold2("B49372");
        setStatus("leaderboard");
    }


  return (
    <div className='bg-[#01042D] h-screen'>
        {/* Logo start */}
        <div>
        <img src = {logo} className='px-3 h-12 py-2   cursor-pointer hover:scale-105 duration-300 ' />
      </div>
      {/* Edit Details option */}
      <div className='flex justify-end   border-b-[1px] border-b-[#a2a2a2]'>
        <div className=' text-base flex text-[#D68536]  p-3  gap-3 items-center cursor-pointer'>
        <div>Edit Details </div>
        <div className='text-xl' >
        <MdEdit/>
        </div>
        </div>
      </div>
      {/* Heading */}
      <div className='flex justify-between   items-center p-3 mt-6'>
        <div className='text-[#D68536] text-4xl font-bold'>
            Hack The Interview
        </div>
        <div className='text-[#B49372] text-2xl font-semibold '>
            15 Days Left
        </div>
      </div>
      {/* Date and Calender Time */}
      <div className='flex    items-center px-3 '>
        <div className='text-[#D68536] text-4xl font-bold'>
            <IoCalendarClear/>
        </div>
        <div className='text-[#B49372] text-2xl font-bold ml-2'>
            08/10/24
        </div>
      </div>
      {/* Start and End time */}
      <div className='p-3 flex   items-center gap-10 mt-4'>
        <div className='flex items-center'>
            <div className='text-[#D68536] text-lg font-bold' >Start Time-</div>
            <div className='text-[#B49372] text-lg font-bold' >08:02:24</div>
        </div>
        <div className='flex items-center'>
            <div className='text-[#D68536] text-lg font-bold' >End Time-</div>
            <div className='text-[#B49372] text-lg font-bold' >08:02:24</div>
        </div>
      </div>
      {/* Main section start */}
       
      <div className='p-3 flex mt-3   items-center w-2/3 justify-between'>
        <button onClick={handleProblemChange}>
        <div className= {`text-lg font-bold text-[#${ifBold1}]`}>
            Set Problems
        </div>
        </button>
        <button onClick={handleGuidelineChange}>
        <div className= {`text-lg font-bold text-[#${ifBold2}]`}>
            View Guidelines
        </div>
        </button>
        <button onClick={handleLeaderboardChange}>
        <div className= {`text-lg font-bold text-[#${ifBold3}]`}>
            LeaderBoard
        </div>
        </button>
      </div>
      <hr className=' text-[#B49372]'/>
      {/* Section Palette */}
      {
        status==="problem" ? (
            // problem section start
            <div className='p-3'>
                {/* add problem button */}
                    <button className=' bg-[#B64320] rounded-md mt-3 hover:scale-105 duration-300'>
                        <div className='flex items-center px-2 py-1 gap-1'>
                            <div className='text-[#D6D6D7] text-base'> <FaPlus/>  </div>
                            <div className='text-[#D6D6D7] text-base'>Add Problem</div>
                        </div>
                    </button>
                {/* view questions option */}
                <div className='flex-col h-[300px] overflow-scroll mt-3 overflow-x-hidden'>
                    {/* each questio card */}
                    <div className='w-2/3 h-32 bg-[#AAAAAA] backdrop-filter backdrop-blur-lg z-30 bg-opacity-30 rounded-lg mt-5'>
                        <div className='text-[#DA8D41] text-2xl p-5 font-bold'>New Keyboard</div>
                        <div className='p-6 flex w-full items-center justify-between'>
                            <div className='flex justify-between w-1/2'>
                                <div className='text-[#aaaaaa] flex text-xs gap-1 '>
                                    <div>Max Score:</div> 
                                    <div className='font-bold'>20</div>
                                </div>
                                <div className='text-[#aaaaaa] flex text-xs gap-1'>
                                    <div>Success Rate: </div>
                                    <div className='font-bold'>67.9%</div>
                                </div>
                            </div>
                            <div>
                                <button className='border-[1px] flex justify-center border-[#B64320] rounded-lg w-[115px] hover:scale-105 duration-300'>
                                    <div className='gap-1 text-[#aaaaaa] font-bold  '>
                                    Edit
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* question end */}
                    {/* each questio card */}
                    <div className='w-2/3 h-32 bg-[#AAAAAA] backdrop-filter backdrop-blur-lg z-30 bg-opacity-30 rounded-lg mt-5'>
                        <div className='text-[#DA8D41] text-2xl p-5 font-bold'>New Keyboard</div>
                        <div className='p-6 flex w-full items-center justify-between'>
                            <div className='flex justify-between w-1/2'>
                                <div className='text-[#aaaaaa] flex text-xs gap-1 '>
                                    <div>Max Score:</div> 
                                    <div className='font-bold'>20</div>
                                </div>
                                <div className='text-[#aaaaaa] flex text-xs gap-1'>
                                    <div>Success Rate: </div>
                                    <div className='font-bold'>67.9%</div>
                                </div>
                            </div>
                            <div>
                                <button className='border-[1px] flex justify-center border-[#B64320] rounded-lg w-[115px] hover:scale-105 duration-300'>
                                    <div className='gap-1 text-[#aaaaaa] font-bold  '>
                                    Edit
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* question end */}
                    {/* each questio card */}
                    <div className='w-2/3 h-32 bg-[#AAAAAA] backdrop-filter backdrop-blur-lg z-30 bg-opacity-30 rounded-lg mt-5'>
                        <div className='text-[#DA8D41] text-2xl p-5 font-bold'>New Keyboard</div>
                        <div className='p-6 flex w-full items-center justify-between'>
                            <div className='flex justify-between w-1/2'>
                                <div className='text-[#aaaaaa] flex text-xs gap-1 '>
                                    <div>Max Score:</div> 
                                    <div className='font-bold'>20</div>
                                </div>
                                <div className='text-[#aaaaaa] flex text-xs gap-1'>
                                    <div>Success Rate: </div>
                                    <div className='font-bold'>67.9%</div>
                                </div>
                            </div>
                            <div>
                                <button className='border-[1px] flex justify-center border-[#B64320] rounded-lg w-[115px] hover:scale-105 duration-300'>
                                    <div className='gap-1 text-[#aaaaaa] font-bold  '>
                                    Edit
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* question end */}
                    {/* each questio card */}
                    <div className='w-2/3 h-32 bg-[#AAAAAA] backdrop-filter backdrop-blur-lg z-30 bg-opacity-30 rounded-lg mt-5'>
                        <div className='text-[#DA8D41] text-2xl p-5 font-bold'>New Keyboard</div>
                        <div className='p-6 flex w-full items-center justify-between'>
                            <div className='flex justify-between w-1/2'>
                                <div className='text-[#aaaaaa] flex text-xs gap-1 '>
                                    <div>Max Score:</div> 
                                    <div className='font-bold'>20</div>
                                </div>
                                <div className='text-[#aaaaaa] flex text-xs gap-1'>
                                    <div>Success Rate: </div>
                                    <div className='font-bold'>67.9%</div>
                                </div>
                            </div>
                            <div>
                                <button className='border-[1px] flex justify-center border-[#B64320] rounded-lg w-[115px] hover:scale-105 duration-300'>
                                    <div className='gap-1 text-[#aaaaaa] font-bold  '>
                                    Edit
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* question end */}
                    {/* each questio card */}
                    <div className='w-2/3 h-32 bg-[#AAAAAA] backdrop-filter backdrop-blur-lg z-30 bg-opacity-30 rounded-lg mt-5'>
                        <div className='text-[#DA8D41] text-2xl p-5 font-bold'>New Keyboard</div>
                        <div className='p-6 flex w-full items-center justify-between'>
                            <div className='flex justify-between w-1/2'>
                                <div className='text-[#aaaaaa] flex text-xs gap-1 '>
                                    <div>Max Score:</div> 
                                    <div className='font-bold'>20</div>
                                </div>
                                <div className='text-[#aaaaaa] flex text-xs gap-1'>
                                    <div>Success Rate: </div>
                                    <div className='font-bold'>67.9%</div>
                                </div>
                            </div>
                            <div>
                                <button className='border-[1px] flex justify-center border-[#B64320] rounded-lg w-[115px] hover:scale-105 duration-300'>
                                    <div className='gap-1 text-[#aaaaaa] font-bold  '>
                                    Edit
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* question end */}
                    {/* each questio card */}
                    <div className='w-2/3 h-32 bg-[#AAAAAA] backdrop-filter backdrop-blur-lg z-30 bg-opacity-30 rounded-lg mt-5'>
                        <div className='text-[#DA8D41] text-2xl p-5 font-bold'>New Keyboard</div>
                        <div className='p-6 flex w-full items-center justify-between'>
                            <div className='flex justify-between w-1/2'>
                                <div className='text-[#aaaaaa] flex text-xs gap-1 '>
                                    <div>Max Score:</div> 
                                    <div className='font-bold'>20</div>
                                </div>
                                <div className='text-[#aaaaaa] flex text-xs gap-1'>
                                    <div>Success Rate: </div>
                                    <div className='font-bold'>67.9%</div>
                                </div>
                            </div>
                            <div>
                                <button className='border-[1px] flex justify-center border-[#B64320] rounded-lg w-[115px] hover:scale-105 duration-300'>
                                    <div className='gap-1 text-[#aaaaaa] font-bold  '>
                                    Edit
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* question end */}
                    
                </div>
            </div>
        ) : status === "guidelines" ? (
            // guidelines section start
            <div className='text-white'>
                guidelines
            </div>
        ) : (
            // leaderboard section start
            <div className='text-white'>
                leaderboard
            </div>
        )
      }
      {/*  */}

      
    </div>
  )
}

export default Contest_Admin
