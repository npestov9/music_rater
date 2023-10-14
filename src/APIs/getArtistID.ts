import { useEffect } from "react";

export async function getArtistId(inputBoxVal: string, accessToken: string) {
    console.log(`Searching for${inputBoxVal}`);

    const fetchArtistId = async () => {
        //API token on first load
        var searchParams = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + accessToken
            },
        }

        const artistid = await fetch("https://api.spotify.com/v1/search?q=" + inputBoxVal + "&type=artist", searchParams)
            .then((result) => result.json())
            .then((data) => { return data.artists.items[0].id});

        return artistid as string;
    }

    const id = await fetchArtistId();;
    return id;

}

