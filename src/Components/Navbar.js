    import React from 'react';
    import { Link } from 'react-router-dom';
    import { makeStyles } from '@material-ui/core/styles';
    import AppBar from '@material-ui/core/AppBar';
    import Toolbar from '@material-ui/core/Toolbar';
    import Typography from '@material-ui/core/Typography';
    import Button from '@material-ui/core/Button';
    import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
    
    const useStyles = makeStyles((theme) => ({
      root: {
        flexGrow: 1,
        
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
     
    }));
    
    const Navbar =() => {
      const classes = useStyles();
    
      return (
        
        
        <div className={classes.root}>
          
          
          <AppBar style={{backgroundColor:'black'}} maxWidth='xs' position="static">
              <Toolbar>
              <Button component = {Link} to = "/"color="inherit">
              <HomeOutlinedIcon fontSize='medium' />
              </Button>
              <Typography 
                
                variant="h6" 
                className={classes.title}>
                
              </Typography>
              
              <Button  component = {Link} to ="/about" color="inherit">About</Button>
              <Button  component = {Link} to ="/videos" color="inherit">Videos</Button>
              <Button component =  {Link} to= "/contact" color="inherit">Contact</Button>

            </Toolbar>
          </AppBar>
        </div>
      );
    }
export default Navbar
 


// add Navbar color change to Black or something pleasing and for all buttons as well. 