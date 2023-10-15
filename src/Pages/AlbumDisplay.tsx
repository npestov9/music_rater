import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAPIContext } from "../Configs/context";
import { SongBar } from "../Components/SongBar";
import { ListGroup } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { getAlbumInfo } from "../APIs/getAlbumInfo";

type Song = {
  name: string;
    external_urls: { spotify: string };
  duration_ms: number;
};

type AlbumInfo = {
name: string,
  images: { url: string }[];
  release_date: string;
  artists: { name: string }[];
};


export const AlbumDisplay = ( ) => {

    const { albumId } = useParams();
    const accessToken = useAPIContext();
    const [albumInfo, setAlbumInfo] = useState<AlbumInfo>({name:"",images: [{ url: "" }],release_date: "",artists: [{ name: "" }]});
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
        
    function callAPITogetAlbumInfo() {
        getAlbumInfo(albumId as string, accessToken).then((result)=>{setAlbumInfo(result)});
    }
        
    getAlbumTracks();
    callAPITogetAlbumInfo();
    
    }, [])


    
    return <>
        <h1 style = {{marginTop :'30px'}}> {albumInfo.name} </h1>
        <img src={albumInfo.images[0].url} style={{ width: '300px', height: '300px', marginBottom: '50px',marginTop: '50px' }} />
         <ListGroup defaultActiveKey="#link1">
        {
            albumSongs.map((song) => {
            return (
                <SongBar name={song.name} artist={albumInfo.artists[0].name} url = {song.external_urls.spotify} ms={song.duration_ms} />
            )
        })}
        </ListGroup>
    </>
}