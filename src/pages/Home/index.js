import React, { useEffect, useState } from 'react'
import {BlogItem, Button, Gap} from '../../components'
import './home.scss'
import {useNavigate} from 'react-router-dom';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const [dataBlog, setDataBlog] = useState([]); // state old not global
  // pemanggilan state global redux
  // const stateGlobal = useSelector(state => state);
  const {dataBlogs, name} = useSelector(state => state); // destructuring state global
  const dispatch = useDispatch();  
  console.log('state data blog global: ', dataBlogs);
  console.log('name: ', name);

  useEffect(() => {

    setTimeout(() => {
        dispatch({type: 'UPDATE_NAME'})
    }, 1000);

    Axios.get('http://localhost:4000/v1/blog/posts?page=2&perPage=2')
    .then(result => {
      console.log('Data Api: ', result);
      const responseAPI = result.data;

      setDataBlog(responseAPI.data);
      dispatch({type: 'UPDATE_DATA_BLOG', payload: responseAPI.data})
    })
    .catch(err => {
      console.log('error: ', err);
    })            
  }, [dispatch]);
  
  const navigate = useNavigate();

  return (
    <div className='home-page-wrapper'>
      <div className='create-wrapper'>
        <Button title='create blog' onClick={() => navigate('/create-blog')} />
      </div>
      <p>{name}</p>
      <Gap height={20} />
      <div className='content-wrapper'>
        {dataBlogs.map(blog => {
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