import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { CardMedia } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(3),
      width: theme.spacing(24),
      height: theme.spacing(24),
    },
  },
}));

const Videos =() => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper variant ='outlined'>
      
      </Paper> 
      <Paper elevation ={6} />
      <Paper elevation ={6} />
      <Paper elevation ={6} />
      <Paper elevation ={6} />
      <Paper elevation ={6} />
    </div>
  );
}

export default Videos 

// need to see how to add video on either card or paper element 
    // this will help for the home page as well. 
    

    