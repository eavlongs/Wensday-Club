"use client";

import { useState } from "react";
import Password1 from "./Password1";
import Password2 from "./Password2";

export default function ChangePassword({
    onExitPopup,
}: {
    onExitPopup: () => void;
}) {
    const [step, setStep] = useState<1 | 2>(1);

    return (
        <div>
            <div
                className='backdrop-blur-sm bg-gray-600/50 w-screen h-screen fixed top-0 left-0'
                onClick={() => onExitPopup()}
            ></div>
            {step === 1 ? (
                <Password1 onNextPage={() => setStep(2)} />
            ) : (
                <Password2 onSave={() => onExitPopup()} />
            )}
        </div>
    );
}
