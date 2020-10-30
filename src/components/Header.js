import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-boostrap/Container';


function Header(props){
    return  <Jumbotron fluid>
                <Container>
                    <h1>{props.titulo}</h1>
                </Container>
            </Jumbotron>
}

export default Header;