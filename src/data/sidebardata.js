import { AiOutlineCloudUpload } from "react-icons/ai";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";
import { BsFileEarmarkText } from "react-icons/bs";
export const data = [
  {
    id: 0,
    title: "Upload",
    link: "/dashboard/upload",
    logo: <AiOutlineCloudUpload size={24} />,
  },
  {
    id: 1,
    title: "Documents",
    link: "/documents",
    logo: <HiOutlineDocumentText size={24} />,
  },
  {
    id: 2,
    title: "Reminder",
    link: "/reminder",
    logo: <MdOutlineNotificationsActive size={24} />,
  },
  {
    id: 3,
    title: "Biography",
    link: "/biography",
    logo: <BsFileEarmarkText size={24} />,
  },
];
