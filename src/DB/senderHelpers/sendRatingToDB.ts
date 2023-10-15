import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../Configs/firebase"
import { useAuthState } from "react-firebase-hooks/auth";


export const useSendRatingToDb = (rating: number, albumId: string) => {
    const ratingsRef = collection(db, "ratings");
    const [user] = useAuthState(auth);

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
}