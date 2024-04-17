import React from 'react';
import './card.css';

const Card = ({name}) => {

  return (
    <div className='card'>
      <img src="./src/assets/person.jpg" alt="person-photo" width='100px' />
      <p>{name}</p>
    </div>
  )
}

export default Card;