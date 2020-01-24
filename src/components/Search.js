import React, { useState } from 'react';
import Error from './Error';

function Search({setQuety}) {

    const[q, setQ] = useState('');

    const [error, setError] = useState(false);

    const searchImage = e => {
        e.preventDefault();

        if(q === '') {

            setError(true)
            return; 
        }

        setError(false);
        setQuety(q)


    }
    return (

        <form onSubmit = {searchImage}>
            <div className="row">
            <div className="form-group col-md-8">
                <input className="form-control form-control-lg" type="text" placeholder="Buscar"
                onChange={e => setQ(e.target.value) }
                />
            </div>
            <div className="form-group col-md-4">
                <input className="btn btn-lg btn-success btn-block"  type="submit" value="Buscar"/>
            </div>
        </div>

{(error) ? <Error msg="Agrega un termino"/> : null}

        </form>
    );
}

export default Search; 