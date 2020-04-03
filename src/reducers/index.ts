import { combineReducers } from 'redux';
import { ExpensesData } from '../actions/expenses'
import { ExpenseTableData } from '../actions/expenseTable'
import expenses from './expenses'
import expenseTable from './expenseTable'

export interface StoreState {
  expenses: ExpensesData
  expenseTable: ExpenseTableData
}

export const reducers = combineReducers<StoreState> ({
  expenses,
  expenseTable
})