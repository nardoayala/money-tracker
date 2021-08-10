import React from 'react';
import PropTypes from 'prop-types';
import 'Styles/components/BalanceLabel.scss';

const BalanceLabel = (props) => {
  const { totalExpenses, totalIncomes } = props;

  return (
    <div className="balance">
      <div className="balance__label">
        <h4>Incomes</h4>
        <span className="green">{`$ ${totalExpenses}`}</span>
      </div>
      <div className="balance__label">
        <h4>Expenses</h4>
        <span className="red">{`$ ${totalIncomes}`}</span>
      </div>
    </div>
  );
};

BalanceLabel.propTypes = {
  totalExpenses: PropTypes.number.isRequired,
  totalIncomes: PropTypes.number.isRequired,
};

export default BalanceLabel;
