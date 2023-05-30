import ImageCard from '@/components/ImageCard'
import profile from '@/assets/profile.png'
import Image from 'next/image'

const Biography = () => {
  return (
    <div className="my-8">
      <div className="flex">
        <div className="w-3/4 flex overflow-hidden  h-auto snap-x">
          <div className="flex w-full h-[430px]">
            <Image
              src={profile}
              alt=""
              className="min-w-full  object-contain"
            />
            <Image src={profile} alt="" className="min-w-full text-white " />
            <Image src={profile} alt="" className="min-w-full " />
            <Image src={profile} alt="" className="min-w-full " />
          </div>
        </div>
        <ImageCard
          src={profile}
          alt={'ceo name'}
          name={'Chief O.B.A Akin-olugbade'}
          title={'Founder'}
        />
      </div>
    </div>
  )
}

export default Biography
