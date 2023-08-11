// "use client";

// import Image from "next/image";
// import { IonIcon } from "@ionic/react";

// import { useState, useEffect } from "react";
// import OwnProfile from "@/components/OwnProfile";
// import EditOwnProfile from '@/components/EditOwnProfile'

// export default function Page() {

//     const [edit, setEdit] = useState(1);

//     return (
//         <>
//         {edit === 1 ? <OwnProfile /> : null}
//         {edit === 2 ? <EditOwnProfile /> : null}
//         </>
//     );
// }
"use client";
import React, { useState } from "react";
import OwnProfile from "@/components/OwnProfile";
import EditOwnProfile from "@/components/EditOwnProfile";

export default function Page() {
    const [showOwnProfile, setShowOwnProfile] = useState(true);

    return (
        <div>
            <button onClick={() => setShowOwnProfile(!showOwnProfile)}>
                Edit
            </button>
            {showOwnProfile ? (
                <OwnProfile
                    onEdit={() => {
                        setShowOwnProfile(false);
                    }}
                />
            ) : (
                <EditOwnProfile />
            )}
        </div>
    );
}
