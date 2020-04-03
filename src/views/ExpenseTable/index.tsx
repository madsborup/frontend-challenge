import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { ExpensesData, fetchExpenses } from '../../actions/expenses';
import { ExpenseTableData, setPageLimit, setCurrentPage } from '../../actions/expenseTable';
import { StoreState } from '../../reducers';
import withContainer from '../viewHelpers/withContainer';
import LoadingView from '../viewHelpers/LoadingView';
import ExpensesListItem from '../../components/ExpenseTableItem';
import { Select } from '../../components/Select';
import {
  StyledExpenseTable,
  TableHeader,
  TableColumnTitle,
  TableActions,
  PageSelector,
  CurrentPage,
  LeftArrow,
  RightArrow
} from './style';

interface Props {
  expenses: ExpensesData;
  expenseTable: ExpenseTableData;
  fetchExpenses: typeof fetchExpenses;
  setPageLimit: typeof setPageLimit;
  setCurrentPage: typeof setCurrentPage;
}

const ExpenseTable: React.FC<Props> = (props: Props) => {
  const { isFetching, expenses, total } = props.expenses;
  const { pageLimit, currentPage } = props.expenseTable;
  const TableColumnTitles = ['Merchant', 'Date', 'Category', 'User', 'Receipts', 'Amount'];

  const [maxPages, setMaxPages] = useState<number>(0);
  useEffect(() => {
    setMaxPages(total / pageLimit);
  }, [expenses, pageLimit]);

  useEffect(() => {
    props.fetchExpenses({ limit: pageLimit, offset: currentPage * pageLimit });
  }, [currentPage, pageLimit]);

  if (expenses)
    return (
      <React.Fragment>
        <StyledExpenseTable>
          <TableHeader>
            {TableColumnTitles.map(title => (
              <TableColumnTitle>{title}</TableColumnTitle>
            ))}
          </TableHeader>
          {expenses.map(expense => (
            <ExpensesListItem expense={expense} disabled={isFetching} />
          ))}
          <TableActions>
            <Select
              name="pageLimit"
              label="Items per page"
              options={[
                { label: '10', value: 10 },
                { label: '25', value: 25 },
                { label: '50', value: 50 }
              ]}
              value={pageLimit}
              onChange={props.setPageLimit}
            />
            <PageSelector>
              <LeftArrow
                onClick={() => currentPage >= 1 && props.setCurrentPage(currentPage - 1)}
              />
              <CurrentPage>{`${currentPage + 1}/${Math.ceil(maxPages)}`}</CurrentPage>
              <RightArrow
                onClick={() => currentPage < maxPages - 1 && props.setCurrentPage(currentPage + 1)}
              />
            </PageSelector>
          </TableActions>
        </StyledExpenseTable>
      </React.Fragment>
    );

  if (isFetching) {
    return (
      <StyledExpenseTable>
        <LoadingView />
      </StyledExpenseTable>
    );
  }

  //add error view
  return <div>Something went wrong</div>;
};

const mapStateToProps = ({ expenses, expenseTable }: StoreState) => {
  return {
    expenses,
    expenseTable
  };
};

export default compose<React.ComponentType>(
  withContainer,
  connect(
    mapStateToProps,
    { fetchExpenses, setPageLimit, setCurrentPage }
  )
)(ExpenseTable);
