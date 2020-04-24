import React from 'react';
import './Weather.css';

function Weather(props) {
    return (
        <div id='WeatherDiv'>
            <p>i'm a weather component</p>
    {props.result.name ? (
    <p>Temperature: {props.result.main.temp} °C</p>
    ) : <p>result is not obtained</p>}
            
        </div>
    );
};

export default Weather;