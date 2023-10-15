import { ListGroup } from "react-bootstrap";

type Props = {
  name: string;
  url: string;
  ms: number
};

export const SongBar = ({ name, url, ms }: Props) => {

    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');

    return <>
        <ListGroup.Item action onClick={()=>{window.open(url, '_blank');}}>
            {name}   -  {minutes}:{seconds}
        </ListGroup.Item>
    </>
}