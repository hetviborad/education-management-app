import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import ExpenseContext from '../context/ExpenseContext';

const ExpenseForm = () => {
  const { dispatch } = useContext(ExpenseContext);
  const [formData, setFormData] = useState({
    amount: '',
    description: '',
    date: '',
    category: '',
    paymentMethod: 'cash',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.amount || !formData.date) return alert('Please fill out all fields');
    dispatch({ type: 'ADD_EXPENSE', payload: { ...formData, id: Date.now() } });
    setFormData({ amount: '', description: '', date: '', category: '', paymentMethod: 'cash' });
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <input
        className='container mt-3 col-md-10'
        type="number"
        placeholder="Amount"
        value={formData.amount}
        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
        required
      />
      <input
        className='container mt-3 col-md-10'
        type="text"
        placeholder="Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
      />
      <input
        className='container mt-3 col-md-10'
        type="date"
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        required
      />
      <input
        className='container mt-3 col-md-10'
        type="text"
        placeholder="Category"
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
      />
      <select
      className='container mt-3 col-md-10'
        value={formData.paymentMethod}
        onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
      >
        <option value="cash">Cash</option>
        <option value="credit">Credit</option>
      </select>
      <button className="container mt-3 col-md-10 btn btn-primary mt-3" type="submit">Add Expense</button>
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default ExpenseForm;
