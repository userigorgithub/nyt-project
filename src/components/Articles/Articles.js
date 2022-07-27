import './Articles.css';
import React from 'react';
import SingleArticle from '../SingleArticle/SingleArticle';

const Articles = ({ articles, setArticleDetails }) => {

  let counter = 0
  const allArticles = articles.map(article => {
    counter += 1
    article.id = counter
    return (
      <SingleArticle
        id={counter}
        key={counter}
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
