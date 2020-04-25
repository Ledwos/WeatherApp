import React, { Component } from 'react';
import Weather from './Weather';
import Rome from './Rome';
import Science from './Science';

class Main extends Component {
    components = {
        wComp: Weather,
        rComp: Rome,
        sciComp: Science
    };
    render() {
       const TagName = this.components[this.props.tag || 'foo'];
       return <TagName result={this.props.result}/>
    }
}
export default Main;