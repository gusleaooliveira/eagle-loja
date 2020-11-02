import React from 'react'; 
import { Switch, Route } from 'react-router-dom';
import Categorias from './paginas/Categorias';
import Inicio from './paginas/Inicio';

function Rotas(props){
    return  <Switch>
                <Route path="/" exact component={Inicio} />
                <Route path="/categorias" component={Categorias} />
            </Switch>
            
}


export default Rotas;