import React from 'react'
import { useState } from 'react'
import '../../App.css'  
import Join from '../login-signup/Join' 
import Signin from '../login-signup/Signin'

import left from '../../assets/left.png' 
const hero = () => { 
    const[action,setAction] =useState(false); 
    const [firstButtonClicked, setFirstButtonClicked] = useState(false);
  const [secondButtonClicked, setSecondButtonClicked] = useState(false); 
  const [clickedButton, setClickedButton] = useState(null);

  const handleButtonClick = (button) => {
    setClickedButton(button);
  };

    const toggleLine = () => {
        setLineVisible(!lineVisible);
      }; 

      function handleClick1() {  
       
        handleButtonClick(1)
        setAction(true)
        
      } 
      function handleClick2() {  
        handleButtonClick(2)
        setAction(false)
       
      }  

     
 
  return (
    // <div className='hero'>  
    
    // <div className="hero-left">
    // <p className='hero-left-title'>Explore your <span className='hby-text'>hobby</span> or <span className='pssion-text'>passion</span></p> 
    // <p className='hero-left-desc'>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…</p>
    // <p className='hero-left-desc'>If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products, services or events. Hop on your hobbyhorse and enjoy the ride.</p> 
    // <div className="hero-main-img">
    // <img src={left} alt="" />
    // </div>
   
    // </div>  
   
    // <div className="hero-right">
    // <div className="link">
       
    //     <button onClick={handleClick1} className='link-btn'  link-btn1>
    //        Sign In
    //     </button >  
       
      
    //     <button onClick={handleClick2} className='link-btn link-btn2'>
    //     Join In
    //     </button> 
       

    //   </div>  
    //   <div className="show-login-signup">
    //   {
    //     action ?
    //      <Signin/>
    //     :  <Join/>
    //   } 
    //   </div>
    // </div>  
    // </div> 

    <div className='hero'> 
    <div className="hero-left">
    <p className='hero-left-title'>Explore your <span className='hby-text'>hobby</span> or <span className='pssion-text'>passion</span></p> 
    <p className='hero-left-desc'>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…</p>
    <p className='hero-left-desc'>If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products, services or events. Hop on your hobbyhorse and enjoy the ride.</p> 
    <div className="hero-main-img">
    <img src={left} alt="" />
    </div>
   
    </div>  
   
    <div className="hero-right">
    <div className="link">
       
        <button onClick={handleClick1} className='link-btn'  link-btn1>
           Sign In
        </button >  
       
      
        <button onClick={handleClick2} className='link-btn link-btn2'>
        Join In
        </button> 
       

      </div>  
      <div className="show-login-signup">
      {
        action ?
         <Signin/>
        :  <Join/>
      } 
      </div>
    </div> 
     
    </div>
     
    
  )
}

export default hero
