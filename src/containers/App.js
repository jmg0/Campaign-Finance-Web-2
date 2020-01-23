import React, { Component } from 'react';
import Particles from 'react-particles-js';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import '../candidates'
import {candidates} from "../candidates";
import BackButton from "../components/BackButton";
import CandidateMap from "../components/CandidateMap";
import ReactTooltip from 'react-tooltip'
import About from "../components/About";

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

class App extends Component {
  constructor() {
    super()
    this.state = {
      candidates: [],
      searchfield: '',
      route: 'home'
    }
  }

  componentDidMount() {
    this.setState({ candidates : candidates})
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  };

  onBackButtonChange = () => {
    this.onRouteChange('home');
  };

  onRouteChange = (route) => {
    this.setState({route: route})
  };

  render() {
    const { candidates, searchfield, route } = this.state;
    const filteredCandidates = candidates.filter(candidate =>{
      return candidate.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    const candidateMaps = candidates.map(candidate => {
      return candidate.maplink
    });
    const candidateNames = ['Joe Biden', 'Pete Buttigieg', 'Amy Klobuchar', 'Bernie Sanders', 'Donald Trump', 'Elizabeth Warren', 'Andrew Yang'];
    const maxRoutes = candidateNames.length;
    return (
        <div className='tc'>
          <Particles className='particles' params={particlesOptions}/>
          {
            route === 'home' ?
                <div>
                  <h1 className='mont'>2020 Presidential Campaign Contributions</h1>
                  <SearchBox searchChange={this.onSearchChange}/>
                  <CardList robots={filteredCandidates} onRouteChange={this.onRouteChange} />
                </div>
                :
                  route < maxRoutes ?
                      <div>
                        {/*<h1 className='f-subheadline fw1'>{candidateNames[route]}</h1>*/}
                        <div className='gridd'>
                          <div className='item1'>
                            <div className='toprow'>
                              <BackButton className='botn' onBackButtonChange={this.onBackButtonChange} />

                            </div>
                            <div className='info'>
                              <img alt={candidateNames[route]} src={candidates[route].imgpath2} height='150px' width='170px' />
                              <h1 className='center'>{candidateNames[route]}</h1>
                            </div>
                            <div className='row1'>
                              <h2 className='slightlybigger underline' data-tip data-for='conts'>Individual Contributions</h2>
                              <ReactTooltip id='conts' place="right" type="dark" effect="solid">
                                <p>All contributions from individuals to the {candidateNames[route]} campaign since 01-01-2019 are detailed below.</p>
                                <p>These totals exclude certain contributions to PACs and other committees that are not subject to reporting.</p>
                                <p>Click on the About page below for more details.</p>
                              </ReactTooltip>
                            </div>
                            <div className='row2'>
                              <p></p>
                              <h2>Total - {candidates[route].contributionTotal}</h2>
                            </div>
                            <div className='row5'>
                              <div className='i1'>
                                <h4 className='sub1' data-tip data-for='itemized'>Itemized - {candidates[route].itemizedTotal}</h4>
                                <ReactTooltip id='itemized' place="right" type="dark" effect="solid">
                                  <p>All individual contributions reported by the campaign. These are the contributions displayed on the map.</p>
                                </ReactTooltip>
                              </div>
                              <div className='i2'>
                                <h4 className='sub2' data-tip data-for='unitemized'>Unitemized - {candidates[route].nonItemizedTotal}</h4>
                                <ReactTooltip id='unitemized' place="right" type="dark" effect="solid">
                                  <p>Campaigns are only required to report contributions over $200.00.</p>
                                  <p>Smaller contributions must be recorded and tabulated, but can be reported as a single sum of unitemized contributions.</p>
                                  <p>Contributions recorded in this category contain no information about the contributors, so they are not displayed on the map.</p>
                                  <p>Click on the About page below for more details.</p>
                                </ReactTooltip>
                              </div>
                            </div>
                            <div className='row6'>
                              <p></p>
                              <h2 data-tip data-for='contributors'>Contributors - {candidates[route].numContributors}</h2>
                              <ReactTooltip id='contributors' place="right" type="dark" effect="solid">
                                <p>The number of unique individuals who have contributed to the {candidateNames[route]} campaign since 01-01-2019.</p>
                                <p>This only includes itemized contributors, as no contributor information is reported for unitemized contributions.</p>
                              </ReactTooltip>
                            </div>
                          </div>
                          <div className='item2'>
                            <CandidateMap id={route} mapLinks={candidateMaps} />
                          </div>
                        </div>
                      </div>
                      :
                          <div>
                            <h1 className='mont'>2020 Presidential Campaign Contributions</h1>
                            <hr />
                            <div className='flex'>
                              <div className='bbut'>
                                <BackButton onBackButtonChange={this.onBackButtonChange} />
                              </div>
                              <div className='divv'>
                                <About />
                              </div>
                            </div>
                          </div>
          }
          <footer>
            <div className='justify-start'>
              <div className='inline-flex'>
                <h5 className='pointer' onClick={this.onRouteChange}>About</h5>
                <h5 className='demarc'>*</h5>
                <h5>Created by James Garay</h5>
              </div>
              <div>
                <a href='https://github.com/jmg0/Campaign-Finance-Analysis'>
                  <svg className='octicon' height='24px' width='16px'>
                    <path fillRule='evenodd' d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </footer>
        </div>
      );
  }
}

export default App;