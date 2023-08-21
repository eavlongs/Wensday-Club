import Image from "next/image";
import "../globals.css";
import Link from "next/link";
import SidebarButton from "./SidebarButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        default: "Wensday Club",
        template: "%s",
    },
    description: "Join Wensday Club today",
    viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <head>
                <script
                    src='https://kit.fontawesome.com/bc3caf0f25.js'
                    crossOrigin='anonymous'
                ></script>
            </head>
            <body className='flex-center'>
                <main className='max-w-[1500px] w-full lg:w-[90%]'>
                    <div className='flex'>
                        <div className='max-w-[310px] w-[15vw] fixed h-screen bg-gradient-to-b from-sky-300 to-rose-300 flex flex-col justify-around'>
                            <div className='flex-center flex-col overflow-hidden'>
                                <Link href='/edit'>
                                    <div className='max-w-[220px] w-16 sm:w-24 md:w-28 lg:w-[9rem] desktop:w-48 2xl:w-72 aspect-square relative'>
                                        <Image
                                            src='/Olivier_1500_Trptch.jpg'
                                            fill={true}
                                            alt='profile picture'
                                            className='rounded-[50%] object-cover'
                                        />
                                    </div>
                                </Link>
                                <p className='text-[0.5rem] sm:text-xs md:text-sm lg:text-md desktop:text-lg'>
                                    Yi Long Ma
                                </p>
                            </div>
                            <div className='flex flex-col gap-y-1 lg:gap-y-3'>
                                <SidebarButton text='home' />
                                <SidebarButton text='chat' />
                                <SidebarButton text='saved' />
                            </div>
                            <Link href='/login'>
                                <button className='block px-3 py-1 desktop:py-2 mx-auto md:w-2/3 lg:w-7/12 desktop:w-1/2 bg-debian-red text-white rounded-[20px] text-[0.5rem] sm:text-xs md:text-sm lg:text-md desktop:text-lg font-bold'>
                                    Log Out
                                </button>
                            </Link>
                        </div>
                        <div className='max-w-[310px] w-[15vw]'></div>

                        <div className='w-[85vw] lg:w-[75vw] h-screen'>
                            <div className='flex items-center justify-between w-full h-10 lg:h-12 desktop:h-16 bg-debian-red'>
                                <Link href='/'>
                                    <div className='flex ml-10 md:ml-14 lg:ml-20 text-white text-xs md:text-sm lg:text-lg desktop:text-xl font-bold bg-purple-800 px-3 lg:px-5 py-[0.2rem] lg:py-1 desktop:py-2 shadow-sm shadow-black rounded-[30px]'>
                                        Wensday Club
                                    </div>
                                </Link>
                                <div className='w-40 md:w-48 lg:w-52 desktop:w-60 relative leading-[2.25]'>
                                    <input
                                        className='block pr-2 pl-3 py-1 shadow-sm shadow-black w-4/5 rounded-[15px] box-content text-xs md:text-sm lg:text-md desktop:text-lg'
                                        type='text'
                                        placeholder='Search'
                                    />
                                    <img
                                        className='absolute right-[8px] md:right-[17px] lg:right-[20px] desktop:right-[30px] top-[-14px] md:top-[-12px] desktop:top-[-8px] text-xs md:text-sm lg:text-lg desktop:text-xl scale-[47%] md:scale-[54%] desktop:scale-[70%] opacity-60 border-l-[3px] border-gray-400 pl-2 py-[0.625rem] '
                                        src='/search.png'
                                        alt=''
                                    />
                                </div>
                            </div>
                            {children}
                        </div>
                    </div>
                </main>
            </body>
        </html>
    );
}
