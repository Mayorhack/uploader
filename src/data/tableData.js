import DocumentActions from '@/components/DocumentActions'

export const columns = [
  {
    name: 'Document Name',
    selector: (row) => row.documentName,
    sortable: true,
    cell: (row) => (
      <p className=" text-base text-[#1a1a1ab8]">{row.documentName}</p>
    ),
  },
  {
    name: 'Document Type',
    selector: (row) => row.documentType,
    cell: (row) => (
      <p className=" text-base text-[#1a1a1ab8]">{row.documentType}</p>
    ),
  },
  {
    name: 'Document Date',
    selector: (row) => row.documentDate,
    cell: (row) => (
      <p className=" text-base text-[#1a1a1ab8]">{row.documentDate}</p>
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
    cell: (row) => <DocumentActions row={row} />,
  },
]

export const data = [
  {
    id: 1,
    documentName: 'Transport Document1',
    documentType: 'PDF',
    documentDate: '06/09/2022, 22:02',
    staff: 'Dr Tolu Bolawa',
  },
  {
    id: 2,
    documentName: 'Transport Document3',
    documentType: 'PDF',
    documentDate: '06/09/2022, 22:02',
    staff: 'Dr Tolu Bolawa',
  },
  {
    id: 3,
    documentName: 'Transport Document4',
    documentType: 'PDF',
    documentDate: '06/09/2022, 22:02',
    staff: 'Dr Tolu Bolawa',
  },
  {
    id: 4,
    documentName: 'Transport Document5',
    documentType: 'PDF',
    documentDate: '06/09/2022, 22:02',
    staff: 'Dr Tolu Bolawa',
  },
  {
    id: 5,
    documentName: 'Transport Document6',
    documentType: 'PDF',
    documentDate: '06/09/2022, 22:02',
    staff: 'Dr Tolu Bolawa',
  },
  {
    id: 6,
    documentName: 'Transport Document7',
    documentType: 'PDF',
    documentDate: '06/09/2022, 22:02',
    staff: 'Dr Tolu Bolawa',
  },
  {
    id: 7,
    documentName: 'Transport Document',
    documentType: 'PDF',
    documentDate: '06/09/2022, 22:02',
    staff: 'Dr Tolu Bolawa',
  },
  {
    id: 8,
    documentName: 'Transport Document8',
    documentType: 'PDF',
    documentDate: '06/09/2022, 22:02',
    staff: 'Dr Tolu Bolawa',
  },
  {
    id: 9,
    documentName: 'Transport Document9',
    documentType: 'PDF',
    documentDate: '06/09/2022, 22:02',
    staff: 'Dr Tolu Bolawa',
  },
  {
    id: 10,
    documentName: 'Transport Document10',
    documentType: 'PDF',
    documentDate: '06/09/2022, 22:02',
    staff: 'Dr Tolu Bolawa',
  },
  {
    id: 11,
    documentName: 'Transport Document11',
    documentType: 'PDF',
    documentDate: '06/09/2022, 22:02',
    staff: 'Dr Tolu Bolawa',
  },
  {
    id: 12,
    documentName: 'Transport Document12',
    documentType: 'PDF',
    documentDate: '06/09/2022, 22:02',
    staff: 'Dr Tolu Bolawa',
  },
  {
    id: 13,
    documentName: 'Transport Document13',
    documentType: 'PDF',
    documentDate: '06/09/2022, 22:02',
    staff: 'Dr Tolu Bolawa',
  },
  {
    id: 14,
    documentName: 'Transport Document14',
    documentType: 'PDF',
    documentDate: '06/09/2022, 22:02',
    staff: 'Dr Tolu Bolawa',
  },
  {
    id: 15,
    documentName: 'Transport Document15',
    documentType: 'PDF',
    documentDate: '06/09/2022, 22:02',
    staff: 'Dr Tolu Bolawa',
  },
]
