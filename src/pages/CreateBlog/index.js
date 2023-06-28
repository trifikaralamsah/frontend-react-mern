import React from 'react'
import {Button, Gap, Input, Textarea, Upload} from '../../components'
import './createblog.scss'
import { Link } from '../../components'
import { useNavigate } from 'react-router-dom'

const CreateBlog = () => {
  const navigate = useNavigate();

  return (
    <div className='blog-post'>
      <Link title='kembali' onClick={() => navigate('/')}/>
      <p className='title'>Create New Blog Post</p>
      <Input label={'Post Title'}/>
      <Upload />
      <Textarea />
      <Gap height={20} />
      <div className='button-action'>
        <Button title='Save'/>
      </div>
    </div>
  )
}

export default CreateBlog