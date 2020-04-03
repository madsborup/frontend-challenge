import React from 'react';
import history from '../../utils/history';
import { Expense } from '../../api/types';
import { StyledExpenseTableItem, Label } from './style';

interface Props {
  expense: Expense;
  disabled?: boolean;
}

const ExpenseTableItem: React.FC<Props> = (props: Props) => {
  const { id, merchant, date, user, receipts, amount, category } = props.expense;

  return (
    <StyledExpenseTableItem
      onClick={() => !props.disabled && history.push(`/expenses/${id}`)}
      disabled={props.disabled}
    >
      <Label>{merchant}</Label>
      <Label>{date.slice(0, date.indexOf('T'))}</Label>
      <Label>{category}</Label>
      <Label>{user.first}</Label>
      <Label>{receipts.length > 0 ? '✓' : ''}</Label>
      <Label>{amount.value} {amount.currency}</Label>
    </StyledExpenseTableItem>
  );
};

export default ExpenseTableItem;
