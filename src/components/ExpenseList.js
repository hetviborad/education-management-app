import React, { useContext, useState } from 'react';
import ExpenseContext from '../context/ExpenseContext';

const ExpenseList = () => {
  const { state } = useContext(ExpenseContext);
  const [sortBy, setSortBy] = useState('date');

  const sortedExpenses = [...state.expenses].sort((a, b) => {
    if (sortBy === 'amount') return b.amount - a.amount;
    if (sortBy === 'date') return new Date(b.date) - new Date(a.date);
    return a.category.localeCompare(b.category);
  });

  return (
    <div>
      {/* <div>
        <label>Sort by:</label>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
          <option value="category">Category</option>
        </select>
      </div> */}
      {/* <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Description</th>
            <th>Category</th>
            <th>Payment Method</th>
          </tr>
        </thead>
        <tbody>
          {sortedExpenses.map(exp => (
            <tr key={exp.id}>
              <td>{exp.date}</td>
              <td>{exp.amount}</td>
              <td>{exp.description}</td>
              <td>{exp.category}</td>
              <td>{exp.paymentMethod}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default ExpenseList;
