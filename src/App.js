import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cabecalho from './components/Cabecalho';
import Menu from './components/Menu';

function App() {
  return (
    <div>
      <Cabecalho titulo="Eagle Store" />

      <Menu />
    </div>
  );
}

export default App;
