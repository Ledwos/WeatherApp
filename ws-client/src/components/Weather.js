import React, { useLayoutEffect } from 'react';
import { selectResult, selectLocation } from './reds/wsSlice';
import { useDispatch, useSelector } from 'react-redux';
import './Weather.css';

const Weather = () => {
    const result = useSelector(selectResult);
    const location = useSelector(selectLocation);

    return (
        <div id='WeatherDiv'>
    {result.cod === 200 ? (
        <div id='ResultBox'>
            <table>
                <tbody>
                    <tr>
                        <td id='Name'>
                            {result.name}
                        </td>
                        <td id='LonLat'>
                            [ {result.coord.lon}, {result.coord.lat} ]
                        </td>
                    </tr>
                    <tr>
                        <td id='Temp'>
                            {result.main.temp} °C
                        </td>
                        <td id='TempDesc'>
                            <img src={`http://openweathermap.org/img/w/${result.weather[0].icon}.png`} alt='weather icon'></img>
                            <p id='DescText'>{result.weather[0].description}</p>
                        </td>
                    </tr>
                    <tr>
                        <td id='InfoBox'>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            Humidity:
                                        </td>
                                        <td>
                                            {result.main.humidity} %
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Pressure:
                                        </td>
                                        <td>
                                            {result.main.pressure} hpa
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
            

    ) : <p>{location}: {result.message}</p>}
            
        </div>
    );
};

export default Weather;