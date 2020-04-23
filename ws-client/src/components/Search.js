import React from 'react';
import './Search.css';

function Search(props) {

    handleChange = (event) => {
        var loc = event.target.value;
        props.locUpdate(loc);
    };

    handleSubmit = (event) => {
        event.preventDefault();
        props.handleFetch();
    };

    return (
        <div id='SearchDiv'>
            <form>
                <input id='searchBar' type='text' onChange={this.handleChange()} onSubmit={this.handleSubmit()}></input>
            </form>
            <p>i'm a search component</p>
            <p>location is: {props.location}</p>
        </div>
    );
};

export default Search;