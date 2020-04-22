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

  render() {
    return (
      <div className='App'>
        <h2>this is the App title</h2>
        <Search location={this.state.location} />
        <Weather result={this.state.result} />
      </div>
    )
  }
}

export default App;
