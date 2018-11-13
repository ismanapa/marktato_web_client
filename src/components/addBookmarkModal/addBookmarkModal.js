import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';

import withGraphClient from '../../hoc/withGraphClient';
import addBookmarkAction from '../../services/graphActions/addBookmarkAction';

const renderAddBookmarkForm = (addBookmark) => {
  let name;
  let description;
  let url;
  return (
    <div>
      <h2>Add bookmark form</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          addBookmark({ name: name.value, description: description.value, url: url.value });
          name.value = '';
          description.value = '';
          url.value = '';
        }}
      >
        <div>
          <label>
            name
                <input ref={(node) => { name = node; }} />
          </label>
        </div>

        <div>
          <label>
            description
                <input ref={(node) => { description = node; }} />
          </label>
        </div>

        <div>
          <label>
            url
                <input ref={(node) => { url = node; }} />
          </label>
        </div>

        <button type="submit">Add bookmark</button>
      </form>
    </div>
  );
};

const AddBokkmarkModal = ({ addBookmark, showModal, handleClose }) => (
  <Modal
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
    onClose={handleClose}
    open={showModal}>
    <div style={{
      position: 'absolute',
      backgroundColor: 'white',
      top: '50%',
      left: '50%',
      width: '25%',
      padding: 15,
      transform: 'translate(-50%)',
    }}>
      {renderAddBookmarkForm(addBookmark)}
    </div>
  </Modal>
);

AddBokkmarkModal.propTypes = {
  showModal: PropTypes.bool,
  handleClose: PropTypes.func,
  addBookmark: PropTypes.func,
};

AddBokkmarkModal.defaultProps = {
  showModal: false,
};

const actions = {
  addBookmark: addBookmarkAction,
};

// Probably mutation will be passes to container component
export default withGraphClient(actions)(AddBokkmarkModal);
