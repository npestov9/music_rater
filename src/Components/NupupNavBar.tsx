import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { GoogleLoginBtn } from './GoogleLoginBtn';

export const NupupNavBar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Album Rater</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Album Lookup</Nav.Link>
            <Nav.Link href="/yourRatedAlbums">Your Rated Albums</Nav.Link>
            <Nav.Link href="/bestAlbums">Global Ratings</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Item>
              <GoogleLoginBtn/>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
