import React, { useState } from 'react'
import {Button, Gap, Input, Textarea, Upload} from '../../components'
import './createblog.scss'
import { Link } from '../../components'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();

  const onUploadImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  }

  const onSubmit = () => {
    const data = new FormData();
    data.append('title', title);
    data.append('body', body);
    data.append('image', image);

    Axios.post('http://localhost:4000/v1/blog/post', data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
    .then(res => {
      console.log('post success: ', res);
    })
    .catch(err => {
      console.log('error: ', err);
    })
  }

  return (
    <div className='blog-post'>
      <Link title='kembali' onClick={() => navigate('/')}/>
      <p className='title'>Create New Blog Post</p>
      <Input label={'Post Title'} value={title} onChange={(e) => setTitle(e.target.value)} />
      <Upload onChange={(e) => onUploadImage(e)} img={imagePreview} />
      <Textarea value={body} onChange={(e) => setBody(e.target.value)} />
      <Gap height={20} />
      <div className='button-action'>
        <Button title='Save' onClick={onSubmit} />
      </div>
    </div>
  )
}

export default CreateBlog