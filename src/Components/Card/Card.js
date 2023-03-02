import React from 'react'
import './Card.css'
import MicroModal from 'react-micro-modal'

const Card = ({ title, abstract, img, imgCaption, photographer, url, writer, publishedDate }) => {

  const shortenAbstract = (abstract) => {
    const firstHalf = abstract.split('').splice(0, 75)
    return firstHalf
  }

  const reformatDate = (date) => {
    const correctedDate = new Date(date).toLocaleString()
    return correctedDate
  }

  const generateAltText = (caption, articleTitle) => {
    return (caption ? caption : `Image for ${articleTitle}`)
  }

  return (
    <MicroModal
      trigger={(open) => (
        <div className='card'>
          <h3>{title}</h3>
          <img className='card-image' alt={generateAltText(imgCaption, title)} onClick={open} src={img} />
          <p className='card-abstract'>{shortenAbstract(abstract)}...</p>
        </div>
      )}
    >
      {(close) => (
        <div className='modal'>
          <div className='modal-details'>
            <h3>{title}</h3>
            <div className='modal-writer-date-container'>
              <p className='modal-writer'>{writer}</p>
              <p className='modal-published-date'>{reformatDate(publishedDate)}</p>
            </div>
            <div className='modal-image-container'>
              <img className='modal-image' alt={generateAltText(imgCaption, title)} src={img} />
              <p className='modal-photographer'>© {photographer}</p>
              <p className='modal-image-caption'>{imgCaption}</p>
            </div>
            <p className='modal-abstract'>{abstract}</p>
            <nav className='modal-nav'>
              <a href={url}>Link to Article</a>
              <a onClick={close}>Close</a>
            </nav>
          </div>
        </div>
      )}
    </MicroModal>
  )
}

export default Card