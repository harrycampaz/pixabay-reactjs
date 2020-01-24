import React, { useState } from 'react';
import Search from './components/Search';


function App() {

  const[query, setQuety] = useState('');

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">
          <Search  setQuety={setQuety}/>
        </p>
      </div>

      <div className="row justify-content-center">
        Result
      </div>
    </div>
  );
}

export default App;
