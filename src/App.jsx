import React from 'react';
import { Navbar } from "./components";
import { Contact, Features, Footer, Hero } from "./containers";

import './App.css';

const App = () => {
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

export default App;
