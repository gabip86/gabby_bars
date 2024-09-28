import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <div className="bars__hero section__padding" id="hero">
      <div className="bars__hero-content">
        <h1>Etiam consequat eleifend</h1>
        <div />
        <p>Donec dolor metus, accumsan vitae iaculis id, commodo ac sem.</p>
        <a href="#features" role="button">
          Kezelések
        </a>
      </div>
    </div>
  );
};

export default Hero;
