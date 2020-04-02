import { Dispatch } from 'redux';
import { Expense } from '../../api/types';
import { getExpenses, getExpenseById, ExpenseQueryParams } from '../../api/queries/expenses';
import {
  ActionTypes,
  FetchExpensesRequestAction,
  FetchExpenseSuccessAction,
  FetchExpensesSuccessAction
} from './types';

export const fetchExpensesRequest = (): FetchExpensesRequestAction => {
  return {
    type: ActionTypes.FETCH_EXPENSES_REQUEST
  };
};

export const fetchExpensesSuccess = (
  expenses: Expense[],
  total: number
): FetchExpensesSuccessAction => {
  return {
    type: ActionTypes.FETCH_EXPENSES_SUCCESS,
    expenses,
    total
  };
};

export const fetchExpenseSuccess = (expense: Expense): FetchExpenseSuccessAction => {
  return {
    type: ActionTypes.FETCH_EXPENSE_SUCCESS,
    expense
  };
};

export const fetchExpenses = (query: ExpenseQueryParams) => async (dispatch: Dispatch) => {
  dispatch(fetchExpensesRequest());

  setTimeout(async () => {
    try {
      const data = await getExpenses(query);

      if (data && data.total > 0) {
        dispatch(fetchExpensesSuccess(data.expenses, data.total));
      }
    } catch (e) {
      console.log('Error fetching expenses: ', e);
    }
  }, 1000);
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
