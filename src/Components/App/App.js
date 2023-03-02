import React, { useState, useEffect } from 'react'
import './App.css';
import Header from '../Header/Header';
import CardContainer from '../CardContainer/CardContainer';
import { getArticles } from '../../utilis/apiCalls';

const App = () => {

  const [articles, setArticles] = useState([])
  const [filteredArticles, setFilteredArticles] = useState([])
  const [error, setError] = useState('')

  const getHomeArticles = async () => {
    try {
      const allArticles = await getArticles('home')
      setArticles(allArticles.results)
    } catch (error) {
      setError(error)
    }
  }

  const getFilteredArticles = async (genre) => {
    try {
      const filteredArticles = await getArticles(genre)
      setFilteredArticles(filteredArticles.results)
    } catch (error) {
      setError(error)
    }
  }

  useEffect(() => {
    getHomeArticles()
  }, []);

  return (
    <div className="App">
      <header className="Header">
        <Header getFilteredArticles={getFilteredArticles} />
        {!filteredArticles.length ? <CardContainer articles={articles}/> : <CardContainer articles={filteredArticles}/>}
      </header>
    </div>
  );
}

export default App;
