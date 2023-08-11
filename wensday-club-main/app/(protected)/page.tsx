"use client";

import { IonButton, IonIcon } from "@ionic/react";
import type { Metadata } from "next";
import { useState } from "react";
import Popup from "reactjs-popup";

// export const metadata: Metadata = {
//     title: 'Wensday Club',
//     description: 'Join Wensday Club today',
//     viewport: "width=device-width, initial-scale=1",
// }

export default function Home() {
    const [toggleComment, setToggleComment] = useState(false);
    const [toggleShare, setToggleShare] = useState(false);
    const [toggleReport, setToggleReport] = useState(false);
    return (
        <>
            <script
                type="module"
                src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
            ></script>
            <script
                noModule
                src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
            ></script>
            <div className="w-[70%] m-auto">
                <div className="flex justify-between mt-10">
                    <p>something to say?</p>
                    <button className="relative bg-debian-red border-2 pb-3 pt-3 px-20 rounded-[20px] top-[-20px] text-white font-bold">
                        Post Here
                    </button>
                </div>
                <div className="border-2 border-black shadow-sm rounded-2xl">
                    <div className="flex p-4">
                        <img
                            src="/Olivier_1500_Trptch.jpg"
                            alt=""
                            className="rounded-[50%] max-w-[200px] max-h-[200px] w-[70px] h-[70px] object-cover"
                        />
                        <div className="text-debian-red ml-5">
                            <p className="text-2xl">Bunlong Prank</p>
                            <p className="text-sm mt-3">3 days ago</p>
                        </div>
                    </div>
                    <p className="py-2 px-4">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Ea assumenda soluta molestiae sunt dolorem, quam
                        aliquam. Saepe harum architecto ullam, facere
                        praesentium iusto necessitatibus nemo! Illo laboriosam
                        laudantium in vitae.
                    </p>
                    <img src="/Ling.jpg" alt="" />
                    <div className="flex justify-between p-10 w-[90%] m-auto">
                        <button
                            className="border-2 border-black py-3 px-6 rounded-[10px] hover:bg-debian-red hover:text-white "
                            onClick={() => {
                                setToggleReport(!toggleReport);
                            }}
                        >
                            <IonIcon
                                name="thumbs-up-outline"
                                className="mr-2 inline-block align-middle"
                            ></IonIcon>
                            <span className="inline-block align-middle">
                                Like
                            </span>
                        </button>
                        <button
                            onClick={() => {
                                setToggleComment(!toggleComment);
                            }}
                            className="border-2 border-black py-3 px-6 rounded-[10px]  hover:bg-debian-red hover:text-white"
                        >
                            <IonIcon
                                name="chatbox-ellipses-outline"
                                className="mr-2 inline-block align-middle"
                            ></IonIcon>
                            <span className="inline-block align-middle">
                                Comment
                            </span>
                        </button>
                        <button
                            onClick={() => {
                                setToggleShare(!toggleShare);
                            }}
                            className="border-2 border-black py-3 px-6 rounded-[10px]  hover:bg-debian-red hover:text-white"
                        >
                            <IonIcon name="share-outline"></IonIcon>
                            <span className="ml-2">Share</span>
                        </button>
                    </div>
                </div>
                {toggleComment ? (
                    <div>
                        <div
                            className="backdrop-blur-sm bg-gray-600/50 w-screen h-screen fixed top-0 left-0"
                            onClick={() => {
                                setToggleComment(!toggleComment);
                            }}
                        ></div>
                        <div className="border-2 border-black rounded-[20px] w-[500px] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white">
                            <p className="text-center">Comments</p>
                            <div className="max-h-[300px] min-h-[400px] overflow-y-auto">
                                <div className="pt-6 pb-1 px-6 flex">
                                    <img
                                        src="/Olivier_1500_Trptch.jpg"
                                        alt=""
                                        className="rounded-[50%] max-w-[300px] max-h[300px]] w-[200px] h-[60px] object-cover"
                                    />
                                    <div className="border-2 border-white rounded-[10px] ml-5 bg-gray-100">
                                        <div className="p-2">
                                            <p className="text-debian-red text-sm">
                                                Bunlong Prank
                                            </p>
                                            <p className="text-xs">
                                                Lorem, ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Eos error dolor facilis placeat
                                                explicabo unde aperiam aliquam
                                                inventore recusandae cumque
                                                asperiores impedit ipsam
                                                maiores, maxime libero modi
                                                doloribus amet ut.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-1 px-6 flex">
                                    <img
                                        src="/Olivier_1500_Trptch.jpg"
                                        alt=""
                                        className="rounded-[50%] max-w-[300px] max-h[300px]] w-[200px] h-[60px] object-cover"
                                    />
                                    <div className="border-2 border-white rounded-[10px] ml-5 bg-gray-100">
                                        <div className="p-2">
                                            <p className="text-debian-red text-sm">
                                                Bunlong Prank
                                            </p>
                                            <p className="text-xs">
                                                Lorem, ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Eos error dolor facilis placeat
                                                explicabo unde aperiam aliquam
                                                inventore recusandae cumque
                                                asperiores impedit ipsam
                                                maiores, maxime libero modi
                                                doloribus amet ut.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-1 px-6 flex">
                                    <img
                                        src="/Olivier_1500_Trptch.jpg"
                                        alt=""
                                        className="rounded-[50%] max-w-[300px] max-h[300px]] w-[200px] h-[60px] object-cover"
                                    />
                                    <div className="border-2 border-white rounded-[10px] ml-5 bg-gray-100">
                                        <div className="p-2">
                                            <p className="text-debian-red text-sm">
                                                Bunlong Prank
                                            </p>
                                            <p className="text-xs">
                                                Lorem, ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Eos error dolor facilis placeat
                                                explicabo unde aperiam aliquam
                                                inventore recusandae cumque
                                                asperiores impedit ipsam
                                                maiores, maxime libero modi
                                                doloribus amet ut.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-1 px-6 flex">
                                    <img
                                        src="/Olivier_1500_Trptch.jpg"
                                        alt=""
                                        className="rounded-[50%] max-w-[300px] max-h[300px]] w-[200px] h-[60px] object-cover"
                                    />
                                    <div className="border-2 border-white rounded-[10px] ml-5 bg-gray-100">
                                        <div className="p-2">
                                            <p className="text-debian-red text-sm">
                                                Bunlong Prank
                                            </p>
                                            <p className="text-xs">
                                                Lorem, ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Eos error dolor facilis placeat
                                                explicabo unde aperiam aliquam
                                                inventore recusandae cumque
                                                asperiores impedit ipsam
                                                maiores, maxime libero modi
                                                doloribus amet ut.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="py-1 px-6 flex">
                                <img
                                    src="/Olivier_1500_Trptch.jpg"
                                    alt=""
                                    className="rounded-[50%] max-w-[300px] max-h[300px]] w-[150px] h-[60px] object-cover"
                                />
                                <div className="border-2 border-white rounded-[10px] ml-5 bg-gray-100 w-[400px]">
                                    <div className="p-2">
                                        <p className="text-debian-red text-sm">
                                            Bunlong Prank
                                        </p>
                                        <input
                                            type="text"
                                            placeholder="Write a comment"
                                            className="text-sm w-[380px]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}
                {toggleShare ? (
                    <div>
                        <div
                            className="backdrop-blur-sm bg-gray-600/50 w-screen h-screen fixed top-0 left-0"
                            onClick={() => {
                                setToggleShare(!toggleShare);
                            }}
                        ></div>
                        <div className="border-2 border-black bg-white w-[500px] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[350px]">
                            <p className="text-center font-bold">
                                Share this Post
                            </p>
                            <div className="flex mt-5 ml-5">
                                <img
                                    src="/Olivier_1500_Trptch.jpg"
                                    alt=""
                                    className="rounded-[50%] max-w-[300px] max-h[300px]] w-[60px] h-[60px] object-cover"
                                />
                                <div className="ml-5">
                                    <textarea
                                        placeholder="Write something about this post"
                                        className="relative top-0 Sml-5 bg-gray-100 border-white w-[350px] h-[200px] "
                                    />
                                </div>
                            </div>
                            <div className="flex w-[80%] ml-14 mt-5 justify-between text-center">
                                <button className="border-2 border-white bg-debian-red text-white px-3 py-2 font-bold rounded-[10px]">
                                    Cancel
                                </button>
                                <button className="border-2 border-white bg-debian-red text-white px-3 py-2 font-bold rounded-[10px]">
                                    Share Now
                                </button>
                            </div>
                        </div>
                    </div>
                ) : null}
                {toggleReport ? (
                    <div>
                        <div
                            className="backdrop-blur-sm bg-gray-600/50 w-screen h-screen fixed top-0 left-0"
                            onClick={() => {
                                setToggleReport(!toggleReport);
                            }}
                        ></div>
                        <div className="border-2 border-black bg-white w-[500px] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[420px] rounded-[10px]">
                            <p className="text-center font-bold">Report</p>
                            <p className="ml-10 mt-8 font-bold text-lg">
                                What is your Problem?
                            </p>
                            <div>
                                <form className="ml-5 mt-5">
                                    <div className="ml-3 border-2 border-white bg-gray-100 px-5 py-1 rounded-[30px] mb-3 w-[90%]">
                                        <input
                                            type="checkbox"
                                            value="violence_post"
                                            name="violence_post"
                                        />
                                        <label
                                            htmlFor="violence_post"
                                            className="ml-3"
                                        >
                                            Violence Post
                                        </label>
                                    </div>

                                    <div className="ml-3 border-2 border-white bg-gray-100 px-5 py-1 rounded-[30px] mb-3 w-[90%]">
                                        <input
                                            type="checkbox"
                                            value="violence_post"
                                            name="violence_post"
                                        />
                                        <label
                                            htmlFor="violence_post"
                                            className="ml-3"
                                        >
                                            Violence Post
                                        </label>
                                    </div>

                                    <div className="ml-3 border-2 border-white bg-gray-100 px-5 py-1 rounded-[30px] mb-3 w-[90%]">
                                        <input
                                            type="checkbox"
                                            value="violence_post"
                                            name="violence_post"
                                        />
                                        <label
                                            htmlFor="violence_post"
                                            className="ml-3"
                                        >
                                            Violence Post
                                        </label>
                                    </div>

                                    <div className="ml-3 border-2 border-white bg-gray-100 px-5 py-1 rounded-[30px] mb-3 w-[90%]">
                                        <input
                                            type="checkbox"
                                            value="violence_post"
                                            name="violence_post"
                                        />
                                        <label
                                            htmlFor="violence_post"
                                            className="ml-3"
                                        >
                                            Violence Post
                                        </label>
                                    </div>

                                    <div className="ml-3 border-2 border-white bg-gray-100 px-5 py-1 rounded-[30px] mb-3 w-[90%]">
                                        <input
                                            type="text"
                                            placeholder="Other"
                                            className="bg-gray-100 w-[100%]"
                                        />
                                    </div>
                                </form>
                                <div className="flex w-[85%] ml-10 mt-5 justify-between text-center">
                                    <button className="border-2 border-white bg-debian-red text-white px-3 py-2 font-bold rounded-[10px]">
                                        Cancel
                                    </button>
                                    <button className="border-2 border-white bg-debian-red text-white px-3 py-2 font-bold rounded-[10px]">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </>
    );
}
