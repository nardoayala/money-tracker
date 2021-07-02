import React, { Component } from 'react';
import MonthSelector from 'Components/MonthSelector';
import PieChart from 'Components/PieChart';
import AddButtons from 'Components/AddButtons';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { month: '' };
    this.handleMonthSelector = this.handleMonthSelector.bind(this);
    this.getCurrentMonth = this.getCurrentMonth.bind(this);
  }

  componentDidMount() {
    this.getCurrentMonth();
  }

  handleMonthSelector(month) {
    this.setState({
      month,
    });
  }

  getCurrentMonth() {
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
    const month = today.getMonth();
    this.setState({
      month: months[month],
    });
  }

  render() {
    const { month } = this.state;
    return (
      <>
        <MonthSelector month={month} handleMonthSelector={this.handleMonthSelector} />
        <PieChart month={month} />
        <AddButtons />
      </>
    );
  }
}

export default Home;
