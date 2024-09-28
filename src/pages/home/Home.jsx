import React from 'react';
import { Hero, Features, Contact, Footer } from '../../containers';
import { Navbar } from '../../components';
import '../../App.css';

const Home = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
