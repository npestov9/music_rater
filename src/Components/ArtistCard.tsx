import { Container, InputGroup, FormControl, Button, Row, Card } from 'react-bootstrap';

type Props = {
  title: string;
  img: string;
  albumId: string
};

export const ArtistCard = ({ title, img , albumId}: Props) => {
    return (
        <Card>
            <Card.Img src={img} onClick={()=>window.open(window.location.origin + `/albumSongs/${albumId}`, '_blank')}/>
            <Card.Body />
            <Card.Title>{title}</Card.Title>
          </Card>
    )
}