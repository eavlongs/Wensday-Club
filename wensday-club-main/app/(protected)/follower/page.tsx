import { ubuntu } from "@/app/fonts";
import { inter } from "@/app/fonts";
import Image from "next/image";

export default function Page() {
    return (
        <>
            <div className='w-4/5 mx-auto mt-5 min-w-[390px]'>
                <h1
                    className={
                        ubuntu.className +
                        " font-medium text-sm md:text-base lg:text-xl desktop:text-2xl mb-3"
                    }
                >
                    Follower
                </h1>

                <User />
                <User />
                <User />
                <User />
                <User />
            </div>
        </>
    );
}

function User() {
    return (
        <div className='flex w-full py-2 px-5 my-2 border-black border-[1px] rounded-[10px] shadow-md hover:shadow-lg cursor-pointer'>
            <div className='relative min-w-[3rem] w-12 lg:w-16 desktop:w-20 aspect-square'>
                <Image
                    src='/oppenheimer.png'
                    objectFit='cover'
                    alt='oppenheimer profile'
                    fill
                    className='rounded-[50%] cursor-pointer hover:opacity-95'
                />
            </div>
            <div className='ml-4'>
                <p className='text-xs lg:text-sm desktop:text-base font-semibold text-debian-red cursor-pointer hover:underline !leading-8 lg:!leading-10'>
                    Bunlong Prank
                </p>
                <div
                    className={
                        inter.className +
                        " text-[0.6rem] md:text-[0.7rem] lg:text-xs"
                    }
                >
                    <span className='hover:font-medium cursor-pointer'>
                        100K Followers
                    </span>
                    <span className='ml-3 hover:font-medium cursor-pointer'>
                        21 Following
                    </span>
                </div>
            </div>

            <div className='h-full ml-auto self-center'>
                <button className='text-xs lg:text-sm desktop:text-base bg-debian-red border-2 hover:border-gray-600 py-[0.4rem] md:py-2 px-2 md:px-3 lg:px-4 rounded-[15px] text-white font-bold'>
                    Following
                </button>
            </div>
        </div>
    );
}
