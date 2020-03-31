import React from 'react';
import { Route } from 'react-router-dom';
import AppViewWrapper from './components/AppViewWrapper';
import Expenses from './views/Expenses';
import ExpenseEdit from './views/ExpenseEdit';

const Routes: React.FC = () => {
  return (
    <AppViewWrapper>
      <Route path="/" exact component={Expenses} />
      <Route path="/expenses" exact component={Expenses} />
      <Route path="/expenses/:expenseId" component={ExpenseEdit} />
    </AppViewWrapper>
  );
};

export default Routes;
