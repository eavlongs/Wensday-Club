"use client";
import Signup1 from "@/components/Signup1";
import Signup2 from "@/components/Signup2";
import Signup3 from "@/components/Signup3";
import useSignUpStore from "@/stores/useSignUpStore";

export default function Signup() {
    const data = useSignUpStore((state) => state.data);
    const page = useSignUpStore((state) => state.page);

    return (
        <>
            {/* {JSON.stringify(data)} */}
            {page === 1 ? <Signup1 /> : null}
            {page === 2 ? <Signup2 /> : null}
            {page === 3 ? <Signup3 /> : null}
        </>
    );
}
