import Button from '@/components/Button'
import FormInput from '@/components/forms/FormInput'
import MyDatePicker from '@/components/forms/MyDatePicker'

import Card from '@/components/Card'

// import Image from 'next/image'
const Create = () => {
  return (
    <Card className=" p-8 mt-8">
      <form action="" className="flex flex-col md:flex-row items-center">
        <div className="w-full p-5 space-y-6">
          <FormInput
            label={'Document Name'}
            name="documentName"
            // onChange={handleChange}
            // value={uploadData.documentName}
          />
          <MyDatePicker
            // onChange={(value) => {
            //   setUploadData((prev) => {
            //     return { ...prev, creationDate: value }
            //   })
            // }}

            name={'creationDate'}
            // value={uploadData.creationDate}
          />
          <FormInput
            label={'Staff Name'}
            name={'staff'}
            // onChange={handleChange}
            // value={uploadData.staff}
          />
          <FormInput
            label={'Email Address'}
            name={'emailAddress'}
            // onChange={handleChange}
            // value={uploadData.emailAddress}
          />
        </div>
        <div className="w-full h-[260px] border-2 border-dashed rounded-3xl">
          <MyDatePicker
            // onChange={(value) => {
            //   setUploadData((prev) => {
            //     return { ...prev, creationDate: value }
            //   })
            // }}

            name={'creationDate'}
            inline={true}
            // value={uploadData.creationDate}
          />
        </div>
      </form>
      <div className=" flex gap-8 justify-center">
        <Button variant="outlined">Cancel</Button>
        <Button>Upload</Button>
      </div>
    </Card>
  )
}

export default Create
