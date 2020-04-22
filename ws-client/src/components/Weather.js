import React from 'react';
import './Weather.css';

function Weather(props) {
    return (
        <div id='WeatherDiv'>
            <p>i'm a weather component</p>
            <p>result is: {props.result}</p>
        </div>
    );
};

export default Weather;