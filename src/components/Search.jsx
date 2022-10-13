import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import { useEffect } from "react";

function Search(props) {
    const {onFieldChange, searchText, getSearchedMovies} = props;

  useEffect(() => {
    // debouncing used for preventing unnecessary api calls. Here it waits for 300ms when user type something and then make an api call
    const timer = window.setTimeout(() => {
      getSearchedMovies();
    }, 300);

    return () => window.clearTimeout(timer);
  }, [searchText, getSearchedMovies]);
    
  return (
    <div className="search">
        <TextField id="outlined-basic" className="text-input" autoComplete="off" onChange={(e) => onFieldChange(e.target.value)} placeholder="Search Here..." variant="outlined" />
        <Button variant="contained" size="large" className="search-btn" onClick={() => getSearchedMovies()}>Search</Button>
    </div>
  );
}

export default Search;
