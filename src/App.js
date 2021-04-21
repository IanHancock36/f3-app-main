

import './index.css'
import Home from './Components/Home'
import About from './Components/About'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import StripeContainer from "./Components/Stripe/StripeContainer";
import Contact from './Components/Contact'
import Videos from './Components/Videos'
import {BrowserRouter as Router, Route,  Switch} from 'react-router-dom'
function App() {
  return (
    <div className="App">
    <Router>
    <Navbar />
    <Switch>
      <Route exact path ="/"component={Home}/>
      <Route path ="/about" component = {About} /> 
      <Route path ='/videos' component={Videos} />
      <Route path ="/contact" component = {Contact} /> 
      <StripeContainer /> 


     
    </Switch>
    
    
    <Footer /> 

    </Router>
    <StripeContainer /> 
    </div>
  );
}

export default App;


// #1 build landing page to prove concept
  // add shopify cart 
    // figure out to add prinfult to site 
      // firebase authentication for login for exlusive content
        // how to add subscription to content possibly other page. 


// I NEED 
  // Nav bar 
    //video header or hero 
      // routing
        // container for videos
          // content 
            // footer 
                //social media links
                  

// NEED TO SEARCH INSIDE THIS APP 
  // 



// Need to remember out what .config() is again 
  // What is CORS 
    // What is BODY PARSER 
  
