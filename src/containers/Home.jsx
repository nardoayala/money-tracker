import React, { useState, useEffect } from 'react';
import MonthSelector from 'Components/MonthSelector';
import PieChart from 'Components/PieChart';
import AddButtons from 'Components/AddButtons';
import BalanceLabel from 'Components/BalanceLabel';

const getCurrentMonth = () => {
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
  const monthIndex = today.getMonth();
  return months[monthIndex];
};

const getCategories = () => {
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
  return categories;
};

const getData = () => {
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
  return data;
};

const Home = () => {
  const [month, setMonth] = useState('');
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    setMonth(getCurrentMonth());
    setCategories(getCategories());
    setData(getData());
  }, []);

  const handleMonthSelector = (selectorMonth) => {
    setMonth(selectorMonth);
  };

  const handleNewEntry = (newEntry) => {
    const {
      type,
      category,
      date,
      amount,
      description,
    } = newEntry;
    const currentMonthIndex = new Date(date).getMonth();

    let categoryFound = false;
    if (type === 'expense') {
      const { expenses } = data[currentMonthIndex];
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
      const { incomes } = data[currentMonthIndex];
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
    const newData = [...data];
    setData(newData);
    localStorage.setItem('data', JSON.stringify(data));
  };

  const getTotals = () => {
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
    return {
      totalExpenses,
      totalIncomes,
    };
  };

  const { totalExpenses, totalIncomes } = getTotals();
  return (
    <>
      <MonthSelector handleMonthSelector={handleMonthSelector} />
      <BalanceLabel totalExpenses={totalExpenses} totalIncomes={totalIncomes} />
      <PieChart month={month} data={data} />
      <AddButtons
        categories={categories}
        data={data}
        handleNewEntry={handleNewEntry}
      />
    </>
  );
};

export default Home;
