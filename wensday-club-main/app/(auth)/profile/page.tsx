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
            <div className='under_cover cover w-[990px] h-[200px] ml-52 flex items-start' >
                
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
                    
                <div className='followers w-[1200px] h-[30px] flex items-strech text-xl '>
                    <button className='pl-6 hover:text-sky-700'><a href="">12 posts</a></button>
                    <button className='pl-24 hover:text-sky-700'><a href="">100k followers</a> </button>
                    <button className='pl-24 hover:text-sky-700'><a href="">2 followings</a></button>
                    
                </div>
               
                </div>
                
               
                </div>
                
                
                <div className="pt-4 pb-4 pl-[400px]">
                <button className= "w-[150px] bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                        <a href="/">Edit</a> 
                </button>
                </div>
            </div>
            <div className='w-[1200px] h-[900px] border-black  pt-6 pl-6 flex'>
                <div className='w-[400px] h-[400px]  pt-6 pl-6 border-2 border-gray-700 rounded-xl'>
                <div className= "w-[200px] h-[40px] bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded-full font-bold text-xl text-center">
                        About Me
                </div>
                <div className='About_Me_text font-mono font-size-sm mt-4 md-0'>
                        <p>
                        “Preoccupied with a single leaf...
                        you won't see the tree.
                        Preoccupied with a single tree...
                        you'll miss the entire forest." 
                        </p>
                </div>
                <div className='mt-9'>
                <div className= "w-[200px] h-[40px] bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded-full font-bold text-xl text-center">
                        Hobbies
                </div>
                <div className='About_Me_text font-mono font-size-sm mt-2'>
                        <ul className="list-disc">
                            
                            <li>Cooking Blue</li>
                            <li>Build Nuclear Reactor</li>
                        </ul>
                </div>
                </div>
                </div>
                <div className="somthing-to-say w-[900px] h-[130px] ml-[30px] flex">
                    <div className='font-bold text-2xl text-gray-500 pt-4 pb-4'>
                    <p>Something to say...?</p>
                    </div>
                    <div className="post pt-4 pb-4 pl-[270px]">
                    <button className= "w-[150px] bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                        <a href="/">Post</a> 
                </button>
                    </div>
                </div>
            </div>
        </>
    )
};