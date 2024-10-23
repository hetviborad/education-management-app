import React from 'react';
import { ExpenseProvider } from './context/ExpenseContext';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Charts from './components/Charts';
import GlobalStyles from './styles/GlobalStyles';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import SearchBar from './components/SearchBar';
import ExpenseTable from './components/ExpenseTable';
import Filter from './components/Filter';
function App() {
  return (
    <ExpenseProvider>
      <GlobalStyles />
      <div className='container mt-4 col-md-10'>
        <h1>Expense Tracker</h1>
        <SearchBar />
        <ExpenseForm />
        <Filter />
        <ExpenseTable />
        <ExpenseList />
        <Charts />
      </div>
    </ExpenseProvider>
  );
}

export default App;
