import Logo from '@/components/Logo'
import Overlay from '@/components/Overlay'
import { data } from '@/data/sidebardata'
import useLogout from '@/hooks/useLogout'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { HiMenu } from 'react-icons/hi'
import { MdLogout } from 'react-icons/md'

const Sidebar = () => {
  const router = useRouter()
  const [menu, setMenu] = useState(false)
  const { logoutMutate } = useLogout()
  return (
    <>
      <HiMenu
        className="lg:hidden absolute w-8 h-8 left-5 top-9"
        onClick={() => setMenu(true)}
      />
      <div
        className={`lg:fixed absolute min-h-screen bg-white left-0 px-0 py-4 shadow-lg  w-[220px] overflow-y-scroll h-full duration-500 lg:translate-x-0 transition-transform disable  z-20 ${
          menu ? '-translate-x-0 ' : '-translate-x-full'
        }`}
      >
        <Logo className={'relative mb-10'} />
        <AiOutlineClose
          className="lg:hidden absolute w-5 h-5 right-0 top-3"
          onClick={() => setMenu(false)}
        />
        <div className="flex flex-col justify-between capitalize">
          <div>
            {data.map((item) => (
              <Link
                key={item.id}
                className={`my-4 flex px-4 py-2 gap-8 ${
                  router.pathname.includes(item.link)
                    ? ' bg-highlight rounded-md text-white'
                    : ''
                }`}
                href={item.link}
              >
                {item.logo}
                {item.title}
              </Link>
            ))}
          </div>
          <p
            className="mt-10 px-4 py-2 flex gap-8"
            onClick={() => logoutMutate.mutate()}
          >
            <MdLogout size={24} />
            Log out
          </p>
        </div>
      </div>
      {menu ? (
        <Overlay onClick={() => setMenu(false)} openState={menu} />
      ) : null}
    </>
  )
}

export default Sidebar
