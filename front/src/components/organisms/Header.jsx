import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { AppBar, Toolbar, Typography } from '@material-ui/core';
import SportsVolleyballIcon from '@material-ui/icons/SportsVolleyball';

import { BLOG_TITLE } from '../constants';

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
}))

const Header = () => {
    const classes = useStyles();
    return(
      <Fragment>
        <AppBar position='fixed'>
            <Toolbar>
                <SportsVolleyballIcon />
                <Typography variant="h6" color="inherit" noWrap>
                    {BLOG_TITLE}
                </Typography>
            </Toolbar>
        </AppBar>
        <div className={classes.offset}/>
      </Fragment>
    );
}

export default Header;
