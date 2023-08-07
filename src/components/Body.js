import React from 'react';
import First from './First';
import Footer from './Footer';
import useScroll from '../utils/useScroll';
import Third from './Third';
import Second from './Second';
import Fourth from './Fourth';

const Body = () => {
  return (
    <div className='relative'>
     <First />
     <Second/>
     <Third/>
     <Fourth/>

    </div>
  )
}

export default Body;