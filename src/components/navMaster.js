import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import logo from "../assets/logositev.png";
import styled from "styled-components";
import {Link} from "react-router-dom";


const NavMaster = () => {
    return (
        <>
            <NewNavbar variant="light" sticky="top" expand="lg" >
                <Container className="align-items-center">
                    <Navbar.Brand href="/portfolio">
                        <Logo src={logo} alt="logo" />
                        <strong>kevdev.jsk</strong>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="scrolling"></Navbar.Toggle>
                    <Navbar.Collapse id="scrolling" className="justify-content-center">
                        <NewNav className="me-auto my-2 my-lg-0" scrolling>
                            <Link to="/" className="mr-3">Home</Link>
                            <Link to="/about" className="mr-3">About</Link>
                            <Link to="/contacts" className="mr-3">Contact</Link>
                        </NewNav>
                    </Navbar.Collapse>
                </Container>
            </NewNavbar>
        </>
    );
};

export default NavMaster;

const NewNav=styled(Nav)`
  max-height: 100px;
`

const Logo=styled.img`
  height: 40px;
  width: 40px;
`

const NewNavbar = styled(Navbar)`
  background-color: white;
`






