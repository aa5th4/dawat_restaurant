import './newspage.css';
import bgimage from './blog-3.jpg';
import lineimg from '../chef/redseperator.png';
import blog1 from './blog-1.jpg';
import blog2 from './blog-2.jpg';
import blog3 from './blog-3.jpg';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



export default function Newspage() {

    let settings = {
        dot: true,
        infinite:true,
        speed:500,
        slideToShow:3,
        slidesToScroll:1,
        cssEase:"linear"
    }


  return (
    <div className='newsfullpage'>
        <div className='bgimage'>
            <div className='overlay'>
                <div className='news'>
                    <div className='logoandh1'>
                        <h1>Latest news</h1>
                        <img src={lineimg} alt="" />
                    </div>
                    <div className='newsimg'>
                        <div className='newsimg1 n'>
                            <img src={blog1} alt="" />
                            <h2>Restraunt welcome day meetup</h2>
                            <p align="center">Lorem ipsum dolor sit elit. Harum id dicta perspiciatis, blanditiis 
                                rem dignissimo repellendus tota</p>
                        </div>
                        <div className='newsimg1 n'>
                            <img src={blog2} alt="" />
                            <h2>Restraunt welcome day meetup</h2>
                            <p align="center">Lorem ipsum dolor sit elit. Harum id dicta perspiciatis, blanditiis 
                                rem dignissimo repellendus tota</p>
                        </div>
                        <div className='newsimg1 n'>
                            <img src={blog3} alt="" />
                            <h2>Restraunt welcome day meetup</h2>
                            <p align="center">Lorem ipsum dolor sit elit. Harum id dicta perspiciatis, blanditiis 
                                rem dignissimo repellendus tota</p>
                        </div>

                    </div>
                </div>
        </div>
        </div>

    </div>
 );
}
