import './ArticleDetails.css';
import React from "react";
import { Link } from "react-router-dom";

const ArticleDetails = ({ id, articleDetails }) => {
  return (
    <div className='ArticleDetails'>

      <p>DETAILS</p>
      <p>{articleDetails.title}</p>

      <Link to='/'><button>Back</button></Link>
    </div>
  )
}
export default ArticleDetails;
