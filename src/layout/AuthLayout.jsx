import Image from 'next/image'
import loginImage from '@/assets/login_man.svg'

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-[100vh] grid place-items-center bg-[#fcfcfc]">
      <div className="grid md:grid-cols-2 place-items-center max-w-4xl gap-8 shadow-lg min-h-[500px] rounded-2xl py-2 px-4 bg-[#fff]">
        <div className=" hidden md:block">
          <Image src={loginImage} alt="login_image" />
        </div>
        <div className="h-full w-full grid place-items-center">
          <form action="" className="w-full text-center ">
            {children}
          </form>
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
