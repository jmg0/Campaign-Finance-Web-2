import React, { Component } from 'react';
import Particles from 'react-particles-js';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import '../candidates'
import {candidates} from "../candidates";
import BackButton from "../components/BackButton";
import CandidateMap from "../components/CandidateMap";

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
                  <h1 className='mont'>2020 Presidential Candidate Campaign Contributions</h1>
                  <SearchBox searchChange={this.onSearchChange}/>
                  <CardList robots={filteredCandidates} onRouteChange={this.onRouteChange} />
                </div>
                :
                  route < maxRoutes ?
                      <div>
                        <h1 className='f-subheadline fw1'>{candidateNames[route]}</h1>
                        <div className='gridd'>
                          <div className='item1'>
                            <BackButton onBackButtonChange={this.onBackButtonChange} />
                            <h1>{candidateNames[route]}</h1>
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
            <a href='https://github.com/jmg0' className='justify-center'>
              <h3>Created by James Garay</h3>
            </a>
          </footer>
        </div>
      );
  }
}

export default App;