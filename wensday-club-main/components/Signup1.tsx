import { ubuntu } from "@/app/fonts"
import LoginInput from "./LoginInput"
import Link from "next/link"

export default function Signup1of3() {
    return (
        <>
        <p className={ubuntu.className + " font-bold text-xl lg:text-2xl desktop:text-3xl text-debian-red"}>Create an Account (1/3)</p>
        <p className={ubuntu.className + " font-bold opacity-50 text-center leading-tight mb-4 lg:mb-5 desktop:mb-6 text-xs lg:text-sm desktop:text-base mt-3 lg:mt-4 desktop:mt-5"}>Welcome to Wenzday<br/>One click, one account, endless possibilities</p>

        <div className="flex justify-between w-[19rem] md:w-[20rem] lg:w-[24rem] desktop:w-[30rem] mt-3 lg:mt-5 desktop:mt-7">
            <LoginInput type="text" placeholder="First Name" onChange={() => {}} />
            <LoginInput type="text" placeholder="First Name" onChange={() => {}} />
        </div>

        <LoginInput type="email" className="mt-3 lg:mt-5 desktop:mt-7 mb-6 lg:mb-8 desktop:mb-9" onChange={() => {}}/>

        <div className="flex justify-between mx-auto w-[19rem] md:w-[20rem] lg:w-[24rem] desktop:w-[30rem] my-4 lg:my-5 desktop:my-7 2xl:my-9">
            <button className="text-center bg-debian-red text-white-smoke font-bold text-lg lg:text-xl desktop:text-2xl px-10 py-2 rounded-2xl">Back</button>
            <button className="text-center bg-debian-red text-white-smoke font-bold text-lg lg:text-xl desktop:text-2xl px-10 py-2 rounded-2xl">Next</button>
        </div>

        <div className="text-xs lg:text-sm desktop:text-base font-semibold leading-7">
            <p className="text-[#7F7F7F]">Already have an account?&nbsp;
                <Link href="#" replace className="text-debian-red font-bold hover:underline">Click Here</Link>
            </p>
        </div>
        </>
    )
}