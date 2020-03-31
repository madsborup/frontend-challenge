import React from 'react';
import history from '../../../../utils/history'
import { Expense } from '../../../../api/types';
import { StyledExpenseTableItem, Receipt, Amount, Value, Currency } from './style';

interface Props {
  expense: Expense;
}

const ExpenseTableItem: React.FC<Props> = (props: Props) => {
  const { id, merchant, date, user, receipts, amount, category } = props.expense;

  return (
    <StyledExpenseTableItem onClick={() => history.push(`/${id}`)}>
      <span>{merchant}</span>
      <span>{date}</span>
      <span>{category}</span>
      <span>{user.first}</span>
      <Receipt>{receipts.length > 0 ? "✓" : ""}</Receipt>
      <Amount>
        <Value>{amount.value}</Value>
        <Currency>{amount.currency}</Currency>
      </Amount>
    </StyledExpenseTableItem>
  );
};

export default ExpenseTableItem;
