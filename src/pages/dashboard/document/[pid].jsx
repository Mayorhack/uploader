import doc from '@/assets/doc.png'
import Image from 'next/image'

const Details = () => {
  return (
    <div className="grid place-items-center">
      <div className="my-6">
        <Image src={doc} alt="doc" />
      </div>
    </div>
  )
}

export default Details
