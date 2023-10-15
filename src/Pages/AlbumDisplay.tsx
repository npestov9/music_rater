import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAPIContext } from "../Configs/context";
import { SongBar } from "../Components/SongBar";
import { ListGroup } from "react-bootstrap";

type Song = {
  name: string;
    external_urls: { spotify: string };
  duration_ms: number;
};

export const AlbumDisplay = ( ) => {

    const { albumId } = useParams();
    const accessToken = useAPIContext();
    
    const [albumSongs, setAllSongs] = useState<Song[]>([]);

    useEffect(() => {
        
    async function getAlbumTracks() {
        var searchParams = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + accessToken
            },
        }

        const returnedAlbums = await fetch(`https://api.spotify.com/v1/albums/${albumId}/tracks`, searchParams)
            .then((data) => data.json())
            .then((res) => {setAllSongs(res.items); return res.items })
        
        console.log(returnedAlbums);
    }

    getAlbumTracks();
    
    }, [])
    
    return <>
         <ListGroup defaultActiveKey="#link1">
        {
            albumSongs.map((song) => {
            return (
                <SongBar name={song.name} url = {song.external_urls.spotify} ms={song.duration_ms} />
            )
        })}
        </ListGroup>
    </>
}