import { Expenses, Action, ActionTypes } from "../actions";

const INITIAL_STATE: Expenses = {
  isFetching: false,
  items: []
};

const expenses = (state: Expenses = INITIAL_STATE, action: Action) => {
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
        items: action.expenses
      };
    default:
      return state;
  }
};

export default expenses;
