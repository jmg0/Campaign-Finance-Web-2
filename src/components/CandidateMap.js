import React from 'react';
import './CandidateMap.css';

const CandidateMap = ({ id, mapLinks }) => {
    const idNum = id;
    let link = mapLinks[idNum];
    return (
        <div>
            <iframe className='map' title={idNum} src={link} frameBorder='0'></iframe>
        </div>
    )
};

export default CandidateMap;