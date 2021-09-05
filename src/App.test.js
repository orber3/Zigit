import { findByTestAtrr } from '../Utills/index';
import { shallow } from 'enzyme';

import React from 'react';
import App from './App';

const setUp = (initialState = {}) => {
  const wrapper = shallow(<App />);
  return wrapper;
};

describe('test app component renders correctly', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setUp();
  });

  it('should render without errors.', () => {
    const component = findByTestAtrr(wrapper, 'appComponent');
    expect(component.length).toBe(1);
  });
});
