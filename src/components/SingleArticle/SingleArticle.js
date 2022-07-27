import './SingleArticle.css';
import React from 'react';
import { Link } from 'react-router-dom';

const SingleArticle = ({ id, title, image, byline, abstract }) => {

  return (
    <div className='SingleArticle'>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <h3>{byline}</h3>
      <p>{abstract}</p>
      <Link to={`/${title}`}><button>Read More</button></Link>
    </div>
  )
}

export default SingleArticle;
