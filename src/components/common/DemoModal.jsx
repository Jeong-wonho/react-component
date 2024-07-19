import React, { useState } from 'react'
import ConfirmModal from './ConfirmModal';
import ViewModal from './ViewModal';
import Button from './Button';


const DemoModal = () => {
    const [isConfirmOpen, setConfirmOpen] = useState(false);
    const [isViewOpen, setViewOpen] = useState(false);
  
    return (
      <div>
        <Button label={"Open Confirm Modal"} onClick={() => setConfirmOpen(true)}/>
        <Button label={"Open View Modal"} onClick={() => setViewOpen(true)}/>
  
        <ConfirmModal
          isOpen={isConfirmOpen}
          onClose={() => setConfirmOpen(false)}
          onConfirm={() => console.log('Confirmed!')}
          title="Confirm Popup"
        >
          내용이 들어갑니다.
        </ConfirmModal>
  
        <ViewModal
          isOpen={isViewOpen}
          onClose={() => setViewOpen(false)}
          title="View Popup"
        >
          내용이 들어갑니다.
        </ViewModal>
      </div>
    );
  };
  

export default DemoModal
