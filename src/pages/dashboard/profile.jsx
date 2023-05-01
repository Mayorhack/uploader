import Image from 'next/image'
import {
  FiBell,
  FiEdit3,
  FiHelpCircle,
  FiLock,
  FiSettings,
} from 'react-icons/fi'
import { TabList, Tabs, Tab, TabPanel } from 'react-tabs'
import avatar from '@/assets/avatar.png'
import FormInput from '@/components/forms/FormInput'
import Button from '@/components/Button'
import Card from '@/components/Card'
const Profile = () => {
  return (
    <div className="mt-8">
      <Tabs>
        <TabList
          className={
            'flex justify-between gap-8 items-center border-b border-slate-400'
          }
        >
          <Tab
            className={
              'flex gap-2 items-center text-gray-400 py-2 px-4 cursor-pointer'
            }
            selectedClassName="active-tab"
          >
            <FiEdit3 /> Edit Profile
          </Tab>
          <Tab
            className={
              'flex gap-2 items-center text-gray-400 py-2 px-4 cursor-pointer'
            }
            selectedClassName="active-tab"
          >
            <FiBell /> Notification
          </Tab>
          <Tab
            className={
              'flex gap-2 items-center text-gray-400 py-2 px-4 cursor-pointer'
            }
            selectedClassName="active-tab"
          >
            <FiLock /> Security
          </Tab>
          <Tab
            className={
              'flex gap-2 items-center text-gray-400 py-2 px-4 cursor-pointer'
            }
            selectedClassName="active-tab"
          >
            <FiSettings /> Appearance
          </Tab>
          <Tab
            className={
              'flex gap-2 items-center text-gray-400 py-2 px-4 cursor-pointer'
            }
            selectedClassName="active-tab"
          >
            <FiHelpCircle /> Help
          </Tab>
        </TabList>

        <TabPanel>
          <Card className={' my-4 px-8'}>
            {' '}
            <div className="flex justify-between items-center md:max-w-lg mx-auto">
              <h3 className="text-2xl font-semibold">Edit Profile</h3>
              <div className="rounded-full w-12 h-12">
                <Image
                  src={avatar}
                  alt="profile picture"
                  className="w-12 h-12 rounded-full "
                />
              </div>
            </div>
            <form action="" className="space-y-6 my-4 md:max-w-lg mx-auto">
              <div className="grid grid-cols-200 gap-4">
                <FormInput label={'First Name'} />
                <FormInput label={'Last Name'} />
              </div>

              <FormInput label={'Email'} />
              <FormInput label={'Address'} />
              <FormInput label={'Password'} />

              <Button className={'w-full'}>Save Changes</Button>
            </form>
          </Card>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default Profile
