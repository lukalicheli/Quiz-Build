import logo from './logo.svg';
import './App.css';
import Landing from './pages/Landing';
import Create from './pages/Create';

function App() {
  return (
    <div className="App">
      <h1>Quiz Builder</h1>
      <Landing/>
      <Create/>
    </div>
  );
}

export default App;
