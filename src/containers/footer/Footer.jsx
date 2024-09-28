import React from 'react';
import './footer.css';
import { SocialIcon } from 'react-social-icons';
import logo2 from '../../assets/logo2.png';

const Footer = () => {
  return (
    <div className="bars__footer section__padding" id="footer">
      <div className="bars__footer-socials">
        <SocialIcon url="https://facebook.com" />
        <SocialIcon url="https://instagram.com" />
        <SocialIcon url="https://youtube.com" />
      </div>
      <div className="bars__footer-main">
        <div className="bars__footer-main_logo">
          <a href="/"><img src={logo2} alt="logo" /></a>
        </div>
        <div className="bars__footer-main_div">
          <h4>Impresszum</h4>
          <a href="/fizetes-es-szallitasi-modok"><p>Fizetési és szállítási módok</p></a>
          <a href="/altalanos-szerzodesi-feltetelek"><p>Általános szerződési feltételek</p></a>
          <a href="/adatkezelesi-tajekoztato"><p>Adatvédelmi irányelvek</p></a>
        </div>
      </div>
      <div className="bars__footer-copyright">
        <p>@2024 Gabby Bars - All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
