import { Expense } from '../../api/types';

export enum ActionTypes {
  FETCH_EXPENSES,
  FETCH_EXPENSES_REQUEST,
  FETCH_EXPENSES_SUCCESS,
  FETCH_EXPENSE_SUCCESS
}

export interface ExpensesData {
  isFetching: boolean;
  expenses: Expense[] | undefined;
  total: number;
  currentExpense: Expense | undefined;
}

export type FetchExpensesRequestAction = {
  type: ActionTypes.FETCH_EXPENSES_REQUEST;
}

export type FetchExpensesAction = {
  type: ActionTypes.FETCH_EXPENSES;
}

export type FetchExpensesSuccessAction = {
  type: ActionTypes.FETCH_EXPENSES_SUCCESS;
  expenses: Expense[];
  total: number;
}

export type FetchExpenseSuccessAction = {
  type: ActionTypes.FETCH_EXPENSE_SUCCESS;
  expense: Expense;
}

export type ExpensesActions =
  | FetchExpensesAction
  | FetchExpensesRequestAction
  | FetchExpensesSuccessAction
  | FetchExpenseSuccessAction;
