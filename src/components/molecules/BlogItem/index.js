import React from 'react'
import './blogitem.scss'
import { loginBg } from '../../../assets'

const BlogItem = () => {
  return (
    <div className='blog-item'>
        <img className='image-thumb' src={loginBg} alt='post' />
        <div className='content-detail'>
            <p className='title'>Title Blog</p>
            <p className='author'>Author - Date post</p>
            <p className='body'>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
        </div>
    </div>
  )
}

export default BlogItem