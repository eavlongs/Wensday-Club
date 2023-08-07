"use client";

import { Ubuntu } from "next/font/google";
import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { useState, useEffect } from "react";
import Signup1 from "@/components/Signup1";
import Signup2 from "@/components/Signup2";
import Signup3 from "@/components/Signup3";
import useSignUpStore from "@/stores/useSignUpStore";

export const metadata: Metadata = {
    title: "Sign Up For Wensday Club",
    description: "Join Wensday Club today",
    viewport: "width=device-width, initial-scale=1",
};

const ubuntu = Ubuntu({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

type StepOneDataType = {
    firstName: string;
    lastName: string;
    email: string;
};

type StepTwoDataType = {
    day: number;
    month: number;
    year: number;
};

type StepThreeDataType = {
    password: string;
    confirmPassword: string;
};

type DataType = {
    stepOne: StepOneDataType;
    stepTwo: StepTwoDataType;
    stepThree: StepThreeDataType;
};

export default function Page() {
    const data = useSignUpStore((state) => state.data);
    const page = useSignUpStore((state) => state.page);

    return (
        <>
            {/* {JSON.stringify(data)} */}
            {page === 1 ? <Signup1 /> : null}
            {page === 2 ? <Signup2 /> : null}
            {page === 3 ? <Signup3 /> : null}
        </>
    );
}
