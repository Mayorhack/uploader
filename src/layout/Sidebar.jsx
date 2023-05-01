import Logo from '@/components/Logo'
import { data } from '@/data/sidebardata'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MdLogout } from 'react-icons/md'

const Sidebar = () => {
  const router = useRouter()
  return (
    <div className="absolute md:relative bg-white left-0  p-4 shadow-md min-h-screen min-w-[220px]">
      <Logo className={'relative mb-10'} />
      <div className="flex flex-col justify-between">
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
        <p className="mt-80  px-4 py-2 flex gap-8">
          <MdLogout size={24} />
          Log out
        </p>
      </div>
    </div>
  )
}

export default Sidebar
