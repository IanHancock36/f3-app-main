import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import BottomNavigation from '@material-ui/core/BottomNavigation';



const useStyles = makeStyles((theme) => ({
    footer: {
      backgroundColor:theme.palette.background.paper,
      marginTop: theme.spacing(8),
      padding: theme.spacing(3, 0),
      
    },
  }));

function Footer() {
    const classes = useStyles()
      return (
        <BottomNavigation className ={classes.footer} maxWidth='xs' position="static" >
        <Button  target='blank' href="https://www.instagram.com/" color="inherit"> <InstagramIcon /> </Button>
        <Button target ='blank' href = "https://www.facebook.com/" color ='inherit'><FacebookIcon /> </Button>
        </BottomNavigation>

      )
  }
  
  export default Footer
  