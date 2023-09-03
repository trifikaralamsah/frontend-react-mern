import React, {useEffect, useState} from 'react'
import {Button, Gap, Input, Textarea, Upload} from '../../components'
import './createblog.scss'
import { Link } from '../../components'
import { useNavigate, useParams } from 'react-router-dom'
import Axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setForm, setImgPreview } from '../../config/redux/action'

const CreateBlog = () => {
  const {form, imgPreview} = useSelector(state => state.createBlogReducer);
  const {title, body, image} = form;
  const [isUpdate, setIsUpdate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingCacheEdit, setLoadingCacheEdit] = useState(false);
  const dispatch = useDispatch();

  // const [title, setTitle] = useState('');
  // const [body, setBody] = useState('');
  // const [image, setImage] = useState('');
  // const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
   console.log('params:', id);
   if(id) {
    setIsUpdate(true);
    setLoading(true);
    Axios.get(`http://localhost:4000/v1/blog/post/${id}`)
    .then(res => {
      const data = res.data.data;
      dispatch(setForm('title', data.title));
      dispatch(setForm('body', data.body));
      dispatch(setForm('image', data.image));
      dispatch(setImgPreview(`http://localhost:4000/${data.image}`));
      setTimeout(() => {
        setLoading(false);
      }, 500);
    })
    .catch(err => console.log('error', err))
   } else {
    setLoadingCacheEdit(true);
    setIsUpdate(false);
    setLoading(true);
    dispatch(setForm('title', ''));
    dispatch(setForm('body', ''));
    dispatch(setForm('image', ''));
    dispatch(setImgPreview(``));
    setTimeout(() => {
      setLoadingCacheEdit(false);
      setLoading(false);
    }, 500);
   }
  }, [id, dispatch])
  

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
      console.log(title);
    } else if (formType === 'body') {
      dispatch(setForm('body', e.target.value));
      console.log(body);
    }
    setTimeout(() => {
      setLoading(false)
    }, 10);
  }

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
      console.log('error: ', err);
    })
  }

  const updateToApi = (data, id) => {
    setLoading(true);
    Axios.put(`http://localhost:4000/v1/blog/post/${id}`, data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
    .then(res => {
      setLoading(false);
      window.alert("Data Berhasil DiUpdate!");
      navigate('/');
      console.log('post success: ', res);
    })
    .catch(err => {
      setLoading(false);
      console.log('error: ', err);
    })
  }

  const onSubmit = async () => {
    // setTimeout(() => {
    //   setLoading(false);
    // }, 1000);
    const dataForm = new FormData();
    dataForm.append('title', title);
    dataForm.append('body', body);
    dataForm.append('image', image);

    if(isUpdate) {
      console.log('Update Data')
      updateToApi(dataForm, id)
    } else {
      console.log('Tambah Data')
      hitApiPost(dataForm);
    }
  }

  if(loadingCacheEdit) {
    return <p>Loading...</p>
  }

  return (
    <div className='blog-post'>
      <Link title='kembali' onClick={() => navigate('/')}/>
      <p className='title'>{isUpdate ? 'Update' : 'Create New'} Blog Post</p>
      <Input label={'Post Title'} value={title} onChange={(e) => onInput('title', e)} />
      <Upload onChange={(e) => onUploadImage(e)} img={imgPreview} />
      <Textarea defaultValue={body} onChange={(e) => onInput('body', e)} />
      <Gap height={20} />
      <div className='button-action'>
        {loading ? <Button title='Loading...' disabled={true}/> 
         : <Button title={isUpdate ? 'Update' : 'Simpan'} onClick={onSubmit} />} 
      </div>
    </div>
  )
}

export default CreateBlog