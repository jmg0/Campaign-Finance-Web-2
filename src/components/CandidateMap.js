import React from 'react';

const CandidateMap = ({ name, mapLinks }) => {
    const n = name;
    let link = mapLinks;
    return (
        <div>
            <h1>{n}</h1>
            <h1>{link}</h1>
        </div>
    )
};

export default CandidateMap;