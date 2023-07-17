import React from 'react';
import { FooterOverlay, Newsletter} from '../../components';
import {FiFacebook,FiTwitter,FiInstagram} from 'react-icons/fi';
import {images} from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay/>
    <Newsletter/>
    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
    <h1 className='app__footer-headtext'>Contact Us</h1>
    <p className='p__opensans'>address New York ,California</p>
    <p className='p__opensans'>+1 212-344-1230</p>
    <p className='p__opensans'>+1 212-344-1456</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt='footer__logo'></img>
        <p className='p__opensans'>"The best way to find yourself in the service of others..."</p>
        <img src={images.spoon} alt='spoon' className='spoon_img' style={{marginTop:15}}></img>
        <div className='app__footer-links_icons'>
          <FiFacebook/>
          <FiInstagram/>
          <FiTwitter/>
        </div>
      </div>
      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working 
        Hours</h1>
    <p className='p__opensans'>Monday-Friday:</p>
    <p className='p__opensans'>08:00am-12:00am</p>
    <p className='p__opensans'>Saturday-Sunday:</p>
    <p className='p__opensans'>07:00am-11:00am</p>
      </div>
    </div>
  <div className='footer__copyright'>
      <p className='p__opensans'>2021 Gericht.All 
      Right Reserved</p>
  </div>
  </div>
);

export default Footer;
