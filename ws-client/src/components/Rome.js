import React from 'react';

function Rome(props) {
    return (
        <div id='RomeDiv'>
            <p>i'm a Rome component</p>
    {props.result.name ? (
    <p>Rome, {props.result.main.temp} °C</p>
    ) : <p>result is not obtained</p>}
            
        </div>
    );
};

export default Rome;