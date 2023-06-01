import DocumentActions from '@/components/DocumentActions'
import { FiUser } from 'react-icons/fi'

export const columns = (onClick, setTableRow) => [
  {
    name: 'Document Name',
    selector: (row) => row.name,
    sortable: true,
    cell: (row) => <p className=" text-base text-[#1a1a1ab8]">{row.name}</p>,
  },
  {
    name: 'Document Type',
    selector: (row) => row.type,
    cell: (row) => <p className=" text-base text-[#1a1a1ab8]">{row.type}</p>,
  },
  {
    name: 'Document Date',
    selector: (row) => row.creationDate,
    cell: (row) => (
      <p className=" text-base text-[#1a1a1ab8]">
        {`${new Date(row.creationDate).getDate()}-${
          new Date(row.creationDate).getMonth() + 1
        }-${new Date(row.creationDate).getFullYear()}`}
      </p>
    ),
  },
  {
    name: 'Staff',
    selector: (row) => row.staff,
    cell: (row) => <p className=" text-base text-[#1a1a1ab8]">{row.staff}</p>,
  },

  {
    name: 'Actions',
    center: true,
    allowOverflow: true,
    cell: (row) => (
      <DocumentActions
        row={row}
        onClick={onClick}
        setTableRow={(row) => setTableRow(row)}
        show={true}
      />
    ),
  },
]
export const userColumns = (onClick, setTableRow) => [
  {
    name: 'User',
    selector: (row) => row.firstName,
    sortable: true,
    cell: (row) => (
      <p className=" text-base text-[#1a1a1ab8] flex items-center gap-2">
        <span className="text-highlight text-3xl">
          {row.imageUrl ? row.imageUrl : <FiUser />}
        </span>
        <span className="flex items-center gap-1 capitalize">
          {row.firstName} {row.lastName}
        </span>
      </p>
    ),
  },

  {
    name: 'Email',
    selector: (row) => row.email,
    sortable: true,
    // grow: 2,
    minWidth: '280px',
    cell: (row) => <p className=" text-base text-[#1a1a1ab8]">{row.email}</p>,
  },
  {
    name: 'Phone Number',
    selector: (row) => row.phoneNumber,
    sortable: true,
    cell: (row) => (
      <p className=" text-base text-[#1a1a1ab8]">{row.phoneNumber}</p>
    ),
  },
  {
    name: 'Address',
    selector: (row) => row.address,
    sortable: true,
    cell: (row) => <p className=" text-base text-[#1a1a1ab8]">{row.address}</p>,
  },
  {
    name: 'Actions',
    center: true,
    allowOverflow: true,
    cell: (row) => (
      <DocumentActions
        row={row}
        onClick={onClick}
        setTableRow={(row) => setTableRow(row)}
      />
    ),
  },
]
