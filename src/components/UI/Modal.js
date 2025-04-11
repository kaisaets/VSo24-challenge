import React, { useEffect, useRef } from 'react';

const Modal = (props) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (props.isOpen) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [props.isOpen]);

  return (
    <dialog ref={dialogRef} className="modal">
      {props.children}
    </dialog>
  );
};

export default Modal;
