import React from 'react';
import './Search.css';

function Search(props) {

    function handleChange(event) {
        event.preventDefault();
        var loc = event.target.value;
        props.locUpdate(loc);
    }

    return (
        <div id='SearchDiv'>
            <input id='searchBar' type='text' onChange={handleChange}></input>
            <p>i'm a search component</p>
            <p>location is: {props.location}</p>
        </div>
    );
};

export default Search;