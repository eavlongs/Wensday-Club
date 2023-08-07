"use client";
import { ubuntu } from "@/app/fonts";
import LoginInput from "./LoginInput";
import { useState } from "react";
import Link from "next/link";
import useSignUpStore from "@/stores/useSignUpStore";

type StepOneDataType = {
    firstName: string;
    lastName: string;
    email: string;
};

export default function Signup1of3() {
    const next = useSignUpStore((state) => state.next);
    const sharedStepOneData = useSignUpStore((state) => state.data.stepOne);
    const setSharedStepOneData = useSignUpStore(
        (state) => state.setStepOneData
    );

    const [localStep1Data, setLocalStep1Data] = useState<StepOneDataType>({
        ...sharedStepOneData,
    });

    function updateFirstName(newFirstName: string) {
        setLocalStep1Data((oldData) => ({
            ...oldData,
            firstName: newFirstName,
        }));
    }

    function updateLastName(newLastName: string) {
        setLocalStep1Data((oldData) => ({ ...oldData, lastName: newLastName }));
    }

    function updateEmail(newEmail: string) {
        setLocalStep1Data((oldData) => ({ ...oldData, email: newEmail }));
    }

    function goToNextStep() {
        setSharedStepOneData(localStep1Data);
        next();
    }

    return (
        <>
            <p
                className={
                    ubuntu.className +
                    " font-bold text-sm md:text-md lg:text-xl desktop:text-2xl text-debian-red"
                }
            >
                Create An Account(1/3)
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

            <div className='flex justify-between w-[17rem] md:w-[19rem] lg:w-[22rem] desktop:w-[25rem] mt-3 lg:mt-5 desktop:mt-7'>
                <LoginInput
                    type='text'
                    placeholder='First Name'
                    value={localStep1Data.firstName}
                    onChange={updateFirstName}
                />
                <LoginInput
                    type='text'
                    placeholder='First Name'
                    value={localStep1Data.lastName}
                    onChange={updateLastName}
                />
            </div>

            <LoginInput
                type='email'
                className='mt-3 lg:mt-5 desktop:mt-7 mb-6 lg:mb-8 desktop:mb-9'
                value={localStep1Data.email}
                onChange={updateEmail}
            />

            <div className='flex justify-end mx-auto w-[17rem] md:w-[19rem] lg:w-[22rem] desktop:w-[25rem] my-4 lg:my-5 desktop:my-7 2xl:my-9 text-xs lg:text-base desktop:text-lg'>
                <button
                    className='text-center bg-debian-red text-white-smoke font-bold px-8 py-2 rounded-2xl'
                    onClick={goToNextStep}
                >
                    Next
                </button>
            </div>

            <div className='text-[0.5rem] lg:text-xs desktop:sm font-semibold leading-7'>
                <p className='text-[#7F7F7F]'>
                    Already have an account?&nbsp;
                    <Link
                        href='/login'
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
