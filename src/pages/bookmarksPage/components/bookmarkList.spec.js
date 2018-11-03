import React from 'react';
import { mount, shallow } from 'enzyme';

import BookmarkList from './bookmarktList';

describe('BookmarkList component', () => {
  it('Should have default props', () => {
    const wrapper = mount(<BookmarkList/>);
    expect(wrapper.props().bookmarks).toHaveLength(0);
  });

  it('Should lsit bookmarks', () => {
    const props = {
      bookmarks: [
        { name: 'bookmark 1' },
        { name: 'bookmark 2' },
      ],
    };

    const wrapper = shallow(<BookmarkList {...props}/>);
    const listItems = wrapper.find('li');

    expect(listItems).toHaveLength(props.bookmarks.length);
  });
});
