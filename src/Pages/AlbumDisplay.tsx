import { useEffect } from "react";

type Props = {
  album: string;
  albumImg: string;
};

export const AlbumDisplay = () => {
    //TODO: complete the page
    return <div> NOTHING HERE YET</div>
//     useEffect(() => {
//     async function getAlbumTracks() {
//         var searchParams = {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Authorization": "Bearer " + accessToken
//             },
//         }

//         const returnedAlbums = await fetch("https://api.spotify.com/v1/artists/"+artistId+"/albums"+"?include_groups=album&market=US&limit=50", searchParams)
//             .then((data) => data.json())
//             .then((res) => {setAlbums(res.items); return res.items })
        
//         console.log(returnedAlbums);
//     }

//     getAlbumTracks();
    
// }, [artistId])
}