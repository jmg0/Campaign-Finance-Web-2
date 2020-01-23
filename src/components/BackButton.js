import React from 'react';
import './BackButton.css'

const BackButton = ({ onBackButtonChange }) => {
    return(<button className='center bg-transparent white-70 b--white-90' onClick={() => onBackButtonChange('home')}>Back</button>)
};

export default BackButton;