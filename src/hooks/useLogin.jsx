import { publicFetch } from '@/utilities/fetchFunction'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'

import { useState } from 'react'
import { notifySuccess } from '@/utilities/notifier'
import Cookies from 'js-cookie'

const useLogin = () => {
  const router = useRouter()
  const loginForm = new URLSearchParams()

  const loginMutate = useMutation(
    () => {
      loginForm.append('email', loginData.email)
      loginForm.append('password', loginData.password)
      return publicFetch.request({
        url: 'login',
        method: 'POST',
        data: loginForm,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
    },
    {
      onSuccess: () => {
        notifySuccess('Login Successful')
        router.push('/dashboard/upload')
        process.env.NODE_ENV === 'development'
          ? Cookies.set('Role', 'Admin')
          : null
      },
    }
  )
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  })

  const handleChange = function (e) {
    const name = e.target.name
    const value = e.target.value
    setLoginData((prev) => {
      return { ...prev, [name]: value }
    })
  }

  const handleSubmit = function (e) {
    e.preventDefault()
    loginMutate.mutate()
  }
  return [loginData.email, loginData.password, handleChange, handleSubmit]
}

export default useLogin
