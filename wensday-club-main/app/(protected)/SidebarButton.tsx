"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarButton({
    text,
}: {
    text: "home" | "chat" | "saved";
}) {
    const pathname = usePathname();
    let active = false;
    if (text.toLowerCase() === "home" && pathname === "/") active = true;
    else if (text.toLowerCase() === "chat" && pathname === "/chat")
        active = true;
    else if (text.toLowerCase() === "saved" && pathname === "/saved")
        active = true;

    const sidebarClassName =
        "block mx-auto w-2/3 text-[0.5rem] sm:text-xs md:text-sm lg:text-base desktop:text-lg py-1 desktop:py-2 font-bold capitalize" +
        " ";
    const sidebarActiveClassName =
        "bg-debian-red text-white bg-opacity-75 hover:bg-opacity-100";
    const sidebarInactiveClassName =
        "text-debian-red hover:text-white hover:bg-debian-red";

    return (
        <Link href={text === "home" ? "/" : "/" + text} tabIndex={-1}>
            <button
                className={
                    sidebarClassName +
                    (active ? sidebarActiveClassName : sidebarInactiveClassName)
                }
            >
                {text}
            </button>
        </Link>
    );
}
