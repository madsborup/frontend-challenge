import { Expense } from '../types'
import { readQuery, writeQuery } from '../axios-query'

export const getExpenses = () => {
  return readQuery<{expenses: Expense[]; total: number}>('/expenses');
}

export const getExpenseById = (id: string) => {
  return readQuery<Expense>(`/expenses/${id}`);
}

export const addComment = (expenseId: string, comment: string) => {
  return writeQuery(`/expenses/${expenseId}`, { comment })
}