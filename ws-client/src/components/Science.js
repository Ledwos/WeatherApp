import React from 'react';

function Science(props) {
    return (
        <div id='ScienceDiv'>
            <p>The Scientist</p>
    {props.result.name ? (
    <p>{props.result.main.temp} °C, the perfect temperature for this solution. give it 2 hours and it should reach a pressure of {props.result.main.pressure} </p>
    ) : <p>result is not obtained</p>}
            
        </div>
    );
};

export default Science;