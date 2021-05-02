import React from 'react';
import 'Styles/components/AddButtons.scss';

const AddButtons = () => (
  <div className="add-buttons">
    <button className="add-buttons__expense" type="button">
      -
    </button>
    <button className="add-buttons__income" type="button">
      +
    </button>
  </div>
);

export default AddButtons;
