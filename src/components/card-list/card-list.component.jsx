import React from 'react'
import './card-list.css';

export const CardList = (props) => ( 
   <div className='card-list'>
   {props.perros.map( (p,i) => (
      <div id={i} className='card-list__perrete'>
         <img src={p} alt='merda' />
      </div>
   ))}
   </div>
)