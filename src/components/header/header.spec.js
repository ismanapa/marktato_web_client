import React from 'react';
import { mount, shallow } from 'enzyme';
import Header from './header';

describe('Header component', () => {
  it('Should match snapshot', () => {
    const title = 'Expected title';

    const wrapper = shallow(<Header title={title}/>);

    expect(wrapper).toMatchSnapshot();
  });
  it('Should have specific title', () => {
    const title = 'Expected title';

    const wrapper = mount(<Header title={title}/>);

    expect(wrapper.find('Typography').first().contains(title)).toBeTruthy();
  });
});
