interface PropType {
    children: React.ReactNode;
    submitText?: string;
    onExit: () => void;
    onSubmit?: () => void;
}

export default function Popup({
    children,
    submitText,
    onExit,
    onSubmit,
}: PropType) {
    return (
        <>
            <div
                className='backdrop-blur-sm bg-gray-600/50 w-screen h-screen fixed top-0 left-0 z-20'
                onClick={onExit}
            ></div>
            <div className='flex items-center justify-center flex-col border-[1px] border-black bg-white min-w-[500px] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] min-h-[350px] z-30 rounded-xl py-5'>
                {children}
                {submitText !== undefined &&
                submitText !== null &&
                submitText.length > 0 ? (
                    <div className='flex w-[80%] justify-between text-center mt-auto capitalize'>
                        <button
                            className='border-[1px] border-white bg-debian-red text-white px-3 py-2 font-bold rounded-[10px]'
                            onClick={onExit}
                        >
                            Cancel
                        </button>
                        <button
                            className='border-[1px] border-white bg-debian-red text-white px-3 py-2 font-bold rounded-[10px]'
                            onClick={onSubmit}
                        >
                            {submitText}
                        </button>
                    </div>
                ) : null}
            </div>
        </>
    );
}
