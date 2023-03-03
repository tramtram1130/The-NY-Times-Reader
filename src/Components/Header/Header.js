import React from 'react'
import './Header.css'

const Header = ({ getFilteredArticles }) => {

  const handleFiltering = (e) => {
    e.preventDefault()
    let genre = e.target.innerText.toLowerCase().split('.').join('').split(' ').join('')
    if (e.target.innerText === 'N.Y.') {
      genre = 'nyregion' 
    }
    getFilteredArticles(genre)
  }

  return (
    <div className='header'>
      <h1 className='title'>The New York Times Reader</h1>
      <div className='genre-links'>
        <p onClick={e => handleFiltering(e)}>Home</p>
        <p onClick={e => handleFiltering(e)}>World</p>
        <p onClick={e => handleFiltering(e)}>U.S.</p>
        <p onClick={e => handleFiltering(e)}>Politics</p>
        <p onClick={e => handleFiltering(e)}>N.Y.</p>
        <p onClick={e => handleFiltering(e)}>Business</p>
        <p onClick={e => handleFiltering(e)}>Opinion</p>
        <p onClick={e => handleFiltering(e)}>Science</p>
        <p onClick={e => handleFiltering(e)}>Health</p>
        <p onClick={e => handleFiltering(e)}>Sports</p>
        <p onClick={e => handleFiltering(e)}>Arts</p>
        <p onClick={e => handleFiltering(e)}>Books</p>
        <p onClick={e => handleFiltering(e)}>Style</p>
        <p onClick={e => handleFiltering(e)}>Food</p>
        <p onClick={e => handleFiltering(e)}>Travel</p>
        <p onClick={e => handleFiltering(e)}>Magazine</p>
        <p onClick={e => handleFiltering(e)}>Real Estate</p>
      </div>
    </div>
  )
}

export default Header