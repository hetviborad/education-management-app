// Filter.js
import React, { useContext, useState, useEffect } from 'react';
import ExpenseContext from '../context/ExpenseContext';

const Filter = () => {
  const { state, filterExpenses } = useContext(ExpenseContext);
  const [filters, setFilters] = useState({
    category: '',
    Date: '',
    paymentMethod: '',
  });

  // Extract unique categories and payment methods for dropdowns
  const categories = Array.from(new Set(state.expenses.map(exp => exp.category)));
  const paymentMethods = Array.from(new Set(state.expenses.map(exp => exp.paymentMethod)));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleFilter = () => {
    filterExpenses(filters);
  };

  return (
    <div className="container mt-4">
      <h2>Filter Expenses</h2>
      <div className="row">
        <div className="col-md-3">
          <select name="category" className="form-control" onChange={handleChange}>
            <option value="">All Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div className="col-md-3">
          <input
            type="date"
            name="Date"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        {/* <div className="col-md-3">
          <input
            type="date"
            name="endDate"
            className="form-control"
            onChange={handleChange}
          />
        </div> */}
        <div className="col-md-3">
          <select name="paymentMethod" className="form-control" onChange={handleChange}>
            <option value="">All Payment Methods</option>
            {paymentMethods.map((method, index) => (
              <option key={index} value={method}>{method}</option>
            ))}
          </select>
        </div>
      </div>
      <button className="btn btn-primary mt-3" onClick={handleFilter}>Apply Filters</button><br></br>
    </div>
  );
};

export default Filter;
