import React from 'react' 
import google from '../../assets/google.png' 

import facebook from '../../assets/Facebook.png'   
import connect from '../../assets/connect.png'   
import pass from '../../assets/passw.png'  
import fpass from '../../assets/fpass.png'  
import cart from '../../assets/cart.png' 
import product from '../../assets/product.png' 
import program from '../../assets/program.png'  
import place from '../../assets/place.png' 

import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
import { useEffect,useState } from 'react'


const Join = () => { 
  const [passwordShown, setPasswordShown] = useState(false);  
  const [checked, setChecked] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
}; 

const handleCheckboxChange = () => {
  setChecked(!checked);
};
  return (
    <div className='join'>
      <div className='sign'> 
    <div className="btn-sign ">
      <button> 
        <div className="btn-sign1">
        <span><img src={google} alt="" /></span> Continue with Google 
        </div>
      </button>  
      <button>
      <span><img src={facebook} alt="" /></span> Continue with Facebook
      </button> 

      </div> 
      <div class="separator-container">
  <div class="left-line"></div>
  <div class="text">or connect with me</div>
  <div class="right-line"></div>
</div>

      <div className="sign-field-text">  

      <div className="input-field1">
     
      <input type="text"
      placeholder='Email' 
      className='text-field'
      
      
      />   
      </div> 
      <div className="input-field2">
     
      <input 
     type={passwordShown ? "text" : "password"}
      placeholder='password' 
      className='text-field '
      
      
     
      
      />   
      
      <span className="toggle-password" onClick={togglePasswordVisibility}>
                {passwordShown ? <FaEyeSlash /> : <FaEye />}
            </span>
       </div> 
       
     
      </div> 

      {/* <div className="pass-footer">
      <label style={{ display: 'flex', alignItems: 'center',marginTop:"-13px" }}>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
        />
         <span style={{ marginLeft: '8px' }}>Remember Me</span>
      </label>   
      <div className="fpass">
      <img src={fpass} alt="" />  
      <p style={{marginLeft:"10px",marginTop:"5px"}}>Forgot password?</p>
      </div>

      </div>   */} 
         <div className="btn-content-bottom">
        <p>By continuing, you agree to our <span>Terms of Service</span> and <span>Privacy Policy.</span></p> 
        </div>

      <div className="cont-btn">
      <button> Agree and Continue </button> 
      </div> 
      
    </div>
    </div>
  )
}

export default Join

