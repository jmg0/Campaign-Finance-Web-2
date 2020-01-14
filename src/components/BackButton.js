import React from 'react';
import './BackButton.css'

const BackButton = ({ onBackButtonChange }) => {
    return(<button className='center' onClick={() => onBackButtonChange('home')}>Back</button>)
};

export default BackButton;