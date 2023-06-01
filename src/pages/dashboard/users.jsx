import Card from '@/components/Card'
import Table from '@/components/tables/Table'
import { userColumns } from '@/data/tableData'
import useUsers from '@/hooks/useUsers'
import { useState } from 'react'
import Button from '@/components/Button'

import Overlay from '@/components/Overlay'
import { FiTrash2 } from 'react-icons/fi'

const Users = () => {
  const { data } = useUsers()
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [tableRow, setGetTableRow] = useState('')

  const deleteUser = () => {
    setShowDeleteModal(true)
  }
  const confirmDelete = () => {
    console.log(tableRow)
  }

  return (
    <div>
      <Card> Filter </Card>
      <Card>
        <Table
          columns={userColumns}
          data={data?.data}
          setTableRow={(row) => setGetTableRow(row)}
          onClick={deleteUser}
        ></Table>
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
            <span className="font-medium text-highlight mr-2 capitalize ">
              User {tableRow.firstName}
            </span>
            will be deleted permamently
            <br /> Are you sure?
          </p>
          <div className="flex gap-7 items-center justify-end">
            <Button variant="outlined">Cancel</Button>
            <Button
              className={'bg-red-500 hover:bg-red-400'}
              onClick={confirmDelete}
            >
              Delete
            </Button>
          </div>
        </div>
      </Overlay>
    </div>
  )
}

export default Users
