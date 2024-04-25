import React from 'react'
import logo from '../Assets/logo.png'


export default function LandingPage() {
  return (
    <div className='h-screen bg-[#01042D]'>
        <div className="flex justify-between">
        <div>
          <img
            src={logo}
            className="pr-3 pl-5 h-14 pt-4 cursor-pointer hover:scale-105 duration-300 "
          />
        </div>
        <div className="mt-4 pr-6">
          <button className="text-white border-2 border-[#B64320] hover:scale-110 duration-300 rounded-lg px-6 py-1 mx-3">
            HOME
          </button>
          <button className="text-white border-2 border-[#B64320] hover:scale-110 duration-300 rounded-lg px-6 py-1 mx-3">
            SIGNUP
          </button>
        </div>
      </div>

    </div>
  )
}
