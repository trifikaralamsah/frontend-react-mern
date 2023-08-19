import React, { useEffect, useState } from 'react'
import {BlogItem, Button, Gap} from '../../components'
import './home.scss'
import {useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setDataBlog } from '../../config/redux/action';

const Home = () => {
  // const [dataBlogs, setDataBlogs] = useState([]); // state old not global
  // const {dataBlogs, name} = useSelector(state => state); // destructuring state global
  // const stateGlobal = useSelector(state => state); // contoh state global
  const {dataBlog, page} = useSelector(state => state.homeReducer);
  const [counterPage, setCounterPage] = useState(1);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  console.log('page: ', counterPage);

  useEffect(() => {
    dispatch(setDataBlog(counterPage))

    setTimeout(() => {
      setLoading(false);
    }, 500);
    // setTimeout(() => {
    //     dispatch({type: 'UPDATE_NAME'})
    // }, 1000);            
  }, [dispatch, dataBlog, counterPage]);

  const navigate = useNavigate();

  const previous = () => {
    if (counterPage > 1) {
      setLoading(true);
      setCounterPage(counterPage - 1);
    } 
    // setCounterPage(counterPage <= 1 ? 1 : counterPage - 1);
  }

  const next = () => {
    if (counterPage < page.totalPage) {
      setLoading(true);
      setCounterPage(counterPage + 1);
    } 
    // setCounterPage(counterPage === page.totalPage ? page.totalPage : counterPage + 1);
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if(dataBlog.length === 0) {
    return <p>Please refresh page and check your connection...</p>
  }

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
        <Button title="Previous" onClick={previous} />
        <Gap width={20} />
        <p className='text-page'>{page.currentPage} / {page.totalPage}</p>
        <Gap width={20} />
        <Button title="Next" onClick={next} />
      </div>
        <Gap height={20} />
    </div>
  )
}

export default Home