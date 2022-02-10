import React from 'react';
import "./Card.css";

export default function Card(props) {
  return (
      <div className='card'>
          <img src={require("../../images/katie-zaferes.png")} className="card--image" alt=""></img>
          <div className='card--stats'>
            <img src={require("../../images/star.png")} className="card--star" alt=""/>
            <span>{props.rating}</span>
            <span className='gray'>({props.ratings}) • </span>
            <span className='gray'>{props.country}</span>
          </div>
          <p>{props.bio}</p>
          <p><span className='bold'>From ${props.rate}</span> / person</p>
      </div>
  )
}
