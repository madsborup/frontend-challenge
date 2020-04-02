import React from 'react';
import { Route } from 'react-router-dom';
import AppViewWrapper from './components/AppViewWrapper';
import Home from './views/pages/Home'
import Expenses from './views/pages/Expenses';
import ExpenseEdit from './views/ExpenseEdit';

const Routes: React.FC = () => {
  return (
    <AppViewWrapper>
      <Route path="/" exact component={Home} />
      <Route path="/expenses" exact component={Expenses} />
      <Route path="/expenses/:expenseId" component={ExpenseEdit} />
    </AppViewWrapper>
  );
};

export default Routes;
