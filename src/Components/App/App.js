import React, { useState, useEffect } from 'react'
import './App.css';
import Header from '../Header/Header';
import CardContainer from '../CardContainer/CardContainer';
import { getArticles } from '../../utilis/apiCalls';

const App = () => {

  const [articles, setArticles] = useState([])
  const [filteredArticles, setFilteredArticles] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const getHomeArticles = async () => {
    try {
      const allArticles = await getArticles('home')
      setArticles(allArticles.results)
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
        <Header />
        {!filteredArticles.length ? <CardContainer articles={articles}/> : <CardContainer articles={filteredArticles}/>}
      </header>
    </div>
  );
}

export default App;
