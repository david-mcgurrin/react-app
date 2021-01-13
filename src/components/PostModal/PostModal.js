import React, {useCallback, useState, useContext} from 'react';
import {Button, Modal} from '@shopify/polaris';
import NewPost from '../NewPost';
import {AppContext} from '../../context/AppContext';

export default function PostModal() {
  const [active, setActive] = useState(false);

  const handleModalChange = useCallback(() => setActive(!active), [active]);

  const handleClose = () => {
    handleModalChange();
  };

  const newPost = useContext(AppContext);

  const activator = <Button primary onClick={handleModalChange}>New Post</Button>;

  if (newPost.posted && active) {
    setActive(false);
  }

  return (
    <div className="new-post-modal">
      <Modal
        activator={activator}
        open={active}
        onClose={handleClose}
        title="New Post"
      >
        <Modal.Section>
          <NewPost/>
        </Modal.Section>
      </Modal>
    </div>
  );
}
