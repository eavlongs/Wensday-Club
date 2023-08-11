import Image from "next/image";
import Link from "next/link";
import { ubuntu } from "@/app/fonts";

export default function Page() {
    return (
        <>
            <p
                className={
                    ubuntu.className +
                    " font-bold text-sm md:text-md lg:text-xl desktop:text-2xl text-debian-red"
                }
            >
                Join Wensday Club
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

            <Link href='/login'>
                <button className='text-base lg:text-lg desktop:text-xl bg-debian-red text-white-smoke font-medium px-10 lg:px-12 py-2 rounded-2xl flex align-center my-2 md:my-3 lg:my-3 desktop:my-4'>
                    <div className='relative w-5 lg:w-6 desktop:w-7 aspect-square mr-2'>
                        <Image
                            src='/signin.png'
                            fill
                            quality={100}
                            alt='sign in icon'
                        />
                    </div>
                    <span className='leading-tight'>Sign In</span>
                </button>
            </Link>

            <Link href='/signup'>
                <button className='text-base lg:text-lg desktop:text-xl bg-debian-red text-white-smoke font-medium px-10 lg:px-12 py-2 rounded-2xl flex align-center my-2 md:my-3 lg:my-3 desktop:my-4'>
                    <div className='relative w-5 lg:w-6 desktop:w-7 aspect-square mr-2'>
                        <Image
                            src='/signin.png'
                            fill
                            quality={100}
                            alt='sign in icon'
                        />
                    </div>
                    <span className='leading-tight'>Sign Up</span>
                </button>
            </Link>

            <Link href='#'>
                <button className='text-base lg:text-lg desktop:text-xl bg-debian-red text-white-smoke font-medium px-10 lg:px-12 py-2 rounded-2xl flex align-center my-2 md:my-3 lg:my-3 desktop:my-4'>
                    <div className='relative w-5 lg:w-6 desktop:w-7 aspect-square mr-2'>
                        <Image
                            src='/signin.png'
                            fill
                            quality={100}
                            alt='sign in icon'
                        />
                    </div>
                    <span className='leading-tight'>Sign Up</span>
                </button>
            </Link>
        </>
    );
}
