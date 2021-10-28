import React, { useState, useEffect, Fragment } from 'react';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
    color: "white",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(4),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));
  

  const Navbar = () => {
    const classes = useStyles();
    const [isAuth, setIsAuth] = useState(false);
  
    useEffect(() => {
      if (localStorage.getItem('token') !== null) {
        setIsAuth(true);
      }
    }, []);

  return (
    <AppBar position="fixed">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Kz-VideoChat
        </Typography>
          <div className={classes.navlinks}>
          <ul>
        {isAuth === true ? (
          <Fragment>
            {' '}
            
            <Link to="/logout" className={classes.link}>
                Logout
            </Link>
          </Fragment>
        ) : (
          <Fragment>
            {' '}
              <Link to="/login" className={classes.link}>
                Login
              </Link>
             <Link to="/signup" className={classes.link}>
                Signup
              </Link>
          </Fragment>
        )}
      </ul>
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;