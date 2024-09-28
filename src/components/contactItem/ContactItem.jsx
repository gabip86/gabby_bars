import React from 'react';
import './contactItem.css';

const ContactItem = ({title, text}) => {
  return (
    <div className="bars__contact-list__item">
      <div className="bars__contact-list__item-title">
        <h1>{title}</h1>
      </div>
      <div className="bars__contact-list__item-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ContactItem;
