"use client";

import Layout from "@/components/Layout";
import { useState } from "react";
import { getFormattedDate } from "@/app/helper";
import Image from "next/image";
import { ubuntu } from "@/app/fonts";

interface Saved {
    id: string;
    username: string;
    userProfile: string;
    savedPost: string;
    text: string;
    savedAt: Date;
}

const saves: Saved[] = [
    {
        id: "123",
        username: "Bunlong Prank",
        userProfile: "Olivier_1500_Trptch.jpg",
        savedPost: "/Ling.jpg",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque harum nobis sunt nisi possimus provident magnam sapiente accusamus voluptatibus quisquam! Facilis id dolorem architecto sapiente quisquam, eaque repudiandae culpa tenetur?",
        savedAt: new Date("2023-10-09"),
    },
    {
        id: "234",
        username: "Bovisal Zhou",
        userProfile: "Olivier_1500_Trptch.jpg",
        savedPost: "/oppenheimer.png",
        text: "ah bek",
        savedAt: new Date("2023-01-02"),
    },
    {
        id: "345",
        username: "Eavlong Mask",
        userProfile: "Olivier_1500_Trptch.jpg",
        savedPost: "/Ling.jpg",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque harum nobis sunt nisi possimus provident magnam sapiente accusamus voluptatibus quisquam! Facilis id dolorem architecto sapiente quisquam, eaque repudiandae culpa tenetur?",
        savedAt: new Date("2023-01-03"),
    },
];

// will be removed when using real API
saves.sort(function (a, b) {
    return b.savedAt.getTime() - a.savedAt.getTime();
});

