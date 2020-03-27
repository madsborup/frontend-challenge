import React from 'react';
import { Route } from 'react-router-dom';
import AppViewWrapper from './components/AppViewWrapper';
import Expenses from './views/Expenses';
import ExpenseEdit from './views/ExpenseEdit'

const Routes: React.FC = () => {
  return (
    <React.Fragment>
      <AppViewWrapper>
        <Route path="/" exact component={Expenses} />
        <Route path="/:expenseId" component={ExpenseEdit} />
      </AppViewWrapper>
    </React.Fragment>
  );
};

export default Routes;
