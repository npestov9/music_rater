import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import { auth, db } from "../Configs/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

interface Rating{
    albumId: string,
    rating: number,
    userId: string,
    username: string
}

export const YourRatedAlbums = () => {
    const [user] = useAuthState(auth);
    const [allRatings, setAllRatings] = useState<Rating[] | null>(null);
    const ratingdbRef = collection(db, "ratings");
    
const getPosts = async () => {
    const data = await getDocs(ratingdbRef);
    const filteredRatings = data.docs
      .map((doc) => ({ ...doc.data(), id: doc.id }) as unknown as Rating)
      .filter((rating) => rating.userId === user?.uid);
    setAllRatings(filteredRatings);
    
    console.log(data);
    };


    useEffect(()=>{
        getPosts();

    }, [])
    

    return (
        <></>
    )
}