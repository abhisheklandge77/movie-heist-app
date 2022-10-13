import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import FavoriteMovies from "./components/FavoriteMovies";
import MovieHeist from './components/MovieHeist';
import Navbar from "./components/Navbar";
import './components/movieHeist.scss';
import Footer from "./components/Footer";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [movieName, setMovieName] = useState("");
  const [refreshFavoritesPage, setRefreshFavoritesPage] = useState(false);

  const favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies')) || [];

  const handleAddFavorite = (movie) => {
    movie.isFavorite = true;
    if (favoriteMovies.length) {
      const isMoviePresent = favoriteMovies.find(m => m.title === movie.title && m.id === movie.id);
      if (!isMoviePresent) {
        favoriteMovies.push(movie);
      }
    } else {
      favoriteMovies.push(movie);
    }

    localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));

    const mappedMovieList = movieList.map(l => {
      if (l.title === movie.title && l.id === movie.id) {
        l.isFavorite = true;
      }
      return l;
    });

    setMovieList(mappedMovieList);
  }

  const handleRemoveFavorite = (movie) => {
    if (window.confirm(`Are you sure you want to remove ${movie.title} from favorites ?`)) {
      const filteredFavoriteMovies = favoriteMovies.filter(m => m.id !== movie.id);
      localStorage.setItem('favoriteMovies', JSON.stringify(filteredFavoriteMovies));
      setRefreshFavoritesPage(!refreshFavoritesPage);

      const mappedMovieList = movieList.map(l => {
        if (l.title === movie.title && l.id === movie.id) {
          l.isFavorite = false;
        }
        return l;
      });

      setMovieList(mappedMovieList);
    }
  }

  return (
    <div className="container">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/"
            element={<MovieHeist
              movieList={movieList}
              setMovieList={setMovieList}
              movieName={movieName}
              setMovieName={setMovieName}
              handleAddFavorite={handleAddFavorite}
              handleRemoveFavorite={handleRemoveFavorite}
            />}
          />
          <Route path="/favorite-movies"
            element={<FavoriteMovies
              handleAddFavorite={handleAddFavorite}
              handleRemoveFavorite={handleRemoveFavorite}
              refreshFavoritesPage={refreshFavoritesPage} 
            />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
