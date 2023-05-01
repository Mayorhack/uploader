import Link from 'next/link'
import { FiCheck, FiDelete, FiDownload, FiFileText } from 'react-icons/fi'

const DocumentActions = ({ row }) => {
  return (
    <div className="flex gap-3 items-center text-[#333]">
      <Link href={`document/${row.id.toString()}`}>
        <FiFileText size={'20px'} />
      </Link>
      <FiDownload size={'20px'} />
      <FiCheck size={'20px'} />
      <FiDelete size={'20px'} />
    </div>
  )
}

export default DocumentActions
