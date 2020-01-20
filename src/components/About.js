import React from 'react';
import './About.css'

const About = () => {

    return (
        <div>
            <h1>About</h1>
            <p>
                This project analyzes and illustrates individual contributions to presidential campaigns pursuing the 2020 presidential election. Campaign contribution data is reported by each campaign to the <a className='color-inherit' href='https://www.fec.gov'>Federal Election Commission</a>, who provide the data to the public. The project analyzed contributions made from January 1, 2019 to present, and will continually update as future data become available.
            </p>
            <p>
                The initial aim of this project was to illustrate the relationship between geography and money in politics. Specifically, the project was intended to geographically identify each presidential candidate's financial support base. If a wholesome picture of each candidate's financial support base were captured, it would provide a metric to measure how each candidate is supported. Who is paying the bills for each campaign? Where are they coming from? To what financial extent are they providing support? What constitutes a grassroots campaign? An elitist campaign? What do their financial bases look like? The analysis contained on this website addresses these questions, and answers them to an extent, but does not display the full picture.
            </p>
            <p>
                Individual contributions to presidential campaigns cannot answer these questions fully because they make up only a portion of the funds used to influence elections on behalf of any given candidate. Individual contributions also have stringent, relatively loophole-free limits that are well enforced. Political action committees (PACs), joint fundraising committees (JFCs), and other political committees have less strict (or, in some cases, non-existent) regulations governing how much money they can accept, whose money they can accept, and how that money can be spent.
            </p>
            <p>
                To clarify, the difference between presidential campaign committees and other political committees is as follows. Each presidential campaign has a bank account containing the money they use to run their campaign-operating expenditures, making signs, traveling to events, and so on. These campaigns also have a platform through which individuals can contribute money to that cause. These contributions are highly regulated-they can only come from individuals, not corporate entities, and each individual can contribute no more than $2,800.00 per year per election. So, for calendar year 2019, where we have both a primary presidential election and a general presidential election upcoming in 2020, a person is allowed to contribute up to $5,600.00 to each presidential campaign ($2,800.00 for each of the two elections).

            </p>
        </div>
    )
};

export default About;