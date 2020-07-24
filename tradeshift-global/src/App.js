import React from 'react';
import logo from './logo.svg';
import './App.css';
import './App.sass';
import SearchPage from './containers/search-page';
import SearchInput from './components/search-input';

function App() {
  return (
    <div className="App">
      <SearchPage/>
    </div>
  );
}

export default App;
