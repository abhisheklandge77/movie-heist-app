import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

function Search(props) {
    const {onFieldChange,getSearchedMovies} = props;
  return (
    <div className="search">
      <form>
        <TextField id="outlined-basic" className="text-input" autoComplete onChange={(e) => onFieldChange(e.target.value)} placeholder="Search Here..." variant="outlined" />
        <Button variant="contained" size="large" className="search-btn" onClick={() => getSearchedMovies()}>Search</Button>
      </form>
    </div>
  );
}

export default Search;
