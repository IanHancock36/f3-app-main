import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

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
      <Paper elevation ={6} />
      <Paper elevation ={6} />
      <Paper elevation ={6} />
      <Paper elevation ={6} />
      <Paper elevation ={6} />
      <Paper elevation ={6} />
    </div>
  );
}

export default Videos 