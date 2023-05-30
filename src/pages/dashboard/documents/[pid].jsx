import doc from '@/assets/doc.png'
import { publicFetch } from '@/utilities/fetchFunction'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Details = () => {
  const router = useRouter()
  const pid = router.query.pid
  const { data } = useQuery(['documentByID'], () => {
    return publicFetch.request({
      url: `Dashboard/Document?${pid}`,
    })
  })
  console.log(data)

  return (
    <div className="grid place-items-center">
      <div className="my-6">
        <Image src={doc} alt="doc" />
      </div>
    </div>
  )
}

export default Details
