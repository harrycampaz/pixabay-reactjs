import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
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
  }, [query, currentPage])

  const fetchApi = async () => {

    const imagen_pp = 30;

    const url = `${GLOBAL.url}?key=${GLOBAL.apiKey}&q=${query}&per_page=${imagen_pp}&page=${currentPage}`;

    const result = await Axios.get(url);

    setTotalPages(Math.ceil(result.data.totalHits / imagen_pp));

    setImages(result.data.hits)

    //MOver arriba

    const jumbotron = document.querySelector('.jumbotron');
    jumbotron.scrollIntoView({ behavior:'smooth', block:'end'});

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

        {(currentPage === 1) ? null : <button onClick={previousPage} type="button" className="btn btn-info mr-1">&laquo; Anterior</button>}

        {(currentPage === totalPages) ? null : <button onClick={nextPage} type="button" className="btn btn-info mr-1">Siguiente &raquo;</button>}

      </div>
    </div>
  );
}

export default App;
