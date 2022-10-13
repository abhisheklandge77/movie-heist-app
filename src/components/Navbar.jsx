import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import movieHeistLogo from "../assets/movie-heist-logo.png";

function Navbar(){
    return(
        <AppBar position="static" className="navbar">
        <div className="movie-heist-logo">
          <img src={movieHeistLogo} alt="Movie-Heist" />
        </div>
        {
          window.location.pathname !== "/favorite-movies" && (
            <div className='my-favorites-btn'>
            <a href='/favorite-movies'>My Favorites</a>
            </div>
          )
        }

      </AppBar>
    );
}

export default Navbar;