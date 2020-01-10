import React, { Component } from 'react';
import Particles from 'react-particles-js';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import '../candidates'
import {candidates} from "../candidates";
import BackButton from "../components/BackButton";

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
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response=> response.json())
    //   .then(users => {this.setState({ robots: users})});
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
    const filteredCandidates = candidates.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return (
        <div className='tc'>
          <Particles className='particles' params={particlesOptions}/>
          <h1 className='f-headline fw1'>Campaign Finance</h1>
          {
            route === 'home' ?
                <div>
                  <SearchBox searchChange={this.onSearchChange}/>
                  <CardList robots={filteredCandidates} />
                </div>
                :
                <div>
                  <BackButton onBackButtonChange={this.onBackButtonChange} />
                  <h1>Sorry no page here</h1>
                </div>
          }
        </div>
      );
  }
}

export default App;