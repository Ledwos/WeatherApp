// import React from 'react';
// import './App.css';
// import Search from './components/Search';
// import Main from './components/Main';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       submit: false,
//       location: " ",
//       result: " ",
//       theme: "wComp"
//     }
//     this.locUpdate = this.locUpdate.bind(this);
//     this.handleFetch = this.handleFetch.bind(this);
//     this.homeClick = this.homeClick.bind(this);
//     this.themeUpdate = this.themeUpdate.bind(this);
//   }

//   locUpdate(loc) {
//     this.setState({location: loc});
//   };

//   themeUpdate(setting) {
//     this.setState({theme: setting});
//   };

//   handleFetch() {
//     fetch(`/api/weather/${this.state.location}`)
//     .then(response => response.json())
//     .then(data => {
//       this.setState({result: data, submit: true});
//     });
//   };

//   homeClick() {
//     this.setState({submit: false, location: " ", result: " "});
//   };

//   render() {
//     return (
//       <div className='App'>
//         <h2 id='Heading' onClick={this.homeClick}>Weather Story</h2>
//         {this.state.result.cod ? <Main tag={this.state.theme} result={this.state.result} location={this.state.location} /> : <Search themeUpdate={this.themeUpdate} locUpdate={this.locUpdate} handleFetch={this.handleFetch} />}
//       </div>
//     )
//   }
// }

// export default App;


import React, { useState, useEffect } from 'react';
import './App.css';
import Search from './components/Search';

const App = () => {
    
  const handleFetch = () => {
    fetch(`/api/weather/${this.state.location}`)
    .then(response => response.json())
    .then(data => {
      this.setState({result: data, submit: true});
    });
  };

  return (
    <div className='App'>
      <h2 id='Heading'>Weather Story</h2>
      <Search handleFetch={handleFetch}/>
    </div>
  );
};

export default App;