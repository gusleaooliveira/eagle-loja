import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cabecalho from './components/Cabecalho';
import Menu from './components/Menu';
import Rotas from './components/Rotas';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Cabecalho titulo="Eagle Store" />
        <Rotas />
        <Menu />
      </BrowserRouter>
    </div>
  );
}

export default App;
