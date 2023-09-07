"use client"

import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

const SignOut = () => {
    return (
        <span
            onClick={() => { signOut() }}
        >
            Exit
        </span>
    );
}

export default SignOut;