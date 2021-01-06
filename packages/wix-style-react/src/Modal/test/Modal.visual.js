import React from 'react';
import { storiesOf } from '@storybook/react';

import Modal from '../Modal';
import { MessageBoxFunctionalLayout } from '../../MessageBox';

storiesOf('Modal', module).add('default', () => (
  <Modal
    isOpen
    shouldDisplayCloseButton
    contentLabel="Modal With Close Button Example"
    scrollableContent={false}
  >
    <MessageBoxFunctionalLayout
      theme="blue"
      title="Modal With Close Button Example"
      confirmText="OK"
      cancelText="Cancel"
    >
      I Have a close button on the upper right corner but its impossible to
      press without deleting the github creature first using the console
    </MessageBoxFunctionalLayout>
  </Modal>
));
