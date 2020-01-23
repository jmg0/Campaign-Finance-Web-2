import React from 'react';
import './About.css'

const About = () => {

    return (
        <div>
            <h1>Explanations, Pitfalls, and Conclusions</h1>
            <p className='abo'>
                This project analyzes and illustrates individual contributions to presidential campaigns pursuing the 2020 presidential election. Campaign contribution data is reported by each campaign to the <a className='color-inherit' href='https://www.fec.gov'>Federal Election Commission</a>, who then provide the data to the public. The project analyzed contributions made from January 1, 2019 to present, and will continually update as future data become available.
            </p>
            <p className='abo'>
                The initial aim of this project was to illustrate the relationship between geography and money in politics. Specifically, the project was intended to geographically identify each presidential candidate's financial support base. If a wholesome picture of each candidate's financial support base were captured, it would provide a metric to measure how each candidate is supported. Who is paying the bills for each campaign? Where are they coming from? To what financial extent are individuals providing support? What constitutes a grassroots campaign? An elitist campaign? What do their financial bases look like? The analysis contained on this website addresses these questions, and answers them to an extent, but does not display the full picture.
            </p>
            <p className='abo'>
                Individual contributions to presidential campaigns cannot answer these questions fully because they make up only a portion of the funds used to influence elections on behalf of any given candidate. Individual contributions also have stringent, relatively loophole-free limits that are well enforced. Political action committees (PACs), joint fundraising committees (JFCs), and other political committees have less strict (or, in some cases, non-existent) regulations governing whose money they can accept, how much money they can accept, and how that money can be spent.
            </p>
            <p className='abo'>
                In 2019, a person could contribute no more than $2,800.00 to each presidential candidate for each election. Because there are two upcoming elections-primary and general-a person could contribute up to $5,600.00 ($2,800.00 for each election). People can contribute to a campaign directly, or they can contribute to a campaign's affiliated committees (like JFCs and PACs) who in turn send some or all of that money to the campaign. No matter what route it takes, no more than $5,600.00 of an individual's money may end up in a campaign's bank account. Other political committees, organizations, and legally contributing bodies are under similarly strict limits when contributing directly to a campaign.
            </p>
            <p className='abo'>
                However, this is not the full story of how money is used to support campaigns and influence elections. Although a person can only give $5,600.00 to a candidate per the current limits, they can give unlimited sums of money to PACs, Super PACs, and JFCs. When one of these organizations receives a contribution above the $5,600.00 limit, they may only transfer $5,600.00 of that contribution to the campaign's bank account. The remainder of these larger contributions cannot be transferred directly to the campaign's bank account, but it can be reallocated and spent by the PAC/JFC with minimal restriction. This money can go towards election-influencing activities like advertising, social media campaigns, events, apparel, research, and more.
            </p>
            <p className='abo'>
                Herein lies the first and more significant pitfall of this project: an everyday person who contributed $5,600.00 over the course of 2019 is represented on the map exactly the same as a person who contributed $360,000.00 to a campaign's affiliated JFC. Technically, only $5,600.00 of each contributor's money was transferred to the official campaign bank account, but the leftover funds from the latter contribution can also be used to support the candidate and campaign. The two contributors have made considerably different levels of financial impact on the campaign, but their representations on the map are identical. Thus, the financial support base of a candidate is unclear without appropriately illustrating these kinds of larger contributions.
            </p>
            <p className='abo'>
                Luckily, JFCs and some PACs are required to report their contributions. To illustrate these contributions, the next update of this website will contain additional maps that display each candidate's larger-money base. Specifically, the large-money base contains those whose contributions to an affiliated committee totaled more than the individual contribution limits. This, however, also comes with a caveat: a PAC or JFC might not spend all or even any of a contributor's excess money on a single candidate, so how can these contributions be fairly quantified? It would be unfair to attribute a contributor's money to a specific campaign if, in reality, their money was spent elsewhere. Keep an eye out for the next release, which addresses this in great detail!
            </p>
            <p className='abo'>
                The second pitfall of this project deals with contribution reporting. The FEC mandates that campaigns must record details (name, address, occupation, contribution amount, yearly contribution total) for all individual contributions, but they are only required to report the detailed information for contributions greater than $200.00. Campaigns are trending towards reporting all contributions regardless of amount, but haven't yet reached that point. Contributions for which the campaign has reported all details are called itemized contributions. The FEC publishes all of the itemized contribution information, which was extracted and analyzed to create the maps on this website. Contributions less than $200.00 that are not reported in detail to the FEC are called unitemized contributions. Campaigns report these to the FEC as a single sum, and no details are published about the individual contributions or contributors.
            </p>
            <p className='abo'>
                As such, these maps leave a lot to be desired. As shown on each candidate's page, unitemized individual contributions often comprise an enormous portion of a candidate's contribution total. These represent hundreds of thousands of smaller donations and unique contributors that cannot be represented because none of their information is passed on by campaigns. On the other end of the scale, large money contributions that do not go directly to a campaign, but work to influence elections on their behalf, are also largely unrepresentable. These two factors make the financing of campaigns an opaque process, where the everyday citizen cannot be sure of what or who is footing the bill behind the scenes. For this process to be fully transparent to the everyday citizen (and for these maps to illustrate a complete picture of campaign finance), the following are needed:
                <ol>
                    <li type='1'>Full contribution reporting from all campaigns. How can the everyday citizen accurately determine who is funding a campaign, which people are financially representative of a candidacy, if large segments of contribution details are excluded from public reporting?</li>
                    <li>More detailed reporting on the origin, impact, and use of large contributions made to PACs, JFCs, and other less regulated political committees. An alternative to this is a legislative response, which would prevent these kinds of contributions from happening.</li>
                </ol>
            </p>
            <p className='abo'>
                The maps on this website show a glimpse of the contributor base for each candidate campaigning for the 2020 presidential election. This partial snapshot is centered on the middle to upper-middle stratum of contributors, as contributors who gave less than $200.00 or significantly more than $5,600.00 are largely unrepresented or, impact-wise, misrepresented by the data published by each campaign and the FEC. With more comprehensive reporting, these points of issue will be relieved, allowing for a thorough illustration of where each candidate receives their money.
            </p>
        </div>
    )
};

export default About;