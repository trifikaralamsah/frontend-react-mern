import React from 'react'
import { loginBg } from '../../assets';
import './detailblog.scss'
import { Gap, Link } from '../../components';
import { useNavigate } from 'react-router-dom';

const DetailBlog = () => {
  const navigate = useNavigate();

  return (
    <div className='detail-blog-wrapper'>
      <img className='img-cover' src={loginBg} alt='thumb'/>
      <p className='blog-title'>Title Blog</p>
      <p className='blog-author'>Author - Date Post</p>
      <p className='blog-body'>Content Blog Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
      <Gap height={20}/>
      <Link title="Kembali" onClick={() => navigate('/')}/>
    </div>
  )
}

export default DetailBlog