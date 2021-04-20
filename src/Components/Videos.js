import React from 'react';
import  {makeStyles} from '@material-ui/core/styles';
import ReactPlayer from 'react-player'
import { VideoCard } from 'material-ui-player'
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid'
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      margin: 10
      
    },
    media: {
      height: 140,
    },
  });


const Videos =() => {
  const classes = useStyles();

  return (
 <Grid maxWidth='xs' container spacing={3}  >
 <Grid item xs={12} sm={6}>
 
 <Card variant="outlined" className={classes.root}>
 
 <CardMedia
    component='iframe'
    title='test'
    src='https://www.youtube.com/embed/VIDEO_ID'
  />
  <CardContent>
          <Typography gutterBottom variant="h5" component="h2" align='center'>
            Self Defense
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Brazillian Ju Jitsu offers Self defense like no other sample text here.
          </Typography>
        </CardContent>
  
   </Card>
 </Grid>
 
 <Grid item xs={12} sm={6}>
 <Card variant="outlined" className={classes.root}>
 <CardMedia
    component='iframe'
    title='test'
    src='https://www.youtube.com/embed/VIDEO_ID'
    />
    <CardContent>
          <Typography gutterBottom variant="h5" component="h2" align='center'>
            Self Defense
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Brazillian Ju Jitsu offers Self defense like no other sample text here.
          </Typography>
    </CardContent>
    
  </Card>
 </Grid>
 <Grid item xs={12} sm={6}>
 
 <Card variant="outlined" className={classes.root}>
 <CardMedia
    component='iframe'
    title='test'
    src='https://www.youtube.com/embed/VIDEO_ID'
    />
    <CardContent>
          <Typography gutterBottom variant="h5" component="h2" align='center'>
            Self Defense
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Brazillian Ju Jitsu offers Self defense like no other sample text here.
          </Typography>
    </CardContent>
  </Card>
 </Grid>
 <Grid item xs={12} sm={6}>
 
 <Card  variant="outlined" className={classes.root}>
 <CardMedia
    component='iframe'
    title='test'
    src='https://www.youtube.com/embed/VIDEO_ID'
    />
    <CardContent>
          <Typography gutterBottom variant="h5" component="h2" align='center'>
            Self Defense
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Brazillian Ju Jitsu offers Self defense like no other sample text here.
          </Typography>
    </CardContent>
  </Card>
 </Grid>
 
 </Grid>

 
  
 

  
  );
}
{/* <ReactPlayer controls width='480px' heigh='240px' url ='https://www.youtube.com/watch?v=g1_YXhCL1Sk' playing />  */}
export default Videos 

// need to see how to add video on either card or paper element 
    // this will help for the home page as well. 
    

    