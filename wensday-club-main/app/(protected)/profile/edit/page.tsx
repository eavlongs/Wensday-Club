"use client";
import ChangePassword from "@/components/ChangePassword";
import Layout from "@/components/Layout";
import Image from "next/image";
import { MutableRefObject, useRef, useState } from "react";
import "@/app/globals.css";
import { titleCase } from "@/app/helper";

interface HobbyType {
    id: string;
    hobby: string;
}

let initialHobbies: Array<HobbyType> = [
    {
        id: "id123",
        hobby: "Travelling",
    },
    {
        id: "id234",
        hobby: "Music",
    },
    {
        id: "id345",
        hobby: "Gaming",
    },
];

export default function Page() {
    const hobbyInput = useRef<HTMLInputElement>(null);
    const [editPassword, setEditPassword] = useState(false);
    const [firstName, setFirstName] = useState("Yilong");
    const [lastName, setLastName] = useState("Ma");
    const [aboutMe, setAboutMe] = useState(
        `"Preoccupied with a single leaf... you won't see the tree. Preoccupied with a single tree... you'll miss the entire forest."`
    );
    const [hobby, setHobby] = useState("");
    const [allHobbies, setAllHobbies] = useState(initialHobbies);

    function addNewHobby() {
        if (hobby.length === 0) return;
        if (allHobbies.length === 10) {
            alert("You can only have a maximum of 10 hobbies");
            return;
        }
        let newHobby: HobbyType = {
            id: "id" + new Date().getTime(),
            hobby: titleCase(hobby),
        };

        allHobbies.push(newHobby);
        setHobby("");

        hobbyInput.current?.focus();
    }

    function removeHobby(id: string) {
        setAllHobbies(
            allHobbies.filter((hobbyObject) => {
                return hobbyObject.id != id;
            })
        );
    }
    return (
        <Layout>
            <div className='w-full border-gray-700 pb-10'>
                <div className='relative w-full mt-3 sm:mt-6 flex'>
                    <button
                        className='absolute left-6 z-[2] block bg-debian-red hover:bg-red-700 text-white font-bold cursor-pointer mb-3 text-[0.7rem] md:text-xs lg:text-sm desktop:text-base py-[0.35rem] desktop:py-2 px-2 lg:px-3 desktop:px-4 rounded-2xl'
                        onClick={() => setEditPassword(true)}
                    >
                        Change Password
                    </button>

                    <div className='w-full flex items-center justify-center flex-col gap-y-3 mb-5 mt-10 sm:mt-0'>
                        <div className='flex justify-center items-center gap-x-5'>
                            <div className='w-[5rem] md:w-[6rem] lg:w-[7rem] desktop:w-[8rem] aspect-square relative'>
                                <Image
                                    src='/Olivier_1500_Trptch.jpg'
                                    fill
                                    alt='profile picture'
                                    className='rounded-[50%] object-cover cursor-default'
                                />
                            </div>

                            <div className='w-auto'>
                                <button className='block bg-debian-red hover:bg-red-700 text-white font-bold cursor-pointer mb-3 text-[0.7rem] md:text-xs lg:text-sm desktop:text-base py-[0.35rem] desktop:py-2 px-2 lg:px-3 desktop:px-4 rounded-2xl'>
                                    Upload Profile Picture
                                </button>

                                <button className='block w-full bg-debian-red hover:bg-red-700 text-white font-bold cursor-pointer mb-3 text-[0.7rem] md:text-xs lg:text-sm desktop:text-base py-[0.35rem] desktop:py-2 px-2 lg:px-3 desktop:px-4 rounded-2xl'>
                                    Delete Profile Picture
                                </button>
                            </div>
                        </div>
                        <div className='flex gap-x-5'>
                            <input
                                className='bg-gray-200 focus:brightness-105 border-2 border-gray-200 focus:border-gray-300 rounded-lg py-[0.35rem] lg:py-2 px-1 text-gray-700 leading-tight tracking-wide outline-none text-center text-[0.7rem] md:text-xs lg:text-sm desktop:text-base'
                                name='firstName'
                                type='text'
                                placeholder='First Name'
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                // @ts-ignore
                                onClick={(e) => e.target.select()}
                            />
                            <input
                                className='bg-gray-200 focus:brightness-105 border-2 border-gray-200 focus:border-gray-300 rounded-lg py-[0.35rem] lg:py-2 px-1 text-gray-700 leading-tight tracking-wide outline-none text-center text-[0.7rem] md:text-xs lg:text-sm desktop:text-base'
                                name='lastName'
                                type='text'
                                placeholder='Last Name'
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                // @ts-ignore
                                onClick={(e) => e.target.select()}
                            />
                        </div>
                    </div>
                </div>
                <div className='block w-full h-[12rem] md:h-[13rem] lg:h-[15rem] desktop:h-[17rem] bg-cover bg-center p-6 shadow-lg bg-neutral-700 relative'>
                    <Image
                        src='/sonflower.jpg'
                        fill
                        alt='cover picture'
                        className='object-cover absolute top-0 left-0 cursor-pointer'
                    />
                    <div className='bottom-2 md:bottom-3 lg:bottom-4 desktop:bottom-5 absolute z-[1] flex flex-col'>
                        <button
                            type='button'
                            className='mb-2 inline-block rounded border-2 border-neutral-50 px-2 md:px-3 lg:px-4 desktop:px-6 py-[0.2rem] md:py-[0.3rem] lg:py-[0.4rem] desktop:py-2 text-[0.5rem] md:text-[0.55rem] lg:text-[0.65rem] desktop:text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 bg-black bg-opacity-25 hover:bg-opacity-40'
                        >
                            Upload New Cover
                        </button>
                        <button
                            type='button'
                            className='inline-block rounded border-2 border-neutral-50 px-2 md:px-3 lg:px-4 desktop:px-6 py-[0.2rem] md:py-[0.3rem] lg:py-[0.4rem] desktop:py-2 text-[0.5rem] md:text-[0.55rem] lg:text-[0.65rem] desktop:text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 bg-black bg-opacity-25 hover:bg-opacity-40'
                        >
                            Delete Cover
                        </button>
                    </div>
                </div>
                <div className='mx-0 sm:mx-5 lg:mx-16 desktop:mx-28 mt-5 mb-5 grid grid-cols-12 gap-x-5 gap-y-4'>
                    <p className='text-sm md:text-base lg:text-lg desktop:text-xl font-bold mt-2 col-span-2 text-end'>
                        About Me
                    </p>
                    <div className='col-span-10 flex flex-col '>
                        <textarea
                            className='hide-scrollbar min-h-[7rem] resize-none outline-gray-400 border-[1px] border-gray-500 rounded-lg p-2 tracking-[-0.015rem] text-[0.7rem] md:text-xs lg:text-sm desktop:text-base'
                            onChange={(e) => {
                                if (e.target.value.length <= 255)
                                    setAboutMe(e.target.value);
                            }}
                            maxLength={255}
                        >
                            {aboutMe}
                        </textarea>
                        <span
                            className={
                                "block ml-auto text-sm" +
                                (aboutMe.length === 255 ? " text-red-500" : "")
                            }
                        >
                            {aboutMe.length}/255
                        </span>
                    </div>

                    <p className='text-sm md:text-base lg:text-lg desktop:text-xl font-bold mt-2 col-span-2 text-end'>
                        Hobbies
                    </p>
                    <div className='col-span-10'>
                        <div className='flex gap-x-5'>
                            <div className='flex flex-col flex-1'>
                                <input
                                    type='text'
                                    className='block w-full outline-gray-400 px-2 py-2 border-[1px] border-gray-500 text-[0.7rem] md:text-xs lg:text-sm desktop:text-base'
                                    value={hobby}
                                    ref={hobbyInput}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") addNewHobby();
                                    }}
                                    onChange={(e) => {
                                        if (e.target.value.length <= 20)
                                            setHobby(e.target.value);
                                    }}
                                />
                                <span
                                    className={
                                        "block ml-auto text-sm" +
                                        (hobby.length === 20
                                            ? " text-red-500"
                                            : "")
                                    }
                                >
                                    {hobby.length}/20
                                </span>
                            </div>
                            <button
                                className='block self-start py-2 px-5 border-[1px] border-black rounded-lg text-[0.7rem] md:text-xs lg:text-sm desktop:text-base bg-debian-red hover:bg-red-700 text-white font-bold'
                                onClick={addNewHobby}
                            >
                                Add
                            </button>
                        </div>
                        {allHobbies.map((hobbyObject) => (
                            <div
                                className='inline-block mr-2 border-[1px] border-gray-500 rounded-lg py-1 px-2 cursor-default hover:border-gray-600'
                                key={hobbyObject.id}
                            >
                                <div className='flex items-center gap-x-1'>
                                    <div className='flex items-center border-[1px] border-red-500 bg-red-500 p-1 rounded-full text-[0.7rem] md:text-xs lg:text-sm desktop:text-base'>
                                        <button
                                            className='relative w-3 aspect-square'
                                            onClick={() => {
                                                removeHobby(hobbyObject.id);
                                            }}
                                        >
                                            <Image
                                                src='/remove.png'
                                                fill
                                                alt='remove icon'
                                            />
                                        </button>
                                    </div>
                                    <p>{hobbyObject.hobby}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    className='block self-end w-[100px] h-[40px] shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded ml-auto'
                    type='button'
                >
                    Save
                </button>
            </div>
            {editPassword ? (
                <ChangePassword onExitPopup={() => setEditPassword(false)} />
            ) : null}
        </Layout>
    );
}
