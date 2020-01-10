import React from 'react';

const CandidateMap = ({ id, mapLinks }) => {
    const idNum = id;
    let link = mapLinks[idNum];
    return (
        <div>
            <iframe title={idNum} src={link} height='750px' width='1200px' frameBorder='0'></iframe>
        </div>
    )
};

export default CandidateMap;