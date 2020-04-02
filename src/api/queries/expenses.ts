import { Expense } from '../types'
import { readQuery, writeQuery } from '../axios-query'

export interface ExpenseQueryParams {
  limit: number
  offset: number
}

export const getExpenses = (query: ExpenseQueryParams) => {
  return readQuery<{expenses: Expense[]; total: number}>(`/expenses?limit=${query.limit}&offset=${query.offset}`);
}

export const getExpenseById = (id: string) => {
  return readQuery<Expense>(`/expenses/${id}`);
}

export const addComment = (expenseId: string, comment: string) => {
  return writeQuery(`/expenses/${expenseId}`, { comment })
}