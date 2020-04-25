import React from 'react';
import './Search.css';

function Search(props) {

    const handleChange = (event) => {
        var loc = event.target.value;
        props.locUpdate(loc);
    };

    const handleSubmit = function(event) {
        event.preventDefault();
        props.handleFetch();
    };

    return (
        <div id='SearchDiv'>
            <form onSubmit={handleSubmit}>
                <input id='searchBar' type='text' onChange={handleChange} ></input>
                <button type="button" onClick={handleSubmit}>click me</button>
            </form>
        </div>
    );
};

export default Search;