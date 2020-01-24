import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import { GLOBAL } from './config/Constants';


function App() {

  const[query, setQuety] = useState('');

  useEffect(() => {
    fetchApi()
  })

  const fetchApi = async () => {

    const imagen_pp = 30;

    const url = `${GLOBAL.url}?key=${GLOBAL.apiKey}&q=${query}&per_page=${imagen_pp}`;

    

  }

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
