import React from 'react'
import './upload.scss'

const Upload = ({img, ...rest}) => {
  // jika img ada, maka munculkan image, line 9
  return (
    <div className='upload'>
        {img && <img className='preview' src={img} alt='preview' />} 
        <input type='file' {...rest} />
    </div>
  )
}

export default Upload