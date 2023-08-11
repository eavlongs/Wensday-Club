"use client";
import { ubuntu } from "@/app/fonts";
import { useState } from "react";
import useSignUpStore from "@/stores/useSignUpStore";
import Link from "next/link";

const MINIMUM_AGE = 13;

let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

let monthOptions: Array<React.JSX.Element> = [];
months.forEach((month, index) => {
    monthOptions.push(
        <option value={index + 1} key={index + 1}>
            {month}
        </option>
    );
});

let years: Array<number> = [];
let thisYear = new Date().getFullYear();
for (let i = thisYear - MINIMUM_AGE; i >= thisYear - 100; i--) years.push(i);

let yearOptions: Array<React.JSX.Element> = [];
years.forEach((year) => {
    yearOptions.push(
        <option value={year} key={year}>
            {year}
        </option>
    );
});

type StepTwoDataType = {
    day: number;
    month: number;
    year: number;
};

function getDaysInMonth(year: number, month: number) {
    return new Date(year, month, 0).getDate();
}

export default function Signup2of3() {
    const next = useSignUpStore((state) => state.next);
    const back = useSignUpStore((state) => state.back);
    const sharedStepTwoData = useSignUpStore((state) => state.data.stepTwo);
    const setSharedStepTwoData = useSignUpStore(
        (state) => state.setStepTwoData
    );

    const [localData, setLocalData] = useState<StepTwoDataType>({
        ...sharedStepTwoData,
    });

    const isAbleToContinue = !(
        localData.year === 0 ||
        localData.month === 0 ||
        localData.day === 0
    );

    let dayOptions: Array<React.JSX.Element> = [];

    if (localData.month !== 0 && localData.year !== 0) {
        for (
            let i = 1;
            i <= getDaysInMonth(localData.year, localData.month);
            i++
        ) {
            dayOptions.push(
                <option value={i} key={i}>
                    {i}
                </option>
            );
        }
    }

    function goBack() {
        setSharedStepTwoData(localData);
        back();
    }

    function goToNextPage() {
        setSharedStepTwoData(localData);
        next();
    }

    return (
        <>
            {/* {JSON.stringify(localData)} */}
            <p
                className={
                    ubuntu.className +
                    " font-bold text-sm md:text-md lg:text-xl desktop:text-2xl text-debian-red"
                }
            >
                Create An Account(2/3)
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

            <p className='font-bold self-start text-lg mb-3 mt-3 lg:mt-5 desktop:mt-7'>
                Date Of Birth
            </p>
            <div className='shadow-none flex justify-around w-[17rem] md:w-[19rem] lg:w-[22rem] desktop:w-[25rem] mb-6 lg:mb-8 desktop:mb-9'>
                <select
                    className='text-xs lg:text-base desktop:text-lg font-bold cursor-pointer bg-light-gray text-gray-600 px-2 md:px-4 py-[0.35rem] md:py-2 rounded-xl'
                    value={localData.year}
                    onChange={(e) => {
                        setLocalData({
                            ...localData,
                            year: parseInt(e.target.value),
                        });
                    }}
                >
                    <option hidden>Year</option>
                    {yearOptions}
                </select>

                <select
                    className='text-xs lg:text-base desktop:text-lg font-bold cursor-pointer bg-light-gray text-gray-600 px-2 md:px-4 py-[0.35rem] md:py-2 rounded-xl capitalize'
                    value={localData.month}
                    onChange={(e) => {
                        setLocalData({
                            ...localData,
                            month: parseInt(e.target.value),
                            day: 0,
                        });
                    }}
                >
                    <option hidden>Month</option>
                    {monthOptions}
                </select>

                <select
                    className='text-xs lg:text-base desktop:text-lg font-bold cursor-pointer bg-light-gray text-gray-600 px-2 md:px-4 py-[0.35rem] md:py-2 rounded-xl'
                    value={localData.day}
                    onClick={() => {
                        if (dayOptions.length === 0)
                            alert("Please Choose The Year and Month First!");
                    }}
                    onChange={(e) => {
                        setLocalData({
                            ...localData,
                            day: parseInt(e.target.value),
                        });
                    }}
                >
                    <option hidden>Day</option>
                    {dayOptions}
                </select>
            </div>

            <div className='flex justify-between mx-auto w-[17rem] md:w-[19rem] lg:w-[22rem] desktop:w-[25rem] my-4 lg:my-5 desktop:my-7 2xl:my-9 text-xs lg:text-base desktop:text-lg'>
                <button
                    className='text-center bg-debian-red text-white-smoke font-bold px-8 py-2 rounded-2xl'
                    onClick={goBack}
                >
                    Back
                </button>
                <button
                    className={
                        "text-center bg-debian-red text-white-smoke font-bold px-8 py-2 rounded-2xl " +
                        (!isAbleToContinue ? "opacity-70" : "opacity-100")
                    }
                    onClick={goToNextPage}
                    disabled={!isAbleToContinue}
                >
                    Next
                </button>
            </div>

            <div className='text-[0.5rem] lg:text-xs desktop:sm font-semibold mt-2 lg:mt-3 desktop:mt-4 !leading-3 lg:!leading-5 desktop:!leading-6'>
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
