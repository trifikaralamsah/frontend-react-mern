import React from 'react'
import {BlogItem, Button, Gap} from '../../components'
import './home.scss'
import {useNavigate} from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='home-page-wrapper'>
      <div className='create-wrapper'>
        <Button title='create blog' onClick={() => navigate('/create-blog')} />
      </div>
      <Gap height={20} />
      <div className='content-wrapper'>
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
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