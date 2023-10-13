"use client";

import Layout from "@/components/Layout";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

interface Message {
    id: string;
    text: string;
    senderID: string;
    receiverID: string;
    time: Date;
}

// sorted descendingly
const _messages: Array<Message> = [
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
    {
        id: "678",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. fadsfa fadsfasf afsfsfs afafsadf",
        senderID: "me",
        receiverID: "my friend",
        time: new Date("December 17, 1995 03:24:00"),
    },
    {
        id: "789",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. fadsfa fadsfasf afsfsfs afafsadf",
        senderID: "me",
        receiverID: "my friend",
        time: new Date("December 17, 1995 03:24:00"),
    },
    {
        id: "890",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. fadsfa fadsfasf afsfsfs afafsadf",
        senderID: "me",
        receiverID: "my friend",
        time: new Date("December 17, 1995 03:24:00"),
    },
];

export default function Page() {
    const [chatID, setChatID] = useState("");
    return (
        <Layout>
            {chatID.length === 0 ? (
                <Chat onClick={(id) => setChatID(id)} />
            ) : (
                <InsideChat onExit={() => setChatID("")} />
            )}
        </Layout>
    );
}

function Chat({ onClick }: { onClick: (id: string) => void }) {
    return (
        <div className="w-[935px] max-[1000px] min-w-[650px] mx-[110px] mt-5">
            <p className="text-2xl mb-2">Chat</p>
            <div className="w-full">
                <User onClick={(id) => onClick(id)} id="some ID" />
                <User onClick={(id) => onClick(id)} id="some ID" />
                <User onClick={(id) => onClick(id)} id="some ID" />
                <User onClick={(id) => onClick(id)} id="some ID" />
                <User onClick={(id) => onClick(id)} id="some ID" />
                <User onClick={(id) => onClick(id)} id="some ID" />
                <User onClick={(id) => onClick(id)} id="some ID" />
                <User onClick={(id) => onClick(id)} id="some ID" />
                <User onClick={(id) => onClick(id)} id="some ID" />
                <User onClick={(id) => onClick(id)} id="some ID" />
            </div>
        </div>
    );
}

