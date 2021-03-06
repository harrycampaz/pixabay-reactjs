import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import { GLOBAL } from './config/Constants';
import Axios from 'axios';
import ListImage from './components/ListImage';


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
        <div className="lead text-center">
          <Search  setQuety={setQuety}/>
        </div>
      </div>

      <div className="row justify-content-center">
        <ListImage images={images}/>
      </div>
    </div>
  );
}

export default App;
