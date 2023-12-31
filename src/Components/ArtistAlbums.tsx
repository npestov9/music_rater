import { Container, InputGroup, FormControl, Button, Row, Card } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { AlbumCard } from './AlbumCard';
import { APIContext, useAPIContext } from '../Configs/context';
import { getArtistAlbums } from '../APIs/getArtistAlbums';

type Props = {
  artistId: string;
};

type Album = {
  name: string;
  images: Image[];
  id: string
};

type Image = {
  height: number;
  url: string;
  width: number;
};

export const ArtistAlbums = ({ artistId }: Props) => {
    
    const [albums, setAlbums] = useState<Album[]>([]);
    const accessToken = useAPIContext();

  useEffect(() => {
    async function storeAlbumData() {
      if (artistId !== '') {
        const albumsData = await getArtistAlbums(artistId, accessToken);
        setAlbums(albumsData);
      }
    }

    storeAlbumData();
  }, [artistId, accessToken]);

    return(
        <div> 
        
        <Container>
            <Row className='mx-2 row row-cols-4'>{
            albums.map((album) => {
                return (
                    <AlbumCard title={album.name} img={album.images[0].url} albumId={album.id} />
                )
            })}
            </Row>
        </Container>
        </div>
    )

}