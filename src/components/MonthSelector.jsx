import React, { Component } from 'react';

class MonthSelector extends Component {
  constructor(props) {
    super(props);
    this.state = { currentMonth: '' };
  }

  componentDidMount() {
    const today = new Date();
    const month = today.getMonth();
    this.setState({
      currentMonth: month,
    });
  }

  render() {
    const { currentMonth } = this.state;

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
      const selectedMonth = months[currentMonth];

      return (
        <div className="month-selector">
          <label htmlFor="monthSelector">
            Select month:
            <select
              name="monthSelector"
              id="monthSelector"
              defaultValue={selectedMonth}
            >
              { months.map((month) => (
                <option value={month} key={month}>{month}</option>
              ))}
            </select>
          </label>
        </div>
      );
    };

    return (
      <MonthInput />
    );
  }
}

export default MonthSelector;
