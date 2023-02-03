import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Intro } from './Components/Into/Intro';
import { Services } from './Components/Services/Services';
import { Mask } from './Components/Mask/Mask';
import component from '../src/icons/vectors/component.png'
import component2 from '../src/icons/vectors/component2.png'
import { Work } from './Components/Work/Work';
import { Partners } from './Components/Partners/Partners';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Partners />
      <Services />
      <Mask />
      <div style={{'width':'92.6%','margin':'auto'}}>
        <img src={component} alt="" style={{'width':'100%'}}/>
        <img src={component2} alt="" style={{'width':'100%'}}/>
      </div>
      <Work />
      
    </div>
  );
}

export default App;
