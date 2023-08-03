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
                <div className='user_info w-[150px] h-[150px] my-5'>

                    <div className='user_name w-[150px] h-[75px] to-blue-500'>
                        <h1>Yilong Ma</h1>
                    </div>
                    
                <div className='followers w-[150px] h-[75px]'>
                    <button>posts</button>
                    <button>followers</button>
                    <button>followings</button>
                </div>

                </div>
            </div>
        </>
    )
};