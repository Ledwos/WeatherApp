import React from 'react';
import './Weather.css';

function Weather(props) {

    return (
        <div id='WeatherDiv'>
    {props.result.cod === 200 ? (
        <div id='ResultBox'>
            <table>
                <tr>
                    <td id='Name'>
                        {props.result.name}
                    </td>
                    <td id='LonLat'>
                        [ {props.result.coord.lon}, {props.result.coord.lat} ]
                    </td>
                </tr>
                <tr>
                    <td id='Temp'>
                        {props.result.main.temp} °C
                    </td>
                    <td id='TempDesc'>
                        <img src={`http://openweathermap.org/img/w/${props.result.weather[0].icon}.png`} alt='weather icon'></img>
                        <p id='DescText'>{props.result.weather[0].description}</p>
                    </td>
                </tr>
                <tr>
                    <td id='InfoBox'>
                        <tr>
                            <td>
                                Humidity:
                            </td>
                            <td>
                                {props.result.main.humidity} %
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Pressure:
                            </td>
                            <td>
                                {props.result.main.pressure} hpa
                            </td>
                        </tr>
                    </td>
                    <td>
                        
                    </td>
                </tr>
            </table>
        </div>
            

    ) : <p>{props.location}: {props.result.message}</p>}
            
        </div>
    );
};

export default Weather;