import signature from './about_sign.png';
import background1 from './our story background.png';
import './story.css';

export default function Story() {
  return (
    <>
        <div className='story' id='aboutus'>
            <h1>Our Story</h1>
            <div className='para'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sit nesciunt atque ex cum
                     inventore repudiandae? Modi ratione veritatis recusandae animi sapiente illo accusantium. Maiores 
                     illum dicta nostrum ullam maxime?
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsa, sapiente delectus dolor inventore 
                    iure ex distinctioab rerum earum ullam</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsa, sapiente delectus dolor inventore 
                    iure ex distinctioab rerum earum ullam magni asperiores. Aliquid hic quo at quos omnis voluptatibus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsa, sapiente delectus dolor inventore 
                    iure ex distinctioab rerum earum ullam</p>
            </div>
            <img className='sign' src={signature} alt="sign" />


        </div>
        <img className='background' src={background1} alt="background" />
        </>
  );
}
