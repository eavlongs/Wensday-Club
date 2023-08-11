"use client";
import { useState } from "react";
import { ubuntu } from "@/app/fonts";
import LoginInput from "@/components/LoginInput";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function updateEmail(newEmail: string) {
        setEmail(newEmail);
    }

    function updatePassword(newPassword: string) {
        setPassword(newPassword);
    }

    function submit() {
        if (email.length === 0 || password.length === 0) {
            alert("Please Enter Your Email And Password");
        } else {
            alert(JSON.stringify({ email, password }));
            window.location.href = "/";
        }
    }

    return (
        <>
            <p
                className={
                    ubuntu.className +
                    " font-bold text-sm md:text-md lg:text-xl desktop:text-2xl text-debian-red"
                }
            >
                Sign In
            </p>
            <p
                className={
                    ubuntu.className +
                    " font-bold opacity-50 text-center leading-tight mb-4 lg:mb-5 desktop:mb-6 text-[0.5rem] lg:text-xs desktop:sm mt-1 lg:mt-2 desktop:mt-3"
                }
            >
                Welcome to Wenzday
                <br />
                One click, one account, endless possibilities
            </p>

            <LoginInput
                type='email'
                className='mt-3 lg:mt-5 desktop:mt-7'
                onChange={updateEmail}
            />
            <LoginInput
                type='password'
                className='mt-3 lg:mt-5 desktop:mt-7 mb-5 lg:mb-7 desktop:mb-9'
                onChange={updatePassword}
            />

            <button
                className='text-base lg:text-lg desktop:text-xl bg-debian-red text-white-smoke font-medium px-10 lg:px-12 py-2 rounded-2xl flex align-center my-2 md:my-3 lg:my-3 desktop:my-4'
                onClick={submit}
            >
                <div className='relative w-5 lg:w-6 desktop:w-7 aspect-square mr-2'>
                    <Image
                        src='/signin.png'
                        fill
                        sizes='(min-width: 1024px) 1.5rem,
                                (min-width: 1281px) 1.75rem,
                                1.25rem'
                        quality={100}
                        alt='sign in icon'
                    />
                </div>
                <span className='leading-tight'>Sign In</span>
            </button>

            <div className='text-[0.5rem] lg:text-xs desktop:sm font-semibold mt-2 lg:mt-3 desktop:mt-4 !leading-3 lg:!leading-5 desktop:!leading-6'>
                <p className='text-[#7F7F7F]'>
                    Forgot your password?&nbsp;
                    <Link
                        href='#'
                        className='text-debian-red font-bold hover:underline'
                    >
                        Click Here
                    </Link>
                </p>
                <p className='text-[#7F7F7F]'>
                    New to Wensday Club?&nbsp;
                    <Link
                        href='/signup'
                        prefetch={false}
                        className='text-debian-red font-bold hover:underline'
                    >
                        Click Here
                    </Link>
                </p>
            </div>
        </>
    );
}
