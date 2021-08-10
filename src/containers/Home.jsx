import React, { Component } from 'react';
import MonthSelector from 'Components/MonthSelector';
import PieChart from 'Components/PieChart';
import AddButtons from 'Components/AddButtons';
import BalanceLabel from 'Components/BalanceLabel';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: '',
      categories: [],
      data: [],
    };
    this.handleMonthSelector = this.handleMonthSelector.bind(this);
    this.getCurrentMonth = this.getCurrentMonth.bind(this);
    this.handleNewEntry = this.handleNewEntry.bind(this);
  }

  componentDidMount() {
    this.getData();
    this.getCategories();
    this.getCurrentMonth();
  }

  handleMonthSelector(month) {
    this.setState({
      month,
    });
  }

  handleNewEntry(newEntry) {
    const { data } = this.state;
    const {
      type,
      category,
      date,
      amount,
      description,
    } = newEntry;
    const month = new Date(date).getMonth();

    let categoryFound = false;
    if (type === 'expense') {
      const { expenses } = data[month];
      expenses.forEach((expense) => {
        if (expense.category === category) {
          categoryFound = true;
          expense.entries.push({
            date,
            amount,
            description,
          });
        }
      });
      if (!categoryFound) {
        expenses.push({
          category,
          entries: [
            {
              date,
              amount,
              description,
            },
          ],
        });
      }
    }

    if (type === 'income') {
      const { incomes } = data[month];
      incomes.forEach((income) => {
        if (income.category === category) {
          categoryFound = true;
          income.entries.push({
            date,
            amount,
            description,
          });
        }
      });
      if (!categoryFound) {
        incomes.push({
          category,
          entries: [
            {
              date,
              amount,
              description,
            },
          ],
        });
      }
    }

    this.setState({
      data,
    });
    localStorage.setItem('data', JSON.stringify(data));
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

  getCategories() {
    let categories = [];
    if (localStorage.getItem('categories')) {
      categories = JSON.parse(localStorage.getItem('categories'));
    } else {
      categories = [
        {
          type: 'expenses',
          categories: [
            'Bills',
            'Food',
            'House',
            'Services',
            'Technology',
            'Transport',
          ],
        },
        {
          type: 'incomes',
          categories: ['Salary', 'Freelance'],
        },
      ];
      localStorage.setItem('categories', JSON.stringify(categories));
    }
    this.setState({ categories });
  }

  getData() {
    let data = [];
    if (localStorage.getItem('data')) {
      data = JSON.parse(localStorage.getItem('data'));
    } else {
      data = [
        {
          month: 'January',
          expenses: [],
          incomes: [],
        },
        {
          month: 'February',
          expenses: [],
          incomes: [],
        },
        {
          month: 'March',
          expenses: [],
          incomes: [],
        },
        {
          month: 'April',
          expenses: [],
          incomes: [],
        },
        {
          month: 'May',
          expenses: [],
          incomes: [],
        },
        {
          month: 'June',
          expenses: [],
          incomes: [],
        },
        {
          month: 'July',
          expenses: [],
          incomes: [],
        },
        {
          month: 'August',
          expenses: [],
          incomes: [],
        },
        {
          month: 'September',
          expenses: [],
          incomes: [],
        },
        {
          month: 'October',
          expenses: [],
          incomes: [],
        },
        {
          month: 'November',
          expenses: [],
          incomes: [],
        },
        {
          month: 'December',
          expenses: [],
          incomes: [],
        },
      ];
      localStorage.setItem('data', JSON.stringify(data));
    }
    this.setState({ data });
  }

  getTotals() {
    const { data, month } = this.state;
    let totalExpenses = 0;
    let totalIncomes = 0;
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

    if (data.length > 0) {
      const monthIndex = months.indexOf(month);
      const { expenses, incomes } = data[monthIndex];

      if (expenses.length > 0) {
        expenses.forEach((expense) => {
          const { entries } = expense;
          entries.forEach((entry) => {
            totalExpenses += entry.amount;
          });
        });
      }
      if (incomes.length > 0) {
        incomes.forEach((income) => {
          const { entries } = income;
          entries.forEach((entry) => {
            totalIncomes += entry.amount;
          });
        });
      }
    }
    return ({
      totalExpenses,
      totalIncomes,
    });
  }

  render() {
    const { month, categories, data } = this.state;
    const { totalExpenses, totalIncomes } = this.getTotals();
    return (
      <>
        <MonthSelector
          month={month}
          handleMonthSelector={this.handleMonthSelector}
        />
        <BalanceLabel
          totalExpenses={totalExpenses}
          totalIncomes={totalIncomes}
        />
        <PieChart month={month} data={data} />
        <AddButtons
          categories={categories}
          data={data}
          handleNewEntry={this.handleNewEntry}
        />
      </>
    );
  }
}

export default Home;
