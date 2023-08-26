import { IonIcon } from "@ionic/react";
import Image from "next/image";
import Link from "next/link";

export default function OwnProfile({ onEdit }: { onEdit: () => void }) {
    return (
        <>
            <div
                className='block w-full h-[280px] rounded-lg bg-white bg-cover bg-center p-6 shadow-lg dark:bg-neutral-700'
                style={{ backgroundImage: 'url("/sonflower.jpg")' }}
            >
                <div className='two-button w-[220px] h-[200px] pt-40'>
                    <button
                        type='button'
                        className='w-[180px] mb-2 inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 bg-black bg-opacity-25 hover:bg-opacity-40'
                        data-te-ripple-init=''
                    >
                        Upload New Cover
                    </button>
                    <button
                        type='button'
                        className='w-[180px] inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 bg-black bg-opacity-25 hover:bg-opacity-40'
                        data-te-ripple-init=''
                    >
                        Delete Cover
                    </button>
                </div>
            </div>

            <div className='under_cover cover w-full px-10 flex items-start py-7 gap-x-7'>
                <div className='max-w-[150px] max-h-[150px] w-[calc(6rem+6vw)] h-[calc(6rem+6vw)] relative '>
                    <Image
                        src='/Olivier_1500_Trptch.jpg'
                        fill={true}
                        alt='profile picture'
                        className='rounded-[50%] object-cover'
                    />
                </div>

                <div className='user_info self-center'>
                    <div className='profile'>
                        <div className='user_name text-2xl mb-2'>
                            <h1>Yilong Ma</h1>
                        </div>

                        <div className='followers flex gap-x-8 text-xl '>
                            <button className='hover:text-sky-700'>
                                <a href=''>12 posts</a>
                            </button>
                            <button className='hover:text-sky-700'>
                                <Link href='/follower'>100k followers</Link>{" "}
                            </button>
                            <button className='hover:text-sky-700'>
                                <Link href='/following'>2 followings</Link>
                            </button>
                        </div>
                    </div>
                </div>

                <button
                    className='block w-[230px] bg-debian-red hover:bg-red-700 text-white font-bold text-lg py-2 px-4 rounded-[20px] ml-auto'
                    onClick={() => onEdit()}
                >
                    Edit
                </button>
            </div>
            <div className='w-[1200px] border-black px-6 flex'>
                <div className='w-[400px] h-[350px] py-4 px-3 border-2 border-gray-700 rounded-xl '>
                    <p className='inline-block bg-red-500 text-lg text-white font-bold py-1 px-10 rounded-full text-center'>
                        About Me
                    </p>
                    <div className='About_Me_text font-mono font-size-sm mt-4 md-0'>
                        <p>
                            “Preoccupied with a single leaf... you won't see the
                            tree. Preoccupied with a single tree... you'll miss
                            the entire forest."
                        </p>
                    </div>
                    <div className='mt-9'>
                        <div className='inline-block bg-red-500 text-lg text-white font-bold py-1 px-10 rounded-full text-center'>
                            Hobbies
                        </div>
                        <div className='About_Me_text font-mono font-size-sm mt-2'>
                            <ul className='list-disc'>
                                <li>Cooking Blue</li>
                                <li>Build Nuclear Reactor</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <script
                    type='module'
                    src='https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js'
                ></script>
                <script
                    noModule
                    src='https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js'
                ></script>
                <div className='w-[70%] ml-9'>
                    <div className='flex justify-between mt-10'>
                        <p>something to say?</p>
                        <button className='relative bg-debian-red hover:bg-red-700 border-2 pb-3 pt-3 px-20 rounded-[20px] top-[-20px] text-white font-bold'>
                            Post Here
                        </button>
                    </div>
                    <div className='border-2 border-black shadow-sm rounded-2xl'>
                        <div className='flex p-4'>
                            <img
                                src='/Olivier_1500_Trptch.jpg'
                                alt=''
                                className='rounded-[50%] max-w-[200px] max-h-[200px] w-[70px] h-[70px] object-cover'
                            />
                            <div className='text-debian-red ml-5'>
                                <p className='text-2xl'>Bunlong Prank</p>
                                <p className='text-sm mt-3'>3 days ago</p>
                            </div>
                        </div>
                        <p className='py-2 px-4'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Ea assumenda soluta molestiae sunt dolorem,
                            quam aliquam. Saepe harum architecto ullam, facere
                            praesentium iusto necessitatibus nemo! Illo
                            laboriosam laudantium in vitae.
                        </p>
                        <img src='/Ling.jpg' alt='' />
                        <div className='flex justify-between p-10 w-[90%] m-auto'>
                            <button className='border-2 border-black py-3 px-6 rounded-[10px] hover:bg-debian-red hover:text-white '>
                                <IonIcon
                                    icon='thumbs-up-outline'
                                    className='mr-2 inline-block align-middle'
                                ></IonIcon>
                                <span className='inline-block align-middle'>
                                    Like
                                </span>
                            </button>
                            <button className='border-2 border-black py-3 px-6 rounded-[10px]  hover:bg-debian-red hover:text-white'>
                                <IonIcon
                                    icon='chatbox-ellipses-outline'
                                    className='mr-2 inline-block align-middle'
                                ></IonIcon>
                                <span className='inline-block align-middle'>
                                    Comment
                                </span>
                            </button>
                            <button className='border-2 border-black py-3 px-6 rounded-[10px]  hover:bg-debian-red hover:text-white'>
                                <IonIcon icon='share-outline'></IonIcon>
                                <span className='ml-2'>Share</span>
                            </button>
                        </div>
                    </div>
                </div>
                {/* <div className="something-to-say-and-postButton bg-red-300 h-[90px]">
            <div className="somthing-to-say w-[900px] h-[90px] ml-[30px] flex">
                <div className='font-bold text-2xl text-gray-500 pt-4 pb-4'>
                <p>Something to say...?</p>
                </div>
                <div className="post pt-4  pl-[390px]">
                <button className= "w-[150px] bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                    <a href="/">Post Here</a>
            </button>
                </div>
            </div>
            <div className='w-[930px] h-[600px] bg-blue-300'>

            </div>
            </div> */}
            </div>
        </>
    );
}
