'use client'

import { Ubuntu } from "next/font/google"
import Link from "next/link"
import type { Metadata } from "next"
import Image from "next/image"
import { useState, useEffect } from "react"
import Signup1 from "@/components/Signup1"
import Signup2 from "@/components/Signup2"
import Signup3 from "@/components/Signup3"

export const metadata: Metadata = {
    title: "Sign Up For Wensday Club",
    description: 'Join Wensday Club today',
    viewport: "width=device-width, initial-scale=1",
}

const ubuntu = Ubuntu({
    subsets: ['latin'],
    weight: ['400', '500', '700']
})

export default function Page() {
    const [step, setStep] = useState(1)

    return (
        <>
        {step === 1 ? <Signup1 /> : null}
        {step === 2 ? <Signup2 /> : null}
        {step === 3 ? <Signup3 /> : null}
        </>
    )
}