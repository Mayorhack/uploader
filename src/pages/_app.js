import Layout from '@/layout/Layout'
import '@/styles/globals.css'
import { errorResponse } from '@/utilities/errorResponse'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify'
import 'react-datepicker/dist/react-datepicker.css'
const client = new QueryClient({
  defaultOptions: {
    queries: {
      onError: (error) => errorResponse(error),
    },
    mutations: {
      onError: (error) => errorResponse(error),
    },
  },
})
export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer />
    </QueryClientProvider>
  )
}
