import logo from './logo.svg';
import './App.css';
import Landing from './pages/Landing';
import Create from './pages/Create';
import Login from './pages/Login';
import Signup from './pages/Singup';

function App() {
  return (
    <div className="App">
      <h1>Quiz Builder</h1>
      <Landing/>
      <Create/>
      {/* <Login/>
      <Signup/> */}
    </div>
  );
}

export default App;
