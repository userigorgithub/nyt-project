import './App.css';
import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import { getData } from '../../apiCalls';
import Header from '../Header/Header';
import Articles from '../Articles/Articles';
import Footer from '../Footer/Footer';



const App = () => {
  const [articles, setArticles] = useState([])
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

  return (
    <main className="App">
      <Header/>
      <Routes>
        <Route path='/'
          element={<Articles articles={articles}/>}
        />

      </Routes>
      <Footer/>
    </main>
  )
}

export default App;
