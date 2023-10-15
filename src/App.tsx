import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ArtistSearchPage } from './Pages/ArtistSearchPage';
import { useState, useEffect } from 'react';
import { NupupNavBar } from './Components/NupupNavBar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AlbumDisplay } from './Pages/AlbumDisplay';
import { APIContext } from './Configs/context';
import { useToken } from './APIs/getAccessToken';
import { BestAlbums } from './Pages/BestAlbums';
import { YourRatedAlbums } from './Pages/YourRatedAlbums';

function App() {

  const accessToken = useToken();
  const [apiReady, setApiReady] = useState(false);

  useEffect(() => {
    if (accessToken) {
      setApiReady(true);
    }
  }, [accessToken]);

  return (
    <div className="App">
      <NupupNavBar />
      {apiReady ? (
        <APIContext.Provider value={accessToken as string}>
          <Routes>
            <Route path="/" element={<ArtistSearchPage />} />
            <Route path="/albumSongs/:albumId" element={<AlbumDisplay />} />
            <Route path="/yourRatedAlbums" element={<YourRatedAlbums />} />
            <Route path="/bestAlbums" element={<BestAlbums />} />
          </Routes>
        </APIContext.Provider>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default App;
