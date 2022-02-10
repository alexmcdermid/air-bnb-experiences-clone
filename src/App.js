import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Card from './components/Card/Card';
import cardData from './data.js';

function App() {
  const cards = cardData.map(card=>{
    return(
      <Card
        img={card.coverImg}
        rating={card.stats.rating}
        ratings={card.stats.reviewCount}
        country={card.location}
        bio={card.title}
        price={card.price}
      />
    )
  });
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <section className='cards'>
        {cards}
      </section>
    </div>
  );
}

export default App;
