'use client'
import { useMutation } from '@tanstack/react-query'

import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import FormData from 'form-data'
import { publicFetch } from '@/utilities/fetchFunction'
import { successAlert } from '@/utilities/sweetAlert'

const useUpload = () => {
  const [images, setImages] = useState([])
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      setImages((prevState) => [...prevState, file])
    })
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
  const formData = new FormData()
  const [uploadData, setUploadData] = useState({
    emailAddress: '',
    documentName: '',
    creationDate: null,
    staff: '',
  })
  const mutateFile = useMutation(
    async () => {
      formData.append('Document.EmailAddress', uploadData.emailAddress)
      formData.append('Document.Name', uploadData.documentName),
        formData.append(
          'Document.CreationDate',
          uploadData.creationDate.toISOString()
        )
      formData.append('Document.Staff', uploadData.staff)
      formData.append('Files', images[0])

      const response = await publicFetch.request({
        url: '/Dashboard/Document/Upsert',
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
        successAlert('Document Uploaded successfuly')
        setUploadData({
          emailAddress: '',
          documentName: '',
          creationDate: null,
          staff: '',
        })
        setImages([])
      },
    }
  )
  const handleChange = function (e) {
    const name = e.target.name
    const value = e.target.value

    setUploadData((prev) => {
      return { ...prev, [name]: value }
    })
  }
  const handleSubmit = function (e) {
    e.preventDefault()

    mutateFile.mutate()
    console.log(mutateFile)
  }
  return {
    uploadData,
    setUploadData,
    handleChange,
    handleSubmit,
    getInputProps,
    getRootProps,
    isDragActive,
    images,
    setImages,
  }
}

export default useUpload
