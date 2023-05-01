import DataTable from 'react-data-table-component'

import { useMemo } from 'react'
import { data } from '@/data/tableData'

const Table = ({ columns }) => {
  const customStyles = {
    header: {
      style: {},
    },
    headRow: {
      style: {
        background: 'rgba(37, 121, 169, 0.3)',
        borderRadius: '4px 4px 0px 0px',
        color: '#fff',
        fontWeight: '600',
        fontSize: '14px',
        lineHeight: '18px',
        border: 'none',
      },
    },
    cells: {
      style: {
        borderBottom: '0.5px solid #ccc',
        '&:not(:last-of-type)': {
          borderBottom: '0.5px solid #ccc',
        },
      },
    },
    rows: {
      style: {
        borderBottom: '0px solid #ccc',
        '&:not(:last-of-type)': {
          borderBottom: '0px solid #ccc',
        },
      },
    },
  }

  const tableColumn = useMemo(() => {
    return columns
  }, [])

  return (
    <DataTable
      columns={tableColumn}
      data={data}
      pagination
      customStyles={customStyles}
      selectableRows
    />
  )
}

export default Table
