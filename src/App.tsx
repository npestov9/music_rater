import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, InputGroup, FormControl, Button, Row, Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { ArtistCard } from './Components/ArtistCard';
import { useToken } from './Helpers/getAccessToken';
import { getArtistId } from './Helpers/getArtistID';

function App() {
  const [searchInput, setSearchInput] = useState("");
  const accessToken = useToken()

  useEffect (()=> {
    
  }, []);

  return (
    <div className="App">
      <h1>{searchInput}</h1>
      <Container>
        <InputGroup className='mb-3' size = 'lg'> 
          <FormControl
            placeholder='Search for artist'
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
        </InputGroup>
        <Button variant="success" onClick={() => { getArtistId(searchInput) }}>
          Enter
        </Button>
      </Container>
      <ArtistCard/>
    </div>
  );
}

export default App;
