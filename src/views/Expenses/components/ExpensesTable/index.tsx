import React from 'react';
import styled from 'styled-components';
import { ExpensesData } from '../../../../actions';
import withContainer from '../../../viewHelpers/withContainer';
import LoadingView from '../../../viewHelpers/LoadingView';
import ExpensesListItem from '../ExpenseTableItem';
import theme from '../../../../utils/theme';
import { StyledExpensesTable, TableHeader, TableColumnTitle } from './style'

interface Props {
  expenses: ExpensesData;
}

const ExpensesTable: React.FC<Props> = (props: Props) => {
  const TableColumnTitles = ['Merchant', 'Date', 'Category', 'Person', 'Receipts', 'Amount'];

  return props.expenses.isFetching ? (
    <LoadingView />
  ) : (
    <StyledExpensesTable>
      <TableHeader>
        {TableColumnTitles.map(title => (
          <TableColumnTitle>{title}</TableColumnTitle>
        ))}
      </TableHeader>
      {props.expenses.items.map(expense => (
        <ExpensesListItem expense={expense} />
      ))}
    </StyledExpensesTable>
  );
};

export default withContainer(ExpensesTable);
