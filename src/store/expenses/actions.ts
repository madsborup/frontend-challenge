import { Dispatch } from 'redux';
import { Expense } from '../../api/types';
import { getExpenses, getExpenseById } from '../../api/queries/expenses';
import {
  ActionTypes,
  ExpensesActions,
  FetchExpensesRequestAction,
  FetchExpenseSuccessAction,
  FetchExpensesSuccessAction
} from './types';

export const fetchExpensesRequest = (): FetchExpensesRequestAction => {
  return {
    type: ActionTypes.FETCH_EXPENSES_REQUEST
  };
};

export const fetchExpensesSuccess = (expenses: Expense[]): FetchExpensesSuccessAction => {
  return {
    type: ActionTypes.FETCH_EXPENSES_SUCCESS,
    expenses
  };
};

export const fetchExpenseSuccess = (expense: Expense): FetchExpenseSuccessAction => {
  return {
    type: ActionTypes.FETCH_EXPENSE_SUCCESS,
    expense
  };
};

export const fetchExpenses = () => async (dispatch: Dispatch<ExpensesActions>) => {
  dispatch(fetchExpensesRequest());

  try {
    const data = await getExpenses();

    if (data && data.total > 0) {
      dispatch(fetchExpensesSuccess(data.expenses));
    }
  } catch (e) {
    console.log('Error fetching expenses: ', e);
  }
};

export const fetchExpense = (id: string) => async (dispatch: Dispatch) => {
  dispatch(fetchExpensesRequest());
  try {
    const expense = await getExpenseById(id);

    if (expense) {
      dispatch(fetchExpenseSuccess(expense));
    }
  } catch (e) {
    console.log('Error fetching expense: ', e);
  }
};
