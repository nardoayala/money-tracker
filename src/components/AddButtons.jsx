import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InputModal from 'Components/InputModal';
import 'Styles/components/AddButtons.scss';

const AddButtons = (props) => {
  const { categories, data, handleNewEntry } = props;
  const [showModal, setShowModal] = useState(false);
  const [type, setType] = useState('');

  const handleModal = (event) => {
    if (event) {
      const { name } = event.target;
      if (name) {
        setType(name);
      }
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
          onClick={handleModal}
        >
          -
        </button>
        <button
          className="add-buttons__income"
          type="button"
          name="income"
          onClick={handleModal}
        >
          +
        </button>
      </div>
      <InputModal
        type={type}
        handleModal={handleModal}
        categories={categories}
        data={data}
        handleNewEntry={handleNewEntry}
      />
    </>
  );
};

AddButtons.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleNewEntry: PropTypes.func.isRequired,
};

export default AddButtons;
