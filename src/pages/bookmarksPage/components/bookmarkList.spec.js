import React from 'react';
import { mount, shallow } from 'enzyme';

import BookmarkList from './bookmarktList';

describe('BookmarkList component', () => {
  it('Should have default props', () => {
    const wrapper = mount(<BookmarkList/>);
    expect(wrapper.props().bookmarks).toHaveLength(0);
  });

  it('Should list bookmarks', () => {
    const props = {
      bookmarks: [
        { id: 1, name: 'bookmark 1' },
        { id: 2, name: 'bookmark 2' },
      ],
    };

    const wrapper = shallow(<BookmarkList {...props}/>);
    const listItems = wrapper.find('BookmarkItem');

    expect(listItems).toHaveLength(props.bookmarks.length);
  });
});
