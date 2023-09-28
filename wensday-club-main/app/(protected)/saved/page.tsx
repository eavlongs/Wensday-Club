"use client";

import Layout from "@/components/Layout";
import { IonButton, IonIcon } from "@ionic/react";
import { useState } from "react";

export default function Saved() {
    const [toggleRemove, setToggleRemove] = useState(false);
    return (
        <Layout>
            <div className='w-[100%] py-14 px-[150px]'>
                <p className='text-2xl'>Saved Posts</p>
                <div className='mt-5'>
                    <div className='border border-black rounded-[15px] min-w-[600px] mb-3'>
                        <div className='grid grid-cols-[30%_70%]'>
                            <div className='columns-[30%]'>
                                <img
                                    src='Ling.jpg'
                                    alt=''
                                    className='w-[100%] h-[100%] rounded-l-[15px] object-cover'
                                />
                            </div>
                            <div className='block'>
                                <div className='flex justify-between'>
                                    <div className='p-2 flex'>
                                        <img
                                            src='Olivier_1500_Trptch.jpg'
                                            alt=''
                                            className='w-[50px] h-[50px] rounded-[50%] object-cover'
                                        />
                                        <div className='text-debian-red ml-3'>
                                            <p className='text-xl'>
                                                Bunlong Prank
                                            </p>
                                            <p className='text-sm'>
                                                3 days ago
                                            </p>
                                        </div>
                                    </div>

                                    <img
                                        src='remove.png'
                                        alt=''
                                        className='w-[1.7rem] h-[1.7rem] mt-2 mr-3 opacity-100 hover:opacity-90 object-cover cursor-pointer border-[2px] border-black hover:border-red-600 rounded-[50%] p-1 '
                                        onClick={() => {
                                            setToggleRemove(!toggleRemove);
                                        }}
                                    />
                                </div>
                                <div className='ml-3 h-20 overflow-hidden'>
                                    <p className='max-h-12 h-full'>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Aliquam sapiente dolor
                                        consectetur qui deserunt q uidem
                                        temporibus! Ut molestiae minima ipsam
                                        animi recusandae similique magnam sit
                                        illo? Numquam nulla dolorem illum.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border border-black rounded-[15px] min-w-[600px] mb-3'>
                        <div className='grid grid-cols-[30%_70%]'>
                            <div className='columns-[30%]'>
                                <img
                                    src='Ling.jpg'
                                    alt=''
                                    className='w-[100%] h-[100%] rounded-l-[15px] object-cover'
                                />
                            </div>
                            <div className='block'>
                                <div className='flex justify-between'>
                                    <div className='p-2 flex'>
                                        <img
                                            src='Olivier_1500_Trptch.jpg'
                                            alt=''
                                            className='w-[50px] h-[50px] rounded-[50%] object-cover'
                                        />
                                        <div className='text-debian-red ml-3'>
                                            <p className='text-xl'>
                                                Bunlong Prank
                                            </p>
                                            <p className='text-sm'>
                                                3 days ago
                                            </p>
                                        </div>
                                    </div>

                                    <img
                                        src='remove.png'
                                        alt=''
                                        className='w-[1.7rem] h-[1.7rem] mt-2 mr-3 opacity-100 hover:opacity-90 object-cover cursor-pointer border-[2px] border-black hover:border-red-600 rounded-[50%] p-1 '
                                        onClick={() => {
                                            setToggleRemove(!toggleRemove);
                                        }}
                                    />
                                </div>
                                <div className='ml-3 h-20 overflow-hidden'>
                                    <p className='max-h-12 h-full'>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Repudiandae, aliquam
                                        hic ea explicabo officiis dolorum
                                        repellendus! Quis labore, inventore
                                        commodi non mollitia, accusamus voluptas
                                        ratione, excepturi vero veritatis quo
                                        eius?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border border-black rounded-[15px] min-w-[600px] mb-3'>
                        <div className='grid grid-cols-[30%_70%]'>
                            <div className='columns-[30%]'>
                                <img
                                    src='Ling.jpg'
                                    alt=''
                                    className='w-[100%] h-[100%] rounded-l-[15px] object-cover'
                                />
                            </div>
                            <div className='block'>
                                <div className='flex justify-between'>
                                    <div className='p-2 flex'>
                                        <img
                                            src='Olivier_1500_Trptch.jpg'
                                            alt=''
                                            className='w-[50px] h-[50px] rounded-[50%] object-cover'
                                        />
                                        <div className='text-debian-red ml-3'>
                                            <p className='text-xl'>
                                                Bunlong Prank
                                            </p>
                                            <p className='text-sm'>
                                                3 days ago
                                            </p>
                                        </div>
                                    </div>

                                    <img
                                        src='remove.png'
                                        alt=''
                                        className='w-[1.7rem] h-[1.7rem] mt-2 mr-3 opacity-100 hover:opacity-90 object-cover cursor-pointer border-[2px] border-black hover:border-red-600 rounded-[50%] p-1 '
                                        onClick={() => {
                                            setToggleRemove(!toggleRemove);
                                        }}
                                    />
                                </div>
                                <div className='ml-3 h-20 overflow-hidden'>
                                    <p className='max-h-12 h-full'>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Repudiandae, aliquam
                                        hic ea explicabo officiis dolorum
                                        repellendus! Quis labore, inventore
                                        commodi non mollitia, accusamus voluptas
                                        ratione, excepturi vero veritatis quo
                                        eius?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border border-black rounded-[15px] min-w-[600px] mb-3'>
                        <div className='grid grid-cols-[30%_70%]'>
                            <div className='columns-[30%]'>
                                <img
                                    src='Ling.jpg'
                                    alt=''
                                    className='w-[100%] h-[100%] rounded-l-[15px] object-cover'
                                />
                            </div>
                            <div className='block'>
                                <div className='flex justify-between'>
                                    <div className='p-2 flex'>
                                        <img
                                            src='Olivier_1500_Trptch.jpg'
                                            alt=''
                                            className='w-[50px] h-[50px] rounded-[50%] object-cover'
                                        />
                                        <div className='text-debian-red ml-3'>
                                            <p className='text-xl'>
                                                Bunlong Prank
                                            </p>
                                            <p className='text-sm'>
                                                3 days ago
                                            </p>
                                        </div>
                                    </div>

                                    <img
                                        src='remove.png'
                                        alt=''
                                        className='w-[1.7rem] h-[1.7rem] mt-2 mr-3 opacity-100 hover:opacity-90 object-cover cursor-pointer border-[2px] border-black hover:border-red-600 rounded-[50%] p-1 '
                                        onClick={() => {
                                            setToggleRemove(!toggleRemove);
                                        }}
                                    />
                                </div>
                                <div className='ml-3 h-20 overflow-hidden'>
                                    <p className='max-h-12 h-full'>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Repudiandae, aliquam
                                        hic ea explicabo officiis dolorum
                                        repellendus! Quis labore, inventore
                                        commodi non mollitia, accusamus voluptas
                                        ratione, excepturi vero veritatis quo
                                        eius?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border border-black rounded-[15px] min-w-[600px]'>
                        <div className='grid grid-cols-[30%_70%]'>
                            <div className='columns-[30%]'>
                                <img
                                    src='Ling.jpg'
                                    alt=''
                                    className='w-[100%] h-[100%] rounded-l-[15px] object-cover'
                                />
                            </div>
                            <div className='block'>
                                <div className='flex justify-between'>
                                    <div className='p-2 flex'>
                                        <img
                                            src='Olivier_1500_Trptch.jpg'
                                            alt=''
                                            className='w-[50px] h-[50px] rounded-[50%] object-cover'
                                        />
                                        <div className='text-debian-red ml-3'>
                                            <p className='text-xl'>
                                                Bunlong Prank
                                            </p>
                                            <p className='text-sm'>
                                                3 days ago
                                            </p>
                                        </div>
                                    </div>
                                    <img
                                        src='remove.png'
                                        alt=''
                                        className='w-[1.7rem] h-[1.7rem] mt-2 mr-3 opacity-100 hover:opacity-90 object-cover cursor-pointer border-[2px] border-black hover:border-red-600 rounded-[50%] p-1 '
                                        onClick={() => {
                                            setToggleRemove(!toggleRemove);
                                        }}
                                    />
                                </div>
                                <div className='ml-3 h-20 overflow-hidden'>
                                    <p className='max-h-12 h-full'>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Repudiandae, aliquam
                                        hic ea explicabo officiis dolorum
                                        repellendus! Quis labore, inventore
                                        commodi non mollitia, accusamus voluptas
                                        ratione, excepturi vero veritatis quo
                                        eius?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {toggleRemove ? (
                        <div>
                            <div className='backdrop-blur-sm bg-gray-600/50 w-screen h-screen fixed top-0 left-0'></div>
                            <div className='border-2 border-black rounded-[10px] w-[500px] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-gray-200'>
                                <p className='text-center pt-5'>
                                    Are you sure to delete the post?
                                </p>
                                <div className='flex justify-center gap-[250px] py-5'>
                                    <button
                                        className='border-1 broder-black bg-debian-red p-2 rounded-[10px] text-white font-bold'
                                        onClick={() => {
                                            setToggleRemove(!toggleRemove);
                                        }}
                                    >
                                        Cancel
                                    </button>
                                    <button className='border-1 broder-black bg-debian-red p-2 rounded-[10px] text-white font-bold'>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </Layout>
    );
}
