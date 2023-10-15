import { Container, InputGroup, FormControl, Button, Row, Card } from 'react-bootstrap';
import { RatingDropdown } from './RatingDropdown';

type Props = {
  title: string;
  img: string;
  albumId: string
};

export const AlbumCard = ({ title, img , albumId}: Props) => {
    return (
        <Card>
            <Card.Img className="interactiveImage" src={img} onClick={()=>window.open(window.location.origin + `/albumSongs/${albumId}`, '_blank')}/>
            <Card.Body />
        <Card.Title>{title}</Card.Title>
        <RatingDropdown albumId={albumId}/>
          </Card>
    )
}