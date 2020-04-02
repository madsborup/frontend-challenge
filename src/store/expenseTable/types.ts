export enum ActionTypes {
  SET_CURRENT_PAGE,
  SET_PAGE_LIMIT,
  SET_PAGE_OFFSET
}

export interface ExpenseTableData {
  currentPage: number
  pageLimit: number
  offset: number
}

export type SetCurrentPageAction = {
  type: ActionTypes.SET_CURRENT_PAGE,
  currentPage: number
}

export type SetPageLimitAction = {
  type: ActionTypes.SET_PAGE_LIMIT,
  pageLimit: number
}

export type SetPageOffsetAction = {
  type: ActionTypes.SET_PAGE_OFFSET,
  offset: number
}

export type ExpenseTableActions = 
| SetCurrentPageAction
| SetPageLimitAction
| SetPageOffsetAction