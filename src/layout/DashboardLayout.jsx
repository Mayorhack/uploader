import { useRouter } from 'next/router'
import DashboardNavbar from './DashboardNavbar'
import Sidebar from './Sidebar'
import Cookies from 'js-cookie'
import { useEffect } from 'react'

const DashboardLayout = ({ children }) => {
  const router = useRouter()
  const authCookie = Cookies.get('Role')

  useEffect(() => {
    if (!authCookie) {
      router.push('/login')
    }
  }, [router, authCookie])

  return (
    <main className="flex gap-8 bg-[#f9f9f9] relative">
      <Sidebar />
      <div className="w-full p-4 px-2 md:p-4 bg-[#f9f9f9] min-h-screen lg:ml-[220px]">
        <DashboardNavbar />
        {children}
      </div>
    </main>
  )
}

export default DashboardLayout
