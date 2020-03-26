import { combineReducers } from 'redux';
import { Expenses } from '../actions'
import expenses from './expenses'

export interface StoreState {
  expenses: Expenses
}

export const reducers = combineReducers<StoreState> ({
  expenses
})