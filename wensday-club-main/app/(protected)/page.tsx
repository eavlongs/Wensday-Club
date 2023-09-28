"use client";

import { useState } from "react";
import "../globals.css";
import Layout from "@/components/Layout";
import {
    Post,
    Comment,
    Share,
    Report,
    PostProp,
    CommentProp,
} from "@/components/Post";
import Popup from "@/components/Popup";
import { log } from "console";

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

export default function Home() {
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
            <div className='w-[70%] lg:w-[60%] min-w-[450px] mx-auto'>
                <div className='w-full flex justify-between px-8 items-center text-xs md:text-sm lg:text-lg desktop:text-xl mt-5 mb-4'>
                    <p>something to say?</p>
                    <button className='text-xs md:text-sm lg:text-lg desktop:text-xl px-10 py-1 desktop:py-2 bg-debian-red border-[1px]  rounded-[20px] text-white font-bold'>
                        Post Here
                    </button>
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
                    className='my-5'
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
