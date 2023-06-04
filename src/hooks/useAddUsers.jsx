import { useMutation } from '@tanstack/react-query'
import { publicFetch } from '@/utilities/fetchFunction'
import { useState } from 'react'
import { successAlert } from '@/utilities/sweetAlert'
import FormData from 'form-data'
const useAddUsers = () => {
  const formData = new FormData()
  const pattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[a-zA-Z0-9]).*$/

  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    position: '',
    role: null,
    staff: '',
    address: '',
    userPassword: '',
    confirmUserPassword: '',
    image: '',
  })
  const [error, setError] = useState({ state: false, message: '' })
  const mutateFile = useMutation(
    async () => {
      formData.append('Email', userData.email)
      formData.append('FirstName', userData.firstName),
        formData.append('LastName', userData.lastName),
        formData.append('Position', userData.position),
        formData.append('Role', userData.role),
        formData.append('Address', userData.address),
        formData.append('Password', userData.userPassword),
        formData.append('ConfirmPassword', userData.confirmUserPassword)
      formData.append('Image', userData.image)

      const response = await publicFetch.request({
        url: '/Dashboard/Admin/CreateUser',
        method: 'post',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      return response
    },
    {
      onSuccess: () => {
        successAlert('User Created successfuly')
        setUserData({
          firstName: '',
          lastName: '',
          email: '',
          position: '',
          role: null,
          staff: '',
          address: '',
          userPassword: '',
          confirmUserPassword: '',
        })
      },
    }
  )
  const handleChange = function (e) {
    const name = e.target.name
    const value = e.target.value

    setUserData((prev) => {
      return { ...prev, [name]: value }
    })
    if (userData.userPassword === userData.confirmUserPassword) {
      setError({
        state: false,
        message: '',
      })
    }
  }
  const handleSubmit = function (e) {
    e.preventDefault()
    if (userData.userPassword !== userData.confirmUserPassword) {
      setError(() => {
        return {
          state: true,
          message: 'Password do not match',
        }
      })
    } else if (!pattern.test(userData.userPassword)) {
      setError({
        state: true,
        message: 'At least one non alphanumeric character, uppercase',
      })
    } else {
      setError({
        state: false,
        message: '',
      })
      mutateFile.mutate()
    }
  }
  return {
    userData,
    setUserData,
    handleChange,
    handleSubmit,
    error,
    mutateFile,
  }
}

export default useAddUsers
