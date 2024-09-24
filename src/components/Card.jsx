import React from 'react';
import './Card.css';
const Card = ({ title, type, description, link }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p><strong>Type:</strong> {type}</p>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Visit Resource
      </a>
    </div>
  );
};

export default Card;
