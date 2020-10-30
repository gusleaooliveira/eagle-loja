import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';


function Cabecalho(props){
    return  <Jumbotron fluid>
                <Container>
                    <h1 className="text-center">{props.titulo}</h1>
                </Container>
            </Jumbotron>
}

export default Cabecalho;