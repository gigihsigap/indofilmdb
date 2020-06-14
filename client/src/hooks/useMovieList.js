import { useState, useEffect } from 'react';
const OMDB_API = 'http://www.omdbapi.com/?apikey=bc41706d';

function useMovieList() {
  const [state, setState] = useState({
    searchQuery: '',
    results: [],
    selected: {},
  })

  useEffect(() => {
      fetch(`${OMDB_API}&s=Shadow`)
      .then((response) => {
        return response.json()
      })
      .then(({Search}) => {
        console.log('Search result:', Search)
        setState(prevState => {
          return { ...prevState, results: Search }
        })
      })
      .catch((err) => {
        console.log('Fetch error:', err);
      })
    }, []);
  
  return {state, setState}
} 

export default useMovieList;