import Image from "next/image"
import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ['latin'],
    weight: ["400", "600", "700"]
})

interface PropType {
    type: "password" | "email",
    placeholder?: string,
    className?: string,
    onChange: (value: string) => void
};

export default function LoginInput({ type, placeholder = type, className, onChange }: PropType) {
    // make placeholder uppercase
    placeholder = placeholder.charAt(0).toUpperCase() + placeholder.slice(1)

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value)
    }

    const imageSrc = type === "email" ? '/email.png' : '/password.png'
    return (
        <>
            <div className={className + " relative"}>
                <input type={type} placeholder={placeholder} onChange={handleInput} className={inter.className + " w-[19rem] md:w-[20rem] lg:w-[24rem] desktop:w-[30rem] text-lg lg:text-xl desktop:text-2xl font-bold bg-light-gray text-gray-600 pl-16 pr-1 md:pr-3 py-1 md:py-3 rounded-xl"}/>
                <div className="absolute top-[0.4rem] left-4 md:top-3 lg:top-2 desktop:top-3">
                    <div className="relative w-6 md:w-7 lg:w-8 aspect-square">
                        <Image src={imageSrc} fill alt={type + " icon"} />
                    </div>
                </div>
            </div>
        </>
    )
}