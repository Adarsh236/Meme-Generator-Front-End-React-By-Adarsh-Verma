import React from 'react'
import './Upload.css'

export default ({ preview }) => (
  <img
    className='preview'
    src={preview}
    alt='Meme Preview'
    style={{ textAlign: 'center', marginRight: '-20px' }} />
)
