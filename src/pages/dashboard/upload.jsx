import Button from '@/components/Button'
import FormInput from '@/components/forms/FormInput'
import MyDatePicker from '@/components/forms/MyDatePicker'
import uploadIcon from '@/assets/Upload icon.png'
import Image from 'next/image'
import Card from '@/components/Card'

const Upload = () => {
  return (
    <Card className=" p-8 mt-8">
      <form action="" className="flex flex-col md:flex-row items-center">
        <div className="w-full p-5 space-y-6">
          <FormInput label={'Document Name'} />
          <MyDatePicker />
          <FormInput label={'Staff Name'} />
          <FormInput label={'Email Address'} />
        </div>
        <div className="w-full p-5 ">
          <div className="border-2 border-dashed rounded-3xl min-h-[260px] flex justify-center items-center flex-col">
            <Image src={uploadIcon} alt="upload icon" />
            Click to browse or drag and drop your files
          </div>
        </div>
      </form>
      <div className=" flex gap-8 justify-center">
        <Button variant="outlined">Cancel</Button>
        <Button>Upload</Button>
      </div>
    </Card>
  )
}

export default Upload
