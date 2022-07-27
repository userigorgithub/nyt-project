import './Articles.css';
import React from 'react';
import SingleArticle from '../SingleArticle/SingleArticle';

const Articles = ({ articles }) => {
  // const allArticles = articles.map(article => {
  //   return (
  //     <SingleArticle
  //
  //     />
  //   )
  // })

  return (
    <div className='Articles'>
      <SingleArticle/>
    </div>
  )
}

export default Articles;
