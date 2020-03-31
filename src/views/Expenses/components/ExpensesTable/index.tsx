import React from 'react';
import { ExpensesData } from '../../../../store/expenses';
import withContainer from '../../../viewHelpers/withContainer';
import LoadingView from '../../../viewHelpers/LoadingView';
import ExpensesListItem from '../ExpenseTableItem';
import { StyledExpensesTable, TableHeader, TableColumnTitle } from './style'

interface Props {
  expenses: ExpensesData;
}

const ExpensesTable: React.FC<Props> = (props: Props) => {
  const TableColumnTitles = ['Merchant', 'Date', 'Category', 'User', 'Receipts', 'Amount'];
  const { isFetching, expenses } = props.expenses;

  return isFetching ? (
    <LoadingView />
  ) : (
    <StyledExpensesTable>
      <TableHeader>
        {TableColumnTitles.map(title => (
          <TableColumnTitle>{title}</TableColumnTitle>
        ))}
      </TableHeader>
      {expenses.map(expense => (
        <ExpensesListItem expense={expense} />
      ))}
    </StyledExpensesTable>
  );
};

export default withContainer(ExpensesTable);
