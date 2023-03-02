import React from 'react'
import './CardContainer.css'
import Card from '../Card/Card'

const CardContainer = ({ articles }) => {
  const allArticles = articles.map(article => {
    return <Card 
      key={articles.indexOf(article)}
      title={article.title}
      abstract={article.abstract}
      genre={article.section}
      img={article.multimedia[1].url}
      url={article.url}
      writer={article.byline}
    />
  })
  return (
    <div className='card-container'>
      {allArticles}
    </div>
  )
}

export default CardContainer