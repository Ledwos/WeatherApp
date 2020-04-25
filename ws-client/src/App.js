import React from 'react';
import './App.css';
import Search from './components/Search';
import Weather from './components/Weather';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submit: false,
      location: " ",
      result: " "
    };
    this.locUpdate = this.locUpdate.bind(this);
    this.handleFetch = this.handleFetch.bind(this);
    this.homeClick = this.homeClick.bind(this);
  }

  locUpdate(loc) {
    this.setState({location: loc});
  }

  handleFetch() {
    console.log(`fetching: ${this.state.location}`);
    fetch(`/api/weather/${this.state.location}`)
    .then(response => response.json())
    .then(data => {
      this.setState({result: data, submit: true});
    });
}

  homeClick() {
    this.setState({submit: false, location: " ", result: " "});
  }

  render() {
    return (
      <div className='App'>
        <h2 onClick={this.homeClick}>Weather Story</h2>
        {this.state.submit ? <Weather result={this.state.result} /> : <Search location={this.state.location} locUpdate={this.locUpdate} handleFetch={this.handleFetch} />}
      </div>
    )
  }
}

export default App;
