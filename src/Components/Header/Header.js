import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div>
      <h1>The New York Times Reader</h1>
      <nav className='genre-links'>
        <a>World</a>
        <a>U.S.</a>
        <a>Politics</a>
        <a>N.Y.</a>
        <a>Business</a>
        <a>Opinion</a>
        <a>Science</a>
        <a>Health</a>
        <a>Sports</a>
        <a>Arts</a>
        <a>Books</a>
        <a>Style</a>
        <a>Food</a>
        <a>Travel</a>
        <a>Magazine</a>
        <a>Real Estate</a>
      </nav>
    </div>
  )
}

export default Header