import React from 'react';
import headinglogo from './redseperator.png';
import './chef.css';
import chef1 from './team-1.jpg';
import chef2 from './team-2.jpg';
import chef3 from './team-3.jpg';
import chef4 from './team-4.jpg';
import chef5 from './team-5.jpg';
import Overlay from './overlay';

export default function Chef() {
  return( <>
        <div className='chefcontainer'> 
            <div className='headingchef'>
                <h1>Our Chefs</h1>
                <img className='headinglogo' src={headinglogo} alt="logo" />
            </div>
            <div className='chefcards'>
                <div className='chefs'>
                    <img className='chefpic' src={chef1} alt="" />             
                    <span className='chefname'>Mark Angelila</span>
                    <span className='chefdesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio non ullam </span>
                </div>

                <div className='chefs'>
                    <img className='chefpic' src={chef2} alt="" />
                    <span className='chefname'>Angel Meskat</span>
                    <span className='chefdesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio non ullam</span>
                </div>

                <div className='chefs'>
                    <img className='chefpic' src={chef3} alt="" />
                    <span className='chefname'>Jon Doe</span>
                    <span className='chefdesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio non ullam</span>
                </div>

                <div className='chefs'>
                    <img className='chefpic' src={chef4} alt="" />
                    <span className='chefname'>Angel Di Maria</span>
                    <span className='chefdesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio non ullam</span>
                </div>

                <div className='chefs'>
                    <img className='chefpic' src={chef5} alt="" />
                    <span className='chefname'>Park ji Sung</span>
                    <span className='chefdesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio non ullam</span>
                </div>
            </div>
        </div>
    </>
  );
}
