import { useRouter } from 'next/router'
import { Plus_Jakarta_Sans, Questrial } from 'next/font/google'
import Navbar from './Navbar'
import DashboardLayout from './DashboardLayout'
import Head from 'next/head'

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus',
})
const questrial = Questrial({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-questrial',
})
const Layout = ({ children }) => {
  const router = useRouter()
  return (
    <div
      className={`${plus_jakarta_sans.variable} ${questrial.variable} font-plus text-textColor`}
    >
      <Head>
        <title>{router.pathname.replaceAll('/', ' ')}</title>
      </Head>
      {router.pathname === '/login' || router.pathname === '/signup' ? (
        <>
          <Navbar />
          {children}
        </>
      ) : (
        <DashboardLayout>{children}</DashboardLayout>
      )}
    </div>
  )
}

export default Layout
