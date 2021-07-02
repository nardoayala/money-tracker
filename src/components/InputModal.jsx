import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'Styles/components/InputModal.scss';
import LeftArrow from 'Images/left-arrow.png';

class InputModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: '',
      ammount: '',
    };

    this.handleAmmountInput = this.handleAmmountInput.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }

  handleAmmountInput(event) {
    const { value } = event.target;
    const valueArray = value.split('.');
    const isNumber = /^[0-9]$/i.test(event.key);
    if (valueArray[0].length > 6 && isNumber) {
      event.preventDefault();
    }
    if (valueArray[1]) {
      if (valueArray[1].length > 1 && isNumber) {
        event.preventDefault();
      }
    }
    this.setState({ ammount: value });
  }

  handleCategoryChange(event) {
    const { value } = event.target;
    this.setState({ category: value });
  }

  handleSave = () => {
    const { category, ammount } = this.state;
    const { type } = this.props;
    const newEntry = {
      category,
      ammount,
      type,
    };
    console.log(newEntry);
  };

  render() {
    const expensesCategories = [
      'Food',
      'Books',
      'Subscriptions',
      'Liquor',
      'Tech',
      'Pets',
    ];

    const { handleClick, type } = this.props;

    return (
      <div className="input-modal">
        <div className="input-modal__header">
          <div className="input-modal__header__container">
            <button className="exit-button" type="button" onClick={handleClick}>
              <img src={LeftArrow} alt="" />
            </button>
            {type ? <span>{`New ${type}`}</span> : null}
          </div>
        </div>
        <div className="input-modal__container">
          <div className="input-modal__input-group">
            <span className="input-modal__input-icon">$</span>
            <input
              className="input-modal__input"
              id="ammount"
              name="ammount"
              type="number"
              onKeyDown={this.handleAmmountInput}
            />
          </div>
          <select
            className="input-modal__input"
            id="categorySelector"
            name="categorySelector"
            defaultValue="Select a category"
            onChange={this.handleCategoryChange}
          >
            <option disabled>
              Select a category
            </option>
            {expensesCategories.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
          <button
            className="save-button"
            type="button"
            onClick={this.handleSave}
          >
            Save
          </button>
        </div>
      </div>
    );
  }
}

InputModal.propTypes = {
  handleClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default InputModal;
