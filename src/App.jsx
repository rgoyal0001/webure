import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Intro } from './Components/Into/Intro';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
    </div>
  );
}

export default App;
