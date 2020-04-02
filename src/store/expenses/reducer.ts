import { ExpensesData, ActionTypes, ExpensesActions } from './types';

const INITIAL_STATE: ExpensesData = {
  isFetching: false,
  expenses: undefined,
  total: 0,
  currentExpense: undefined
};

const expenses = (state: ExpensesData = INITIAL_STATE, action: ExpensesActions) => {
  switch (action.type) {
    case ActionTypes.FETCH_EXPENSES_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case ActionTypes.FETCH_EXPENSES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        expenses: action.expenses,
        total: action.total
      };
    case ActionTypes.FETCH_EXPENSE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        currentExpense: action.expense
      };
    default:
      return state;
  }
};

export default expenses;
