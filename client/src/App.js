import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import Search from './components/Search';
import Results from './components/Results';
import useMovieList from './hooks/useMovieList';
import MovieDetail from './components/MovieDetail';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import './App.css';

const OMDB_API = 'http://www.omdbapi.com/?apikey=bc41706d';

function App() {
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
    <>
    <Provider store={store}>
      <Router>
        <div className="App">
            <Navbar/>
            <Carousel/>
          <main>
            <Switch>
              <Route path="/" exact>
                <Search handleInput={handleInput} search={search}></Search>
                <Results results={state.results}></Results>
              </Route>
              <Route path="/movie/:id" component={MovieDetail}/>
            </Switch> 
            
          </main>
        
        </div>
      </Router>
    </Provider>
    </>
  );
}

export default App;