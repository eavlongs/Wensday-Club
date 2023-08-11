import type { Metadata } from "next";
import Login from "./Login";

export const metadata: Metadata = {
    title: "Login To Wensday Club",
};

export default function Page() {
    return <Login />;
}
