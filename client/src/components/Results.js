import React from 'react';
import MovieCard from './MovieCard'

function Results(props) {
    return (
        <section className="results">
            {props.results.map(result => (
                <MovieCard key={result.imdbID} result={result} />
            ))}
        </section>
    )
}

export default Results;