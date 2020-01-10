import React from 'react';

const BackButton = ({ onBackButtonChange }) => {
    return(<button onClick={() => onBackButtonChange('home')}>Back</button>)
};

export default BackButton;