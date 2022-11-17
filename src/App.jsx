import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data.js";
import "./App.css";

function App() {
  const cards = data.map((card) => {
    return (
      <Card
        coverImg={card.coverImg}
        rating={card.stats.rating}
        reviewCount={card.stats.reviewCount}
        title={card.title}
        price={card.price}
      />
    );
  });
  return (
    <>
      <NavBar />
      <Hero />
      {cards}
    </>
  );
}

export default App;

/* 
coverImg
stats.rating
stats.reviewcount
title
price
*/
