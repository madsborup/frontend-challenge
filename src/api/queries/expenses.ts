import { Expense } from '../types'
import { readQuery } from '../axios-query'

export const getExpenses = () => {
  return readQuery<{expenses: Expense[]; total: number}>('/expenses');
}

export const getExpenseById = (id: string) => {
  return readQuery<Expense>(`/expenses/${id}`);
}