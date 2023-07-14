import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import images from '../../constants/images';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
          <img src={images.chef} alt='chef'></img>

    </div>
    <div className='app__wrapper_info'>
        <SubHeading title="Chef's Word"/>
        <h1 className='headtext__cormorant'>What We Beleive In</h1>
    <div className='app_chef-content'>
        <div className='app__chef-content_quote'>
              <img src={images.quote} alt='quote'></img>
              <p className='p__opensans'>loffndks jfifjid fjfdfjdsf fjefkdf fjoiefeorfef hdjfd fsfheiurhfdfn asd fefhuref heh hfiuerfhu eiurhrreherhf heurhfeif hiuertfiuefef ierierejr ieriejrie ierierjiejfie wiewq iejeirei wiewirhuh fefjdflk fewirie ejieiwiedei eifoiefriefj wiediuwhewudiw eijieriejfwdjwsdskfc  isdfifjs jfifjif as; wiewjfiefjefj wiweiewjf wjeijfiejfas wi iiejeroeirie eiiefiewjfei iowejdewjf e iejiewjiewj jiejeijf iiwejiej</p>
        </div>
    </div>
    <div className='app__chef-sign'>
        <p>Kelvin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt='sign'></img>
    </div>
    </div>
  </div>
);

export default Chef;
