import Image from 'next/image'
import { useRouter } from 'next/router'
import loginman from '@/assets/avatar.png'
import Link from 'next/link'
import { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { AiFillSetting } from 'react-icons/ai'
import { HiOutlineLogout } from 'react-icons/hi'
import useLogout from '@/hooks/useLogout'
import { MdChevronLeft } from 'react-icons/md'
const DashboardNavbar = () => {
  const [menu, setMenu] = useState(false)
  const router = useRouter()
  const { logoutMutate } = useLogout()
  return (
    <div className="flex justify-between w-full bg-white shadow-sm px-2 md:px-4 py-2 rounded-2xl items-center">
      <h2 className="uppercase text-2xl font-medium ml-8 lg:ml-4 flex items-center">
        {router.pathname.includes('create') ? (
          <MdChevronLeft onClick={() => router.back()} size={'28px'} />
        ) : null}
        {router.pathname.split('/')[2]}
      </h2>
      <div className="flex flex-col items-center relative ">
        <Image
          src={loginman}
          alt="profile photo"
          className="rounded-full w-8 h-8 cursor-pointer"
          onClick={() => {
            setMenu((prev) => !prev)
          }}
        />
        <p>User Name</p>
        <div
          className={` hidden md:block absolute translate-y-[-100%] -translate-x-10 bg-white shadow-md min-w-[200px] transition-all  duration-1000 ${
            menu ? 'translate-y-[50%] opacity-100' : 'opacity-0'
          }`}
        >
          <ul>
            <li className="flex items-center gap-5 hover:bg-highlight hover:text-white  px-4 py-2">
              <FaUser />
              <Link href={'/profile'}>Profile</Link>
            </li>
            <li className="flex items-center gap-5 hover:bg-highlight hover:text-white px-4  py-2">
              <AiFillSetting />
              Settings
            </li>
            <li
              className="flex items-center gap-5 hover:bg-red-400 hover:text-white px-4 py-2 text-red-500 mt-2"
              onClick={() => logoutMutate.mutate()}
            >
              <HiOutlineLogout /> Log out
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DashboardNavbar
