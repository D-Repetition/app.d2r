import React from 'react'
import AuthWrapper from '../../wrappers/AuthWrapper'
import { pages } from '@/constants/authData'

const Login = () => {
  return (
      <>
          <AuthWrapper {...pages.login.page_data}>
            <div className="">Hello</div>
          </AuthWrapper>
      </>
  )
}

export default Login
