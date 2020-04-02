import {
  ActionTypes,
  SetCurrentPageAction,
  SetPageLimitAction,
  SetPageOffsetAction
} from './types';

export const setCurrentPage = (page: number): SetCurrentPageAction => {
  return {
    type: ActionTypes.SET_CURRENT_PAGE,
    currentPage: page
  };
};

export const setPageLimit = (pageLimit: number): SetPageLimitAction => {
  return {
    type: ActionTypes.SET_PAGE_LIMIT,
    pageLimit
  };
};

export const setPageOffset = (offset: number): SetPageOffsetAction => {
  return {
    type: ActionTypes.SET_PAGE_OFFSET,
    offset
  };
};
