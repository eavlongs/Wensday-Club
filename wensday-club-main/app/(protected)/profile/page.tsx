"use client";

import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import {
    Post,
    Comment,
    Share,
    Report,
    PostProp,
    CommentProp,
} from "@/components/Post";
import { useState } from "react";

let commentsData: Array<CommentProp> = [
    {
        id: "123",
        profileImg: "/Olivier_1500_Trptch.jpg",
        firstName: "Bunlong",
        lastName: "Prank",
        comment: `Lorem, ipsum dolor sit amet
    consectetur adipisicing elit.
    Eos error dolor facilis placeat
    explicabo unde aperiam aliquam
    inventore recusandae cumque
    asperiores impedit ipsam
    maiores, maxime libero modi
    doloribus amet ut.`,
        commentedAt: new Date("2021-09-01"),
    },
    {
        id: "234",
        profileImg: "/Olivier_1500_Trptch.jpg",
        firstName: "Bunlong",
        lastName: "Prank",
        comment: `Lorem, ipsum dolor sit amet
    consectetur adipisicing elit.
    Eos error dolor facilis placeat
    explicabo unde aperiam aliquam
    inventore recusandae cumque
    asperiores impedit ipsam
    maiores, maxime libero modi
    doloribus amet ut.`,
        commentedAt: new Date("2021-09-02"),
    },
    {
        id: "345",
        profileImg: "/Olivier_1500_Trptch.jpg",
        firstName: "Bunlong",
        lastName: "Prank",
        comment: `Lorem, ipsum dolor sit amet
    consectetur adipisicing elit.
    Eos error dolor facilis placeat
    explicabo unde aperiam aliquam
    inventore recusandae cumque
    asperiores impedit ipsam
    maiores, maxime libero modi
    doloribus amet ut.`,
        commentedAt: new Date("2021-09-03"),
    },
    {
        id: "456",
        profileImg: "/Olivier_1500_Trptch.jpg",
        firstName: "Bunlong",
        lastName: "Prank",
        comment: `Lorem, ipsum dolor sit amet
    consectetur adipisicing elit.
    Eos error dolor facilis placeat
    explicabo unde aperiam aliquam
    inventore recusandae cumque
    asperiores impedit ipsam
    maiores, maxime libero modi
    doloribus amet ut.`,
        commentedAt: new Date("2021-09-04"),
    },
    {
        id: "567",
        profileImg: "/Olivier_1500_Trptch.jpg",
        firstName: "Bunlong",
        lastName: "Prank",
        comment: `Lorem, ipsum dolor sit amet
    consectetur adipisicing elit.
    Eos error dolor facilis placeat
    explicabo unde aperiam aliquam
    inventore recusandae cumque
    asperiores impedit ipsam
    maiores, maxime libero modi
    doloribus amet ut.`,
        commentedAt: new Date("2021-09-05"),
    },
];

let posts: Array<PostProp> = [
    {
        id: "post id",
        userID: "bunlongID",
        profileImg: "/Olivier_1500_Trptch.jpg",
        firstName: "Bunlong",
        lastName: "Prank",
        text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
        assumenda soluta molestiae sunt dolorem, quam aliquam. Saepe
        harum architecto ullam, facere praesentium iusto necessitatibus
        nemo! Illo laboriosam laudantium in vitae.`,
        image: "/Ling.jpg",
        likeCount: 15,
        commentCount: 10,
        shareCount: 2,
        postedAt: new Date("2021-08-31"),
    },
];

export default function Page({ onEdit }: { onEdit: () => void }) {
    const [postID, setPostID] = useState<string | null>(null);
    const [comments, setComments] = useState<Array<CommentProp> | []>([]);
    const [commentPopup, setCommentPopup] = useState(false);
    const [sharePopup, setSharePopup] = useState(false);
    const [reportPopup, setReportPopup] = useState(false);

    return (
        <Layout>
            <script
                type='module'
                src='https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js'
            ></script>
            <script
                noModule
                src='https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js'
            ></script>
            <div
                className='block w-full h-[12rem] md:h-[13rem] lg:h-[15rem] desktop:h-[17rem] bg-cover bg-center p-6 shadow-lg bg-neutral-700 relative'
                // style={{ backgroundImage: 'url("/sonflower.jpg")' }}
            >
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

            <div className='mx-8 lg:mx-12 desktop:mx-16 flex my-5 lg:my-6 desktop:my-7 gap-x-7'>
                <div className='w-[6.5rem] md:w-[7.5rem] lg:w-[8.5rem] desktop:w-[9.5rem] aspect-square relative'>
                    <Image
                        src='/Olivier_1500_Trptch.jpg'
                        fill
                        alt='profile picture'
                        className='rounded-[50%] object-cover cursor-default'
                    />
                </div>

                <div className='self-center'>
                    <p className='text-base md:text-lg lg:text-xl desktop:text-2xl mb-2 cursor-default'>
                        Yilong Ma
                    </p>

                    <div className='followers flex gap-x-5 text-xs md:text-sm lg:text-base desktop:text-lg'>
                        <p className='select-none'>12 Posts</p>

                        <Link href='/follower' className='hover:text-sky-700'>
                            100k Followers
                        </Link>

                        <Link href='/following' className='hover:text-sky-700'>
                            2 Followings
                        </Link>
                    </div>
                </div>

                <Link href='/profile/edit' className='ml-auto'>
                    <button className='bg-debian-red hover:bg-red-700 text-white font-bold text-sm md:text-base lg:text-lg desktop:text-xl py-[0.35rem] desktop:py-2 px-8 md:px-9 lg:px-10 desktop:px-14 rounded-2xl'>
                        Edit
                    </button>
                </Link>
            </div>
            <div className='w-full border-black px-6 flex items-start gap-x-5'>
                <div className='w-1/3 min-h-[200px] py-6 px-3 border-2 border-gray-700 rounded-xl '>
                    <p className='inline-block bg-red-500 text-lg text-white font-bold py-1 px-6 mb-2 rounded-2xl text-center'>
                        About Me
                    </p>
                    <p className='font-mono text-sm leading-tight'>
                        “Preoccupied with a single leaf... you won't see the
                        tree. Preoccupied with a single tree... you'll miss the
                        entire forest."
                    </p>

                    <div className='mt-5'>
                        <div className='inline-block bg-red-500 text-lg text-white font-bold py-1 px-6 rounded-2xl text-center'>
                            Hobbies
                        </div>
                        <div className='font-mono text-sm mt-2 ml-4'>
                            <ul className='list-disc leading-tight'>
                                <li>Cooking Blue</li>
                                <li>Build Nuclear Reactor</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Post
                    post={posts[0]}
                    onComment={(postID) => {
                        setPostID(postID);
                        setComments(commentsData);
                        setCommentPopup(true);
                    }}
                    onShare={(postID) => {
                        setPostID(postID);
                        setSharePopup(true);
                    }}
                    onReport={(postID) => {
                        setPostID(postID);
                        setReportPopup(true);
                    }}
                    className='w-2/3'
                />

                {commentPopup ? (
                    <Comment
                        postID={postID as string}
                        comments={comments}
                        onExitPopup={() => {
                            setCommentPopup(false);
                        }}
                    />
                ) : null}
                {sharePopup ? (
                    <Share
                        postID={postID as string}
                        onExitPopup={() => setSharePopup(false)}
                    />
                ) : null}
                {reportPopup ? (
                    <Report
                        postID={postID as string}
                        onExitPopup={() => setReportPopup(false)}
                    />
                ) : null}
            </div>
        </Layout>
    );
}
