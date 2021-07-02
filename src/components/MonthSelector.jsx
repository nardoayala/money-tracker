import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'Styles/components/MonthSelector.scss';

class MonthSelector extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { handleMonthSelector } = this.props;
    handleMonthSelector(event.target.value);
  }

  render() {
    const { month } = this.props;

    const MonthInput = () => {
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
      const today = new Date();
      const currentMonthIndex = today.getMonth();

      return (
        <div className="month-selector">
          <select
            name="monthSelector"
            id="monthSelector"
            defaultValue={month}
            onChange={this.handleChange}
          >
            {months.map((item, index) => {
              if (index <= currentMonthIndex) {
                return (
                  <option value={item} key={item}>
                    {item}
                  </option>
                );
              }
              return null;
            })}
          </select>
        </div>
      );
    };

    return <MonthInput />;
  }
}

MonthSelector.propTypes = {
  month: PropTypes.string.isRequired,
  handleMonthSelector: PropTypes.func.isRequired,
};

export default MonthSelector;
