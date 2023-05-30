import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { publicFetch } from '@/utilities/fetchFunction'
import Cookies from 'js-cookie'
import { notifySuccess } from '../utilities/notifier'

const useProfile = () => {
  const profileForm = new URLSearchParams()
  const [profileData, setProfileData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  })
  const profileUpdateMutate = useMutation(
    () => {
      profileForm.append('email', profileData.email)
      profileForm.append('password', profileData.password)
      return publicFetch.request({
        url: 'login',
        method: 'POST',
        data: profileForm,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
    },
    {
      onSuccess: () => {
        notifySuccess('Profile Updated Successfully')
        setProfileData({
          oldPassword: '',
          newPassword: '',
          confirmPassword: '',
        })
        process.env.NODE_ENV === 'development'
          ? Cookies.set('Role', 'Admin')
          : null
      },
    }
  )
  const handleProfileChange = function (e) {
    const name = e.target.name
    const value = e.target.value
    setProfileData((prev) => {
      return { ...prev, [name]: value }
    })
  }
  return { profileUpdateMutate, handleProfileChange }
}

export default useProfile
