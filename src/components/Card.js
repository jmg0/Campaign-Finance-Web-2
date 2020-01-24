import React from 'react';
import './Card.css'

const Card = ({ name, email, id, imgpath, campaign, onRouteChange, ih, iw }) => {
  return (
    <div onClick={() => {onRouteChange(id)}} className='tc grow bg-transparent pa1 br3 ma2 dib bw2 shadow-5'>
      <img className='pico' alt={name} src={imgpath} height={ih} width={iw} />
      <div className='mr2 ml2 writing'>
        <h1 className='tc white-60 fw2'>{name}</h1>
        {/*<a className='white-60 fw2' href={email}>{campaign}</a>*/}
      </div>
    </div>
  );
};

export default Card;
