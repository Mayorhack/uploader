import { useRouter } from 'next/router'
import DashboardNavbar from './DashboardNavbar'
import Sidebar from './Sidebar'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'

const DashboardLayout = ({ children }) => {
  const router = useRouter()
  const authCookie = Cookies.get('Role')
  const [cookie, setCookie] = useState(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setCookie(authCookie)
    setLoading(true)
    if (!authCookie) {
      setLoading(false)
      router.push('/login')
    }
    setTimeout(() => setLoading(false), 1000)

    return () => {}
  }, [router, authCookie, cookie])

  return (
    <>
      {!loading ? (
        cookie && (
          <main className="flex gap-8 bg-[#f9f9f9] relative">
            <Sidebar />
            <div className="w-full p-4 px-2 md:p-4 bg-[#f9f9f9] min-h-screen lg:ml-[220px]">
              <DashboardNavbar />
              {children}
            </div>
          </main>
        )
      ) : (
        <div className="bg-gray-400 opacity-75 h-screen w-screen grid place-items-center">
          <div class="loader">
            <div class="loader-square"></div>
            <div class="loader-square"></div>
            <div class="loader-square"></div>
            <div class="loader-square"></div>
            <div class="loader-square"></div>
            <div class="loader-square"></div>
            <div class="loader-square"></div>
          </div>
        </div>
      )}
    </>
  )
}

export default DashboardLayout
