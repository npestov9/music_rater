import { Container, InputGroup, FormControl, Button, Row, Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { ArtistCard } from './ArtistCard';

type Props = {
  artistId: string;
  accessToken: string;
};

type Album = {
  name: string;
  images: Image[];
};

type Image = {
  height: number;
  url: string;
  width: number;
};

export const ArtistAlbums = ({ artistId, accessToken }: Props) => {
    
    const [albums, setAlbums] = useState<Album[]>([]);

    useEffect(() => {
        async function storeAlbumData() {
            var searchParams = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + accessToken
                },
            }
    
            const returnedAlbums = await fetch("https://api.spotify.com/v1/artists/"+artistId+"/albums"+"?include_groups=album&market=US&limit=50", searchParams)
                .then((data) => data.json())
                .then((res) => {setAlbums(res.items); return res.items })
            
            console.log(returnedAlbums);
        }
    
        if (artistId != "")storeAlbumData();
        
    }, [artistId])

    return(
        <div> 
        <Container>
            <Row className='mx-2 row row-cols-4'>{
            albums.map((album) => {
                return (
                    <ArtistCard title={album.name} img={album.images[0].url} />
                )
            })}
            </Row>
        </Container>
        </div>
    )

}