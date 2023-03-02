import React from 'react'
import './Card.css'
import MicroModal from 'react-micro-modal'

const Card = ({ title, abstract, img, url, writer }) => {

  const shortenAbstract = (abstract) => {
    const firstHalf = abstract.split('').splice(0, 75)
    return firstHalf
  }

  return (
    <MicroModal
      trigger={(open) => (
        <div className='card'>
          <h3>{title}</h3>
          <img className='card-image' onClick={open} src={img} />
          <p className='card-abstract'>{shortenAbstract(abstract)}...</p>
        </div>
      )}
    >
      {(close) => (
        <div className='modal'>
          <div className='modal-details'>
            <h3>{title}</h3>
            <h5 className='modal-writer'>{writer}</h5>
            <div className='modal-image-container'>
              <img className='modal-image' src={img} />
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