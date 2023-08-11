"use client";
import { ubuntu } from "@/app/fonts";
import React, { useState } from "react";
import Link from "next/link";
import LoginInput from "@/components/LoginInput";

export default function Signup1of3() {
    // declare a state variable for password and set its initial value to an empty string
    const [password, setPassword] = useState("");

    // define a function that updates the password state when the user inputs a new value
    function handlePasswordChange(event: { target: { value: any } }) {
        // get the value from the event target
        const value = event.target.value;
        // update the password state with the new value
        setPassword(value);
    }

    return (
        <>
            <p
                className={
                    ubuntu.className +
                    " font-bold text-xl lg:text-2xl desktop:text-3xl text-debian-red mb-16"
                }
            >
                Change Password (2/2)
            </p>

            <LoginInput
                type="password"
                placeholder="Password"
                className="mt-3 lg:mt-5 desktop:mt-7"
                onChange={function (value: string): void {
                    throw new Error("Function not implemented.");
                }}
            />

            {/* <input
        placeholder="Old Password"
        className="__className_20951f w-[17rem] md:w-[19rem] lg:w-[22rem] desktop:w-[25rem] pl-10 md:pl-14 text-xs lg:text-base desktop:text-lg font-bold bg-light-gray text-gray-600 pr-1 md:pr-3 py-[0.4rem] md:py-5 rounded-xl"
        type="password"
        defaultValue=""
        /> */}

            <LoginInput
                type="password"
                placeholder="Comfirm Password"
                className="mt-3 lg:mt-5 desktop:mt-7"
                onChange={function (value: string): void {
                    throw new Error("Function not implemented.");
                }}
            />

            <div className="flex justify-between mx-auto w-[19rem] md:w-[20rem] lg:w-[24rem] desktop:w-[30rem] my-4 lg:my-5 desktop:my-7 2xl:my-9">
                <button className="text-center bg-debian-red text-white-smoke font-bold text-lg lg:text-xl desktop:text-2xl px-10 py-2 rounded-2xl 	ml-[19rem]">
                    Next
                </button>
            </div>
        </>
    );
}
