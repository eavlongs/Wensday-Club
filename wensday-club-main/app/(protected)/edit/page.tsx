"use client";
import ChangePassword from "@/components/ChangePassword";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
    const [editPassword, setEditPassword] = useState(false);
    return (
        <>
            <div className='hugecontainer w-full h-[750px] border-gray-700'>
                <div className='upper-container  md:w-[900px] lg:w-[1100px] h-[210px]  pt-6 pl-6 flex'>
                    <div className='right-box md:w-[130px] lg:w-[190px] h-[100px] absolute md:text-md'>
                        <button
                            className='md:w-[130px] lg:w-[160px] bg-debian-red hover:bg-red-700 text-white lg:text-sm font-bold py-2 px-4 rounded-full  '
                            onClick={() => setEditPassword(true)}
                        >
                            Change Password
                        </button>
                    </div>
                    <div className='left-box w-[600px] h-[220px] flex  items-center justify-center mx-auto'>
                        <div className='left w-[250px] h-[220px] '>
                            <div className='max-w-[100px] max-h-[100px] w-[calc(6rem+6vw)] h-[calc(6rem+6vw)] relative '>
                                <Image
                                    src='/Olivier_1500_Trptch.jpg'
                                    fill={true}
                                    alt='profile picture'
                                    objectFit='cover'
                                    className='rounded-[50%] ml-36'
                                />
                            </div>
                            <div className='w-[170px] py-3 ml-20'>
                                <input
                                    className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-center '
                                    id='inline-full-name'
                                    type='text'
                                    defaultValue='Yilong'
                                />
                            </div>
                        </div>
                        <div className='right w-[250px] h-[220px]  px-3 '>
                            <div className='pt-4 pb-2 '>
                                <button className='w-[160px] bg-debian-red hover:bg-red-700 text-white font-bold py-2 px-4 text-xs rounded-full'>
                                    <a href='/'>Upload New Profile</a>
                                </button>
                            </div>
                            <div className=''>
                                <button className='w-[160px] bg-debian-red hover:bg-red-700 text-white font-bold text-xs py-2 px-4 rounded-full'>
                                    <a href='/'>Delete Profile</a>
                                </button>
                            </div>
                            <div className='w-[170px] mt-[24px]'>
                                <input
                                    className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 text-center '
                                    id='inline-full-name'
                                    type='text'
                                    defaultValue='Ma'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className='block w-full h-[280px] rounded-lg bg-white bg-cover p-6 shadow-lg dark:bg-neutral-700'
                    style={{ backgroundImage: 'url("/sonflower.jpg")' }}
                >
                    <div className='two-button w-[220px] h-[200px] pt-40'>
                        <div className='first-button pb-2 '>
                            <button
                                type='button'
                                className='w-[180px] inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 '
                            >
                                <a href=''>Upload New Cover</a>
                            </button>
                        </div>
                        <button
                            type='button'
                            className='w-[180px] inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10'
                        >
                            <a href=''>Delete Cover</a>
                        </button>
                    </div>
                </div>
                <div className='buttom w-full h-[180px] pt-6 pl-6 flex space-x-10 '>
                    <div className='md:w-[200px] lg:w-[400px] h-[180px]  pt-2 px-2 border-2 border-gray-700 rounded-xl '>
                        <div className='md:w-[100px] lg:w-[160px] bg-red-500  text-white font-bold py-2 px-1 rounded-full text-sm text-center mx-auto'>
                            About Me
                        </div>
                        <textarea
                            rows={4}
                            cols={36}
                            name='commentfield'
                            defaultValue={
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                            }
                            className='mt-3 mx-7 focus:outline-none text-justify  md:w-[100px] lg:w-[320px]'
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

                    <div className='w-[400px] h-[180px] pt-2 px-9 border-2 border-gray-700 rounded-xl'>
                        <div className='w-[160px] bg-red-500  text-white font-bold py-2 px-3 rounded-full text-sm text-center mx-auto'>
                            Add Hobbies
                        </div>
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
                    <div className='md:w-[200px] h-[180px]'>
                        <div className='mt-[140px] lg:ml-[78px] md:ml-[100px]'>
                            <button
                                className='w-[100px] shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
                                type='button'
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {editPassword ? (
                <ChangePassword onExitPopup={() => setEditPassword(false)} />
            ) : null}
        </>
    );
}
