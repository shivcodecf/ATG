import React from 'react' 
import google from '../../assets/google.png' 
import facebook from '../../assets/Facebook.png'   
import connect from '../../assets/connect.png'   
import pass from '../../assets/passw.png'  
import fpass from '../../assets/fpass.png' 
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
import { useEffect,useState } from 'react'



const Signin = () => { 
  const [passwordShown, setPasswordShown] = useState(false);  
  const [checked, setChecked] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
}; 

const handleCheckboxChange = () => {
  setChecked(!checked);
};
  return (
    <div className='sign'> 
    <div className="btn-sign">
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
      <div className="pass-footer">
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

      </div>  
      <div className="cont-btn cont-btn1">
      <button>Continue</button> 
      </div>
    </div>
  )
}

export default Signin
