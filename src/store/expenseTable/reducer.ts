import { ExpenseTableData, ActionTypes, ExpenseTableActions } from './types';

const INITIAL_STATE: ExpenseTableData = {
  currentPage: 0,
  pageLimit: 20,
  offset: 0
};

const expenses = (state: ExpenseTableData = INITIAL_STATE, action: ExpenseTableActions) => {
  switch (action.type) {
    case ActionTypes.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      };
    case ActionTypes.SET_PAGE_LIMIT:
      return {
        ...state,
        pageLimit: action.pageLimit
      };
    case ActionTypes.SET_PAGE_OFFSET:
      return {
        ...state,
        offset: action.offset
      };
    default:
      return state;
  }
};

export default expenses;
