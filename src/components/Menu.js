import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function Menu(props){
    return  <Navbar fixed="bottom" sticky="bottom" bg="dark" variant="dark" >
                <Navbar.Brand href="">Eagle Store</Navbar.Brand>

                <Nav className="mr-auto">
                    <Nav.Link href="">
                        <FontAwesomeIcon icon={['fas', 'home']} />
                        Início
                    </Nav.Link>
                    <Nav.Link href="">
                        <FontAwesomeIcon icon={['fas', 'tag']}   />  
                        Categorias
                    </Nav.Link>
                    <Nav.Link href="">
                        <FontAwesomeIcon icon={['fas', 'tag']} />
                        Snap
                    </Nav.Link>
                    <Nav.Link href="">
                        <FontAwesomeIcon icon={['fas', 'tag']} />
                        Flatpak
                    </Nav.Link>
                </Nav>
            </Navbar>
}

export default Menu;