"use client";
import ChangePassword from "@/components/ChangePassword";
import Layout from "@/components/Layout";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
    const [editPassword, setEditPassword] = useState(false);
    const [firstName, setFirstName] = useState("Yilong");
    const [lastName, setLastName] = useState("Ma");
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
                <div className='buttom w-full mt-6 ml-6 flex gap gap-x-10'>
                    <div className='flex flex-col md:w-[200px] lg:w-[400px] h-[250px] pt-2 pb-4 px-2 border-2 border-gray-700 rounded-xl '>
                        <p className='md:w-[100px] lg:w-[160px] bg-red-500 text-white font-bold py-2 px-1 rounded-full text-sm text-center mx-auto'>
                            About Me
                        </p>
                        <textarea
                            cols={36}
                            name='commentfield'
                            defaultValue={
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                            }
                            className='flex-1 mt-3 mx-7 focus:outline-none text-justify  md:w-[100px] lg:w-[320px] resize-none'
                        />

                        {/* <div className='About_Me_text font-mono font-size-sm '>
                                <input
                                    className=" h-[100px] appearance-none rounded w-full py-2 px-4 text-gray-700  focus:outline-none focus:bg-white focus:border-purple-500 "
                                    id="inline-full-name"
                                    type="text"
                                    defaultValue="Yilong"
                                />
                         </div> */}
                    </div>

                    <div className='w-[400px] h-[250px] pt-2 px-9 border-2 border-gray-700 rounded-xl'>
                        <p className='w-[160px] bg-red-500  text-white font-bold py-2 px-3 rounded-full text-sm text-center mx-auto'>
                            Add Hobbies
                        </p>
                        <div className='About_Me_text font-mono font-size-sm mt-2'>
                            <ul className='list-disc'>
                                <li>
                                    <div className='input-hobbie-text font-mono font-size-sm '>
                                        <input
                                            className=' h-[45px] appearance-none rounded w-full py-2 px-4 text-gray-700  focus:outline-none focus:bg-white focus:border-purple-500 '
                                            id='inline-full-name'
                                            type='text'
                                            defaultValue='Cooking blue'
                                        />
                                    </div>
                                </li>
                                <li>
                                    <div className='input-hobbie-text font-mono font-size-sm '>
                                        <input
                                            className=' h-[45px] appearance-none rounded w-full py-2 px-4 text-gray-700  focus:outline-none focus:bg-white focus:border-purple-500 '
                                            id='inline-full-name'
                                            type='text'
                                            defaultValue='Build Nuclear thing'
                                        />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <button
                        className='block self-end w-[100px] h-[40px] shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded ml-auto'
                        type='button'
                    >
                        Save
                    </button>
                </div>
            </div>
            {editPassword ? (
                <ChangePassword onExitPopup={() => setEditPassword(false)} />
            ) : null}
        </Layout>
    );
}
