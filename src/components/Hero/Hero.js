import React from 'react';
import './Hero.css';

export default function Hero() {
  return(
    <section className='hero'>
        <img src={require("../../images/photo-grid.png")} className="hero--photo" alt=""/>
        <h1 className='hero--header'>Online Experiences</h1>
        <p className='hero--p'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </section>
  ) 
}