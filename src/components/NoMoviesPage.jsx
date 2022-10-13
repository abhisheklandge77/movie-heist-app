import React from 'react';
import './movieHeist.scss';
import noMoviesImage from '../assets/no-movies-groot.png';

function NoMoviesPage() {
    return (
        <div className="no-movies-container">
            <div className="no-movies">
                <img src={noMoviesImage} alt="No Movies Found" />
                <h1>No Movies Found</h1>
            </div>
        </div>
    );
};

export default NoMoviesPage;