import React from 'react';
import './register.scss';
import { registerBg } from '../../assets';
import { Button, Gap, Input, Link } from '../../components';

const Register = () => {
  return (
    <div className='main-page'>
      <div className='left'>
        <img src={registerBg} className='bg-image' alt='Register-Background'></img>
      </div>
      <div className='right'>
        <p className='title'>Register</p>
        <Input label='Full Name' placeholder='Full Name'/>
        <Gap height={18}/>
        <Input label='Email' placeholder='Email'/>
        <Gap height={18}/>
        <Input label='Password' placeholder='Password'/>
        <Gap height={50}/>
        <Button title='Register' />
        <Gap height={100}/>
        <Link title='Kembali ke Login' />
      </div>
    </div>
  )
}

export default Register