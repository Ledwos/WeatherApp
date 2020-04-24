import React from 'react';
import './App.css';
import Search from './components/Search';
import Weather from './components/Weather';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "sydney",
      result: "not obtained yet"
    }
  }

  locUpdate(loc) {
    this.setState({location: loc});
  }

  handleFetch() {
    console.log(`fetching: ${this.state.location}`);
    // fetch(`/api/weather/${this.state.location}`);
}

  render() {
    return (
      <div className='App'>
        <h2>this is the App title</h2>
        <Search location={this.state.location} locUpdate={this.locUpdate.bind(this)} handleFetch={this.handleFetch.bind(this)} />
        <Weather result={this.state.result} />
      </div>
    )
  }
}

export default App;
