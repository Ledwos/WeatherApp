import React from 'react';
import './App.css';
import Search from './components/Search';
import Weather from './components/Weather';
import Main from './components/Main';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submit: false,
      location: " ",
      // result: " ",
      result: {
        coord: {
        lon: 2.35,
        lat: 48.85
        },
        weather: [
        {
        id: 804,
        main: "Clouds",
        description: "overcast clouds",
        icon: "04d"
        }
        ],
        base: "stations",
        main: {
        temp: 13.84,
        feels_like: 10.58,
        temp_min: 13,
        temp_max: 15,
        pressure: 1003,
        humidity: 76
        },
        visibility: 10000,
        wind: {
        speed: 4.6,
        deg: 230
        },
        clouds: {
        all: 90
        },
        dt: 1588333567,
        sys: {
        type: 1,
        id: 6550,
        country: "FR",
        sunrise: 1588307370,
        sunset: 1588359937
        },
        timezone: 7200,
        id: 2988507,
        name: "Paris",
        cod: 200
        },
      theme: "wComp"
    };
    this.locUpdate = this.locUpdate.bind(this);
    this.handleFetch = this.handleFetch.bind(this);
    this.homeClick = this.homeClick.bind(this);
    this.themeUpdate = this.themeUpdate.bind(this);
  }

  locUpdate(loc) {
    this.setState({location: loc});
  };

  themeUpdate(setting) {
    this.setState({theme: setting});
  };

  handleFetch() {
    fetch(`/api/weather/${this.state.location}`)
    .then(response => response.json())
    .then(data => {
      this.setState({result: data, submit: true});
    });
  };

  homeClick() {
    this.setState({submit: false, location: " ", result: " "});
  };

  render() {
    return (
      <div className='App'>
        <h2 onClick={this.homeClick}>Weather Story</h2>
        {this.state.result.cod ? <Main tag={this.state.theme} result={this.state.result} location={this.state.location} /> : <Search themeUpdate={this.themeUpdate} locUpdate={this.locUpdate} handleFetch={this.handleFetch} />}
      </div>
    )
  }
}

export default App;

