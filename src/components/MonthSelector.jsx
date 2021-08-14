import React from 'react';
import PropTypes from 'prop-types';
import 'Styles/components/MonthSelector.scss';

const MonthSelector = (props) => {
  const { handleMonthSelector } = props;
  const today = new Date();
  const currentMonthIndex = today.getMonth();
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

  const handleChange = (event) => {
    handleMonthSelector(event.target.value);
  };

  return (
    <div className="month-selector">
      <select
        name="monthSelector"
        id="monthSelector"
        defaultValue={months[currentMonthIndex]}
        onChange={handleChange}
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

MonthSelector.propTypes = {
  handleMonthSelector: PropTypes.func.isRequired,
};

export default MonthSelector;
