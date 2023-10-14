import { useEffect, useState } from "react";

const CLIENT_ID = "3c0d31f68dba4793912ecde276239793";
const CLIENT_SECRET = "6da0160aa7c24d568c0bcf14e8a58ec1";

export const useToken = () => {
    const [accessToken, setAccessToken] = useState("");

    useEffect(() => {
        const fetchToken = async () => {
            //API token on first load
            var authParams = {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
            }
    
            const result = await fetch("https://accounts.spotify.com/api/token", authParams);
            const data = await result.json();
            setAccessToken(data.access_token);
            console.log(`My token: ${data.access_token}`);
        }
        
        fetchToken();
    }, []);

    if (accessToken) {
        
        return accessToken;
    }
}

    
