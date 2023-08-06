import { ubuntu } from "@/app/fonts"

export default function Signup2of3() {
    return (
        <>
        <p className={ubuntu.className + " font-bold text-xl lg:text-2xl desktop:text-3xl text-debian-red"}>Create an Account (2/3)</p>
        <p className={ubuntu.className + " font-bold opacity-50 text-center leading-tight mb-4 lg:mb-5 desktop:mb-6 text-xs lg:text-sm desktop:text-base mt-3 lg:mt-4 desktop:mt-5"}>Welcome to Wenzday<br/>One click, one account, endless possibilities</p>
        </>
    )
}