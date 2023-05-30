import Image from 'next/image'
import Card from './Card'
import Button from './Button'

const ImageCard = ({ src, alt, title, name }) => {
  return (
    <Card className={'text-center max-w-xs space-y-4'}>
      <Image src={src} alt={alt} className="rounded-full " />
      <p className="text-xl text-highlight font-medium">{name}</p>

      <p className="font-semibold">{title}</p>
      <Button className={'w-full'}>View Full Profile</Button>
    </Card>
  )
}

export default ImageCard
