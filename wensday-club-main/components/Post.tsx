import Link from "next/link";
import Image from "next/image";
import { IonIcon } from "@ionic/react";

export interface PostProp {
    id: string;
    userID: string;
    profileImg: string;
    firstName: string;
    lastName: string;
    text: string;
    image: string;
    likeCount: number;
    commentCount: number;
    shareCount: number;
    postedAt: Date;
}

export interface CommentProp {
    id: string;
    profileImg: string;
    firstName: string;
    lastName: string;
    comment: string;
    commentedAt: Date;
}

export function Post({
    post,
    onComment,
    onShare,
    onReport,
    className = "",
}: {
    post: PostProp;
    onComment: (id: string) => void;
    onShare: (id: string) => void;
    onReport: (id: string) => void;
    className?: string;
}) {
    return (
        <div
            className={
                "border-[1px] border-black shadow-sm rounded-2xl " + className
            }
        >
            <div className='flex mx-4 mt-3 items-center gap-x-3'>
                <Link href='/profile/' prefetch={false}>
                    <div className='relative min-w-[2rem] w-10 lg:w-14 desktop:w-16 aspect-square'>
                        <Image
                            src={post.profileImg}
                            alt='profile picture'
                            fill
                            className='rounded-[50%] cursor-pointer hover:opacity-95 object-cover'
                        />
                    </div>
                </Link>
                <div className='flex flex-col justify-evenly text-debian-red min-h-[2rem] h-10 lg:h-14 desktop:h-16'>
                    <Link href='/profile/' prefetch={false}>
                        <p className='text-xs md:text-sm lg:text-base desktop:text-lg'>
                            {post.firstName} {post.lastName}
                        </p>
                    </Link>
                    <p className='text-[0.5rem] md:text-xs lg:text-sm desktop:text-base'>
                        3 days ago
                    </p>
                </div>
            </div>
            <p className='my-2 mx-3 text-xs md:text-sm lg:text-base desktop:text-lg'>
                {post.text}
            </p>

            <div className='relative w-full'>
                <Image
                    src={post.image}
                    alt='post picture'
                    width={0}
                    height={0}
                    sizes='100vw'
                    loading='lazy'
                    className='w-full h-auto object-cover'
                ></Image>
            </div>
            {/* <img src='/Ling.jpg' alt='post picture' /> */}
            <div className='grid grid-cols-3 my-3 w-full border-y-[1px] border-black m-auto'>
                <button
                    className='like-btn w-full hover:border-[1px] border-black py-2 rounded-md hover:bg-debian-red hover:text-white text-[0.5rem] md:text-xs lg:text-sm desktop:text-base'
                    onClick={() => onReport(post.id)}
                >
                    <div className='inline-block'>
                        <IonIcon
                            icon='thumbs-up-outline'
                            className='mr-2 inline-block align-middle'
                        />
                        <span className='like-text inline-block align-middle'>
                            {post.likeCount}
                        </span>
                    </div>
                </button>
                <button
                    onClick={() => {
                        onComment(post.id);
                    }}
                    className='comment-btn hover:border-[1px] border-black py-2 rounded-md  hover:bg-debian-red hover:text-white text-[0.5rem] md:text-xs lg:text-sm desktop:text-base'
                >
                    <div className='inline-block'>
                        <IonIcon
                            icon='chatbox-ellipses-outline'
                            className='mr-2 inline-block align-middle'
                        />
                        <span className='comment-text inline-block align-middle'>
                            {post.commentCount}
                        </span>
                    </div>
                </button>
                <button
                    onClick={() => {
                        onShare(post.id);
                    }}
                    className='share-btn hover:border-[1px] border-black py-2 rounded-md hover:bg-debian-red hover:text-white text-[0.5rem] md:text-xs lg:text-sm desktop:text-base'
                >
                    <div className='inline-block'>
                        <IonIcon
                            icon='share-outline'
                            className='inline-block align-middle mr-2'
                        />
                        <span className='share-text inline-block align-middle'>
                            {post.shareCount}
                        </span>
                    </div>
                </button>
            </div>
        </div>
    );
}

