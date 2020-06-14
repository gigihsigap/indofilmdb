import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard(props) {
    
    return (
        <div className="movieCard">
            <Link to={`/movie/${props.result.imdbID}`}>
                <img src={props.result.Poster} alt=""/>
                <h3>{props.result.Title}</h3>
            </Link>
            <button>
                Add To Favorites
            </button>
        </div>
    )
}

export default MovieCard;