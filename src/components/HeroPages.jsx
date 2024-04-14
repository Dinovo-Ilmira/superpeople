import React from 'react';
import Hero from './Hero'; 
import heroesData from '../data/heroesData'; 
const HeroesPage = () => {
  return (
    <div className="gallery-container">
      {heroesData.map((hero, index) => (
        <Hero key={index} hero={hero} />
      ))}
    </div>
  );
};

export default HeroesPage;
