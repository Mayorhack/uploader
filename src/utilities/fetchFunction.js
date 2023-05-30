import axios from 'axios'

const publicFetch = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development' ? 'https://localhost:7151/' : '/',
  headers: {
    RequestVerificationToken:
      'CfDJ8M78HWgNYSBBukhkTnG0LkYNJFFhOfIY7z5XbY6vriOc-TlgQEdEdH6Nd-eXRTeIH0sr8typsvpdmsmg7Z-kwjGXAd61wqk3I8PEJBIa_ppM6zdVpWl4kqPackLr5d7lneDnaIM21BaS9jLj2wdFYOA',
  },
})

const privateFetch = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development' ? 'https://localhost:7151/' : '',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

export { publicFetch, privateFetch }
