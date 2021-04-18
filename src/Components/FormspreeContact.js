import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import {Grid} from '@material-ui/core'
import {Typography} from '@material-ui/core'
import Box from '@material-ui/core/Box';

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

function FormspreeContact() {
    const classes =useStyles()
	const [ state, handleSubmit ] = useForm('myylzjjl');
	if (state.succeeded) {
		return <Box p={4} mx='auto' bgcolor="background.paper"  align='center'> 
                <Typography variant ='h4' align='center'>
                    Thank you for Reaching Out! 
                </Typography>
        
                </Box>
	}
	return (
        <Container className= {classes.container} gutterBottom maxWidth ='xs'>

		<form onSubmit={handleSubmit}>
            <Container className = {classes.root}  maxWidth='xs'>
                <Typography variant ='h4' gutterBottom align='center'>Contact </Typography>
            </Container>
            <Grid container spacing ={3}>
            <Grid item xs ={12}>
            <Grid container spacing = {3}>
            
            <Grid item xs={12}>
			<TextField 
                   variant = 'outlined'
                   fullWidth
                   name ='name'
                   label= 'Name' 
                   type ='text' />
			<ValidationError prefix="Name" field="name" errors={state.errors} />
            </Grid>
            <Grid item xs={12}>
			<TextField 
                   variant = 'outlined'
                   fullWidth
                   name ='email'
                   type='text' 
                   label ='Email' />
			<ValidationError prefix="Email" field="email" errors={state.errors} />
            </Grid>
			
            <Grid item xs={12}>
                <TextField 
                    variant = 'outlined'
                    fullWidth
                    name ='message'
                    type='text' 
                    label ='Message'
                    multiline />
            
			<ValidationError prefix="Message" field="message" errors={state.errors} />
			</Grid>
            </Grid>
            </Grid>
            
            
            <Grid item xs ={12}>
            <Button 
                type="submit" 
                disabled={state.submitting}
                color='primary' 
                fullWidth 
                variant='contained'
            > Submit
			</Button>
            </Grid>
            </Grid>
		</form>
        </Container>
	);
}

export default FormspreeContact;
