import './SingleArticle.css';
import React from 'react';

const SingleArticle = ({ id, title, image, byline, abstract }) => {

  return (
    <div className='SingleArticle'>
      <h2>{title}</h2>
      <img src={image} alt='image' />
      <h3>{byline}</h3>
      <p>{abstract}</p>
    </div>
  )
}

export default SingleArticle;
