import React from 'react';
import { shallow } from 'enzyme';
import Typography from '@material-ui/core/Typography';

import Header from './header';

describe('Header component', () => {
  it('Should match snapshot', () => {
    const title = 'Expected title';

    const wrapper = shallow(<Header title={title}/>);

    expect(wrapper).toMatchSnapshot();
  });
  it('Should have provided title', () => {
    const title = 'Expected title';

    const wrapper = shallow(<Header title={title}/>);

    expect(wrapper.find('h3').first().contains(title)).toBeTruthy();
  });
});
