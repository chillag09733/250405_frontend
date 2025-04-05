import { useContext } from 'react';
import './App.css';
import Kerdes from './components/Kerdes';
import { ApiContext } from './context/ApiCOntext';
import Legordulo from './components/Legordulo';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <Legordulo />
      <Kerdes />
    </div>
  );
}

export default App;
