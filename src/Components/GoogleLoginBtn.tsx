import { useState } from "react";
import { Button } from "react-bootstrap";

import { auth, provider } from "../Configs/firebase"
import { signInWithPopup } from "firebase/auth";
import {useAuthState} from "react-firebase-hooks/auth"

export const GoogleLoginBtn = () => {
    const [user] = useAuthState(auth);

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
        }
        catch {
            
        }
        
    }
    return (
    <>
        {user && (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <h5 style={{ color: 'white', marginRight: '10px' }}>{user?.displayName}</h5>
            <img src={user?.photoURL || ""} width='50px' height='50px' />
        </div>
        )}
        {!user && <Button onClick={signInWithGoogle}> Sign in with Google </Button>}
    </>
    );

}