import React, { useEffect, useState } from 'react'
import './detailblog.scss'
import { Gap, Link } from '../../components';
import { useNavigate, useParams } from 'react-router-dom';
import Axios from 'axios';

const DetailBlog = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({}); 
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState('');

  useEffect(() => {
      console.log(`/something/${id}`);
      setLoading(true);
      Axios.get(`http://localhost:4000/v1/blog/post/${id}`)
      .then(res => {
        setData(res.data.data)
        setImage(`http://localhost:4000/${res.data.data.image}`);
        setLoading(false);
      })
      .catch(err => {
        console.log('error:', err)
        setLoading(false);
      });
  },[id]);

  if(loading) {
    return <p>Loading...</p>
  }

  return (
    <div className='detail-blog-wrapper'>
      <img className='img-cover' src={image} alt='thumb'/>
      <p className='blog-title'>{data.title}</p>
      <p className='blog-author'>{data?.author?.name} - {data.updatedAt}</p>
      <p className='blog-body'>{data.body}</p>
      <Gap height={20}/>
      <Link title="Kembali" onClick={() => navigate('/')}/>
    </div>
  )
}

export default DetailBlog