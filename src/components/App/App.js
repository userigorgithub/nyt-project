import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getData } from '../../apiCalls';
import Header from '../Header/Header';
import Articles from '../Articles/Articles';
import Footer from '../Footer/Footer';
import ArticleDetails from '../ArticleDetails/ArticleDetails';
import SearchArticle from '../SearchArticle/SearchArticle';

const App = () => {
  const [articles, setArticles] = useState([])
  const [articleDetails, setArticleDetails] = useState(null)
  const [searchArticle, setSearchArticle] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    getData()
    .then(data => {
      setArticles(data.results)
    })
    .catch(error => {
      setError('Something went wrong, please try again!')
    })
  }, [])

  const filterArticles = articles.filter(article => article.title.toLowerCase().includes(searchArticle.toLowerCase()))

  return (
    <main className="App">
      <Header/>
      <SearchArticle searchArticle={searchArticle}
      setSearchArticle={setSearchArticle}/>
      <Routes>
        <Route path='/'
          element={<Articles
          articles={articles}
          setArticleDetails={setArticleDetails}
          articles={filterArticles}
          />}
        />
        <Route exact path='/article/:id'
          element={<ArticleDetails
          articles={articles}
          articleDetails={articleDetails}
          />}
        />
      </Routes>
      <Footer/>
    </main>
  )
}

export default App;
