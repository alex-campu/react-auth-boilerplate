import React from 'react'
import Button from '@mui/material/Button'
import './Cards.css'

export const HomeCard = ({ Icon, text, action }) => {
  return (
    <div className='card-container'>
      <div>
        <Icon fontSize='large' />
      </div>
      <div>
        <Button size='small' onClick={() => action()}>
          {text}
        </Button>
      </div>
    </div>
  )
}
