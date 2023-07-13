import React from 'react';
import images from '../../constants/images';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
        <img src={images.G} alt='g letter'></img>
    </div>
{/* About us */}
    <div className='app__aboutus-content flex__center'>
        <div className='app__aboutus-content_about'>
            <h1 className='headtext__cormorant'>About Us</h1>
            <img src={images.spoon} alt='about__spoon' className='spoon__img'></img>
            <p className='p__opensans'>abcdefghijkslfelsfeofmweflefeopfelsdfkfdsfsdlf fdsfjdsjf fsdfjd fdfldfjoeir fesdf frfeorfelkf oefeorf eeoferofeo fejfifwher iewfioefj iejfroiejf refweiriwe reifwierj wieid ewisfdsfhsdjfksjf sfdkfjesifje edfiejfd ejdfwsejd iejfd jfdeifjiew iwjfdiefd ejfdiefj eejfiejf dsfjsefergj ofjdjfsd </p>

       <button type='button' className='custom__button'>Know More</button>
        </div>

        <div className='app__aboutus-content_knife flex__center'>
          <img src={images.knife} alt='about_knife'></img>
        </div>
        
        {/* //History */}
          <div className='app__aboutus-content_history'>
            <h1 className='headtext__cormorant'>Our History</h1>
            <img src={images.spoon} alt='about__spoon' className='spoon__img'></img>
            <p className='p__opensans'>abcdefghijkslfelsfeofmweflefeopfelsdfkfdsfsdlf fdsfjdsjf fsdfjd fdfldfjoeir fesdf frfeorfelkf oefeorf eeoferofeo fejfifwher iewfioefj iejfroiejf refweiriwe reifwierj wieid ewisfdsfhsdjfksjf sfdkfjesifje edfiejfd ejdfwsejd iejfd jfdeifjiew iwjfdiefd ejfdiefj eejfiejf dsfjsefergj ofjdjfsd </p>

       <button type='button' className='custom__button'>Know More</button>
        </div>
    </div>
  </div>
);

export default AboutUs;
