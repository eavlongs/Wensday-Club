"use client";

import { useState } from "react";

export default function Page() {
    const [chatID, setChatID] = useState("");
    return chatID.length === 0 ? (
        <Chat onClick={(id) => setChatID(id)} />
    ) : (
        <InsideChat />
    );
}

function Chat({ onClick }: { onClick: (id: string) => void }) {
    return (
        <div className='w-4/5 max-w-[900px] min-w-[650px] mx-auto mt-5'>
            <p className='text-2xl font-bold mb-2'>Chat</p>
            <div className='w-full'>
                <User onClick={(id) => onClick(id)} id='some ID' />
                <User onClick={(id) => onClick(id)} id='some ID' />
                <User onClick={(id) => onClick(id)} id='some ID' />
                <User onClick={(id) => onClick(id)} id='some ID' />
                <User onClick={(id) => onClick(id)} id='some ID' />
            </div>
        </div>
    );
}

function InsideChat() {
    return (
        <>
            {/* <div className="chat w-[700px] h-[500px]  py-20 px-20 items-center justify-center ml-[300px] mt-[200px] "> */}

            <div className='min-h-screen flex flex-col items-center justify-center'>
                {/* chat box */}
                <div className='w-[500px] h-[550px] flex flex-col border shadow-md bg-white'>
                    <div className='flex items-center justify-between border-b p-2 h-[70px]'>
                        {/* user info */}
                        <div className='flex items-center'>
                            <img
                                className='rounded-full w-[50px] h-[50px] ml-9 object-cover'
                                src='/Olivier_1500_Trptch.jpg'
                            />

                            <div className='pl-2'>
                                <div className='font-semibold'>
                                    <a className='hover:underline' href='#'>
                                        <h1>Bunlong Prak</h1>
                                    </a>
                                </div>
                                <div className='text-xs text-gray-600'>
                                    Online
                                </div>
                            </div>
                        </div>
                        {/* end user info */}
                        {/* chat box action */}
                        <div>
                            <a
                                className='inline-flex hover:bg-indigo-50 rounded-full p-2'
                                href='#'
                            ></a>
                            <button
                                className='inline-flex hover:bg-indigo-50 rounded-full p-2'
                                type='button'
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='h-6 w-6'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M6 18L18 6M6 6l12 12'
                                    />
                                </svg>
                            </button>
                        </div>
                        {/* end chat box action */}
                    </div>
                    <div className='flex-1 px-4 py-4 overflow-y-auto'>
                        {/* chat message */}
                        <div className='flex items-center mb-4'>
                            <div className='flex-none flex flex-col items-center space-y-1 mr-4'>
                                <img
                                    className='rounded-full  w-[60px] h-[60px] object-cover'
                                    src='Olivier_1500_Trptch.jpg'
                                />
                            </div>
                            <div className='flex-1 bg-red-600 text-white p-2 rounded-lg mb-2 relative text-xs'>
                                <div>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit.
                                </div>
                                {/* arrow */}
                                <div className='absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-red-600' />
                                {/* end arrow */}
                            </div>
                        </div>
                        {/* end chat message */}
                        {/* chat message */}
                        <div className='flex items-center flex-row-reverse mb-4'>
                            <div className='flex-none flex flex-col items-center space-y-1 ml-4'></div>
                            <div className='flex-1 bg-indigo-100 text-gray-800 p-2 rounded-lg mb-2 relative text-xs'>
                                <div>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit.Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit.
                                </div>
                                {/* arrow */}
                                <div className='absolute right-0 top-1/2 transform translate-x-1/2 rotate-45 w-2 h-2 bg-indigo-100' />
                                {/* end arrow */}
                            </div>
                        </div>
                        {/* end chat message */}
                        {/* chat message */}
                        <div className='flex items-center mb-4'>
                            <div className='flex-none flex flex-col items-center space-y-1 mr-4'>
                                <img
                                    className='rounded-full w-[60px] h-[60px] object-cover'
                                    src='Olivier_1500_Trptch.jpg'
                                />
                            </div>
                            <div className='flex-1 bg-red-600 text-white p-2 rounded-lg mb-2 relative text-xs'>
                                <div>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit.
                                </div>
                                {/* arrow */}
                                <div className='absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-red-600' />
                                {/* end arrow */}
                            </div>
                        </div>
                        {/* end chat message */}
                    </div>
                    <div className='flex items-center border-t p-2 h-[50px]'>
                        {/* chat input action */}
                        {/* end chat input action */}
                        <div className='w-full mx-1 '>
                            <input
                                className='w-full  border-none focus:outline-none'
                                type='text'
                                defaultValue=''
                                placeholder='Write A Message'
                            />
                        </div>
                        {/* chat send action */}
                        <div>
                            <button
                                className='inline-flex hover:bg-indigo-50 rounded-full p-2'
                                type='button'
                            >
                                <img
                                    src='send.png'
                                    alt=''
                                    className='w-[33px] h-[33px]'
                                />
                            </button>
                        </div>
                        {/* end chat send action */}
                    </div>
                </div>
                {/* end chat box */}
            </div>

            {/* </div> */}
        </>
    );
}

function User({ onClick, id }: { onClick: (id: string) => void; id: string }) {
    return (
        <div
            className='w-full border-2 border-gray-500 mt-[0.1rem] shadow-xl shadow-gray-200 grid grid-cols-[15%_auto_15%] items-center cursor-pointer rounded-lg py-3'
            onClick={() => onClick(id)}
        >
            <div className='mx-auto'>
                <img
                    src='Olivier_1500_Trptch.jpg'
                    alt='profile picture'
                    className='rounded-[50%] h-[4rem] lg:h-[4.5rem] desktop:h-[4rem] aspect-square object-cover'
                />
            </div>
            <div className='truncate'>
                <p className='text-debian-red text-xs sm:text-sm md:text-md lg:text-lg desktop:text-xl mb-[0.2rem] lg:mb-[0.15rem] desktop:mb-[0.2rem]'>
                    Bunlong Prank
                </p>
                {/* for some reason, the display must be inline in order for "truncate to work" */}
                <p className='inline text-[0.5rem] sm:text-xs md:text-sm lg:text-md desktop:text-lg'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Cum fuga similique modi ad assumenda veritatis doloribus id
                    harum. Ipsam, consequatur itaque.
                </p>
            </div>
            <div className='self-start mx-auto'>
                <p className='text-xs'>Tuesday</p>
            </div>
        </div>
    );
}
