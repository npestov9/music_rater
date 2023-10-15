import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const AlbumDisplay = ( ) => {

    const { albumId } = useParams();
    
    const [allSongs, setAllSongs] = useState([])

    useEffect(() => {
        
    async function getAlbumTracks() {
        var searchParams = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                // "Authorization": "Bearer " + accessToken
            },
        }

        const returnedAlbums = await fetch(`https://api.spotify.com/v1/albums/${albumId}/tracks`, searchParams)
            .then((data) => data.json())
            .then((res) => {setAllSongs(res.items); return res.items })
        
        console.log(returnedAlbums);
    }

    getAlbumTracks();
    
    }, [])
    
    return <>PENIS { albumId}</>
}