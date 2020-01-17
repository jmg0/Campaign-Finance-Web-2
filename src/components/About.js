import React from 'react';
import './About.css'

const About = () => {

    return (
        <div>
            <h1>About</h1>
            <p>
                This project analyzes and illustrates individual contributions to presidential campaigns pursuing the 2020 Presidential Election. Campaign contribution data is reported by each campaign to the <a className='color-inherit' href='https://www.fec.gov'>Federal Election Commission</a>, who provide the data to the public. The project analyzed contributions made from January 1, 2019 to present, and will continually update as future data become available.
            </p>
            <p>
                The initial aim of this project was to illustrate the relationship between geography and money in politics. Specifically, the project was to geographically identify each presidential candidate's financial support base. If a wholesome picture of each candidate's financial support base were captured, it would provide a metric to measure how each candidate is supported. Who is paying the bills for each campaign? Where are they coming from? To what financial extent are they providing support? What constitutes a grassroots campaign? What financial support base is elitist? The analysis contained on this website addresses these questions, and answers them to an extent, but does not display the full picture.
            </p>
            <p></p>
        </div>
    )
};

export default About;