import type { Metadata } from "next";
import Signup from "./Signup";

export const metadata: Metadata = {
    title: "Sign Up For Wensday Club",
};

export default function Page() {
    return <Signup />;
}
