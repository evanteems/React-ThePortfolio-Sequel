import React from 'react';
import '../Apps.css';
import * as ReactBS from 'react-bootstrap';
import logo from '../images';
import { BroswerRouter as Router, Link } from 'react-router-dom';


const App = () => {
    return (
        <div className="text-center bg-color">
            <ReactBS.Row className="container-fluid justify-content-center" bg="dark" expand="sm">
                <Link to="/Welcome">
                    <ReactBS.Nav.Link href="#welcome">
                        <img src={logo} width="200" height="50" className="d-inline-block align-top" alt="Evan Teems Logo" />
                    </ReactBS.Nav.Link>
                </Link>
            </ReactBS.Row>
            <ReactBS.Row className="container-fluid justify-content-center">
                <ReactBS.Navbar varaint="dark">
                    <ReactBS.Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <ReactBS.Navbar.Collapse id="basic-navbar-nav">
                        <ReactBS.Nav className="meduim-font-size">
                            <Link to="/About">
                                <ReactBS.Nav.Link href="#about">About</ReactBS.Nav.Link>
                            </Link>
                            <Link to="/Portfolio">
                                <ReactBS.Nav.Link href="#portfolio">Portfolio</ReactBS.Nav.Link>
                            </Link>
                            <Link to="/Resume">
                                <ReactBS.Nav.Link href="#resume">Resume</ReactBS.Nav.Link>
                            </Link>
                            <Link to="/Contact">
                                <ReactBS.Nav.Link href="#contact">Contact</ReactBS.Nav.Link>
                            </Link>
                        </ReactBS.Nav>
                    </ReactBS.Navbar.Collapse>
                </ReactBS.Navbar>
            </ReactBS.Row>
        </div>
    );
};


export default App;