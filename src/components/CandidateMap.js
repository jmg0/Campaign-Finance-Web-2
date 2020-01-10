import React from 'react';

const CandidateMap = ({ name, mapLinks }) => {
    const n = name;
    let link = mapLinks[n];
    return (
        <div>
            <h1>{n}</h1>
            <h1>{link}</h1>
            <iframe src={link} height='750px' width='1100px' frameBorder='0'></iframe>
        </div>
    )
};

export default CandidateMap;