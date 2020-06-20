import React from 'react';
import MovieCard from './MovieCard';
import NewCard from './NewCard';

function Results(props) {

    /*
    <MovieCard key={result.imdbID} result={result} />
    */
    return (
        <section className="results">
            {props.results.map(result => (
                <MovieCard key={result.imdbID} result={result} />
            ))}
        </section>
    )
}

export default Results;