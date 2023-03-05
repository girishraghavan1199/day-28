import React from 'react';
import './App.css';
import Create from './Components/createProducts';
import Update from './Components/updateProducts';
import Read from './Components/readProducts';
import { Nav } from 'react-bootstrap';
import { Container, Navbar} from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='color'>
          <div className='bgcolor'><h3 className='align'>PRODUCT CREATION USING FORMIK</h3></div>
          <Navbar bg="dark" variant="dark">
            <Container >
              <Navbar.Brand><h4 className='textColor'>CRUD Operation</h4></Navbar.Brand>
              <Nav className="me-auto">
              <Nav.Link as={Link} to="/" >Add Products</Nav.Link>
                <Nav.Link as={Link} to="/all" >Show All Products</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <Routes>
            <Route exact path="/" element={<Create/>}></Route>
            <Route exact path="/all" element={<Read/>}></Route>
            <Route exact path="/update" element={<Update/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;