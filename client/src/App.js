import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

// Pages //
// import Search from './components/Search';
// import Results from './components/Results';
// import useMovieList from './hooks/useMovieList';
// import MovieDetail from './components/MovieDetail';
// import Navbar from './components/Navbar';
// import Carousel from './components/Carousel';

// const OMDB_API = 'http://www.omdbapi.com/?apikey=bc41706d';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/movie/:id" component={MovieDetail}/>
            <Route path ="*" component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;