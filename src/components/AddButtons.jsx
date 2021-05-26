import React, { useState } from 'react';
import InputModal from 'Components/InputModal';
import 'Styles/components/AddButtons.scss';

const AddButtons = () => {
  const [showModal, setShowModal] = useState(false);
  const [type, setType] = useState('');

  const handleClick = (event) => {
    const { name } = event.target;
    if (name) {
      setType(name);
    }
    const inputModal = document.querySelector('.input-modal');
    if (!showModal) {
      inputModal.style.top = '0';
    } else {
      inputModal.style.top = '120%';
    }
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="add-buttons">
        <button
          className="add-buttons__expense"
          type="button"
          name="expense"
          onClick={handleClick}
        >
          -
        </button>
        <button
          className="add-buttons__income"
          type="button"
          name="income"
          onClick={handleClick}
        >
          +
        </button>
      </div>
      <InputModal type={type} handleClick={handleClick} />
    </>
  );
};

export default AddButtons;
