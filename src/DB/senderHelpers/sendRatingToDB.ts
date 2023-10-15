import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../Configs/firebase"
import { useAuthState } from "react-firebase-hooks/auth";
import { User } from "firebase/auth";


export const sendRatingToDb = (rating: number, albumId: string, user:User) => {
    const ratingsRef = collection(db, "ratings");

    const sendData = async () => {
        await addDoc(ratingsRef,
            {
                albumId,
                userId: user?.uid,
                username: user?.displayName,
                rating
            }
        );
    }

    sendData();
}