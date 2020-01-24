import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import { GLOBAL } from './config/Constants';
import Axios from 'axios';
import ListImage from './components/ListImage';


function App() {

  const [query, setQuety] = useState('');

  const [images, setImages] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (query === '') return;
    fetchApi()
  }, [query])

  const fetchApi = async () => {

    const imagen_pp = 30;

    const url = `${GLOBAL.url}?key=${GLOBAL.apiKey}&q=${query}&per_page=${imagen_pp}`;

    const result = await Axios.get(url);

    setTotalPages(Math.ceil(result.data.totalHits / imagen_pp));

    setImages(result.data.hits)

  }

  const nextPage = () => {

    let newCurrentPage = currentPage + 1;

    setCurrentPage(newCurrentPage);
    console.log('Next');
  }

  const previousPage = () => {

    let newCurrentPage = currentPage - 1;

    setCurrentPage(newCurrentPage);

    console.log('Previous');
  }

  return (
    <div className="container">
      <div className="jumbotron">
        <div className="lead text-center">
          <Search setQuety={setQuety} />
        </div>
      </div>

      <div className="row justify-content-center">
        <ListImage images={images} />

        <button onClick={nextPage} type="button" className="btn btn-info mr-1">&laquo; Anterior</button>

        <button onClick={previousPage} type="button" className="btn btn-info mr-1">Siguiente &raquo;</button>

      </div>
    </div>
  );
}

export default App;
