// SearchBar.js
import React, { useContext } from 'react';
import ExpenseContext from '../context/ExpenseContext';

const SearchBar = () => {
  const { searchExpenses } = useContext(ExpenseContext);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    searchExpenses(searchTerm);
  };

  return (
    <div className="mb-4">
      <input
      className='container mt-4 col-md-10 form-control'
        type="text"
        placeholder="Search by description..."
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
