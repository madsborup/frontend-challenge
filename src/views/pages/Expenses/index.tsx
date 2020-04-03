import React from 'react';
import withViewLayout from '../../viewHelpers/withViewLayout';
import Header from '../../../components/Header';
import ExpenseTable from '../../ExpenseTable';

const Expenses: React.FC = () => {
  return (
    <React.Fragment>
      <Header title="Expenses" />
      <ExpenseTable />
    </React.Fragment>
  );
};

export default withViewLayout(Expenses);
