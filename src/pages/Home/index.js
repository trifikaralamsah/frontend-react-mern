import React, { useEffect, useState } from 'react'
import {BlogItem, Button, Gap} from '../../components'
import './home.scss'
import {useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setDataBlog } from '../../config/redux/action';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Axios from 'axios';

const Home = () => {
  // const [dataBlogs, setDataBlogs] = useState([]); // state old not global
  // const {dataBlogs, name} = useSelector(state => state); // destructuring state global
  // const stateGlobal = useSelector(state => state); // contoh state global
  const {dataBlog, page} = useSelector(state => state.homeReducer);
  const [counterPage, setCounterPage] = useState(1);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  console.log('page: ', page.currentPage);
  console.log('counter: ', counterPage);

  useEffect(() => {
    dispatch(setDataBlog(counterPage))

    setTimeout(() => {
      setLoading(false);
    }, 500);
    // setTimeout(() => {
    //     dispatch({type: 'UPDATE_NAME'})
    // }, 1000);            
  }, [dispatch, counterPage]);

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

  const apiDelete = (_id) => {
    setLoading(true);
    Axios.delete(`http://localhost:4000/v1/blog/post/${_id}`)
    .then(res => {
      console.log('success delete', res.data);
      if(dataBlog.length === 1) {
        setCounterPage(counterPage - 1)
        dispatch(setDataBlog(counterPage - 1));
      } else {
        dispatch(setDataBlog(counterPage));
      }
      setTimeout(() => {
        setLoading(false);
      }, 100);
    })
    .catch(err => console.log('error:', err));
  }

  const confirmDelete = (_id) => {
    confirmAlert({
      title: 'Confirm to Delete',
      message: 'Apakah anda yakin akan menghapus data ini?',
      buttons: [
        {
          label: 'Ya',
          onClick: () => apiDelete(_id)
        },
        {
          label: 'Tidak',
          onClick: () => console.log('Click No Delete')
        }
      ]
    });
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
                _id={blog._id}
                onDelete={confirmDelete}
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