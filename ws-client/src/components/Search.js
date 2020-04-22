import React from 'react';
import './Search.css';

function Search(props) {
    return (
        <div id='SearchDiv'>
            <p>i'm a search component</p>
            <p>location is: {props.location}</p>
        </div>
    );
};

export default Search;