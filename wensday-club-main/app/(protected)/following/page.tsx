import { ubuntu } from "@/app/fonts";
import { inter } from "@/app/fonts";
import Image from "next/image";

export default function Page() {
    return (
        <>
            <div className=' w-4/5 mx-auto'>
                <h1
                    className={
                        ubuntu.className +
                        " font-medium text-sm md:text-base lg:text-xl desktop:text-2xl"
                    }
                >
                    Following
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
            <div className='relative w-20 aspect-square'>
                <Image
                    src='/oppenheimer.png'
                    objectFit='cover'
                    alt='oppenheimer profile'
                    fill
                    className='rounded-[50%] cursor-pointer hover:opacity-95'
                />
            </div>
            <div className='ml-4'>
                <p className='text-base font-semibold text-debian-red cursor-pointer hover:underline leading-10'>
                    Bunlong Prank
                </p>
                <div className={inter.className + " text-xs"}>
                    <span className='hover:font-medium cursor-pointer'>
                        100K Followers
                    </span>
                    <span className='ml-3 hover:font-medium cursor-pointer'>
                        21 Following
                    </span>
                </div>
            </div>

            <div className='h-full ml-auto self-center'>
                <button className='bg-debian-red border-2 hover:border-gray-600 py-2 px-4 rounded-[15px] text-white font-bold'>
                    Following
                </button>
            </div>
        </div>
    );
}
