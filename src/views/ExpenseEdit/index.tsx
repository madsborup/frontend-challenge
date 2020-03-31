import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { StoreState } from '../../store';
import { Expense } from '../../api/types';
import { fetchExpense } from '../../store/expenses/actions';
import withViewLayout from '../viewHelpers/withViewLayout';
import LoadingView from '../viewHelpers/LoadingView';
import Header from '../../components/Header'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTableItem from '../Expenses/components/ExpenseTableItem';

interface Match {
  expenseId: string;
}

interface Props extends RouteComponentProps<Match> {
  isFetching: boolean;
  currentExpense: Expense;
  fetchExpense: typeof fetchExpense;
}

const ExpenseEdit: React.FC<Props> = (props: Props) => {
  useEffect(() => {
    props.fetchExpense(props.match.params.expenseId);
  }, []);

  return props.currentExpense ? (
    <React.Fragment>
      <Header title={`${props.currentExpense.merchant} ${props.currentExpense.date}`} />
      <ExpenseTableItem expense={props.currentExpense} />
      <ExpenseForm expense={props.currentExpense} />
    </React.Fragment>
  ) : (
    <LoadingView />
  );
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
