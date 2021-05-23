import React, { useState } from 'react';
import AddModal from 'Components/AddModal';
import 'Styles/components/AddButtons.scss';

const AddButtons = () => {
  const [showModal, setShowModal] = useState(false);
  const [type, setType] = useState('');

  const handleClick = (event) => {
    const { name } = event.target;
    setType(name);
    setShowModal(true);
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
      {showModal ? <AddModal type={type} /> : null}
    </>
  );
};

export default AddButtons;
