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
                Individual contributions to presidential campaigns cannot answer these questions fully because they make up only a portion of the funds used to influence elections on behalf of any given candidate. Individual contributions also have stringent, relatively loophole-free limits that are well enforced. Political action committees (PACs), joint fundraising committees (JFCs), and other political committees have less strict (or, in some cases, non-existent) regulations governing whose money they can accept, how much money they can accept, and how that money can be spent.
            </p>
            <p>
                In 2019, a person could contribute no more than $2,800.00 to each presidential candidate for each election. Because there are two upcoming elections-primary and general-a person could contribute up to $5,600.00 ($2,800.00 for each election). People can contribute to a campaign directly, or they can contribute to a campaign's affiliated committees (like JFCs and PACs) who in turn send some or all of that money to the campaign. No matter what route it takes, no more than $5,600.00 of an individual's money may end up in a campaign's bank account. Other political committees, organizations, and legally contributing bodies are under similarly strict limits when contributing directly to a campaign.
            </p>
            <p>
                However, this is not the full story of how money is used to support candidates and influence elections. Although a person can only give $5,600.00 to a candidate per the current limits, they can give unlimited sums of money to PACs, Super PACs, and JFCs. When one of these organizations receives a contribution above the $5,600.00 limit, they may only transfer $5,600.00 that contribution to the campaign's bank account. The remainder of these larger contributions cannot be transferred directly to the campaign's bank account, but it can be reallocated and spent by the PAC/JFC with minimal restriction. This money can go towards election-influencing activities like advertising, social media campaigns, events, apparel, research, and more.
            </p>
            <p>
                Herein lies the first and more significant pitfall of this project: an everyday person who contributed $5,600.00 over the course of 2019 is represented on the map exactly the same as a billionaire who contributed $360,000.00 to a campaign's affiliated JFC. Technically, only $5,600.00 of each contributor's money was transferred to the official campaign bank account, but, clearly, the two contributors have had different levels of financial impact on the campaign they support. Thus, the financial support base of a candidate is not complete without illustrating these kinds of larger contributions.
            </p>
            <p>
                Luckily, JFCs and some PACs are required to report their contributions. To illustrate these contributions, the next update of this website will contain additional maps that display each candidate's larger money base, meaning those whose contributions to an affiliated committee totaled more than the contributing limits. This, however, also comes with a caveat: a PAC or JFC might not spend all or even any of a contributor's excess money on a single candidate, so how can these contributions be fairly quantified? It would be unfair to attribute a contributor's money to a specific campaign if, in reality, their money was spent elsewhere. Keep an eye out for the next release, which addresses this in great detail!
            </p>
            <p>
                The
            </p>
        </div>
    )
};

export default About;