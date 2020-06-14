import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function MovieDetail({ match }) {
    const [movie, setMovie] = useState({})
    const history = useHistory()

    useEffect(() => {
        fetchMovie();
        console.log('ID:', match)
    })

    const fetchMovie = async () => {
        const fetchMovie = await fetch(
            `http://www.omdbapi.com/?apikey=bc41706d&i=${match.params.id}&plot=full`
        );
        const movie = await fetchMovie.json()
        setMovie(movie);
        console.log('Movie:', movie);
    };

    const goToHome = () => {
        history.push('/')
    }

    return (
        <div>
            <h2>{movie.Title} ({movie.Year})</h2>
            <img src={movie.Poster} alt="" />
            <p>Plot: {movie.Plot}</p>
            <p>Released: {movie.Released}</p>
            <p>Duration: {movie.Runtime}</p>
            <p>Genre: {movie.Genre}</p>
            <p>Director: {movie.Director}</p>
            <p>Writer: {movie.Writer}</p>
            <p>Actors: {movie.Actors}</p>
            <p>iMDB Rating: {movie.imdbRating} ({movie.imdbVotes} Votes)</p>
            <button onClick={goToHome}>Go Back</button>
        </div>
    )
}

export default MovieDetail;