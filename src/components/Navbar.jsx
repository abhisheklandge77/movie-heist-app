import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import { Typography } from "@material-ui/core";

function Navbar(){
    return(
        <AppBar position="static" className="navbar">
        <IconButton edge="start" className="menu-icon" color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" color="inherit">
          Movie Heist
        </Typography>
      </AppBar>
    );
}

export default Navbar;