import React from 'react';
import logo from './logo.svg';
import './App.css';
import Searcher from './Searcher';


function App() {
  const [searchValue, setSearchValue] = React.useState(" ");
  return (
    <div className="App">
      <Searcher
      searchValue={searchValue}
      setSearchValue={setSearchValue}
       />
    
    </div>
  );
}

export default App;
