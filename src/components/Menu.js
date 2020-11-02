import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React  from 'react';
import { Navbar,  Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Menu(props){
    return  <Navbar fixed="bottom" sticky="bottom" bg="dark" variant="dark" >
                <Navbar.Brand href="">Eagle Store</Navbar.Brand>

                <Nav className="mr-auto">
                    <LinkContainer to="/">
                        <Nav.Link >
                            <FontAwesomeIcon icon={['fas', 'home']} />
                            Início
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/categorias">
                        <Nav.Link >
                            <FontAwesomeIcon icon={['fas', 'tag']}   />  
                            Categorias
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/snap">
                        <Nav.Link >
                            <FontAwesomeIcon icon={['fas', 'tag']} />
                            Snap
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/flatpak"> 
                        <Nav.Link href="/flatpak">
                            <FontAwesomeIcon icon={['fas', 'tag']} />
                            Flatpak
                        </Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar>
}

export default Menu;