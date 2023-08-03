import type { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Wensday Club',
    description: 'Join Wensday Club today',
    viewport: "width=device-width, initial-scale=1",
}

export default function Home() {

  return (
    <>
      <div className="w-[70%] m-auto">
        <div className="flex justify-between mt-10">
          <p>something to say?</p>
          <button className="relative bg-debian-red border-2 pb-3 pt-3 px-20 rounded-[20px] top-[-20px] text-white font-bold">Post Here</button>
        </div>
        <div className="border-2 border-black shadow-sm rounded-2xl">
            <div className="flex p-4">
              <img src="/Olivier_1500_Trptch.jpg" alt="" className="rounded-[50%] max-w-[200px] max-h-[200px] w-[70px] h-[70px] object-cover"/>
              <div className="text-debian-red ml-5">
                <p className="text-2xl">Bunlong Prank</p>
                <p className="text-sm mt-3">3 days ago</p>
              </div>
            </div>
            <p className="py-2 px-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea assumenda soluta molestiae sunt dolorem, quam aliquam. Saepe harum architecto ullam, facere praesentium iusto necessitatibus nemo! Illo laboriosam laudantium in vitae.
            </p>
            <img src="/Ling.jpg" alt="" />
            <div className="flex justify-between p-10 w-[90%] m-auto">
                <button className="border-2 border-black py-3 px-6 rounded-[10px] hover:bg-debian-red hover:text-white">
                  <div className="flex">
                    <img src="/like.jpg" alt="" className="w-[30px] h-[30px] pb-1 mr-3"/>
                    <div>Like</div>
                  </div>
                </button>
                <button className="border-2 border-black py-3 px-6 rounded-[10px]  hover:bg-debian-red hover:text-white">Comment</button>
                <button className="border-2 border-black py-3 px-6 rounded-[10px]  hover:bg-debian-red hover:text-white">Share</button>
            </div>
        </div>
      </div>
    </>
  )
}
