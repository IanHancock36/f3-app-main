import React,{useState} from 'react'
import Navbar from './Navbar'
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import { Container } from '@material-ui/core';
import {Grid} from '@material-ui/core'
import {Typography} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
  text:{
    height: '100%',
  },
  root:{
    width: '100%',
    maxWidth: 500,
    justifyContent:'center'
  }
}));



const Contact = () => {
    const classes = useStyles()
    const [firstname, setFirstName] = useState('Name')
    const [lastname, setLastName] = useState('Last Name')
    const [email, setEmail] = useState('Email')
    const [message, setMessage] = useState('What do you want to tell us?')

    const handleSubmit = event => {
        event.preventDefault()
        setFirstName(event.target.value)
    }

        const handleChange = (event) => {
            setMessage(event.target.value);
          }
    
    return (
      <Container className={classes.container}  maxWidth='xl'>
        
        <form>
          <div className={classes.root}>
         <Typography variant ='h4' component='h4' gutterBottom justifyContent='center'>Contact Us </Typography>
         </div>
        <Grid container spacing ={3}>
          <Grid item xs ={12}>
          <Grid container spacing ={3}>
         <Grid item xs={12}>
         <TextField 
                   variant = 'outlined'
                   fullWidth
                   name ='firstname'
                   label= 'First Name' 
                   type ='text' 
                   value={firstname} 
                   onChange={handleChange}/>
       
        </Grid>
     
      
     <Grid item xs={12}>
     <TextField 
                   variant ='outlined'
                   fullWidth
                   label ='Last Name'
                   name ='lastname'
                   type ='text'
                   value ={lastname} 
                   onChange={handleChange}/>
     
      </Grid>
      
      <Grid item xs ={12}>
      <TextField 
                   variant = 'outlined'
                   fullWidth
                   name ='email'
                   type='text' 
                   label ='Email'
                   value ={email} 
                   onChange={handleChange} />
     
      </Grid>

        
      <Grid item xs ={12}>
      <TextField
                   variant = 'outlined'
                   fullWidth
                   name ='message'
                   type='text' 
                   label ='Message'
                   value ={message} 
                   onChange={handleChange} />
     
      
        </Grid>
        </Grid>
        </Grid>
        
        <Grid item xs ={12}>
        <Button  color='primary' 
                fullWidth type='submit'
                variant='contained' 
                onChange={handleSubmit} >Submit
        </Button>
      </Grid>
      
      </Grid>
      </form>

      </Container>
    )
}

export default Contact

// Contact form
  // Figure out why it is not responsive anymore. 
    // as test removed contact from from site. now site is not responsive still
      // this must be the site or nav bar not being responsive 

  // Message Box 
  // need to figure how to resize it for larger text field.


