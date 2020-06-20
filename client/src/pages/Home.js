import React from 'react';

function Home(props) {
    const {state, setState} = useMovieList()

  // useEffect(() => {
  //   fetch(OMDB_API + '&s=' + 'Man')
  //   .then((response) => {
  //     return response.json()
  //   })
  //   .then(({Search}) => {
  //     console.log('Search result:', Search)
  //     setState(prevState => {
  //       return { ...prevState, results: Search }
  //     })
  //   })
  //   .catch((err) => {
  //     console.log('Fetch error:', err);
  //   })
  // }, []);
  
  const handleInput = (e) => {
    let searchQuery = e.target.value;

    setState(prevState => {
      return { ...prevState, searchQuery: searchQuery }
    });

    console.log(state.searchQuery)
  }

  const search = (e) => {
    if (e.key === 'Enter') {
      fetch(OMDB_API + '&s=' + state.searchQuery)
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
    }
  }
    return (
        <div>
            
        </div>
    );
}

export default Home;