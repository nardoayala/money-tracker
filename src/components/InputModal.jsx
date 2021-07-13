import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'Styles/components/InputModal.scss';
import LeftArrow from 'Images/left-arrow.png';

const formatDate = (date) => {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  const year = date.getFullYear();

  if (month <= 10) {
    month = `0${month}`;
  } if (day <= 10) {
    day = `0${day}`;
  }
  return `${year}-${month}-${day}`;
};

const initialState = {
  category: '',
  ammount: '',
  description: '',
  date: formatDate(new Date()),
};

class InputModal extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    const { name, value } = event.target;
    const stateObject = {};
    if (name === 'ammount') {
      const valueArray = value.split('.');
      if (valueArray[0].length > 6) {
        return;
      }
      if (valueArray[1]) {
        if (valueArray[1].length > 2) {
          return;
        }
      }
    }
    stateObject[name] = value;
    this.setState(stateObject);
  }

  getCategories() {
    const { categories, type } = this.props;
    let expensesCategories = [];
    let incomesCategories = [];
    if (type === 'expense') {
      categories.map((item) => {
        if (item.type === 'expenses') {
          expensesCategories = item.categories;
        }
        return [];
      });
      return expensesCategories;
    }
    if (type === 'income') {
      categories.forEach((item) => {
        if (item.type === 'incomes') {
          incomesCategories = item.categories;
        }
        return [];
      });
      return incomesCategories;
    }
    return [];
  }

  handleSave = () => {
    const {
      category,
      ammount,
      date,
      description,
    } = this.state;
    const { type, handleNewEntry, handleModal } = this.props;
    const newEntry = {
      category,
      ammount: Number(ammount),
      date,
      type,
      description,
    };
    handleNewEntry(newEntry);
    this.setState(initialState);
    handleModal();
  };

  render() {
    const { handleModal, type } = this.props;
    const { ammount, date, description } = this.state;
    const categories = this.getCategories();

    return (
      <div className="input-modal">
        <div className="input-modal__header">
          <div className="input-modal__header__container">
            <button className="exit-button" type="button" onClick={handleModal}>
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
              value={ammount}
              onChange={this.handleInput}
            />
          </div>
          <div className="input-modal__input-group">
            <input
              className="input-modal__input"
              id="date"
              name="date"
              type="date"
              value={date}
              onChange={this.handleInput}
            />
          </div>
          <div className="input-modal__input-group">
            <input
              className="input-modal__input"
              id="description"
              name="description"
              type="text"
              placeholder="Description..."
              value={description}
              onChange={this.handleInput}
            />
          </div>
          <select
            className="input-modal__input"
            id="category"
            name="category"
            defaultValue="Select a category"
            onChange={this.handleInput}
          >
            <option disabled>Select a category</option>
            {categories.map((category) => (
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
  handleModal: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleNewEntry: PropTypes.func.isRequired,
};

export default InputModal;
