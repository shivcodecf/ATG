import React from 'react' 
import logo from '../../assets/logo.png'
import '../../App.css'  
import { CiSearch } from "react-icons/ci"; 
import { TbSearch } from "react-icons/tb"; 
import exp from '../../assets/exp.png' 
import hob from '../../assets/hob.png' 
import sav from '../../assets/sav.png' 
import not from '../../assets/not.png' 
import cart from '../../assets/cart.png' 


const Navbar = () => {
  return (
    <div>
      <nav> 
      <a className="navbar" href="#">
        <img src={logo} alt="" />
        </a>
        <div className="container-fluid">
    <form className="d-flex" role="search">
    <input className="form-control me-2 input-100" type="search" placeholder="Search" aria-label="Search" /> 
     <div className="search">
        <button className="btn btn-outline-success btn-1" type="submit"><TbSearch style={{color:"white" }}  /></button> 
        </div>
    </form> 
    
  </div> 
    <div className="nav-icons"> 
        <div className="exp">
        <img src={exp} alt="" />  
        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle drop-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Explore
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">People-Community</a></li>
    <li><a class="dropdown-item" href="#">Places-venues</a></li>
    <li><a class="dropdown-item" href="#">Programs-Events</a></li> 
    <li><a class="dropdown-item" href="#">Products-Store</a></li>
    <li><a class="dropdown-item" href="#">Blogs</a></li>
  </ul>
</div>
        </div>  
        <div className="exp"> 
        <img src={hob} alt="" />  
        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle drop-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    hobbies
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">play games</a></li>
    <li><a class="dropdown-item" href="#">Competative Programming</a></li>
    <li><a class="dropdown-item" href="#">Singing Song</a></li>
  </ul>
</div>
        </div> 

         <img src={sav} alt="" />
         <img src={not} alt="" />
         <img src={cart} alt="" /> 
        <div className="sign-btn">
        <button>Sign In</button> 
        </div>

     </div> 

     </nav>
   </div>  



     


  )
}

export default Navbar
