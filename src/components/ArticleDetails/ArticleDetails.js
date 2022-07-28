import './ArticleDetails.css';
import React from "react";
import { Link } from "react-router-dom";

const ArticleDetails = ({ articles, articleDetails }) => {

  return (
    <div className='ArticleDetails'>
      <img src={articles[articleDetails].multimedia ? articles[articleDetails].multimedia[1].url : null}/>
      <h2>Section: {articles[articleDetails].section}</h2>
      <h1>{articles[articleDetails].title}</h1>
      <h2>{articles[articleDetails].byline}</h2>
      <p>Published: {articles[articleDetails].published_date.substring(0, 10)}</p>
      <p>{articles[articleDetails].abstract}</p>
      <p>Click <a href={articles[articleDetails].short_url} target='_blank'>HERE</a> to read more!</p>
      <Link to='/'><button>Back</button></Link>
    </div>
  )
}

export default ArticleDetails;
