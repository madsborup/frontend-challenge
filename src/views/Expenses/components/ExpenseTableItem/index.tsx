import React from 'react';
import { useHistory } from 'react-router-dom'
import { Expense } from '../../actions';
import { StyledExpenseListItem, Receipt, Amount, Value, Currency } from './style';

interface Props {
  expense: Expense;
}

const ExpenseListItem: React.FC<Props> = (props: Props) => {
  const { id, merchant, date, user, receipts, amount, category } = props.expense;
  let history = useHistory()

  return (
    <StyledExpenseListItem onClick={() => history.push(`/${id}`)}>
      <span>{merchant}</span>
      <span>{date}</span>
      <span>{category}</span>
      <span>{user.first}</span>
      <Receipt>{receipts.length > 0 ? "✓" : ""}</Receipt>
      <Amount>
        <Value>{amount.value}</Value>
        <Currency>{amount.currency}</Currency>
      </Amount>
    </StyledExpenseListItem>
  );
};

export default ExpenseListItem;
