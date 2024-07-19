import React from 'react';
import Modal from './Modal';
import Button from './Button';

const ConfirmModal = ({ isOpen, onClose, onConfirm, title, children }) => {
  const footer = (
    <div>
      <Button label={"취소"} variant={"normal"} onClick={onClose}/>
      <Button label={"확인"} variant={"primary"} onClick={() => {
        onConfirm();
        onClose();
      }}/>
    </div>
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} footer={footer}>
      {children}
    </Modal>
  );
};

export default ConfirmModal;