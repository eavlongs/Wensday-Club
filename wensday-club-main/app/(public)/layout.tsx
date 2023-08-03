import '../globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="pb-10">
        <div className="flex-center mt-7 desktop:mt-14">
            <span className={inter.className + " text-lg lg:text-xl desktop:text-2xl font-bold px-4 py-2 rounded-[40px] bg-turquoise-blue"}>Wensday Club</span>
        </div>
        <div className="flex-center flex-col mt-7 desktop:mt-10 border-[1px] shadow-xl border-gray-700 rounded-xl lg:w-2/5 md:w-1/2 sm:w-2/3 max-w-2xl mx-auto bg-white-smoke py-2 lg:py-5 desktop:py-7">
            {children}
        </div>
      </body>
    </html>
  )
}
