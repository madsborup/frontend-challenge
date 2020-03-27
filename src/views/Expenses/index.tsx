import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { ExpensesData, fetchExpenses } from '../../actions';
import { StoreState } from '../../reducers';
import withViewLayout from '../viewHelpers/withViewLayout';
import Header from '../../components/Header';
import ExpensesTable from './components/ExpensesTable';

interface Props {
  expenses: ExpensesData;
  fetchExpenses: Function;
}

const Expenses: React.FC<Props> = (props: Props) => {
  useEffect(() => {
    props.fetchExpenses();
  }, []);

  return (
    <React.Fragment>
      <Header title="Expenses" />
      <ExpensesTable expenses={props.expenses} />
    </React.Fragment>
  );
};

const mapStateToProps = ({ expenses }: StoreState) => {
  return {
    expenses
  };
};

export default compose<React.ComponentType>(
  withViewLayout,
  connect(
    mapStateToProps,
    { fetchExpenses }
  )
)(Expenses);
