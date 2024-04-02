import React from 'react' 
import footer from '../../assets/footer.png' 
import { FaFacebookF } from "react-icons/fa"; 
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6"; 
import { FaPinterestP } from "react-icons/fa6"; 
import { FaGooglePlusG } from "react-icons/fa6"; 
import { CiYoutube } from "react-icons/ci"; 
import { FaTelegramPlane } from "react-icons/fa"; 
import { MdOutlineMail } from "react-icons/md";  
import { CiSearch } from "react-icons/ci"; 
import { TbSearch } from "react-icons/tb"; 
import '../../App.css'  

const Footer = () => {
  return (
    <div>
      <footer> 
        <div className="footer-title">
        <p>Your <span className='hobby'>Hobby</span> Your <span className='commu'>Community...</span></p> 
        </div> 
        <div className="get-start">
      <button>
        Get started 
        
      </button> 
      </div>  
      <div className="footer-img"> 
      <img src={footer} alt="" />
        </div> 
      

      </footer> 

      <div className="footer">
        <div className="container1">
            <div className="row">

                <div className="footer-col">
                    <h4>Hobbycue</h4>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Our Services</a></li>
                        <li><a href="#">Work with Us</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div> 

                <div className="footer-col">
                    <h4>How Do I</h4>
                    <ul>
                        <li><a href="#">Sign Up</a></li>
                        <li><a href="#">Add a Listing</a></li>
                        <li><a href="#">Claim Listing</a></li>
                        <li><a href="#">Post a Query</a></li>
                        <li><a href="#">Add a Blog Post</a></li> 
                        <li><a href="#">Other Queries</a></li>
                    </ul>
                </div>  

                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#">Listings</a></li>
                        <li><a href="#">Blog Posts</a></li>
                        <li><a href="#">Shop / Store</a></li>
                        <li><a href="#">Community</a></li>
                        
                    </ul>
                </div>  

                <div className="footer-col">
                    <h4>follow us</h4>
                   <div className="social-links">
                  <a href=""><FaFacebookF style={{color:"black",fontSize:"25px"}} /></a> 
                  <a href=""><FiTwitter style={{color:"black" ,fontSize:"25px"}}/></a>  
                  <a href=""><FaInstagram style={{color:"black" ,fontSize:"25px"}}/></a>  
                  <a href="">< FaPinterestP style={{color:"black" ,fontSize:"25px"}} /></a>  
                  <a href=""><FaGooglePlusG style={{color:"black" ,fontSize:"25px"}}/></a>  
                  <a href="">< CiYoutube style={{color:"black" ,fontSize:"25px"}}/></a>  
                  <a href=""><FaTelegramPlane style={{color:"black",fontSize:"25px"}}/></a> 
                  <a href=""><MdOutlineMail style={{color:"black",fontSize:"25px"}}/></a> 

                   </div>   
                   <div>
                    <p>Invite friends</p>
                   <form className="d-flex" role="search">
    <input className="form-control me-2 input-100" type="search" placeholder="Search" aria-label="Search" /> 
     <div className="search">
        <button className="btn btn-outline-success btn-1" type="submit">Invite</button> 
        </div>
    </form>
   </div>
                  


                </div> 


            </div>
        </div>  
        <div className="cpy-right">
            <p>	&#169;  Purple Cues Private Limited</p>
        </div>

      </div>
    </div>
  )
}

export default Footer
