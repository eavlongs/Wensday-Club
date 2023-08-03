'use client'

import { Ubuntu } from "next/font/google"
import Link from "next/link"
import LoginInput from "@/components/LoginInput"
import type { Metadata } from "next"
import Image from "next/image"
import { useState, useEffect } from "react"

export const metadata: Metadata = {
    title: "Login To Wensday Club",
    description: 'Join Wensday Club today',
    viewport: "width=device-width, initial-scale=1",
}

const ubuntu = Ubuntu({
    subsets: ['latin'],
    weight: ['400', '500', '700']
})

export default function Page() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function updateEmail(newEmail: string) {
        setEmail(newEmail)
    }

    function updatePassword(newPassword: string) {
        setPassword(newPassword)
    }

    function submit() {
        console.log({email, password})
    }

    useEffect(() =>
        console.log("email: " + email)
    , [email])

    useEffect(() =>
        console.log("password: " + password)
    , [password])

    return (
        <>
        <p className={ubuntu.className + " font-bold text-xl lg:text-2xl desktop:text-3xl text-debian-red"}>Sign In</p>
        <p className={ubuntu.className + " font-bold opacity-50 text-center leading-tight mb-4 lg:mb-5 desktop:mb-6 text-xs lg:text-sm desktop:text-base mt-3 lg:mt-4 desktop:mt-5"}>Welcome to Wenzday<br/>One click, one account, endless possibilities</p>

        <LoginInput type="email" className="mt-3 lg:mt-5 desktop:mt-7" onChange={updateEmail}/>
        <LoginInput type="password" className="mt-3 lg:mt-5 desktop:mt-7 mb-6 lg:mb-8 desktop:mb-9" onChange={updatePassword} />

        <Link href="#" >
            <button className="text-lg lg:text-xl desktop:text-2xl bg-debian-red text-white-smoke font-medium px-16 md:px-14 py-2 rounded-2xl flex align-center my-4 lg:my-5 desktop:my-7 2xl:my-9" onClick={submit}>
                <div className="relative w-5 lg:w-6 desktop:w-7 aspect-square mr-2">
                    <Image src="/signin.png" fill quality={100} alt="sign in icon"/>
                </div>
                <span className="leading-tight">Sign In</span>
            </button>
        </Link>

        <div className="text-xs lg:text-sm desktop:text-base font-semibold leading-7">
            <p className="text-[#7F7F7F]">Forgot your password?&nbsp;
                <Link href="#" className="text-debian-red font-bold hover:underline">Click Here</Link>
            </p>
            <p className="text-[#7F7F7F]">New to Wensday Club?&nbsp;
                <Link href="#" className="text-debian-red font-bold hover:underline" replace>Click Here</Link>
            </p>
        </div>

        </>
    )
}
