import React from 'react';
import { shallow } from 'enzyme';
import CircularProgress from '@material-ui/core/CircularProgress';

import BookmarkList from './components/bookmarktList';
import BookmarksPage from './bookmarksPage';

jest.mock('./components/bookmarktList', () => 'BookmarktList');

describe('BookmarkPage', () => {
  it('Should match snapshot', () => {
    const props = {
      data: { bookmarks: [{ name: 'bookmark1' }, { name: 'bookmark2' }] },
      loading: false,
      error: null,
    };

    const wrapper = shallow(<BookmarksPage {...props}/>);

    expect(wrapper).toMatchSnapshot();
  });

  it('Should have loader when loading is true', () => {
    const props = {
      data: {},
      loading: true,
      error: null,
    };

    const wrapper = shallow(<BookmarksPage {...props}/>);
    const loader = wrapper.find(CircularProgress);

    expect(loader).toHaveLength(1);
  });

  it('Should print error when loading is done and error exists', () => {
    const props = {
      data: {},
      loading: false,
      error: new Error('network error'),
    };

    const wrapper = shallow(<BookmarksPage {...props}/>);

    expect(wrapper.contains(props.error.toString())).toBeTruthy();
  });

  it('Should print bookmark list when loading is done', () => {
    const props = {
      data: { bookmarks: [{ name: 'bookmark1' }, { name: 'bookmark2' }] },
      loading: false,
      error: null,
    };

    const wrapper = shallow(<BookmarksPage {...props}/>);
    const list = wrapper.find(BookmarkList).first();

    expect(list.props().bookmarks).toEqual(props.data.bookmarks);
  });
});
