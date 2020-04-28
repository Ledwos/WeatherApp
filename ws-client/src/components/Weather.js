import React from 'react';
import './Weather.css';

function Weather(props) {

    return (
        <div id='WeatherDiv'>
            <p>i'm a weather component</p>
    {props.result.cod === 200 ? (
        <div id='ResultBox'>
            <div id='LocationBar'>
                <p id='Name'>{props.result.name}</p>
                <p id='LonLat'>[{props.result.coord.lon},{props.result.coord.lat}]</p>
            </div>
            <div id='TempBar'>
                <div>
                    <p id='Temp'>{props.result.main.temp} °C</p>
                    <img src={`http://openweathermap.org/img/w/${props.result.weather[0].icon}.png`} alt='weather icon'></img>
                </div>
                <p>{props.result.weather[0].description}</p>
            </div>
            <div id='infoBar'>
                <p>Humidity: {props.result.main.humidity} %</p>
                <p>Pressure: {props.result.main.pressure} hpa</p>
            </div>
        </div>
    ) : <p>{props.location}: {props.result.message}</p>}
            
        </div>
    );
};

export default Weather;