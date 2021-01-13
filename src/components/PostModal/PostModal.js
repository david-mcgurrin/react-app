import React, {useCallback, useState} from 'react';
import {Button, Modal} from '@shopify/polaris';
import NewPost from '../NewPost';

export default function PostModal() {
  const [active, setActive] = useState(false);

  const handleModalChange = useCallback(() => setActive(!active), [active]);

  const handleClose = () => {
    handleModalChange();
  };

  const activator = <Button primary onClick={handleModalChange}>New Post</Button>;

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
