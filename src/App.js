import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Card from './components/Card/Card';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Card 
      img="./images/katie-zaferes.png"
      rating="5.0"
      ratings="6"
      country="USA"
      bio="Life lessons with Katie Zaferes"
      rate="136"
      />
    </div>
  );
}

export default App;
