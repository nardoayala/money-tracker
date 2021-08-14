import React, { useState, useEffect } from 'react';
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

const getCategories = (categories, type) => {
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
};

const InputModal = (props) => {
  const {
    categories,
    type,
    handleModal,
    handleNewEntry,
  } = props;

  const [category, setCategory] = useState('');
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(formatDate(new Date()));

  useEffect(() => {
    setCategoryOptions(getCategories(categories, type));
  }, [type]);

  const handleInput = (event) => {
    const { name, value } = event.target;
    if (name === 'amount') {
      const valueArray = value.split('.');
      if (valueArray[0].length > 6) {
        return;
      }
      if (valueArray[1]) {
        if (valueArray[1].length > 2) {
          return;
        }
      }
      setAmount(value);
    }
    if (name === 'category') {
      setCategory(value);
    }
    if (name === 'description') {
      setDescription(value);
    }
    if (name === 'date') {
      setDate(formatDate(value));
    }
  };

  const handleSave = () => {
    const newEntry = {
      category,
      amount: Number(amount),
      date,
      type,
      description,
    };
    handleNewEntry(newEntry);
    handleModal();
  };

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
            id="amount"
            name="amount"
            type="number"
            value={amount}
            onChange={handleInput}
          />
        </div>
        <div className="input-modal__input-group">
          <input
            className="input-modal__input"
            id="date"
            name="date"
            type="date"
            value={date}
            onChange={handleInput}
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
            onChange={handleInput}
          />
        </div>
        <select
          className="input-modal__input"
          id="category"
          name="category"
          defaultValue="Select a category"
          onChange={handleInput}
        >
          <option disabled>Select a category</option>
          {categoryOptions.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <button
          className="save-button"
          type="button"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
};

InputModal.propTypes = {
  handleModal: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleNewEntry: PropTypes.func.isRequired,
};

export default InputModal;
