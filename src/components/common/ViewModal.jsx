import React from 'react';
import Modal from './Modal';
import Button from './Button';

const ViewModal = ({ isOpen, onClose, title, children }) => {
  const footer = (
    <div>
      <Button label={"Close"}variant={"primary"} onClick={onClose}/>
    </div>
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} footer={footer}>
      {children}
    </Modal>
  );
};

export default ViewModal;