export default function Saved() {
    const [postIDToRemove, setPostIDToRemove] = useState<string | null>(null);
    const [savedPosts, setSavedPosts] = useState(saves);

    function removeSavedPost(id: string) {
        setSavedPosts(
            savedPosts.filter((post) => {
                return post.id !== id;
            })
        );
        setPostIDToRemove(null);
    }

    return (
        <Layout>
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="w-[100%] py-3 px-[110px] my-2">
                <p className="text-2xl">Saved Posts</p>
                <div className="mt-5">
                    <div>
                        {savedPosts.map((savedPost) => (
                            <div
                                className="border border-black rounded-[15px] min-w-[600px] mb-3"
                                key={savedPost.id}
                            >
                                <div className="grid grid-cols-[30%_70%]">
                                    <div className="columns-[30%] relative ">
                                        <Image
                                            src={savedPost.savedPost}
                                            alt="picture from post"
                                            fill
                                            className="rounded-l-[15px] object-cover"
                                        />
                                    </div>
                                    <div className="block">
                                        <div className="flex justify-between">
                                            <div className="p-2 flex">
                                                <img
                                                    src="Olivier_1500_Trptch.jpg"
                                                    alt=""
                                                    className="w-[50px] h-[50px] rounded-[50%] object-cover"
                                                />
                                                <div className="text-xs lg:text-sm desktop:text-base font-semibold text-debian-red cursor-pointer hover:underline !leading-8 lg:!leading-10 ml-3">
                                                    <p className="text-sm font-semibold">
                                                        {savedPost.username}
                                                    </p>
                                                    <p className="text-xs mt-[6px]">
                                                        {getFormattedDate(
                                                            savedPost.savedAt
                                                        )}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="border-[2px] border-black hover:border-red-600 rounded-[50%] p-1 w-[1.7rem] h-[1.7rem] mt-2 mr-3 opacity-100 hover:opacity-90 cursor-pointer">
                                                <div
                                                    className="relative"
                                                    onClick={() => {
                                                        setPostIDToRemove(
                                                            savedPost.id
                                                        );
                                                    }}
                                                >
                                                    <Image
                                                        src="/remove.png"
                                                        alt="remove icon"
                                                        fill
                                                    />
                                                    <img
                                                        src="remove.png"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ml-3 h-20 overflow-hidden">
                                            <p className="max-h-12 h-full overflow-hidden">
                                                {savedPost.chat}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {postIDToRemove !== null ? (
                        <div>
                            <div className="backdrop-blur-sm bg-gray-600/50 w-screen h-screen fixed top-0 left-0"></div>
                            <div className="border-2 border-black rounded-[10px] w-[500px] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-gray-200">
                                <p className="text-center pt-5">
                                    Are you sure to delete the post?
                                </p>
                                <div className="flex justify-center gap-[250px] py-5">
                                    <button
                                        className="border-1 broder-black bg-debian-red p-2 rounded-[10px] text-white font-bold"
=======
            <div className='w-full md:w-4/5 mx-auto mt-5'>
                <p
                    className={
                        ubuntu.className +
                        " font-medium text-sm md:text-base lg:text-xl desktop:text-2xl mb-3"
                    }
                >
                    Saved Posts
                </p>
                <div>
                    {savedPosts.map((savedPost) => (
                        <div
                            className='grid grid-cols-[30%_70%] border border-black rounded-[15px] mb-3 h-[10rem]'
                            key={savedPost.id}
                        >
                            <div className='relative h-full'>
                                <Image
                                    src={savedPost.savedPost}
                                    alt='picture from post'
                                    fill
                                    className='rounded-l-[15px] object-cover'
                                />
                            </div>
                            <div className='pt-2 pl-3'>
                                <div className='flex justify-between mb-2'>
                                    <div className='flex'>
                                        <img
                                            src='Olivier_1500_Trptch.jpg'
                                            alt=''
                                            className='w-[50px] h-[50px] rounded-[50%] object-cover'
                                        />
                                        <div className='text-debian-red ml-3'>
                                            <p className='text-xl'>
                                                {savedPost.username}
                                            </p>
                                            <p className='text-sm'>
                                                {getFormattedDate(
                                                    savedPost.savedAt
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        className='border-[2px] border-black hover:border-red-600 rounded-[50%] p-1 w-[1.7rem] h-[1.7rem] mt-2 mr-3 opacity-100 hover:opacity-90 cursor-pointer'
>>>>>>> bc5335d3f9d922e4d1ef1b60c26cf2f454495db1
=======
            <div className='w-full md:w-4/5 mx-auto mt-5'>
                <p
                    className={
                        ubuntu.className +
                        " font-medium text-sm md:text-base lg:text-xl desktop:text-2xl mb-3"
                    }
                >
                    Saved Posts
                </p>
                <div>
                    {savedPosts.map((savedPost) => (
                        <div
                            className='grid grid-cols-[30%_70%] border border-black rounded-[15px] mb-3 h-[10rem]'
                            key={savedPost.id}
                        >
                            <div className='relative h-full'>
                                <Image
                                    src={savedPost.savedPost}
                                    alt='picture from post'
                                    fill
                                    className='rounded-l-[15px] object-cover'
                                />
                            </div>
                            <div className='pt-2 pl-3'>
                                <div className='flex justify-between mb-2'>
                                    <div className='flex'>
                                        <img
                                            src='Olivier_1500_Trptch.jpg'
                                            alt=''
                                            className='w-[50px] h-[50px] rounded-[50%] object-cover'
                                        />
                                        <div className='text-debian-red ml-3'>
                                            <p className='text-xl'>
                                                {savedPost.username}
                                            </p>
                                            <p className='text-sm'>
                                                {getFormattedDate(
                                                    savedPost.savedAt
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        className='border-[2px] border-black hover:border-red-600 rounded-[50%] p-1 w-[1.7rem] h-[1.7rem] mt-2 mr-3 opacity-100 hover:opacity-90 cursor-pointer'
>>>>>>> bc5335d3f9d922e4d1ef1b60c26cf2f454495db1
                                        onClick={() => {
                                            setPostIDToRemove(savedPost.id);
                                        }}
                                    >
<<<<<<< HEAD
<<<<<<< HEAD
                                        Cancel
                                    </button>
                                    <button
                                        className="border-1 broder-black bg-debian-red p-2 rounded-[10px] text-white font-bold"
                                        // data-id={index}
                                        onClick={() =>
                                            removeSavedPost(postIDToRemove)
                                        }
                                    >
                                        Delete
=======
=======
>>>>>>> bc5335d3f9d922e4d1ef1b60c26cf2f454495db1
                                        <div className='relative'>
                                            <Image
                                                src='/remove.png'
                                                alt='remove icon'
                                                fill
                                            />
                                            <img src='remove.png' alt='' />
                                        </div>
<<<<<<< HEAD
>>>>>>> bc5335d3f9d922e4d1ef1b60c26cf2f454495db1
=======
>>>>>>> bc5335d3f9d922e4d1ef1b60c26cf2f454495db1
                                    </button>
                                </div>
                                <div className=''>
                                    <p className='line-clamp-3 text-[0.5rem] sm:text-xs md:text-sm lg:text-base desktop:text-base'>
                                        {savedPost.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {postIDToRemove !== null ? (
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
                                        setPostIDToRemove(null);
                                    }}
                                >
                                    Cancel
                                </button>
                                <button
                                    className='border-1 broder-black bg-debian-red p-2 rounded-[10px] text-white font-bold'
                                    onClick={() =>
                                        removeSavedPost(postIDToRemove)
                                    }
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </Layout>
    );
}
