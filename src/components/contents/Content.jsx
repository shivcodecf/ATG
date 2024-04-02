import React from 'react'  
import people from '../../assets/people.png'
import place from '../../assets/place.png' 
import cart from '../../assets/cart.png' 
import product from '../../assets/product.png' 
import program from '../../assets/program.png'  



const Content = () => {
  return (  

    <div className='grand-content'>
    <div className='content'>  
    
      <div className='box box1'> 
      <div className="content-main">
       <div className="content-title">
       <img src={people} alt="" className='box-img' /> 
       <p className='content-title-text'>People</p>
       </div>   
       <div className="content-para">
       <p>Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.</p> 
       </div>
       <button >Connect</button>
       </div>
      </div>  


      <div className='box box2'> 
      <div className="content-main">
       <div className="content-title">
       <img src={place} alt="" className='box-img' /> 
       <p className='content-title-text'>Place</p>
       </div>   
       <div className="content-para">
       <p>Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.</p> 
       </div>
       <button >Connect</button>
       </div>
      </div>  


      <div className='box box3'> 
      <div className="content-main">
       <div className="content-title">
       <img src={product} alt="" className='box-img' /> 
       <p className='content-title-text'>Product</p>
       </div>   
       <div className="content-para">
       <p>Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.</p> 
       </div>
       <button >Connect</button>
       </div>
      </div>  


      <div className='box box4'> 
      <div className="content-main">
       <div className="content-title">
       <img src={program} alt="" className='box-img' /> 
       <p className='content-title-text'>Program</p>
       </div>   
       <div className="content-para">
       <p>Find events, meetups and workshops related to your hobby. Register or buy tickets online.</p> 
       </div>
       <button >Connect</button>
       </div>
      </div> 
      

      </div> 
       
      </div>
  )
}

export default Content
