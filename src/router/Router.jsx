import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'  
import Join from '../components/login-signup/Join'
import Signin from '../components/login-signup/Signin'

import React from 'react'

const Router = () => {
  return (
    <div>
      <Router>
   
   
   
    <Routes>
      <Route path='/join' element = {<Join />} />
      <Route path='/signin' element = {<Signin/>} />
     
       
    
      
    </Routes>
    <Footer/>
    
   </Router>
    </div>
  )
}

export default Router



