import React from 'react';
import  {makeStyles} from '@material-ui/core/styles';

import  {CardMedia}  from '@material-ui/core';
import Card from '@material-ui/core/Card';
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
    <Card className={classes.root}>
      <CardMedia  image=  './image/buzzard.svg' alt ='mountains'  />

  
      {/* <img src = './image/buzzard.svg' alt ='mountains'></img> */}

      
     
</Card>
  );
}

export default Videos 

// need to see how to add video on either card or paper element 
    // this will help for the home page as well. 
    

    