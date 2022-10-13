import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './movieHeist.scss';
import NoMoviesPage from './NoMoviesPage';

function FavoriteMovies({ handleAddFavorite, handleRemoveFavorite, refreshFavoritesPage }) {
    const [favoriteMoviesList, setFavoriteMoviesList] = useState([]);

    useEffect(() => {
        const favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
        setFavoriteMoviesList(favoriteMovies);
    }, [refreshFavoritesPage]);

    return (
        <div className="favorite-movies">
            <div className="back-link">
                <a href='/'>
                    <ArrowBackIcon />
                    <span>Back</span>
                </a>
            </div>
            <h2 className="favorite-movies-header">My Favorites</h2>
            <div className="movies-container">
                {
                    favoriteMoviesList.length ? (
                        favoriteMoviesList.map(movie => {
                            return (
                                <div className="card-container" key={movie.id}>
                                    <MovieCard movie={movie} handleAddFavorite={handleAddFavorite} handleRemoveFavorite={handleRemoveFavorite} />
                                </div>
                            )
                        })
                    ) : <NoMoviesPage />
                }
            </div>
        </div>
    );
};

export default FavoriteMovies;