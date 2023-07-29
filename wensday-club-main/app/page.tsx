'use client'

import Image from "next/image"
import { useState } from "react"


export default function Home() {
  const [active, setActive] = useState(1)
  return (
    <>
      <div className="flex">
        <div className="w-[310px] h-screen fixed bg-gradient-to-b from-sky-300 to-rose-300">
          <div className="flex-center mt-20 mb-32">
            <Image src="/Olivier_1500_Trptch.jpg" width={220} height={200} alt="profile picture" className="rounded-[50%] aspect-square object-cover " />
          </div>
          <button onClick={() => setActive(1)} className={"block mx-auto w-48 py-2 my-10 text-xl font-bold " + (active === 1 ? "bg-debian-red text-white bg-opacity-75 hover:bg-opacity-100" : "text-debian-red hover:text-white hover:bg-debian-red")}>Home</button>
          <button onClick={() => setActive(2)} className={"block mx-auto w-48 py-2 my-10 text-xl font-bold " + (active === 2 ? "bg-debian-red text-white bg-opacity-75 hover:bg-opacity-100" : "text-debian-red hover:text-white hover:bg-debian-red")}>Chat</button>
          <button onClick={() => setActive(3)} className={"block mx-auto w-48 py-2 my-10 text-xl font-bold " + (active === 3 ? "bg-debian-red text-white bg-opacity-75 hover:bg-opacity-100" : "text-debian-red hover:text-white hover:bg-debian-red")}>Saved</button>
          <button className="block px-3 py-2 mx-auto mt-80 w-36 bg-debian-red text-white rounded-[20px] text-xl font-bold">Log Out</button>
        </div>
        {/* the sidebar width below the real fixed sidebar */}
        <div className="w-[390px]"></div>
        <div className="w-full h-[80px] bg-debian-red">
            <button className="flex mx-20 my-5 text-white text-xl font-bold bg-blue-600 px-5 py-2">Wenzday Club</button>
        </div>
      </div>
    </>
  )
}
