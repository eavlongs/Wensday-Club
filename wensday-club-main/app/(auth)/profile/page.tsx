import Image from 'next/image'
export default function Page(){
    return(
        <>
        <div className='cover w-[1200px] h-[300px]'>
                    <img
                        className="max-h-[300px] w-[1200px]"
                        src="sonflower.jpg"
                        alt="image description"
                        />
                </div>
            <div className='under_cover cover w-[990px] h-[200px] bg-red-500 ml-52 flex items-start' >
                <div className="max-w-[150px] max-h-[150px] w-[calc(6rem+6vw)] h-[calc(6rem+6vw)] relative">
                    <Image
                        src="/Olivier_1500_Trptch.jpg"
                        fill={true}
                        alt="profile picture"
                        objectFit="cover"
                        className="rounded-[50%] my-5"
                    />
                </div>
                <div className='user_info w-[150px] h-[150px] my-5 '>
                <div className="profile mt-11">
                    <div className='user_name w-[150px] h-[30px] flex items-center justify-center text-2xl '>
                        <h1>Yilong Ma</h1>
                    </div>
                    
                <div className='followers w-[1200px] h-[30px] flex items-strech text-xl'>
                    <button className='pl-6'>12 posts</button>
                    <button className='pl-24'>100k followers</button>
                    <button className='pl-24'>2 followings</button>
                </div>
                </div>
                <button className="bg-green-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                         Edit
                </button>
                </div>
            </div>
        </>
    )
};