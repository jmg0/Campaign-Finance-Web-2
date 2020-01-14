import React from 'react';

const CandidateMap = ({ id, mapLinks }) => {
    const idNum = id;
    let link = mapLinks[idNum];
    return (
        <div>
            <iframe title={idNum} src={link} height='650px' width='1000px' frameBorder='0'></iframe>
        </div>
    )
};

export default CandidateMap;