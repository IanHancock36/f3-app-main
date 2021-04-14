import React,{useState} from 'react'
import Navbar from './Navbar'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
}));



function Contact() {
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = event => {
        event.preventDefault()
        setFirstName(event.target.value)
    }
    return (
        <div>
            <Navbar />
      
        <input type='text'
               label="First Name"
               name= 'firstname'
               value={firstname}
               onChange = {(event)=> setFirstName(event.target.value)}
               /> 
        <input type='text'
               label="Last Name"
               name= 'lastname'
               value={lastname}
               onChange = {(event)=> setLastName(event.target.value)}
            /> 
         <input type='text'
               label="Email"
               name= 'email'
               value={email}
               onChange = {(event)=> setEmail(event.target.value)}
            /> 
         <input type='text'
               label="Last Name"
               name= 'lastname'
               value={lastname}
               onChange = {(event)=> setLastName(event.target.value)}
            /> 

<div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" required />
      </div>


       <button onSubmit={handleSubmit}>
           
       </button>
       
        </div>
    )
}

export default Contact
