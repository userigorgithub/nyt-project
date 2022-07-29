import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getData } from '../../apiCalls';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Articles from '../Articles/Articles';
import ArticleDetails from '../ArticleDetails/ArticleDetails';
import SearchArticle from '../SearchArticle/SearchArticle';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

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

  const searchAllArticles = articles.filter(article => {
    return (
      article.title.toLowerCase().includes(searchArticle.toLowerCase()))
  })

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
          articles={searchAllArticles} />}
        />
        <Route exact path='/article/:id'
          element={<ArticleDetails
          articles={articles}
          articleDetails={articleDetails} />}
        />
        <Route path='/error'
          element={<ErrorMessage />}
        />
        <Route path="*"
          element={<Navigate to="/error" replace />}
        />
      </Routes>
      <Footer/>
    </main>
  )
}

export default App;
