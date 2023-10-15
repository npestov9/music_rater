import { useState } from "react";
import { Button } from "react-bootstrap";

import { auth, provider } from "../Configs/firebase"
import { signInWithPopup } from "firebase/auth";

export const GoogleLoginBtn = () => {
    const [isLoggenIn, setIsLoggenIn] = useState(false);

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            setIsLoggenIn(true);
        }
        catch {
            
        }
        
    }
    return (
    <>
        {auth.currentUser && (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <h5 style={{ color: 'white', marginRight: '10px' }}>{auth.currentUser?.displayName}</h5>
            <img src={auth.currentUser?.photoURL || ""} width='50px' height='50px' />
        </div>
        )}
        {!auth.currentUser && <Button onClick={signInWithGoogle}> Sign in with Google </Button>}
    </>
    );

}