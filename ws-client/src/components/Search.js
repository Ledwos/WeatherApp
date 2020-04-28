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

    const handleTheme = function(event) {
        var theme = event.target.value;
        props.themeUpdate(theme);
    }

    return (
        <div id='SearchDiv'>
            <form onSubmit={handleSubmit}>
                <input id='searchBar' type='text' onChange={handleChange} ></input>
                <button type="button" onClick={handleSubmit}>click me</button>
            </form>
            <select onChange={handleTheme} id="themeSelect">
                <option value="wComp">Just the weather Please!</option>
                {/* <option value="rComp">Roman War</option>
                <option value="sciComp">The Scientist</option> */}
            </select>
            <p>More options coming soon!</p>
        </div>
    );
};

export default Search;