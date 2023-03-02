import React from 'react'
import './CardContainer.css'
import Card from '../Card/Card'
import imgComingSoon from '../../assets/images/image-coming-soon.jpeg'


const CardContainer = ({ articles }) => {

  let filteredArticles = articles.filter(article => article.title.length > 0).map(article => {
    return <Card
      key={articles.indexOf(article)}
      title={article.title}
      abstract={article.abstract}
      genre={article.section}
      img={article.multimedia ? article.multimedia[0].url : imgComingSoon}
      photographer={article.multimedia && article.multimedia[0].copyright}
      imgCaption={article.multimedia && article.multimedia[0].caption}
      url={article.url}
      writer={article.byline}
      publishedDate={article.published_date}
    />
  })

return (
  <div className='card-container'>
    {filteredArticles}
  </div>
)
}

export default CardContainer