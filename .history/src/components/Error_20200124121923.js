import React from 'react';

function Error({msg}) {
    return (
        <p className="my-3 text-center text-white alert alert-danger">
            {msg}
        </p>
    );
}

export default Error;