'use client'

import Image from "next/image"
import { useState } from "react"

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Wensday Club',
    description: 'Join Wensday Club today',
    viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [active, setActive] = useState(1)
  return (
    <html lang="en">
      <body className="flex-center">
        <main className="max-w-[1500px] w-[90%]">
          <div className="flex">
            <div className="max-w-[310px] w-[20vw] fixed h-screen bg-gradient-to-b from-sky-300 to-rose-300">
              <div className="flex-center mt-[calc(0.5rem+6vh)] mb-[calc(1.5rem+6vh)]">
                <div className="max-w-[220px] max-h-[220px] w-[calc(6rem+6vw)] h-[calc(6rem+6vw)] relative">
                    <Image
                        src="/Olivier_1500_Trptch.jpg"
                        fill={true}
                        alt="profile picture"
                        objectFit="cover"
                        className="rounded-[50%]"
                    />
                </div>
              </div>
              <button onClick={() => setActive(1)} className={"block mx-auto w-4/5 py-[3%] my-[calc(0.5rem+1vh)] text-xl font-bold " + (active === 1 ? "bg-debian-red text-white bg-opacity-75 hover:bg-opacity-100" : "text-debian-red hover:text-white hover:bg-debian-red")}>Home</button>
              <button onClick={() => setActive(2)} className={"block mx-auto w-4/5 py-[3%] my-[calc(0.5rem+1vh)] text-xl font-bold " + (active === 2 ? "bg-debian-red text-white bg-opacity-75 hover:bg-opacity-100" : "text-debian-red hover:text-white hover:bg-debian-red")}>Chat</button>
              <button onClick={() => setActive(3)} className={"block mx-auto w-4/5 py-[3%] my-[calc(0.5rem+1vh)] text-xl font-bold " + (active === 3 ? "bg-debian-red text-white bg-opacity-75 hover:bg-opacity-100" : "text-debian-red hover:text-white hover:bg-debian-red")}>Saved</button>
              <button className="block px-3 py-[3%] mx-auto mt-[10vh] xl:mt-[15vh] 2xl:mt-[25vh] w-1/2 bg-debian-red text-white rounded-[20px] text-xl font-bold">Log Out</button>
            </div>
            <div className="max-w-[310px] w-[20vw]"></div>

            <div className="w-[69vw] h-screen">
              <div className="flex items-center w-full h-[calc(4rem+2vh)] min-h-[50px] max-h-[70px] bg-debian-red">
                <button className="flex mx-20 my-5 text-white text-xl font-bold bg-purple-800 px-5 py-2 shadow-sm shadow-black rounded-[30px]">Wensday Club</button>
                <div className="ml-auto w-60 mr-10 relative leading-[2.25]">
                  <input className="block pr-2 pl-3 shadow-sm shadow-black w-4/5 rounded-[15px] box-content" type="text" placeholder="Search" />
                  <img className="absolute right-[33px] top-[-8px] scale-[70%] opacity-60 border-l-[3px] border-gray-400 pl-2 py-[0.625rem] " src="/search.png" alt="" />
                </div>
              </div>
            {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
