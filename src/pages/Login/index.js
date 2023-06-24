import React from 'react'
import { loginBg } from '../../assets'
import { Button, Gap, Input, Link } from '../../components'

const Login = () => {
  return (
    <div className='main-page'>
      <div className='left'>
        <img src={loginBg} className='bg-image' alt='Login-Background'></img>
      </div>
      <div className='right'>
        <p className='title'>Login</p>
        <Input label='Email' placeholder='Email' />
        <Gap height={10} />
        <Input label='Password' placeholder='Password' />
        <Gap height={30} />
        <Button title='Login' />
        <Gap height={100} />
        <Link title='Belum Punya Akun' />
      </div>
    </div>
  )
}

export default Login