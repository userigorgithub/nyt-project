import './App.css';
import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import { getData } from '../../apiCalls';
import Header from '../Header/Header';
import Articles from '../Articles/Articles';
import Footer from '../Footer/Footer';
import ArticleDetails from '../ArticleDetails/ArticleDetails';



const App = () => {
  const [articles, setArticles] = useState([])
  const [articleDetails, setArticleDetails] = useState(null)
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


  // const showArticleDetails = (id) => {
  //   const article = articles.find(article.title === id)
  //   setArticleDetails(article)
  //   navigate(`/article/${id}`)
  // }

  return (
    <main className="App">
      <Header/>
      <Routes>
        <Route path='/'
          element={<Articles
          articles={articles} setArticleDetails={setArticleDetails}/>}
        />
        <Route path='/article/:id'
          element={<ArticleDetails
          articles={articles}
          articleDetails={articleDetails}/>}
        />
      </Routes>
      <Footer/>
    </main>
  )
}

export default App;
