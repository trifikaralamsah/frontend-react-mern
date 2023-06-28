import React from 'react'
import './upload.scss'
import { registerBg } from '../../../assets'

const Upload = () => {
  return (
    <div className='upload'>
        <img className='preview' src={registerBg} alt='preview' />
        <input type='file' />
    </div>
  )
}

export default Upload