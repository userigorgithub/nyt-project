import './SingleArticle.css';
import React from 'react';
import { Link } from 'react-router-dom';

const SingleArticle = ({ id, title, image, byline, abstract, setArticleDetails }) => {

  const handleClick = () => {
    setArticleDetails(id-1)
  }

  return (
    <div className='SingleArticle'>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <h3>{byline}</h3>
      <p>{abstract}</p>

      <Link to={`/article/${id}`}><button onClick={() => handleClick()}>Read More</button></Link>
    </div>
  )
}

export default SingleArticle;
