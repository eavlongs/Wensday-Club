import { Ubuntu } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

const ubuntu = Ubuntu({
    subsets: ['latin'],
    weight: ['400', '500', '700']
})

export default function Page() {
    return (
        <>
        <p className={ubuntu.className + " font-bold text-xl lg:text-2xl desktop:text-3xl text-debian-red"}>Join Wensday Club</p>
        <p className={ubuntu.className + " font-bold opacity-50 text-center leading-tight mb-4 lg:mb-5 desktop:mb-6 text-xs lg:text-sm desktop:text-base mt-3 lg:mt-4 desktop:mt-5"}>Welcome to Wenzday<br/>One click, one account, endless possibilities</p>

            <Link href="/login" replace>
            <button className="text-lg lg:text-xl desktop:text-2xl bg-debian-red text-white-smoke font-medium px-16 md:px-14 py-2 rounded-2xl flex align-center my-4 lg:my-5 desktop:my-7 2xl:my-9">
                <div className="relative w-5 lg:w-6 desktop:w-7 aspect-square mr-2">
                    <Image src="/signin.png" fill quality={100} alt="sign in icon"/>
                </div>
                <span className="leading-tight">Sign In</span>
            </button>
            </Link>

            <Link href="#" replace>
            <button className="text-lg lg:text-xl desktop:text-2xl bg-debian-red text-white-smoke font-medium px-16 md:px-14 py-2 rounded-2xl flex align-center my-4 lg:my-5 desktop:my-7 2xl:my-9">
                <div className="relative w-5 lg:w-6 desktop:w-7 aspect-square mr-2">
                    <Image src="/signin.png" fill quality={100} alt="sign in icon"/>
                </div>
                <span className="leading-tight">Sign Up</span>
            </button>
            </Link>

            <Link href="#" replace>
            <button className="text-lg lg:text-xl desktop:text-2xl bg-debian-red text-white-smoke font-medium px-16 md:px-14 py-2 rounded-2xl flex align-center my-4 lg:my-5 desktop:my-7 2xl:my-9">
                <div className="relative w-5 lg:w-6 desktop:w-7 aspect-square mr-2">
                    <Image src="/signin.png" fill quality={100} alt="sign in icon"/>
                </div>
                <span className="leading-tight">Sign Up</span>
            </button>
            </Link>
        </>
    )
}