import { AiOutlineCloudUpload } from 'react-icons/ai'
import { MdOutlineNotificationsActive } from 'react-icons/md'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { BsFileEarmarkText } from 'react-icons/bs'
import { FaUsers } from 'react-icons/fa'
export const data = [
  {
    id: 0,
    title: 'Upload',
    link: '/dashboard/upload',
    logo: <AiOutlineCloudUpload size={24} />,
  },
  {
    id: 1,
    title: 'Documents',
    link: '/dashboard/documents',
    logo: <HiOutlineDocumentText size={24} />,
  },
  {
    id: 2,
    title: 'Reminder',
    link: '/dashboard/reminder',
    logo: <MdOutlineNotificationsActive size={24} />,
  },
  {
    id: 3,
    title: 'Biography',
    link: '/dashboard/biographys',
    logo: <BsFileEarmarkText size={24} />,
  },
  {
    id: 4,
    title: 'Profile',
    link: '/dashboard/profile',
    logo: <BsFileEarmarkText size={24} />,
  },
  {
    id: 5,
    title: 'Users',
    link: '/dashboard/users',
    logo: <FaUsers size={24} />,
  },
]
