import { Container, InputGroup, FormControl, Button, Row, Card } from 'react-bootstrap';

type Props = {
  title: string;
  img: string;
};

export const ArtistCard = ({ title, img }: Props) => {
    return (
        <Card>
            <Card.Img src={img} />
            <Card.Body />
            <Card.Title>{title}</Card.Title>
          </Card>
    )
}