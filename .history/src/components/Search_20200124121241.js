import React, { useState } from 'react';

function Search(props) {

    const[query, setQuety] = useState('');

    return (
        <div className="row">
            <div className="form-group col-md-8">
                <input className="form-control form-control-lg" type="text" placeholder="Buscar"/>
            </div>
            <div className="form-group col-md-4">
                <input className="btn btn-lg btn-success" type="submit" value="Buscar"/>
            </div>
        </div>
    );
}

export default Search;