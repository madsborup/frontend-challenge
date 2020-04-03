import {
  ActionTypes,
} from './types';

export interface ExpenseTableData {
  pageLimit: number
  currentPage: number
}

export type ExpenseTableActions = 
| ReturnType<typeof setPageLimit>
| ReturnType<typeof setCurrentPage>

export const setPageLimit = (pageLimit: number) => {
  return {
    type: ActionTypes.SET_PAGE_LIMIT as typeof ActionTypes.SET_PAGE_LIMIT,
    pageLimit
  };
};

export const setCurrentPage = (currentPage: number) => {
  return {
    type: ActionTypes.SET_CURRENT_PAGE as typeof ActionTypes.SET_CURRENT_PAGE,
    currentPage
  };
};
