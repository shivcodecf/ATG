import React from 'react';
import add from '../../assets/Add.png';
import test from '../../assets/testi.png';
import audio from '../../assets/audio.png';
import women from '../../assets/women.png';

const Content1 = () => {
  return (
    <div>
      <div className='add-grand-own'>
        <div className="add-own">
          <div className="add-own-title">
            <img src={add} alt="" />
            <p>Add your own</p>
          </div>
          <div className="add-own-content">
            <p>Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page</p>
          </div>
          <div className="add-own-btn">
            <button>
              Add new
            </button>
          </div>
        </div>
      </div>

      <div className="testinomials">
        <div className="test-title">
          <img src={test} alt="" />
          <p>Testimonials</p>
        </div>
        <div className="test-content">
          <p>In a fast growing and ever-changing city like Bangalore, it sometimes becomes very difficult to find or connect with like-minded people. Websites like hobbycue.com are a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</p>
        </div>
        <div className="audio">
          <img src={audio} alt="" />
          <img src={women} alt="" />
          <div className="women-name">
            <p>Shubha Nagarajan</p>
            <p>Classical Dancer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content1;
