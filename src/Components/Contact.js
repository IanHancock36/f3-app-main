import React,{useState} from 'react'
import Navbar from './Navbar'
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
}));



function Contact() {
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
            setFirstName(event.target.value);
          }
    
    return (
        <div>
           

            <FormControl variant="outlined">
        <InputLabel htmlFor="component-outlined">First Name</InputLabel>
        <OutlinedInput id="component-outlined" value={firstname} onChange={handleChange} label="FirstName" />
      </FormControl>

      <FormControl variant="outlined">
        <InputLabel htmlFor="component-outlined">Last Name</InputLabel>
        <OutlinedInput id="component-outlined" value={lastname} onChange={handleChange} label="LastName" />
      </FormControl>

      <FormControl variant="outlined">
        <InputLabel htmlFor="component-outlined">Email</InputLabel>
        <OutlinedInput id="component-outlined" value={email} onChange={handleChange} label="Email" />
      </FormControl>
      
      
        <TextField
          id="filled-helperText"
          label="Please Reach Out"
          defaultValue="Message"
          onChangeCapture={handleChange}
          variant="outlined"
        />

        <Button variant='outlined' color='primary'>Submit</Button>
      
      
        
        
        
        </div>  


    )
}

export default Contact
