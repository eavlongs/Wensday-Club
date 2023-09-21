import Link from "next/link";
import Image from "next/image";
import SidebarButton from "@/app/(protected)/SidebarButton";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='max-w-[1500px] w-full lg:w-[90%]'>
            <nav className='w-[--sidebar-width] fixed h-screen bg-gradient-to-b from-sky-300 to-rose-300 flex flex-col justify-around'>
                <div className='flex-center flex-col overflow-hidden'>
                    <Link href='/profile'>
                        <div className='max-w-[220px] w-16 sm:w-24 md:w-28 lg:w-[9rem] desktop:w-48 2xl:w-72 aspect-square relative'>
                            <Image
                                src='/Olivier_1500_Trptch.jpg'
                                fill={true}
                                alt='profile picture'
                                className='rounded-[50%] object-cover'
                            />
                        </div>
                    </Link>
                    <p className='text-[0.5rem] sm:text-xs md:text-sm lg:text-base desktop:text-lg'>
                        Yi Long Ma
                    </p>
                </div>
                <div className='flex flex-col gap-y-1 lg:gap-y-3'>
                    <SidebarButton text='home' />
                    <SidebarButton text='chat' />
                    <SidebarButton text='saved' />
                </div>
                <Link href='/login'>
                    <button className='block px-3 py-1 desktop:py-2 mx-auto md:w-2/3 lg:w-7/12 desktop:w-1/2 bg-debian-red text-white rounded-[20px] text-[0.5rem] sm:text-xs md:text-sm lg:text-base desktop:text-lg font-bold'>
                        Log Out
                    </button>
                </Link>
            </nav>

            <div className='ml-[--sidebar-width] h-screen'>
                <header className='flex items-center justify-between w-full h-10 lg:h-12 desktop:h-16 bg-debian-red'>
                    <Link href='/'>
                        <div className='flex ml-10 md:ml-14 lg:ml-20 text-white text-xs md:text-sm lg:text-lg desktop:text-xl font-bold bg-purple-800 px-3 lg:px-5 py-[0.2rem] lg:py-1 desktop:py-2 shadow-sm shadow-black rounded-[30px]'>
                            Wensday Club
                        </div>
                    </Link>
                    <div className='w-40 md:w-48 lg:w-52 desktop:w-60 relative leading-[2.25]'>
                        <input
                            className='block pr-2 pl-3 py-1 shadow-sm shadow-black w-4/5 rounded-[15px] box-content text-xs md:text-sm lg:text-base desktop:text-lg'
                            type='text'
                            placeholder='Search'
                        />
                        <img
                            className='absolute right-[8px] md:right-[17px] lg:right-[20px] desktop:right-[30px] top-[-14px] md:top-[-12px] desktop:top-[-8px] text-xs md:text-sm lg:text-lg desktop:text-xl scale-[47%] md:scale-[54%] desktop:scale-[70%] opacity-60 border-l-[3px] border-gray-400 pl-2 py-[0.625rem] '
                            src='/search.png'
                            alt=''
                        />
                    </div>
                </header>
                {children}
            </div>
        </div>
    );
}
