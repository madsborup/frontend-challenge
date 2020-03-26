import { Dispatch } from 'redux'
import axios from 'axios'
import { SERVER_URL } from '../api/constants'
import { ActionTypes } from '.'
import { Expense } from '../../api/data/expenses'

export interface Expenses {
  isFetching: boolean;
  items: Expense[]
}

export interface FetchExpensesRequest {
  type: ActionTypes.FETCH_EXPENSES_REQUEST
}

export interface FetchExpenses {
  type: ActionTypes.FETCH_EXPENSES
}

export interface FetchExpensesSuccess {
  type: ActionTypes.FETCH_EXPENSES_SUCCESS,
  expenses: Expense[]
}

export const fetchExpensesRequest = () => {
  return {
    type: ActionTypes.FETCH_EXPENSES_REQUEST
  };
};

export const fetchExpensesSuccess = (expenses: Expense[]) => {
  return {
    type: ActionTypes.FETCH_EXPENSES_SUCCESS,
    expenses
  };
};



export const fetchExpenses = () => async (dispatch: Dispatch) => {
  dispatch(fetchExpensesRequest())

  try {
    const resp = await axios.get(`${SERVER_URL}/expenses`);

    if (resp.data.expenses) {
      dispatch(fetchExpensesSuccess(resp.data.expenses as Expense[]))
    }
  } catch (e) {
    console.log("Error fetching expenses: ", e)
  }

}