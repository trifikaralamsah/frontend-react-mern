import React from 'react'
import './blogitem.scss'
import { loginBg } from '../../../assets'
import { Button, Gap } from '../../atoms'
import { useNavigate } from 'react-router-dom'

const BlogItem = () => {
  const navigate = useNavigate();

  return (
    <div className='blog-item'>
        <img className='image-thumb' src={loginBg} alt='post' />
        <div className='content-detail'>
            <p className='title'>Title Blog</p>
            <p className='author'>Author - Date post</p>
            <p className='body'>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
            <Gap height={20}/>
            <Button title="View Detail" onClick={() => navigate('/detail-blog')}/>
        </div>
    </div>
  )
}

export default BlogItem