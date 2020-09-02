import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { 
    updateTheme, 
    updateResult, 
    updateSubmit, 
    updateLocation,
    selectLocation  } from '../reds/wsSlice';
import './Search.css';

function Search(props) {

    const dispatch = useDispatch();
    const location = useSelector(selectLocation);
    const handleChange = (event) => {
        let loc = event.target.value;
        dispatch(updateLocation(loc));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleFetch();
    };

    const handleTheme = (event) => {
        let theme = event.target.value;
        dispatch(updateTheme(theme));
    };

    const handleFetch = () => {
        fetch(`/api/weather/${location}`)
        .then(response => response.json())
        .then(data => {
            dispatch(updateResult(data));
            dispatch(updateSubmit());
        //   this.setState({result: data, submit: true});
        });
      };

    return (
        <div id='SearchDiv'>
            <div id='SearchComp'>
                <form onSubmit={handleSubmit}>
                    <input id='SearchBar' type='text' onChange={handleChange} ></input>
                </form>
                <select onChange={handleTheme} id="ThemeSelect">
                    <option value="wComp">Just the weather Please!</option>
                    {/* <option value='rComp'>Rome</option> */}
                </select>
                <button type="button" id='SearchBtn' onClick={handleFetch}>Search</button>
            </div>
            <p>More options coming soon!</p>
        </div>
    );
};

export default Search;