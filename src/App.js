import logo from './logo.svg';
import './App.css';
import Addtodo from './components/Addtodo';
import Todos from './components/Todos';

function App() {
  return (
      <>
      <h1>Hello Redux Toolkit( React- Redux)</h1>
      <Addtodo />
      <Todos />
      </>
  );
}

export default App;
