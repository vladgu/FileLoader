import React from 'react'

const ListItem = ({ name, ext, size, remove }) => {
  return (
    <li className='list-item'>
      <span className='list-name'>{ name }</span>
      <span className='list-ext'>{ ext }</span>
      <span className='list-ext'>{ `${Math.round(size / 1000)} Kb` }</span>
      <span className='list-delete-icon' onClick={ remove } > <div className='close' /></span>
    </li>
  )
}

export default ListItem