function InsideChat({ onExit }: { onExit: () => void }) {
    const [messages, setMessages] = useState(_messages);
    const messageInput = useRef<HTMLInputElement>(null);

    const sendMessage = () => {
        if (messageInput.current && messageInput.current.value !== "") {
            let newMessage: Message = {
                id: "obj" + Math.floor(Math.random() * 10000),
                text: messageInput.current.value,
                senderID: "me",
                receiverID: "my friend",
                time: new Date(),
            };

            setMessages((prev) => [newMessage, ...prev]);

            messageInput.current.value = "";
        }
    };

    useEffect(() => {
        console.log(messages);
    }, [messages]);

    return (
        <>
            {/* <div className="chat w-[700px] h-[500px]  py-20 px-20 items-center justify-center ml-[300px] mt-[200px] "> */}

            <div className="flex flex-col items-center">
                {/* chat box */}
                <div className="lg:w-[500px] desktop:w-[600px] lg:h-[90vh] flex flex-col border shadow-md bg-white">
                    <div className="flex items-center justify-between border-b pl-7 pr-2 py-1">
                        {/* user info */}
                        <div className="flex items-center">
                            <div className="relative w-[50px] aspect-square">
                                <Image
                                    src="/Olivier_1500_Trptch.jpg"
                                    alt="profile picture"
                                    fill
                                    className="rounded-full object-cover"
                                />
                            </div>

<<<<<<< HEAD
                            <div className="ml-3">
                                <a className="" href="/profile">
                                    <p className="font-semibold text-xs sm:text-sm md:text-md lg:text-base desktop:text-xl">
=======
                            <div className='ml-3'>
                                <a className='' href='/profile'>
                                    <p className='font-semibold text-xs sm:text-sm md:text-base desktop:text-xl'>
<<<<<<< HEAD
>>>>>>> bc5335d3f9d922e4d1ef1b60c26cf2f454495db1
=======
>>>>>>> bc5335d3f9d922e4d1ef1b60c26cf2f454495db1
                                        Bunlong Prak
                                    </p>
                                </a>
                                <p className="text-xs text-gray-600 cursor-default">
                                    Online
                                </p>
                            </div>
                        </div>
                        {/* end user info */}
                        {/* chat box action */}
                        <div>
                            <a
                                className="inline-flex hover:bg-indigo-50 rounded-full p-2"
                                href="#"
                            ></a>
                            <button
                                className="inline-flex hover:bg-indigo-50 rounded-full p-2"
                                type="button"
                                onClick={onExit}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        {/* end chat box action */}
                    </div>
                    <div className="flex-1 px-4 py-2 overflow-y-auto flex flex-col-reverse">
                        {/* chat message */}
                        {messages.map((message, index) => {
                            return (
                                <Message
                                    message={message}
                                    last={
                                        index === 0 ||
                                        message.senderID !==
                                            messages[index - 1].senderID
                                    }
                                    key={message.id}
                                />
                            );
                        })}
                    </div>
                    <div className="flex items-center border-t p-2">
                        {/* chat input action */}
                        {/* end chat input action */}
                        <div className="w-full mx-1 ">
                            <input
                                className="w-full border-none focus:outline-none text-sm"
                                type="text"
                                placeholder="Write A Message"
                                ref={messageInput}
                                onKeyUp={(event) => {
                                    if (event.key === "Enter") sendMessage();
                                }}
                            />
                        </div>
                        {/* chat send action */}

                        <button
                            className="hover:bg-indigo-50 rounded-full p-1 relative w-[25px] aspect-square mr-2"
                            type="button"
                            onClick={sendMessage}
                        >
                            <Image src="/send.png" alt="send icon" fill />
                        </button>

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
            className="w-[935px] border-2 border-gray-500 mt-2 grid grid-cols-[15%_auto_15%] items-center cursor-pointer rounded-lg py-2 hover:bg-gray-100"
            onClick={() => onClick(id)}
        >
            <div className="mx-auto">
                <img
                    src="Olivier_1500_Trptch.jpg"
                    alt="profile picture"
                    className="rounded-[50%] w-[5rem] h-[4rem] lg:h-[5rem] desktop:h-[5rem] aspect-square object-cover"
                />
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="truncate pr-10">
                <p className="text-sm lg:text-sm desktop:text-base font-semibold text-debian-red cursor-pointer hover:underline !leading-8 lg:!leading-10 mb-1">
                    Bunlong Prank
                </p>
                {/* for some reason, the display must be inline in order for "truncate to work" */}
                <p className="inline text-[0.5rem] sm:text-xs md:text-sm lg:text-md desktop:text-lg">
=======
            <div className='truncate'>
                <p className='text-debian-red text-xs sm:text-sm md:text-base desktop:text-xl mb-[0.2rem] lg:mb-[0.15rem] desktop:mb-[0.2rem]'>
                    Bunlong Prank
                </p>
                {/* for some reason, the display must be inline in order for "truncate to work" */}
                <p className='inline text-[0.5rem] sm:text-xs md:text-sm lg:text-base desktop:text-lg'>
>>>>>>> bc5335d3f9d922e4d1ef1b60c26cf2f454495db1
=======
            <div className='truncate'>
                <p className='text-debian-red text-xs sm:text-sm md:text-base desktop:text-xl mb-[0.2rem] lg:mb-[0.15rem] desktop:mb-[0.2rem]'>
                    Bunlong Prank
                </p>
                {/* for some reason, the display must be inline in order for "truncate to work" */}
                <p className='inline text-[0.5rem] sm:text-xs md:text-sm lg:text-base desktop:text-lg'>
>>>>>>> bc5335d3f9d922e4d1ef1b60c26cf2f454495db1
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Cum fuga similique modi ad assumenda veritatis doloribus id
                    harum. Ipsam, consequatur itaque.
                </p>
            </div>
            <div className="self-start mx-auto">
                <p className="text-xs">Tuesday</p>
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
        <div
            className={
                (last ? "mb-2" : null) + " flex items-end my-[0.12rem] w-full"
            }
        >
            <div className="relative h-[2.5rem] aspect-square mr-4">
                {last ? (
                    <Image
                        src="/Olivier_1500_Trptch.jpg"
                        alt="profile picture"
                        fill
                        className="rounded-full object-cover"
                    />
                ) : null}
            </div>
            <div
                className={
                    (last ? "relative" : null) +
                    " max-w-[70%] bg-red-600 text-white p-2 rounded-lg text-xs"
                }
            >
                <p>{message.text}</p>
                {/* arrow */}
                {last && (
                    <div className="absolute left-0 bottom-3 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-red-600" />
                )}
                {/* end arrow */}
            </div>
        </div>
    ) : (
        <div
            className={
                (last ? "relative mb-2" : null) +
                " ml-auto max-w-[70%] bg-indigo-100 text-gray-800 p-2 rounded-lg my-[0.12rem] text-xs"
            }
        >
            <div>{message.text}</div>
            {/* arrow */}
            {last && (
                <div className="absolute right-0 bottom-3 transform translate-x-1/2 rotate-45 w-2 h-2 bg-indigo-100" />
            )}
            {/* end arrow */}
        </div>
    );
}
