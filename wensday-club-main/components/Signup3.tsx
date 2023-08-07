import { ubuntu } from "@/app/fonts";
import useSignUpStore from "@/stores/useSignUpStore";
import Link from "next/link";
import LoginInput from "./LoginInput";
import { useState } from "react";

type StepThreeDataType = {
    password: string;
    confirmPassword: string;
};

export default function Signup3of3() {
    const data = useSignUpStore((state) => state.data);
    const back = useSignUpStore((state) => state.back);
    const sharedStepThreeData = useSignUpStore((state) => state.data.stepThree);
    const setSharedStepThreeData = useSignUpStore(
        (state) => state.setStepThreeData
    );

    const [localData, setLocalData] = useState<StepThreeDataType>({
        password: sharedStepThreeData.password,
        confirmPassword: sharedStepThreeData.confirmPassword,
    });

    function goBack() {
        setSharedStepThreeData(localData);
        back();
    }

    function signUp() {
        console.log(data);
    }

    return (
        <>
            <p
                className={
                    ubuntu.className +
                    " font-bold text-sm md:text-md lg:text-xl desktop:text-2xl text-debian-red"
                }
            >
                Create An Account(3/3)
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
                type='password'
                className='mt-3 lg:mt-5 desktop:mt-7'
                value={localData.password}
                onChange={(newPassword) => {
                    setLocalData({ ...localData, password: newPassword });
                }}
            />
            <LoginInput
                type='password'
                placeholder='Confirm Password'
                className='mt-3 lg:mt-5 desktop:mt-7 mb-5 lg:mb-7 desktop:mb-9'
                value={localData.confirmPassword}
                onChange={(newConfirmPassword) => {
                    setLocalData({
                        ...localData,
                        confirmPassword: newConfirmPassword,
                    });
                }}
            />

            <div className='flex justify-between mx-auto w-[17rem] md:w-[19rem] lg:w-[22rem] desktop:w-[25rem] my-4 lg:my-5 desktop:my-7 2xl:my-9 text-xs lg:text-base desktop:text-lg'>
                <button
                    className='text-center bg-debian-red text-white-smoke font-bold px-8 py-2 rounded-2xl'
                    onClick={goBack}
                >
                    Back
                </button>
                <button
                    className='text-center bg-debian-red text-white-smoke font-bold px-8 py-2 rounded-2xl'
                    onClick={signUp}
                >
                    Sign Up
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