export function Comment({
    postID,
    comments,
    onExitPopup,
}: {
    postID: string;
    comments: Array<CommentProp> | [];
    onExitPopup: () => void;
}) {
    return (
        <div>
            <div
                className='backdrop-blur-sm bg-gray-600/50 w-screen h-screen fixed top-0 left-0'
                onClick={onExitPopup}
            ></div>
            <div className='border-[1px] border-black rounded-[20px] w-[500px] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white'>
                <p className='text-center'>Comments</p>
                <div className='max-h-[300px] min-h-[400px] overflow-y-auto pt-6'>
                    {comments.map((comment) => {
                        return (
                            <div className='my-1 mx-6 flex' key={comment.id}>
                                <img
                                    src={comment.profileImg}
                                    alt=''
                                    className='rounded-[50%] max-w-[300px] max-h[300px]] w-[200px] h-[60px] object-cover'
                                />
                                <div className='border-[1px] border-white rounded-[10px] ml-5 bg-gray-100'>
                                    <div className='p-2'>
                                        <p className='text-debian-red text-sm'>
                                            {comment.firstName}{" "}
                                            {comment.lastName}
                                        </p>
                                        <p className='text-xs'>
                                            {comment.comment}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className='py-1 px-6 flex'>
                    <img
                        src='/Olivier_1500_Trptch.jpg'
                        alt=''
                        className='rounded-[50%] max-w-[300px] max-h[300px]] w-[150px] h-[60px] object-cover'
                    />
                    <div className='border-[1px] border-white rounded-[10px] ml-5 bg-gray-100 w-[400px]'>
                        <div className='p-2'>
                            <p className='text-debian-red text-sm'>
                                Bunlong Prank
                            </p>
                            <input
                                type='text'
                                placeholder='Write a comment'
                                className='text-sm w-[380px]'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Share({
    postID,
    onExitPopup,
}: {
    postID: string;
    onExitPopup: () => void;
}) {
    return (
        <div>
            <div
                className='backdrop-blur-sm bg-gray-600/50 w-screen h-screen fixed top-0 left-0'
                onClick={onExitPopup}
            ></div>
            <div className='border-[1px] border-black bg-white w-[500px] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[350px]'>
                <p className='text-center font-bold'>Share this Post</p>
                <div className='flex mt-5 ml-5'>
                    <img
                        src='/Olivier_1500_Trptch.jpg'
                        alt=''
                        className='rounded-[50%] max-w-[300px] max-h[300px]] w-[60px] h-[60px] object-cover'
                    />
                    <div className='ml-5'>
                        <textarea
                            placeholder='Write something about this post'
                            className='relative top-0 Sml-5 bg-gray-100 border-white w-[350px] h-[200px] '
                        />
                    </div>
                </div>
                <div className='flex w-[80%] ml-14 mt-5 justify-between text-center'>
                    <button className='border-[1px] border-white bg-debian-red text-white px-3 py-2 font-bold rounded-[10px]'>
                        Cancel
                    </button>
                    <button className='border-[1px] border-white bg-debian-red text-white px-3 py-2 font-bold rounded-[10px]'>
                        Share Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export function Report({
    postID,
    onExitPopup,
}: {
    postID: string;
    onExitPopup: () => void;
}) {
    return (
        <div>
            <div
                className='backdrop-blur-sm bg-gray-600/50 w-screen h-screen fixed top-0 left-0'
                onClick={onExitPopup}
            ></div>
            <div className='border-[1px] border-black bg-white w-[500px] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[420px] rounded-[10px]'>
                <p className='text-center font-bold'>Report</p>
                <p className='ml-10 mt-8 font-bold text-lg'>
                    What is your Problem?
                </p>
                <div>
                    <form className='ml-5 mt-5'>
                        <div className='ml-3 border-[1px] border-white bg-gray-100 px-5 py-1 rounded-[30px] mb-3 w-[90%]'>
                            <input
                                type='checkbox'
                                value='violence_post'
                                name='violence_post'
                            />
                            <label htmlFor='violence_post' className='ml-3'>
                                Violence Post
                            </label>
                        </div>
                        <div className='ml-3 border-[1px] border-white bg-gray-100 px-5 py-1 rounded-[30px] mb-3 w-[90%]'>
                            <input
                                type='checkbox'
                                value='violence_post'
                                name='violence_post'
                            />
                            <label htmlFor='violence_post' className='ml-3'>
                                Violence Post
                            </label>
                        </div>
                        <div className='ml-3 border-[1px] border-white bg-gray-100 px-5 py-1 rounded-[30px] mb-3 w-[90%]'>
                            <input
                                type='checkbox'
                                value='violence_post'
                                name='violence_post'
                            />
                            <label htmlFor='violence_post' className='ml-3'>
                                Violence Post
                            </label>
                        </div>
                        <div className='ml-3 border-[1px] border-white bg-gray-100 px-5 py-1 rounded-[30px] mb-3 w-[90%]'>
                            <input
                                type='checkbox'
                                value='violence_post'
                                name='violence_post'
                            />
                            <label htmlFor='violence_post' className='ml-3'>
                                Violence Post
                            </label>
                        </div>
                        <div className='ml-3 border-[1px] border-white bg-gray-100 px-5 py-1 rounded-[30px] mb-3 w-[90%]'>
                            <input
                                type='text'
                                placeholder='Other'
                                className='bg-gray-100 w-[100%]'
                            />
                        </div>
                    </form>
                    <div className='flex w-[85%] ml-10 mt-5 justify-between text-center'>
                        <button className='border-[1px] border-white bg-debian-red text-white px-3 py-2 font-bold rounded-[10px]'>
                            Cancel
                        </button>
                        <button className='border-[1px] border-white bg-debian-red text-white px-3 py-2 font-bold rounded-[10px]'>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
