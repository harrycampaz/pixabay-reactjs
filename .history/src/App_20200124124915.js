import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import { GLOBAL } from './config/Constants';
import Axios from 'axios';


function App() {

  const[query, setQuety] = useState('');

  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchApi()
  }, [query])

  const fetchApi = async () => {

    const imagen_pp = 30;

    const url = `${GLOBAL.url}?key=${GLOBAL.apiKey}&q=${query}&per_page=${imagen_pp}`;

    const result = await Axios.get(url);

    setImages(result.data.hits)
    console.log(result);
    

    

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
