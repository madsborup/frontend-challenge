import { Dispatch } from 'redux';
import axios from 'axios';
import faker from 'faker';
import { SERVER_URL } from '../api/constants';
import { ActionTypes } from '.';

export interface Expense {
  id: string;
  amount: {
    value: string;
    currency: string;
  };
  date: string;
  merchant: string;
  receipts: any[];
  comment: string;
  category: string;
  user: {
    first: string;
    last: string;
    email: string;
  };
}

export interface ExpensesData {
  isFetching: boolean;
  items: Expense[];
}

export interface FetchExpensesRequest {
  type: ActionTypes.FETCH_EXPENSES_REQUEST;
}

export interface FetchExpenses {
  type: ActionTypes.FETCH_EXPENSES;
}

export interface FetchExpensesSuccess {
  type: ActionTypes.FETCH_EXPENSES_SUCCESS;
  expenses: Expense[];
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
  dispatch(fetchExpensesRequest());

  await new Promise(resolve => {
    setTimeout(resolve, 1000)
  })
  let i: number;
  let expenses: Expense[] = [];

  for (i = 0; i < 25; i++) {
    expenses.push({
      id: faker.random.uuid(),
      amount: { value: faker.finance.amount(), currency: faker.finance.currencyCode()},
      date: "24/7/2017",
      merchant: 'Bilka',
      comment: '',
      receipts: [''],
      category: 'category',
      user: {
        first: faker.name.firstName(),
        last: faker.name.lastName(),
        email: faker.internet.email()
      }
    });
  }
  dispatch(fetchExpensesSuccess(expenses))

  // try {
  //   const resp = await axios.get(`${SERVER_URL}/expenses`);

  //   if (resp.data.expenses) {
  //     dispatch(fetchExpensesSuccess(resp.data.expenses as Expense[]));
  //   }
  // } catch (e) {
  //   console.log('Error fetching expenses: ', e);
  // }
};
