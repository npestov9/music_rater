import { ListGroup } from "react-bootstrap";
import spotifyIcon from "../Images/spotify-icon.webp";
import youtubeIcon from "../Images/youtube-icon.png";
import { goToYtLink } from "../APIs/goToYtLink";

const iconsStyle = {
    width: '50px', // Set the width as per your requirement
    height: '50px', // Set the height as per your requirement
};

const listItemStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginRight:'20%',
    marginLeft: '20%',
};

type Props = {
  name: string;
  artist: string;
  url: string;
  ms: number
};

export const SongBar = ({ name,artist, url, ms }: Props) => {

    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');

    return <>
        <ListGroup.Item style={listItemStyle}>
            
            {name}   -  {minutes}:{seconds}
            <img src={spotifyIcon} alt="Icon" style={iconsStyle} onClick={() => { window.open(url, '_blank'); }} />
            <img src={youtubeIcon} alt="Icon" style={iconsStyle} onClick={() => { goToYtLink(name, artist)}} />
        </ListGroup.Item>
    </>
}