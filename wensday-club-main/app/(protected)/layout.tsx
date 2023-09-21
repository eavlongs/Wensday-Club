import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        default: "Wensday Club",
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
            <head>
                <script
                    src='https://kit.fontawesome.com/bc3caf0f25.js'
                    crossOrigin='anonymous'
                ></script>
            </head>
            <body className='flex-center'>{children}</body>
        </html>
    );
}
