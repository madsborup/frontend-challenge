import { ExpenseTableData, ExpenseTableActions } from '../actions/expenseTable';
import { ActionTypes } from '../actions/types'

const INITIAL_STATE: ExpenseTableData = {
  pageLimit: 25,
  currentPage: 0
};

const expenses = (state: ExpenseTableData = INITIAL_STATE, action: ExpenseTableActions) => {
  switch (action.type) {
    case ActionTypes.SET_PAGE_LIMIT:
      return {
        ...state,
        pageLimit: action.pageLimit
      };
    case ActionTypes.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      };
    default:
      return state;
  }
};

export default expenses;
