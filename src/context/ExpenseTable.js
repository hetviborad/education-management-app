import React, { useContext } from 'react';
import ExpenseContext from '../context/ExpenseContext';

const ExpenseTable = () => {
  const { state } = useContext(ExpenseContext);

  return (
    <div className="container mt-4">
      <h2 className="text-center">Expense List</h2>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Amount</th>
              <th>Description</th>
              <th>Date</th>
              <th>Category</th>
              <th>Payment Method</th>
            </tr>
          </thead>
          <tbody>
            {state.expenses.length > 0 ? (
              state.expenses.map((expense, index) => (
                <tr key={index}>
                  <td>${expense.amount}</td>
                  <td>{expense.description}</td>
                  <td>{new Date(expense.date).toLocaleDateString()}</td>
                  <td>{expense.category}</td>
                  <td>{expense.paymentMethod}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No expenses found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpenseTable;
