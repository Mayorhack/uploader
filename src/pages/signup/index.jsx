import AuthLayout from '@/layout/AuthLayout'
import Button from '@/components/Button'
import FormInput from '@/components/forms/FormInput'
import Link from 'next/link'

const Signup = () => {
  return (
    <AuthLayout>
      <h2 className="text-4xl my-6 font-medium ">Welcome</h2>
      <p className="text-slate-600 mb-6">
        Please provide your details to register your account
      </p>
      <div className="space-y-6">
        <div className="grid grid-cols-200 gap-3">
          <FormInput label={'First Name'} type={'text'} />
          <FormInput label={'Last Name'} type="text" />
        </div>
        <FormInput label={'Email'} type="email" />
        <FormInput label={'Password'} type={'password'} />
        <FormInput label="Confirm Password" type={'password'} />
      </div>

      <Button className={'my-6 w-full'}>Sign Up</Button>
      <div className="uppercase my-4 flex justify-between items-center">
        <div className="w-[40%] h-[1px] bg-slate-600"></div>or
        <div className="w-[40%] h-[1px] bg-slate-600"></div>
      </div>
      <p>
        Already have an account?
        <Link href={'/login'} className="text-highlight mx-2">
          Login
        </Link>
      </p>
    </AuthLayout>
  )
}

export default Signup
