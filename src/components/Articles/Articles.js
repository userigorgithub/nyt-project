import './Articles.css';
import React from 'react';
import SingleArticle from '../SingleArticle/SingleArticle';

const Articles = ({ articles }) => {

  let id = 0
  const allArticles = articles.map(article => {
    id += 1
    return (
      <SingleArticle
        id={id}
        key={id}
        title={article.title}
        // image={article.multimedia[1].url}
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
