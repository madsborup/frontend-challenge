import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { StoreState } from '../../reducers';
import { Expense } from '../../api/types';
import { fetchExpense } from '../../actions/expenses';
import withViewLayout from '../viewHelpers/withViewLayout';
import LoadingView from '../viewHelpers/LoadingView';
import Header from '../../components/Header';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTableItem from '../../components/ExpenseTableItem';

interface Match {
  expenseId: string;
}

interface Props extends RouteComponentProps<Match> {
  isFetching: boolean;
  currentExpense: Expense;
  fetchExpense: typeof fetchExpense;
}

const ExpenseEdit: React.FC<Props> = (props: Props) => {
  const { currentExpense } = props;

  useEffect(() => {
    props.fetchExpense(props.match.params.expenseId);
  }, []);

  if (currentExpense) {
    return (
      <React.Fragment>
        <Header
          title={`${currentExpense.merchant} ${currentExpense.date.slice(
            0,
            currentExpense.date.indexOf('T')
          )}`}
        />
        <ExpenseTableItem expense={currentExpense} />
        <ExpenseForm expense={currentExpense} />
      </React.Fragment>
    );
  }

  return <LoadingView />;
};

const mapStateToProps = ({ expenses }: StoreState) => {
  return {
    isFetching: expenses.isFetching,
    currentExpense: expenses.currentExpense
  };
};

export default compose<React.ComponentType>(
  withViewLayout,
  connect(
    mapStateToProps,
    { fetchExpense }
  )
)(ExpenseEdit);
