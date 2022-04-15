import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// import Login from './components/Login/Login'
// import Signup from './components/Signup/Signup'

// import { BrowserRouter, Route, Routes } from 'react-router-dom';


function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <a className="header-link" href="/" color="inherit">CERTIFYDE</a>
          </Typography>
          <Button onClick={()=> window.location.href='/login'} color="inherit">Login</Button>
          <Button onClick={()=> window.location.href='/signup'} color="inherit">Sign up</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


function App() {
  return (
    <><ButtonAppBar></ButtonAppBar><div className="App">
      <header className="App-header">
        <img src={process.env.PUBLIC_URL + '/certifyde_logo.png'} className="App-logo" alt="logo" />
        <p className="home-page-text">
          Welcome to Certifyde : The One Stop Solution for all your Certifications.
        </p>
        <p className="home-page-text">
          We verify certifications from all leading MOOCs.
        </p>
        <Container fluid="md">
          <Row>
            <Col><a href="https://www.coursera.org/" target="_blank" rel="noreferrer"><img src={process.env.PUBLIC_URL + '/coursera.png'} className="mooc-logo" alt="logo" /></a></Col>
            <Col><a href="https://www.udacity.com/" target="_blank" rel="noreferrer"><img src={process.env.PUBLIC_URL + '/udacity.jpeg'} className="mooc-logo" alt="logo" /></a></Col>
            <Col><a href="https://www.udemy.com/" target="_blank" rel="noreferrer"><img src={process.env.PUBLIC_URL + '/udemy.png'} className="mooc-logo" alt="logo" /></a></Col>
          </Row>
        </Container>
      </header>
    </div></>
  );
}

export default App;