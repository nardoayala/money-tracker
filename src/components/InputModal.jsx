import React, { Component } from 'react';
import 'Styles/components/InputModal.scss';

class InputModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: '',
      ammount: '',
      type: '',
    };

    this.handleAmmountInput = this.handleAmmountInput.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }

  handleAmmountInput(event) {
    const { value } = event.target;
    this.setState({ ammount: value });
  }

  handleCategoryChange(event) {
    const { value } = event.target;
    this.setState({ category: value });
  }

  handleSave = () => {
    const { category, ammount, type } = this.state;
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

    const { handleClick } = this.props;

    return (
      <div className="input-modal">
        <button type="button" onClick={handleClick}>⇽</button>
        <label htmlFor="ammount">
          Ammount
          <input
            id="ammount"
            name="ammount"
            type="number"
            onChange={this.handleAmmountInput}
          />
        </label>
        <label htmlFor="categorySelector">
          Category
          <select
            name="categorySelector"
            id="categorySelector"
            onChange={this.handleCategoryChange}
          >
            {expensesCategories.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <button type="button" onClick={this.handleSave}>
          Save
        </button>
      </div>
    );
  }
}

export default InputModal;
