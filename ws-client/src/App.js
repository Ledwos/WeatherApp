import React from 'react';
import { selectResult, clearResult } from './components/reds/wsSlice';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Search from './components/search/Search';
import Weather from './components/weather/Weather';

const App = () => {
  
  const dispatch = useDispatch();
  const result = useSelector(selectResult);
  return (
    <div className='App'>
      <h2 id='Heading' onClick={() => dispatch(clearResult())}>Weather Story</h2>
      {result.cod ? <Weather/> : <Search/>}
    </div>
  );
};

export default App;