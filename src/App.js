import { useContext } from 'react';
import './App.css';
import Kerdesek from './components/Kerdesek';
import { ApiContext } from './context/ApiCOntext';
import Legordulo from './components/Legordulo';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <Legordulo />
      <Kerdesek />
    </div>
  );
}

export default App;
