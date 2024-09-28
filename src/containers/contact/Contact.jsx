import React from 'react';
import './contact.css';

import { ContactItem } from '../../components'
import ContactForm from "../../components/contactForm/ContactForm";

const contactsData = [
  {
    title: 'Helyszín',
    text: '1188 Budapest, Krepuska Géza sétány 4. Fsz/2.'
  },
  {
    title: 'Email',
    text: 'gabriella.vargapal@gmail.com'
  },
  {
    title: 'Telefon',
    text: '+36 30 490 6720'
  },
]

const Contact = () => {
  return (
    <div className="bars__contact section__padding" id="contact">
      <div className="bars__contact-content">
        <h1>Kapcsolat</h1>
        <div className="bars__contact-list">
          {contactsData.map((item, index) => (
            <ContactItem title={item.title} text={item.text} key={item.title + index} />
          ))}
        </div>
        <div className="bars__contact-form">
          <h1>Küldj üzenetet</h1>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
