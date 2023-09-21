"use client";

import { ubuntu } from "@/app/fonts";
import { inter } from "@/app/fonts";
import Image from "next/image";
import { formatCompactNumber } from "@/app/helper";
import { useState } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";

type UserType = {
    id: string;
    firstName: string;
    lastName: string;
    profilePicture: string;
    followerCount: number;
    followingCount: number;
    following: boolean;
};

let usersData: Array<UserType> = [
    {
        id: "02331",
        firstName: "Bunlong",
        lastName: "Prank",
        profilePicture: "/oppenheimer.png",
        followerCount: 10360,
        followingCount: 23,
        following: true,
    },
    {
        id: "02332",
        firstName: "Bunlong",
        lastName: "Prank",
        profilePicture: "/oppenheimer.png",
        followerCount: 10360,
        followingCount: 23,
        following: true,
    },
    {
        id: "02333",
        firstName: "Bunlong",
        lastName: "Prank",
        profilePicture: "/oppenheimer.png",
        followerCount: 10360,
        followingCount: 23,
        following: true,
    },
    {
        id: "02334",
        firstName: "Bunlong",
        lastName: "Prank",
        profilePicture: "/oppenheimer.png",
        followerCount: 10360,
        followingCount: 23,
        following: true,
    },
    {
        id: "02335",
        firstName: "Bunlong",
        lastName: "Prank",
        profilePicture: "/oppenheimer.png",
        followerCount: 10360,
        followingCount: 23,
        following: true,
    },
];

export default function Page() {
    const [users, setUsers] = useState<Array<UserType>>(usersData);
    function ToggleFollow(id: string) {
        const updatedUsers = [...users];
        const userIndex = updatedUsers.findIndex((user) => user.id === id);

        if (userIndex !== -1) {
            updatedUsers[userIndex] = {
                ...users[userIndex],
                following: !users[userIndex].following,
            };

            setUsers(updatedUsers);
        }
    }

    return (
        <Layout>
            <div className='w-4/5 mx-auto mt-5 min-w-[390px]'>
                <h1
                    className={
                        ubuntu.className +
                        " font-medium text-sm md:text-base lg:text-xl desktop:text-2xl mb-3"
                    }
                >
                    Follower
                </h1>

                {users.map((user) => {
                    return (
                        <User
                            user={user}
                            key={user.id}
                            onToggleFollow={ToggleFollow}
                        />
                    );
                })}
            </div>
        </Layout>
    );
}

function User({
    user,
    onToggleFollow,
}: {
    user: UserType;
    onToggleFollow: (id: string) => void;
}) {
    return (
        <div className='flex w-full py-2 px-5 my-2 border-black border-[1px] rounded-[10px] shadow-md hover:shadow-lg cursor-pointer'>
            <Link href={"/profile/" + user.id}>
                <div className='relative min-w-[3rem] w-12 lg:w-16 desktop:w-20 aspect-square'>
                    <Image
                        src={user.profilePicture}
                        objectFit='cover'
                        alt='oppenheimer profile'
                        fill
                        className='rounded-[50%] cursor-pointer hover:opacity-95'
                    />
                </div>
            </Link>
            <div className='ml-4'>
                <Link href={"/profile/" + user.id}>
                    <p className='text-xs lg:text-sm desktop:text-base font-semibold text-debian-red cursor-pointer hover:underline !leading-8 lg:!leading-10'>
                        {user.firstName} {user.lastName}
                    </p>
                </Link>
                <div
                    className={
                        inter.className +
                        " text-[0.6rem] md:text-[0.7rem] lg:text-xs"
                    }
                >
                    <span className='hover:font-medium cursor-pointer'>
                        {formatCompactNumber(user.followerCount)} Followers
                    </span>
                    <span className='ml-3 hover:font-medium cursor-pointer'>
                        {formatCompactNumber(user.followingCount)} Following
                    </span>
                </div>
            </div>

            <div className='h-full ml-auto self-center'>
                <button
                    className='text-xs lg:text-sm desktop:text-base bg-debian-red border-2 hover:border-gray-600 py-[0.4rem] md:py-2 px-2 md:px-3 lg:px-4 rounded-[15px] text-white font-bold'
                    onClick={() => {
                        onToggleFollow(user.id);
                        console.log("hi" + user.id);
                    }}
                >
                    {user.following ? "Following" : "Follow"}
                </button>
            </div>
        </div>
    );
}
