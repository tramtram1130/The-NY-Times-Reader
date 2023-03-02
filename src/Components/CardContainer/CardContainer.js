import React from 'react'
import './CardContainer.css'
import Card from '../Card/Card'

const CardContainer = ({ articles }) => {

  let filteredArticles = articles.filter(article => article.title.length > 0).map(article => {
    return <Card
      key={articles.indexOf(article)}
      title={article.title}
      abstract={article.abstract}
      genre={article.section}
      img={article.multimedia && article.multimedia[0].url}
      url={article.url}
      writer={article.byline}
    />
  })

return (
  <div className='card-container'>
    {filteredArticles}
  </div>
)
}

export default CardContainer