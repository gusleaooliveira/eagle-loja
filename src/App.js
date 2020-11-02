import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cabecalho from './components/Cabecalho';
import Menu from './components/Menu';

function App() {
  return (
    <div>
      <Cabecalho titulo="Eagle Store" />

      <section>
        <h1 className="text-center">Início</h1>
      </section>

      <Menu />
    </div>
  );
}

export default App;
