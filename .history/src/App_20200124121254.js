import React from 'react';
import Search from './components/Search';


function App() {
  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">
          <Search/>
        </p>
      </div>

      <div className="row justify-content-center">
        Result
      </div>
    </div>
  );
}

export default App;
