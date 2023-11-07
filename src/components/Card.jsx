import React from 'react'
import '../App.css'

export const Card = ({cadeau, updateReservation}) => {

    
  return (
    <div className='card'>
        <li key={cadeau.id}>{cadeau.name}</li>
        <img src={cadeau.image} alt={cadeau.name} className='card_img'/> 
        <div className='card_reservation'>
          <a href={cadeau.site} target='_blank'>Site</a>
          <p>Reserver</p>
        </div>
        
    </div>
  )
}
