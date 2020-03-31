import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { combineReducers } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import { ExpensesData } from './expenses/types'
import expenses from './expenses/reducer'

export interface StoreState {
  expenses: ExpensesData
}

export const reducers = combineReducers<StoreState> ({
  expenses
})

export const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(reduxThunk))
);