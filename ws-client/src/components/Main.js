import React, { Component } from 'react';
import Weather from './Weather';
import Rome from './Rome';

class Main extends Component {
    components = {
        wComp: Weather,
        rComp: Rome
    };
    render() {
       const TagName = this.components[this.props.tag || 'foo'];
       return <TagName result={this.props.result}/>
    }
}
export default Main;