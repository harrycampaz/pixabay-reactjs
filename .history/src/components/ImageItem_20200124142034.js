import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faHeart } from '@fortawesome/free-solid-svg-icons'

const ImageItem = ({ imageItem }) => {

    const { largeImageURL, likes, previewURL, tags, views } = imageItem;

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">

                <img src={previewURL} alt={tags} className="card-img-top" />

                <div className="card-body">
                    <span className="card-text">
                    <FontAwesomeIcon icon={faHeart} size="lg" /> : {likes}
                    </span>
                    <span className="card-text float-right">
                    <FontAwesomeIcon icon={faEye} /> : {views}
                    </span>
                </div>

                <div className="card-footer">
                    <a href={largeImageURL} target="_blank" rel="noopener noreferrer" className="btn btn-danger btn-block">Ver Imagen</a>
                </div>
            </div>
        </div>
    )
};

export default ImageItem;