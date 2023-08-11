import { Metadata } from "next";
import "../globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        default: "Welcome to Wensday Club",
        template: "%s",
    },
    description: "Join Wensday Club today",
    viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className='pb-10'>
                <div className='flex-center mt-4 lg:mt-7 desktop:mt-14'>
                    <span
                        className={
                            inter.className +
                            " text-xs md:text-sm lg:text-lg desktop:text-xl font-bold px-3 lg:px-5 py-[0.2rem] lg:py-1 desktop:py-2 shadow-sm shadow-black rounded-[30px] bg-turquoise-blue"
                        }
                    >
                        Wensday Club
                    </span>
                </div>
                {/* md:w-[39%] sm:w-1/2 max-w-xl */}
                <div className='flex-center flex-col mt-7 desktop:mt-10 border-[1px] shadow-xl border-gray-700 rounded-xl w-fit px-10 desktop:px-12 mx-auto bg-white-smoke py-4 lg:py-5 desktop:py-7'>
                    {children}
                </div>
            </body>
        </html>
    );
}
