import Image from "next/image";

export default function Page() {
    return (
        <>
            {/* <div className="chat w-[700px] h-[500px]  py-20 px-20 items-center justify-center ml-[300px] mt-[200px] "> */}

            <div className="min-h-screen flex flex-col items-center justify-center">
                {/* chat box */}
                <div className="w-[600px] h-[700px] flex flex-col border shadow-md bg-white">
                    <div className="flex items-center justify-between border-b p-2 h-[100px]">
                        {/* user info */}
                        <div className="flex items-center">
                            <img
                                className="rounded-full w-[70px] h-[70px] ml-9"
                                src="/Olivier_1500_Trptch.jpg"
                            />

                            <div className="pl-2">
                                <div className="font-semibold">
                                    <a className="hover:underline" href="#">
                                        <h1>Bunlong Prak</h1>
                                    </a>
                                </div>
                                <div className="text-xs text-gray-600">
                                    Online
                                </div>
                            </div>
                        </div>
                        {/* end user info */}
                        {/* chat box action */}
                        <div>
                            <a
                                className="inline-flex hover:bg-indigo-50 rounded-full p-2"
                                href="#"
                            ></a>
                            <button
                                className="inline-flex hover:bg-indigo-50 rounded-full p-2"
                                type="button"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        {/* end chat box action */}
                    </div>
                    <div className="flex-1 px-4 py-4 overflow-y-auto">
                        {/* chat message */}
                        <div className="flex items-center mb-4">
                            <div className="flex-none flex flex-col items-center space-y-1 mr-4">
                                <img
                                    className="rounded-full w-[80px] h-[80px]"
                                    src="Olivier_1500_Trptch.jpg"
                                />
                            </div>
                            <div className="flex-1 bg-red-600 text-white p-2 rounded-lg mb-2 relative">
                                <div>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit.
                                </div>
                                {/* arrow */}
                                <div className="absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-red-600" />
                                {/* end arrow */}
                            </div>
                        </div>
                        {/* end chat message */}
                        {/* chat message */}
                        <div className="flex items-center flex-row-reverse mb-4">
                            <div className="flex-none flex flex-col items-center space-y-1 ml-4"></div>
                            <div className="flex-1 bg-indigo-100 text-gray-800 p-2 rounded-lg mb-2 relative">
                                <div>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit.Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit.
                                </div>
                                {/* arrow */}
                                <div className="absolute right-0 top-1/2 transform translate-x-1/2 rotate-45 w-2 h-2 bg-indigo-100" />
                                {/* end arrow */}
                            </div>
                        </div>
                        {/* end chat message */}
                        {/* chat message */}
                        <div className="flex items-center mb-4">
                            <div className="flex-none flex flex-col items-center space-y-1 mr-4">
                                <img
                                    className="rounded-full w-[80px] h-[80px]"
                                    src="Olivier_1500_Trptch.jpg"
                                />
                            </div>
                            <div className="flex-1 bg-red-600 text-white p-2 rounded-lg mb-2 relative">
                                <div>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit.
                                </div>
                                {/* arrow */}
                                <div className="absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-red-600" />
                                {/* end arrow */}
                            </div>
                        </div>
                        {/* end chat message */}
                    </div>
                    <div className="flex items-center border-t p-2">
                        {/* chat input action */}
                        <div>
                            {/* <button
            className="inline-flex hover:bg-indigo-50 rounded-full p-2"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button> */}
                        </div>
                        {/* end chat input action */}
                        <div className="w-full mx-2 ">
                            <input
                                className="w-full  border-none focus:outline-none"
                                type="text"
                                defaultValue=""
                                placeholder="Write A Message"
                            />
                        </div>
                        {/* chat send action */}
                        <div>
                            <button
                                className="inline-flex hover:bg-indigo-50 rounded-full p-2"
                                type="button"
                            >
                                <img
                                    src="send.png"
                                    alt=""
                                    className="w-[40px] h-[40px]"
                                />
                            </button>
                        </div>
                        {/* end chat send action */}
                    </div>
                </div>
                {/* end chat box */}
            </div>

            {/* </div> */}
        </>
    );
}
