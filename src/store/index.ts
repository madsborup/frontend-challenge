import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { combineReducers } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import { ExpensesData } from './expenses/types'
import { ExpenseTableData } from './expenseTable'
import expenses from './expenses/reducer'
import expenseTable from './expenseTable/reducer'

export interface StoreState {
  expenses: ExpensesData
  expenseTable: ExpenseTableData
}

export const reducers = combineReducers<StoreState> ({
  expenses,
  expenseTable
})

export const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(reduxThunk))
);