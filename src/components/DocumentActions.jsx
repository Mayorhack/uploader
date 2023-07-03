import Link from 'next/link'
import { FiDownload, FiFileText, FiTrash2 } from 'react-icons/fi'

const DocumentActions = ({ row, onClick, setTableRow, show }) => {
  const handleClick = () => {
    onClick()
    setTableRow(row)
  }
  return (
    <div className="flex gap-3 items-center text-[#333] cursor-pointer">
      {show ? (
        <>
          <Link href={`documents/${row.id.toString()}`}>
            <FiFileText size={'20px'} />
          </Link>
          <FiDownload size={'20px'} />
        </>
      ) : null}
      <FiTrash2 size={'20px'} onClick={handleClick} className="text-pink-600" />
    </div>
  )
}

export default DocumentActions
