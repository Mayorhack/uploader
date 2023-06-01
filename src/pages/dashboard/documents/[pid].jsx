import { publicFetch } from '@/utilities/fetchFunction'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Details = () => {
  const router = useRouter()
  const pid = router.query.pid
  const { data } = useQuery(['documentByID'], () => {
    return publicFetch.request({
      url: `Dashboard/Document?id=${pid}`,
    })
  })
  const docData = data?.data

  return (
    <div className="grid place-items-center">
      <h3 className="text-highlight capitalize text-2xl font-medium my-4">
        {docData?.name}
      </h3>
      <div className="my-6">
        <Image
          // src={JSON.parse(docData?.documentUrl)[0]}
          alt="doc"
          width={14}
          height={14}
        />
      </div>
    </div>
  )
}

export default Details
