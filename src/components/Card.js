import React from 'react';
import './Card.css'

const Card = ({ name, email, id, imgpath, campaign, onRouteChange, ih, iw }) => {
  return (
    <div onClick={() => {onRouteChange(id)}} className='tc grow bg-transparent br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt={name} src={imgpath} height={ih} width={iw} />
      <div>
        <h2 className='tc white-60 fw2'>{name}</h2>
        <a className='white-60 fw2 no-underline' href={email}>{campaign}</a>
      </div>
    </div>
  );
};

export default Card;
