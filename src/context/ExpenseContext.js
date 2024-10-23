// ExpenseContext.js
import React, { createContext, useReducer } from 'react';

const ExpenseContext = createContext();

const initialState = {
  expenses: [],
  filteredExpenses: [],
};

const expenseReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return { ...state, expenses: [...state.expenses, action.payload] };
    case 'FILTER_EXPENSES':
      return { ...state, filteredExpenses: action.payload };
    case 'SEARCH_EXPENSES':
      return { ...state, filteredExpenses: action.payload };
    default:
      return state;
  }
};

export const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(expenseReducer, initialState);

  const filterExpenses = (filters) => {
    const { category, startDate, endDate, paymentMethod } = filters;
    let filtered = state.expenses;

    if (category) {
      filtered = filtered.filter(exp => exp.category === category);
    }
    if (paymentMethod) {
      filtered = filtered.filter(exp => exp.paymentMethod === paymentMethod);
    }
    if (startDate) {
      filtered = filtered.filter(exp => new Date(exp.date) >= new Date(startDate));
    }
    if (endDate) {
      filtered = filtered.filter(exp => new Date(exp.date) <= new Date(endDate));
    }

    dispatch({ type: 'FILTER_EXPENSES', payload: filtered });
  };

  const searchExpenses = (searchTerm) => {
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    const searchedExpenses = state.expenses.filter(exp =>
      exp.description.toLowerCase().includes(lowercasedSearchTerm)
    );

    dispatch({ type: 'SEARCH_EXPENSES', payload: searchedExpenses });
  };

  return (
    <ExpenseContext.Provider value={{ state, dispatch, filterExpenses, searchExpenses }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContext;
