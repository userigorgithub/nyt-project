import './Articles.css';
import React from 'react';
import SingleArticle from '../SingleArticle/SingleArticle';

const Articles = ({ articles }) => {

  let counter = 0
  const allArticles = articles.map(article => {
    counter += 1
    return (
      <SingleArticle
        id={counter}
        key={counter}
        title={article.title}
        image={article.multimedia[2].url}
        byline={article.byline}
        abstract={article.abstract}

      />
    )
  })

  return (
    <div className='Articles'>
      {allArticles}
    </div>
  )
}

export default Articles;
