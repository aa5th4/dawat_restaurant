import './home.css';
import { useState, useEffect } from 'react';
import {sliderData} from './homedata';
import logo1 from '../Footer/main_logo.png';
import logo from '../Footer/main_logo_black.png';
import Book_Table from '../Book_Table/Book_Table';

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength =  sliderData.length;

    const autoScroll = true;
    let slideInterval;
    let intervalTime= 5000;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength-1 ? 0 : currentSlide+1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength-1 : currentSlide-1);
    };

    const auto = () =>{
        slideInterval = setInterval(nextSlide,intervalTime);
    };

    const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);

    useEffect(() => {
        setCurrentSlide(0)
    },[]);

    useEffect(() => {
        if(autoScroll) {
            auto();
        }
        return () => clearInterval(slideInterval); 
    },[currentSlide]);

  return(
        <>    
        <div className='aastha'>
        <div className='header'>
        <div className='upperportion'>
                <div className='emailinfo'>
                    <span>Email: Info@Restraunt.com</span>
                    <span>Telephone:+1 800 234 5678</span>
                </div>
                <div className='iconinfo'>

                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-twitter"></a>
                    <a href="#" class="fa fa-google"></a>
                    <a href="#" class="fa fa-pinterest"></a>
                    <a href="#" class="fa fa-instagram"></a>
                    <button>BOOK A TABLE</button>
                </div>
            </div>
            <div className={colorChange?'middleportion active' : 'middleportion'}>
                <img src={colorChange?logo:logo1} alt="" />
                <div className='home_cont'>
                    <a href="#aboutus">HOME</a>
                    <a href="#">ABOUT US</a>
                    <a href="#">OFFER</a>
                    <a href="#">MENU</a>
                    <a href="#">TEAM</a>
                    <a href="#">GALLERY</a>
                    <a href="#">CONTACT</a>
                    <i className='fa fa-search'></i>
                </div>
            </div>
        </div>


        <div className='slider'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9pULNfUgNFYFz2lnCwIMfFCdQVYRcV4VeqQ&usqp=CAU" className='arrow prev' onClick={prevSlide}></img>
            <img src="https://cdn4.iconfinder.com/data/icons/cartoon-arrows/100/Arrow_Circle_-_Right-512.png"  className=' fa-arrow-left arrow next' onClick={nextSlide}></img>
            {sliderData.map((slide, index) => {
                return (
                    <div className={index === currentSlide ? "slide current" : "slide"} key={index}>
                        {index === currentSlide && (
                            <>
                                <img src={slide.Image} alt='slide' />
                                <div className='overlay'></div>
                                <div className="content">
                                    <div className="content1">
                                            <h1>{slide.heading}</h1>
                                    </div>
                                    <div className="content2">
                                            <h1>{slide.span}</h1>
                                    </div>
                                    <div className="content3">
                                            <button>BOOK A TABLE</button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                )
            })}

        </div>
        </div>
        </> 
  );
}
