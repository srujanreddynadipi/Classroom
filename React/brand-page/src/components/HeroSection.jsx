import React from 'react'
import amazon from '../assets/images/amazon.png';
import flipkart from '../assets/images/flipkart.png';
import shoe from '../assets/images/shoe_image.png';

const HeroSection = () => {
  return (
   <main className="hero">
    <div className='heroContent'>
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <button>Shop Now</button>
        <button className='cat-btn'>Category</button>
        <p>Also Available On</p>
        <img src={flipkart} alt="" />
        <img src={amazon} alt="" />

    </div>
    <div className='heroImg'>
        <img src={shoe} alt="" />
    </div>
   </main>
  )
}

export default HeroSection
