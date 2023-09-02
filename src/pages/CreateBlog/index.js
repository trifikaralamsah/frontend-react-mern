import React, {useState} from 'react'
import {Button, Gap, Input, Textarea, Upload} from '../../components'
import './createblog.scss'
import { Link } from '../../components'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setForm, setImgPreview } from '../../config/redux/action'

const CreateBlog = () => {
  const {form, imgPreview} = useSelector(state => state.createBlogReducer);
  const {title, body, image} = form;
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  // const [title, setTitle] = useState('');
  // const [body, setBody] = useState('');
  // const [image, setImage] = useState('');
  // const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();

  const onUploadImage = (e) => {
    setLoading(true);
    const file = e.target.files[0];
    dispatch(setForm('image', file));
    dispatch(setImgPreview(URL.createObjectURL(file)));
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }

  const onInput = (formType, e) => {
    setLoading(true);
    if (formType === 'title') {
      dispatch(setForm('title', e.target.value));
    } else if (formType === 'body') {
      dispatch(setForm('body', e.target.value));
    }
    setTimeout(() => {
      setLoading(false)
    }, 10);
  }

  const onSubmit = async () => {
    // setTimeout(() => {
    //   setLoading(false);
    // }, 1000);
    const dataForm = new FormData();
    dataForm.append('title', title);
    dataForm.append('body', body);
    dataForm.append('image', image);

    const hitApiPost = (data) => {
      setLoading(true);
      Axios.post('http://localhost:4000/v1/blog/post', data, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      })
      .then(res => {
        setLoading(false);
        window.alert("Data Berhasil Ditambahkan!");
        navigate('/');
        console.log('post success: ', res);
      })
      .catch(err => {
        setLoading(false);
        window.alert(err.response.data?.message);
        console.log('error: ', err);
      })
    }

    hitApiPost(dataForm);
  }

  return (
    <div className='blog-post'>
      <Link title='kembali' onClick={() => navigate('/')}/>
      <p className='title'>Create New Blog Post</p>
      <Input label={'Post Title'} value={title} onChange={(e) => onInput('title', e)} />
      <Upload onChange={(e) => onUploadImage(e)} img={imgPreview} />
      <Textarea defaultValue={body} onChange={(e) => onInput('body', e)} />
      <Gap height={20} />
      <div className='button-action'>
        {loading ? <Button title='Loading...' disabled={true}/> 
         : <Button title='Save' onClick={onSubmit} />} 
      </div>
    </div>
  )
}

export default CreateBlog