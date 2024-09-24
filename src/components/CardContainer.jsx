import React from 'react';
import Card from './Card';

const CardContainer = ({ resources }) => {
  return (
    <div className="card-container">
      {resources.map((resource, index) => (
        <Card 
          key={index}
          title={resource.title}
          type={resource.type}
          description={resource.description}
          link={resource.link}
          level={resource.level}
        />
      ))}
    </div>
  );
};

export default CardContainer;
