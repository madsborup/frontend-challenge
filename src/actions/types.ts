import {
  FetchExpensesRequest,
  FetchExpenses,
  FetchExpensesSuccess
} from "./expenses";

export enum ActionTypes {
  FETCH_EXPENSES_REQUEST,
  FETCH_EXPENSES,
  FETCH_EXPENSES_SUCCESS
}

export type Action =
  | FetchExpenses
  | FetchExpensesRequest
  | FetchExpensesSuccess;
