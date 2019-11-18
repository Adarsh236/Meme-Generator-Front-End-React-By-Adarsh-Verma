import React from 'react'

const Rank = ({name, entries}) => {
  return (
    <div className='rock' style={{ position: 'relative', zIndex: '1'}}>
      <div className='white f3'>
        {`${name}, your current Meme is...`}
      </div>
      <div className='white f1'>
        {entries}
      </div>
      <div className='f4'>
        {'Create your own meme'}
      </div>
    </div>
  )
}

export default Rank
