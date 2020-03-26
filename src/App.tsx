import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StoreState } from './reducers';
import { fetchExpenses, Expenses } from './actions';

interface Props {
  expenses: Expenses;
  fetchExpenses: Function;
}

class App extends Component<Props> {
  componentDidMount() {
    this.props.fetchExpenses();
  }

  render() {
    return this.props.expenses.isFetching ? (
      <div> Loading... </div>
    ) : (
      <div>{this.props.expenses.items.map(expense => <div>{expense.amount.value}</div>)}</div>
    );
  }
}

const mapStateToProps = ({ expenses }: StoreState) => {
  return {
    expenses
  };
};

export default connect(
  mapStateToProps,
  { fetchExpenses }
)(App);
