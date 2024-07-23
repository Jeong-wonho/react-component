import React from 'react';
import Modal from './Modal';
import Button from '../button/Button';

const ViewModal = ({ isOpen, onClose, title, children }) => {
  const footer = (
    <div>
      <Button label={"확인"}variant={"primary"} onClick={onClose}/>
    </div>
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} footer={footer}>
      {children}
    </Modal>
  );
};

export default ViewModal;