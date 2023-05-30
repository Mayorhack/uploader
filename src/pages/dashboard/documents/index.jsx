import Button from '@/components/Button'
import Card from '@/components/Card'
import Overlay from '@/components/Overlay'
import Table from '@/components/tables/Table'
import { columns } from '@/data/tableData'
import { publicFetch } from '@/utilities/fetchFunction'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { FiTrash2 } from 'react-icons/fi'

const Document = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [getTableRow, setGetTableRow] = useState('')
  const { data } = useQuery(['documents'], () => {
    return publicFetch.request({
      url: 'dashboard/document/getall',
    })
  })

  return (
    <div>
      <Card className="my-5">
        <h3>Filter</h3>
      </Card>
      <Card>
        <Table
          columns={columns}
          onClick={() => setShowDeleteModal(true)}
          setTableRow={(row) => setGetTableRow(row)}
          data={data?.data || []}
        />
      </Card>
      <Overlay
        openState={showDeleteModal}
        onClick={() => setShowDeleteModal(false)}
      >
        <div className={'max-w-md text-center w-full space-y-5'}>
          <div className="grid place-items-center">
            <FiTrash2
              className="text-red-600 text-center border-2 border-red-500 p-2 rounded-full "
              size={'70px'}
            />
          </div>

          <h4 className="text-2xl font-semibold ">
            You are about to delete this document
          </h4>
          <p>
            <span className="font-medium text-highlight mr-2">
              {getTableRow.documentName}
            </span>
            will be deleted permamently
            <br /> Are you sure?
          </p>
          <div className="flex gap-7 items-center justify-end">
            <Button variant="outlined">Cancel</Button>
            <Button className={'bg-red-500 hover:bg-red-400'}>Delete</Button>
          </div>
        </div>
      </Overlay>
    </div>
  )
}

export default Document
