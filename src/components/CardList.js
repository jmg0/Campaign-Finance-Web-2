import React from 'react';
import Card from './Card';

const CardList = ({ robots, onRouteChange }) => {
  return (
    <div>
      {
        robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
              imgpath={robots[i].imgpath}
              campaign={robots[i].campaign}
              onRouteChange={onRouteChange}
              />
          );
        })
      }
    </div>
  );
};

export default CardList;