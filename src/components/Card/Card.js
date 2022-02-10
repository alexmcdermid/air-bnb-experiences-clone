import React from 'react';
import "./Card.css";

export default function Card(props) {
  return (
      <div className='card'>
          <img src={require(`../../images/${props.img}`)} className="card--image" alt=""></img>
          <div className='card--stats'>
            <img src={require("../../images/star.png")} className="card--star" alt=""/>
            <span>{props.rating}</span>
            <span className='gray'>({props.ratings}) • </span>
            <span className='gray'>{props.country}</span>
          </div>
          <p className='card--p'>{props.bio}</p>
          <p className='=card--p'><span className='bold'>From ${props.price}</span> / person</p>
      </div>
  )
}
