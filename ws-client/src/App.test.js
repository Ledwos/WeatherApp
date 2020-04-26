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
  
  it('handles onclick on title', () => {
    const homeClick = jest.fn();
    const output = shallow(<h2 onClick={homeClick}>Weather Story</h2>);
    output.simulate('click');
    expect(homeClick).toHaveBeenCalledTimes(1);

  });

  it('should reset state onclick', () => {
    wrapper.setState({submit: true, location: "tokyo", result: "result"});
    const homeClick = jest.fn(() => {
      wrapper.setState({submit: false, location: " ", result: " "})
    });
    const title = shallow(<h2 onClick={homeClick}>Weather Story</h2>);

    expect(wrapper.state().submit).toEqual(true);
    expect(wrapper.state().location).toEqual('tokyo');
    expect(wrapper.state().result).toEqual('result');
    title.simulate('click');
    expect(wrapper.state().submit).toEqual(false);
    expect(wrapper.state().location).toEqual(' ');
    expect(wrapper.state().result).toEqual(' ');

  });

  it('should do above but with spyon', () => {
    wrapper.setState({submit: true, location: "tokyo", result: "result"});
    const spy = jest.spyOn(wrapper.instance(), 'homeClick');
    wrapper.instance().homeClick();
    expect(spy).toHaveBeenCalledTimes(1);
    // FUCK YESb\
  })

})




