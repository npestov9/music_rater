import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ArtistSearchPage } from './Pages/ArtistSearchPage';
import { useState, useEffect } from 'react';
import { NupupNavBar } from './Components/NupupNavBar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AlbumDisplay } from './Pages/AlbumDisplay';



function App() {
  useEffect (()=> {
    
  }, []);

  return (
    <div className="App">
        <NupupNavBar />
        <Routes>
          <Route path="/" element={<ArtistSearchPage />} />
          <Route path="/albumSongs/:albumId" element={<AlbumDisplay />} />
        </Routes>
    </div>
  );
}

export default App;
