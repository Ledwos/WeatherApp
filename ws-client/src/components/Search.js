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
            <div id='SearchComp'>
                <form onSubmit={handleSubmit}>
                    <input id='SearchBar' type='text' onChange={handleChange} ></input>
                </form>
                <select onChange={handleTheme} id="ThemeSelect">
                    <option value="wComp">Just the weather Please!</option>
                </select>
                <button type="button" id='SearchBtn' onClick={handleSubmit}>Search</button>
            </div>
            <p>More options coming soon!</p>
        </div>
    );
};

export default Search;