import './footer.css';
import lineimg from '../chef/redseperator.png';
import footerimg from './Footer background.png';
import mainlogo from './main_logo.png';

export default function Footer() {
  return (
    <div className='footercontainer'>
        <div className='gallery'>
            <h1>Gallery</h1>
            <img src={lineimg} alt="" />
        </div>
        <div className='gallery2'>
            <img src={footerimg} alt="" />
            <div className='overlay2'></div>
            <div className='footer2'>
                <img src={mainlogo} alt="" />
                <br />
                <span>20,floor,Queenslad Victoria Building. 60 california street california USA</span>
                <h3>hello@dawat.com</h3>
                <h3>+88 000 0000 11111</h3>
                <div className='iconsdiv'>
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-twitter"></a>
                    <a href="#" class="fa fa-google"></a>
                    <a href="#" class="fa fa-linkedin"></a>
                    <a href="#" class="fa fa-pinterest"></a>
                    <a href="#" class="fa fa-instagram"></a>
                </div>
            </div>
        </div>
    </div>
  );
}
