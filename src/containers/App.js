import React, { Component } from 'react';
import Particles from 'react-particles-js';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import '../candidates'
import {candidates} from "../candidates";
import BackButton from "../components/BackButton";
import CandidateMap from "../components/CandidateMap";
import Octicon from "@primer/octicons-react";

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
                              <img alt={candidateNames[route]} src={candidates[route].imgpath} height='150px' width='150px' />
                              <h1>{candidateNames[route]}</h1>
                            </div>
                            <div className='row1'>
                              <p> </p>
                              <h2>Contribution Total - {candidates[route].contributionTotal}</h2>
                            </div>
                            <div className='row2'>
                              <h3>Itemized Total - {candidates[route].itemizedTotal}</h3>
                            </div>
                            <div className='row5'>
                              <h3>Non-itemized Total - {candidates[route].nonItemizedTotal}</h3>
                            </div>
                            <div className='row6'>
                              <h2>Independent Contributors - {candidates[route].numContributors}</h2>
                            </div>
                          </div>
                          <div className='item2'>
                            <CandidateMap id={route} mapLinks={candidateMaps} />
                          </div>
                        </div>
                      </div>
                      :
                      <div>
                        <BackButton onBackButtonChange={this.onBackButtonChange} />
                        <h1>Sorry no page here</h1>
                        {console.log(route)}
                      </div>
          }
          <footer>
            <div className='justify-start'>
              <h3>Created by James Garay</h3>
              <a href='https://github.com/jmg0'>
                <svg className='octicon' height='24px' width='16px'>
                  <path fillRule='evenodd' d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
              </a>
            </div>
          </footer>
        </div>
      );
  }
}

export default App;