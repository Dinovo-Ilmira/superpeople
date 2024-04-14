import React from 'react';

const Hero = ({ hero }) => {
  return (
    <div className="hero-card">
      <img className="hero-image" src={hero.url} alt={hero.name} />
      <div className="hero-info">
        <h2 className="hero-name">{hero.name}</h2>
        <p className="hero-details">{hero.info}</p>
        <div className="hero-rating">
          <span className="rating-label">Рейтинг: </span>
          <input
            type="number"
            min={0}
            max={10}
            value={localStorage.getItem(hero.name) || 0}
            onChange={(e) => {
              localStorage.setItem(hero.name, e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
