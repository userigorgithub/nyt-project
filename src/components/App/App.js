import './App.css';
import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Articles from '../Articles/Articles';
import Footer from '../Footer/Footer';



const App = () => {
  const [articles, setArticles] = useState([]);



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
