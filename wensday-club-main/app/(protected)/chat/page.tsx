"use client";

import Image from "next/image";
import { useState } from "react";

interface Message {
    id: string;
    text: string;
    senderID: string;
    receiverID: string;
    time: Date;
}

const messages: Array<Message> = [
    {
        id: "123",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. fadsfa fadsfasf afsfsfs afafsadf",
        senderID: "my friend",
        receiverID: "me",
        time: new Date("December 17, 1995 03:24:00"),
    },
    {
        id: "234",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        senderID: "me",
        receiverID: "my friend",
        time: new Date("December 17, 1995 03:25:00"),
    },
    {
        id: "345",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. fadsfa fadsfasf afsfsfs afafsadf",
        senderID: "my friend",
        receiverID: "me",
        time: new Date("December 17, 1995 03:24:00"),
    },
    {
        id: "456",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. fadsfa fadsfasf afsfsfs afafsadf",
        senderID: "my friend",
        receiverID: "me",
        time: new Date("December 17, 1995 03:24:00"),
    },
    {
        id: "567",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. fadsfa fadsfasf afsfsfs afafsadf",
        senderID: "my friend",
        receiverID: "me",
        time: new Date("December 17, 1995 03:24:00"),
    },
];

messages.slice().reverse();

export default function Page() {
    const [chatID, setChatID] = useState("");
    return chatID.length === 0 ? (
        <Chat onClick={(id) => setChatID(id)} />
    ) : (
        <InsideChat onExit={() => setChatID("")} />
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
                <User onClick={(id) => onClick(id)} id='some ID' />
                <User onClick={(id) => onClick(id)} id='some ID' />
                <User onClick={(id) => onClick(id)} id='some ID' />
                <User onClick={(id) => onClick(id)} id='some ID' />
                <User onClick={(id) => onClick(id)} id='some ID' />
            </div>
        </div>
    );
}

function InsideChat({ onExit }: { onExit: () => void }) {
    return (
        <>
            {/* <div className="chat w-[700px] h-[500px]  py-20 px-20 items-center justify-center ml-[300px] mt-[200px] "> */}

            <div className='flex flex-col items-center'>
                {/* chat box */}
                <div className='lg:w-[500px] desktop:w-[600px] lg:h-[90vh] flex flex-col border shadow-md bg-white'>
                    <div className='flex items-center justify-between border-b pl-7 pr-2 py-1'>
                        {/* user info */}
                        <div className='flex items-center'>
                            <div className='relative w-[50px] aspect-square'>
                                <Image
                                    src='/Olivier_1500_Trptch.jpg'
                                    alt='profile picture'
                                    fill
                                    className='rounded-full object-cover'
                                />
                            </div>

                            <div className='ml-3'>
                                <a className='' href='/profile'>
                                    <p className='font-semibold text-xs sm:text-sm md:text-md lg:text-base desktop:text-xl'>
                                        Bunlong Prak
                                    </p>
                                </a>
                                <p className='text-xs text-gray-600 cursor-default'>
                                    Online
                                </p>
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
                                onClick={onExit}
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
                    <div className='flex-1 px-4 py-2 overflow-y-auto'>
                        {/* chat message */}
                        {messages.map((message, index) => {
                            return (
                                <Message
                                    message={message}
                                    last={
                                        index === messages.length - 1 ||
                                        message.senderID !==
                                            messages[index + 1].senderID
                                    }
                                    key={message.id}
                                />
                            );
                        })}
                    </div>
                    <div className='flex items-center border-t p-2 h-[50px]'>
                        {/* chat input action */}
                        {/* end chat input action */}
                        <div className='w-full mx-1 '>
                            <input
                                className='w-full  border-none focus:outline-none'
                                type='text'
                                placeholder='Write A Message'
                            />
                        </div>
                        {/* chat send action */}
                        <div>
                            <button
                                className='hover:bg-indigo-50 rounded-full p-2 relative w-[33px] aspect-square mr-2'
                                type='button'
                            >
                                <Image src='/send.png' alt='send icon' fill />
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
            className='w-full border-2 border-gray-500 mt-[0.1rem] shadow-xl shadow-gray-200 grid grid-cols-[15%_auto_15%] items-center cursor-pointer rounded-lg py-2'
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
                <p className='text-debian-red text-xs sm:text-sm md:text-md lg:text-base desktop:text-xl mb-[0.2rem] lg:mb-[0.15rem] desktop:mb-[0.2rem]'>
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

function Message({
    message,
    last = false,
}: {
    message: Message;
    last: boolean;
}) {
    return message.senderID !== "me" ? (
        <div className='flex items-end my-2 w-full'>
            <div className='relative h-[2.5rem] aspect-square mr-4'>
                <Image
                    src='/Olivier_1500_Trptch.jpg'
                    alt='profile picture'
                    fill
                    className='rounded-full object-cover'
                />
            </div>
            <div
                className={
                    (last ? "relative" : null) +
                    " max-w-[70%] bg-red-600 text-white p-2 rounded-lg text-xs"
                }
            >
                <p>
                    {message.senderID} Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. fadsfa fadsfasf afsfsfs a fafsadf
                </p>
                {/* arrow */}
                {last && (
                    <div className='absolute left-0 bottom-3 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-red-600' />
                )}
                {/* end arrow */}
            </div>
        </div>
    ) : (
        <div
            className={
                (last ? "relative" : null) +
                " ml-auto max-w-[70%] bg-indigo-100 text-gray-800 p-2 rounded-lg my-2 text-xs"
            }
        >
            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem
                ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
            {/* arrow */}
            {last && (
                <div className='absolute right-0 bottom-3 transform translate-x-1/2 rotate-45 w-2 h-2 bg-indigo-100' />
            )}
            {/* end arrow */}
        </div>
    );
}
