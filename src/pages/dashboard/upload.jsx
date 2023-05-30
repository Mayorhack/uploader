import Button from '@/components/Button'
import FormInput from '@/components/forms/FormInput'
import MyDatePicker from '@/components/forms/MyDatePicker'
import uploadIcon from '@/assets/Upload icon.png'
import Card from '@/components/Card'

import Image from 'next/image'
import useUpload from '@/hooks/useUpload'

const Upload = () => {
  const {
    uploadData,
    handleChange,
    handleSubmit,
    getInputProps,
    getRootProps,
    isDragActive,
    images,
    setImages,
    setUploadData,
  } = useUpload()

  return (
    <Card className=" p-8 mt-8">
      <form action="" className="flex flex-col md:flex-row items-center">
        <div className="w-full p-5 space-y-6">
          <FormInput
            label={'Document Name'}
            name="documentName"
            onChange={handleChange}
            value={uploadData.documentName}
          />
          <MyDatePicker
            onChange={(value) => {
              setUploadData((prev) => {
                return { ...prev, creationDate: value }
              })
            }}
            name={'creationDate'}
            value={uploadData.creationDate}
          />
          <FormInput
            label={'Staff Name'}
            name={'staff'}
            onChange={handleChange}
            value={uploadData.staff}
          />
          <FormInput
            label={'Email Address'}
            name={'emailAddress'}
            onChange={handleChange}
            value={uploadData.emailAddress}
          />
        </div>
        <div className="w-full h-[260px] border-2 border-dashed rounded-3xl">
          <div className="min-h-[210px]" {...getRootProps()}>
            <input className=" w-full " {...getInputProps()} />
            <div className=" min-h-[210px] flex justify-center items-center flex-col">
              <Image src={uploadIcon} alt="upload icon" />
              {isDragActive ? (
                <p className="">Release to drop the files here</p>
              ) : (
                <>
                  <p className="">
                    Click to browse or drag and drop your files
                  </p>
                </>
              )}
            </div>
          </div>
          {images.length ? (
            <div className="flex justify-between px-2 p ">
              <div className="gap-1 flex items-center">
                {images.map((item) => (
                  <p
                    key={item.name}
                    className="p-1 bg-slate-200 rounded-lg w-full max-w-fit text-xs "
                  >
                    {item.name}
                  </p>
                ))}
              </div>

              <button
                className="bg-red-300 text-xs rounded-full p-1 ml-24 text-white"
                onClick={() => setImages([])}
              >
                Clear All
              </button>
            </div>
          ) : null}
        </div>
      </form>
      <div className=" flex gap-8 justify-center">
        <Button variant="outlined">Cancel</Button>
        <Button onClick={handleSubmit}>Upload</Button>
      </div>
    </Card>
  )
}

export default Upload
