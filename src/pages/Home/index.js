import React, { useEffect, useState } from 'react'
import {BlogItem, Button, Gap} from '../../components'
import './home.scss'
import {useNavigate} from 'react-router-dom';
import Axios from 'axios';
import { useSelector } from 'react-redux';

const Home = () => {
  const [dataBlog, setDataBlog] = useState([]);
  // pemanggilan state global redux
  const stateGlobal = useSelector(state => state);
  console.log('stateG: ', stateGlobal);

  useEffect(() => {
    Axios.get('http://localhost:4000/v1/blog/posts?page=2&perPage=2')
    .then(result => {
      console.log('Data Api: ', result);
      const responseAPI = result.data;

      setDataBlog(responseAPI.data);
    })
    .catch(err => {
      console.log('error: ', err);
    })            
  }, []);
  
  const navigate = useNavigate();

  return (
    <div className='home-page-wrapper'>
      <div className='create-wrapper'>
        <Button title='create blog' onClick={() => navigate('/create-blog')} />
      </div>
      <Gap height={20} />
      <div className='content-wrapper'>
        {dataBlog.map(blog => {
            return (
              <BlogItem 
                key={blog._id} 
                image={`http://localhost:4000/${blog.image}`} 
                title={blog.title} 
                name={blog.author.name}
                date={blog.updatedAt}
                body={blog.body}
              />
              )
          })}
      </div>
      <div className='pagination'>
        <Button title="Previous" />
        <Gap width={20} />
        <Button title="Next" />
      </div>
        <Gap height={20} />
    </div>
  )
}

export default Home