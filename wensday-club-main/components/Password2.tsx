"use client";
import { ubuntu } from "@/app/fonts";
import React, { useState } from "react";
import LoginInput from "@/components/LoginInput";

export default function Password2({ onSave }: { onSave: () => void }) {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function updatePassword(value: string) {
        setPassword(value);
    }

    function updateConfirmPassword(value: string) {
        setConfirmPassword(value);
    }

    return (
        <div className='flex-center flex-col mt-7 desktop:mt-10 border-[1px] shadow-xl border-gray-700 rounded-xl lg:w-2/5 md:w-1/2 sm:w-2/3 max-w-2xl mx-auto h-[520px] bg-white-smoke py-2 lg:py-5 desktop:py-7 fixed top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <p
                className={
                    ubuntu.className +
                    " font-bold text-xl lg:text-2xl desktop:text-3xl text-debian-red mb-16"
                }
            >
                Change Password (2/2)
            </p>

            <LoginInput
                type='password'
                placeholder='Password'
                className='mt-3 lg:mt-5 desktop:mt-7'
                onChange={updatePassword}
            />

            {/* <input
        placeholder="Old Password"
        className="__className_20951f w-[17rem] md:w-[19rem] lg:w-[22rem] desktop:w-[25rem] pl-10 md:pl-14 text-xs lg:text-base desktop:text-lg font-bold bg-light-gray text-gray-600 pr-1 md:pr-3 py-[0.4rem] md:py-5 rounded-xl"
        type="password"
        defaultValue=""
        /> */}

            <LoginInput
                type='password'
                placeholder='Comfirm Password'
                className='mt-3 lg:mt-5 desktop:mt-7'
                onChange={updateConfirmPassword}
            />

            <div className='flex justify-between mx-auto w-[19rem] md:w-[20rem] lg:w-[24rem] desktop:w-[30rem] my-4 lg:my-5 desktop:my-7 2xl:my-9'>
                <button
                    className='text-center bg-debian-red text-white-smoke font-bold text-lg lg:text-xl desktop:text-2xl px-10 py-2 rounded-2xl 	ml-[19rem]'
                    onClick={() => onSave()}
                >
                    Save
                </button>
            </div>
        </div>
    );
}
