import Image from "next/image"
import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ['latin'],
    weight: ["400", "600", "700"]
})

interface PropType {
    type: "password" | "email" | "text",
    placeholder?: string,
    className?: string,
    onChange: (value: string) => void
};

export default function LoginInput({ type, placeholder = type, className = "", onChange }: PropType) {
    // make placeholder uppercase
    placeholder = placeholder.charAt(0).toUpperCase() + placeholder.slice(1)

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value)
    }

    const imageSrc = type === "email" ? '/email.png' : (type === "password" ? "/password.png" : "")

    const inputWidth = type === "text" ? " w-[9.2rem] md:w-[9.5rem] lg:w-[11.5rem] desktop:w-[14.5rem]" : " w-[19rem] md:w-[20rem] lg:w-[24rem] desktop:w-[30rem]"

    const paddingLeft = type === "text" ? " pl-5" : " pl-16"

    return (
        <>
            <div className={className + (imageSrc !== "" ? " relative" : "")}>
                <input type={type} placeholder={placeholder} onChange={handleInput} className={inter.className + inputWidth + paddingLeft + " text-lg lg:text-xl desktop:text-2xl font-bold bg-light-gray text-gray-600 pr-1 md:pr-3 py-1 md:py-3 rounded-xl"}/>
                {imageSrc !== "" ?
                    <div className="absolute top-[0.4rem] left-4 md:top-3 lg:top-2 desktop:top-3">
                        <div className="relative w-6 md:w-7 lg:w-8 aspect-square">
                            <Image src={imageSrc} fill alt={type + " icon"} />
                        </div>
                    </div>
                    :
                    ""
                }
            </div>
        </>
    )
}