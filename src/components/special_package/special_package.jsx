import './special_package.css' ;
import blurimg from "../promopage/promo_slide_2.jpg";
import img1 from "../promopage/promo_slide_1.jpg";
import img2 from "../promopage/promo_slide_2.jpg";
import img3 from "../promopage/promo_slide_3.jpg";
import packagelogo from '../chef/redseperator.png';
import { useState } from 'react';

export default function Special_package() {

    const [dImg, setdImg] = useState(1);
    const handleimg = (index) =>{
            setdImg(index);
    }


  return (
        <div className='special'>

            <img  className='bgimg' src={blurimg} alt="blur" />
            <div className='insidecard'>
                <div className='hdimg'>
                    <h1>Special Package</h1>
                    <img src={packagelogo} alt="" />
                </div>
               <div className='cardss'>
               <div className={dImg===1? "divandcard-active" : "divandcard"}>
                    <img className='imgcard' src={img1} alt="" />
                    <div className='carddiv'>
                        <h3> 40% off for 9''-12'' pizza-Wed,Thu,Friday only</h3>
                        <span>Pizza 12 inch+1 Side Dish + 1.5L Coke Button From 209.000</span>
                        <button>ORDER NOW</button>
                    </div>
                </div>
                <div className={dImg===2? "divandcard-active" : "divandcard"}>
                    <img className='imgcard' src={img2} alt="" />
                    <div className='carddiv'>
                        <h3> 40% off for 9''-12'' pizza-Wed,Thu,Friday only</h3>
                        <span>Pizza 12 inch+1 Side Dish + 1.5L Coke Button From 209.000</span>
                        <button className='btsss'>ORDER NOW</button>
                    </div>
                </div>
                <div className={dImg===3? "divandcard-active" : "divandcard"}>
                    <img  className='imgcard' src={img3} alt="" />
                    <div className='carddiv'>
                        <h3> 40% off for 9''-12'' pizza-Wed,Thu,Friday only</h3>
                        <span>Pizza 12 inch+1 Side Dish + 1.5L Coke Button From 209.000</span>
                        <button >ORDER NOW</button>
                    </div>
                </div>
            </div>
               <div  className='indicators'>
                    <span id='btn1' onMouseEnter={()=> handleimg(1)}></span>
                    <span id='btn2' onMouseEnter={()=> handleimg(2)}></span>
                    <span id='btn3'onMouseEnter={()=> handleimg(3)}></span>
                </div>
            </div>
        </div>
    );
}
