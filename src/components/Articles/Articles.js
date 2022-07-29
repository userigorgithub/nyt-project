import './Articles.css';
import React from 'react';
import SingleArticle from '../SingleArticle/SingleArticle';

const Articles = ({ articles, setArticleDetails }) => {

  let id = 0
  const allArticles = articles.map(article => {
    id += 1
    return (
      <SingleArticle
        id={id}
        key={id}
        title={article.title}
        image={article.multimedia ? article.multimedia[2].url : null}
        byline={article.byline}
        abstract={article.abstract}
        setArticleDetails={setArticleDetails}
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
