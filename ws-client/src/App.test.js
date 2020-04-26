import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


test('checking it works', () => {
  const num = 5;
  expect(2 + 3).toEqual(num);
});



describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })
  
  it('renders App', () => {
    shallow(<App />);
  });

  it('should call homeClick on title click', () => {
    const homeClick = jest.fn();
    const title = shallow(<h2 onClick={homeClick}>Weather Story</h2>);
    title.simulate('click');
    expect(homeClick).toHaveBeenCalledTimes(1);

  });

  it('should reset state when called', () => {
    const spy = jest.spyOn(wrapper.instance(), 'homeClick');
    wrapper.setState({submit: true, location: "tokyo", result: "result"});
    expect(wrapper.state().submit).toEqual(true);
    expect(wrapper.state().location).toEqual('tokyo');
    expect(wrapper.state().result).toEqual('result');
    wrapper.instance().homeClick();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(wrapper.state().submit).toEqual(false);
    expect(wrapper.state().location).toEqual(' ');
    expect(wrapper.state().result).toEqual(' ');
  })

  test('locUpdate updates state.location', () => {
    wrapper.setState({location: ' '});
    expect(wrapper.state().location).toEqual(' ');

    const spy = jest.spyOn(wrapper.instance(), 'locUpdate');
    wrapper.instance().locUpdate('tokyo');
    expect(spy).toHaveBeenCalledTimes(1);
    expect(wrapper.state().location).toEqual('tokyo');
  })
  
  test('themeUpdate updates state.theme', () => {
    wrapper.setState({theme: 'wComp'});
    expect(wrapper.state().theme).toEqual('wComp');

    const spy = jest.spyOn(wrapper.instance(), 'themeUpdate');
    wrapper.instance().themeUpdate('rComp');
    expect(spy).toHaveBeenCalledTimes(1);
    expect(wrapper.state().theme).toEqual('rComp');
  })

})




