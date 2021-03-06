import React, { useState } from 'react';

function Search(props) {

    const[query, setQuety] = useState('');

    const [error, setError] = useState(false);

    const searchImage = e => {
        e.preventDefault();

        if(query === '') {

            setError(true)
            return; 
        }

    }
    return (

        <form onSubmit = {searchImage}>
            <div className="row">
            <div className="form-group col-md-8">
                <input className="form-control form-control-lg" type="text" placeholder="Buscar"
                onChange={e => setQuety(e.target.value) }
                />
            </div>
            <div className="form-group col-md-4">
                <input className="btn btn-lg btn-success btn-block"  type="submit" value="Buscar"/>
            </div>
        </div>
        </form>
    );
}

export default Search; 