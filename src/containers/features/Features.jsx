import React from 'react';
import './features.css';
import feature from '../../assets/feature.jpg'

const Features = () => {
  return (
    <div className="bars__features section__padding" id="features">
      <div className="bars__features-content">
        <h1>Kezelések</h1>
        <img src={feature} alt="feature" />
        <h3>Access Bars kezelés</h3>
        <p>Ár: 20.000 Ft</p>
        <button type="button">Időpontot kérek</button>
      </div>
    </div>
  );
};

export default Features;
