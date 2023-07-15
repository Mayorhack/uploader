import Card from '@/components/Card'
import Table from '@/components/tables/Table'
import { userColumns } from '@/data/tableData'

import { useState } from 'react'
import Button from '@/components/Button'
import Overlay from '@/components/Overlay'
import { FiTrash2 } from 'react-icons/fi'
import FormInput from '@/components/forms/FormInput'
import useDelete from '@/hooks/useDelete'
import { useQuery } from '@tanstack/react-query'
import { publicFetch } from '@/utilities/fetchFunction'
import MySelect from '@/components/forms/MySelect'
import { options } from '@/data/options'
import useAddUsers from '@/hooks/useAddUsers'

const Users = () => {
  const { data } = useQuery(['users'], () => {
    return publicFetch.request({
      url: 'dashboard/admin/getallusers',
    })
  })
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showAddUsersModal, setAddUsersModal] = useState(false)
  const [tableRow, setGetTableRow] = useState('')

  const deleteUser = () => {
    setShowDeleteModal(true)
  }
  const confirmDelete = () => {
    deleteMutation.mutate()
  }
  const deleteMutation = useDelete(
    `Dashboard/Admin/DeleteAUser?id=${tableRow.id}`,
    'User'
  )
  const {
    userData,
    handleChange,
    handleSubmit,
    setUserData,
    error,
    mutateFile,
  } = useAddUsers()
  return (
    <div>
      <Card className={'my-3'}>
        <h3 className="text-2xl">Filter</h3>
        <div className="flex items-center justify-between">
          <FormInput label={'Search'} />
          <Button onClick={() => setAddUsersModal(true)}>Add Users</Button>
        </div>
      </Card>
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
      <Overlay
        openState={showAddUsersModal}
        onClick={() => setAddUsersModal(false)}
      >
        <div className="">
          <h3 className="text-xl font-medium">Add User</h3>
          <form action="" onSubmit={handleSubmit} autoComplete="off">
            <div className=" my-5 grid grid-cols-200 gap-5">
              <FormInput
                label={'First Name'}
                name="firstName"
                onChange={handleChange}
                value={userData.firstName}
                type={'text'}
              />
              <FormInput
                label={'Last Name'}
                name="lastName"
                onChange={handleChange}
                value={userData.lastName}
                type={'text'}
              />
              <FormInput
                label={'Email'}
                name="email"
                onChange={handleChange}
                value={userData.email}
                type={'text'}
              />
              <FormInput
                label={'Position'}
                name="position"
                onChange={handleChange}
                value={userData.position}
                type={'text'}
              />
              <FormInput
                label={'Address'}
                name="address"
                onChange={handleChange}
                value={userData.address}
                type={'text'}
              />
              <MySelect
                options={options}
                name={'role'}
                placeholder={'Select Role'}
                id={'role'}
                onChange={handleChange}
              />
              <FormInput
                label={'Password'}
                name="userPassword"
                onChange={handleChange}
                value={userData.userPassword}
                type={'password'}
                error={error.state}
                errorMessage={error.message}
                id={'userPassword'}
              />

              <FormInput
                label={'Confirm Password'}
                name="confirmUserPassword"
                onChange={handleChange}
                value={userData.confirmUserPassword}
                type={'password'}
                error={error.state}
                id={'userConfirmPassword'}
              />
            </div>
            <div className="">
              <label
                htmlFor="profile-image"
                className="block text-center border border-slate-300 rounded-lg w-full p-2 bg-[#ADD8E6] text-white"
              >
                Choose Profile Picture
              </label>
              <input
                type="file"
                name=""
                id="profile-image"
                className="hidden"
                onChange={(e) =>
                  setUserData((prev) => {
                    return {
                      ...prev,
                      image: e.target.files[0],
                    }
                  })
                }
                accept="image/*"
              />
            </div>

            <div className="mt-3 flex items-center justify-end gap-4">
              <Button
                variant="outlined"
                onClick={() => setAddUsersModal(false)}
              >
                Cancel
              </Button>
              <Button
                onClick={(e) => {
                  handleSubmit(e)
                  mutateFile.isSuccess ? showAddUsersModal(false) : null
                }}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </Overlay>
    </div>
  )
}

export default Users
