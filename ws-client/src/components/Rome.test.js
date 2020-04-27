import React from 'react';
// import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
// import { shallowToJson } from 'enzyme-to-json';

import App from '../App';
import Rome from './Rome';

describe('Rome render', () => {
  let apper = shallow(<App />)
  beforeEach(() => {
    apper.setState({
      submit: true, 
      location: "tokyo", 
      result: {
        "coord":{"lon":139.69,"lat":35.69},
      "weather":[
        {"id":804,
         "main":"Clouds",
         "description":"overcast clouds",
         "icon":"04n"
        }
      ],
      "base":"stations",
      "main":{
        "temp":13.51,
        "feels_like":9.4,
        "temp_min":12.78,
        "temp_max":14,
        "pressure":1014,
        "humidity":76
      },
      "visibility":10000,
      "wind":{
        "speed":5.7,
        "deg":50
      },
      "clouds":{
        "all":95
      },
      "dt":1587929042,
      "sys":{
        "type":1,
        "id":8074,
        "country":"JP",
        "sunrise":1587930817,
        "sunset":1587979431
      },
      "timezone":32400,
      "id":1850144,
      "name":"Tokyo",
      "cod":200
        }});
  })
  
  it('renders Rome', () => {
    shallow(<Rome result={apper.state().result}/>);
  });

})


