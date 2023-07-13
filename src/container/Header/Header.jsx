import React from 'react';
import images  from '../../constants/images';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavour"/>
      <h1 className='app__header-h1'>The Key to Find Dining</h1>
      <p className='p__opensans' style={{margin:'2rem 0'}}>abcdefghijkslfelsfeofmweflefeopfelsdfkfdsfsdlf
       fdsfjdsjf fsdfjd fdfldfjoeir fesdf frfeorfelkf oefeorf eeoferofeo fejfifwher iewfioefj iejfroiejf 
       refweiriwe reifwierj wieid ewisfdsfhsdjfksjf sfdkfjesifje edfiejfd ejdfwsejd iejfd jfdeifjiew iwjfdiefd 
       ejfdiefj eejfiejf dsfjsefergj ofjdjfsd fesjfie feisfjsdjfise sfisefie sijfdie  eifjiiji jiii ijii hiiuiih</p>
       <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
        <img src={images.welcome} alt='header img'></img>
    </div>
  </div>
);

export default Header;
