"use client";

import { useState } from "react";
import Image from "next/image";
import { inter } from "@/app/fonts";

interface PropType {
    type: "password" | "email" | "text";
    placeholder?: string;
    className?: string;
    value?: string;
    onChange: (value: string) => void;
}

export default function LoginInput({
    type,
    placeholder = type,
    className = "",
    value = "",
    onChange,
}: PropType) {
    // make placeholder uppercase
    placeholder = placeholder.charAt(0).toUpperCase() + placeholder.slice(1);

    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    const imageSrc =
        type === "email"
            ? "/email.png"
            : type === "password"
            ? "/password.png"
            : "";

    const inputWidth =
        type === "text"
            ? " w-[8.25rem] md:w-[9.25rem] lg:w-[10.5rem] desktop:w-[12rem]"
            : " w-[17rem] md:w-[19rem] lg:w-[22rem] desktop:w-[25rem]";

    const paddingLeft = type === "text" ? " pl-5" : " pl-10 md:pl-14";

    const inputType =
        type !== "password" ? type : !isPasswordVisible ? "password" : "text";

    return (
        <>
            <div
                className={
                    className + " group " + (imageSrc !== "" ? " relative" : "")
                }
            >
                <input
                    type={inputType}
                    placeholder={placeholder}
                    defaultValue={value}
                    onChange={handleInput}
                    className={
                        inter.className +
                        inputWidth +
                        paddingLeft +
                        " text-xs lg:text-base desktop:text-lg font-bold bg-light-gray text-gray-600 pr-1 md:pr-3 py-[0.35rem] md:py-2 rounded-xl"
                    }
                />
                {imageSrc !== "" ? (
                    <div className='absolute top-[0.4rem] left-4 md:top-[0.35rem] lg:top-2 desktop:top-[0.6rem]'>
                        <div className='relative w-4 md:w-5 lg:w-6 aspect-square'>
                            <Image
                                src={imageSrc}
                                fill
                                sizes='(min-width: 768px) 1.25rem,
                                        (min-width: 1024px) 1.5rem
                                        1rem'
                                alt={type + " icon"}
                            />
                        </div>
                    </div>
                ) : null}
                {type === "password" ? (
                    <div className='absolute top-[0.4rem] right-4 md:top-[0.35rem] lg:top-2 desktop:top-[0.6rem]'>
                        <div className='relative w-4 md:w-5 lg:w-6 aspect-square opacity-0 hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-150 ease-in-out'>
                            <Image
                                src={
                                    !isPasswordVisible
                                        ? "/show-password.png"
                                        : "/hide-password.png"
                                }
                                fill
                                sizes='(min-width: 768px) 1.25rem,
                                        (min-width: 1024px) 1.5rem
                                        1rem'
                                alt={type + " icon"}
                                onClick={() => {
                                    setPasswordVisible((oldValue) => {
                                        return !oldValue;
                                    });
                                }}
                                className='cursor-pointer'
                            />
                        </div>
                    </div>
                ) : null}
            </div>
        </>
    );
}
