import { useState } from "react";
import { useToken } from "../APIs/getAccessToken";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, InputGroup, FormControl, Button, Row, Card } from 'react-bootstrap';
import { ArtistAlbums } from "../Components/ArtistAlbums";
import { getArtistId } from "../APIs/getArtistID";

export const ArtistSearchPage = () => {
    const [searchInput, setSearchInput] = useState("");
    const [artistId, setArtistId] = useState("");

    const accessToken = useToken() as string;

    return (
    <div>
        <h1 style = {{marginTop :'30px', marginBottom :'30px'}}>Search For Artist</h1>
        <Container>
            <FormControl
                placeholder='Artist name...'
                type = 'input'
                onKeyPress={(event)=> {
                if (event.key == "Enter") {
                    console.log("Pressed enter");
                }
                }}
                onChange={(event)=> {
                    setSearchInput(event.target.value)
                }
                }
            />
                <Button size="lg" style={{ marginTop: '30px', marginBottom: '30px' }} variant="success" onClick={() => { if (searchInput !== "") { getArtistId(searchInput, accessToken).then((result) => setArtistId(result)) } }}>
            Enter
            </Button>
        </Container>
        <ArtistAlbums artistId={artistId} />
        </div>
    );
}