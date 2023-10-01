import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import { FaEdit, FaTrash, FaCheck, FaTimes} from 'react-icons/fa'
import {Table, Button, Row ,Col} from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { useNavigate } from 'react-router-dom'
import { useDeleteUserMutation, useGetUsersQuery } from '../slices/usersApiSlice'
import {toast} from 'react-toastify'

const AdminUserListPage = () => {
  const navigate = useNavigate()

  const {data: users, isLoading, refetch, error} = useGetUsersQuery()
  console.log(users);

  const [deleteUser,{isLoading: loadingDelete}] = useDeleteUserMutation()


  const deletehandler = async(id) => {
    // console.log('delete');
    if(window.confirm('Are you sure you want to delete?')){
        try {
            await deleteUser(id)
            toast.success("User deleted successfully!")
            refetch()
        } catch (error) {
            toast.error(error?.data?.message || error?.error)
        }
    }
  }

  return (
    <>
      <h1>Users</h1>
     {isLoading ? <Loader /> : error ?  <Message variant="danger">{error}</Message> : 
     (
      <Table stripped="true" hover responsive className='table-sm'>
      <thead>
              <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>ADMIN</th>
                  <th></th>
              </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={user._id}>
                <td>{user?._id}</td>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.isAdmin ? <FaCheck style={{color: "green"}} /> : <FaTimes style={{color: "red"}}/>}</td>
                <td>
                {/* <LinkContainer to={`/admin/quizzes/${quiz?._id}/edit`}>
                              <Button variant='light' className='btn-sm mx-2'>
                                  <FaEdit />
                              </Button>
                          </LinkContainer> */}
                              <Button variant='danger' className='btn-sm'
                              onClick={() => deletehandler(user._id)}>
                                  <FaTrash style={{color: 'white'}} />
                              </Button>
                </td>
              </tr>
            ))}
          </tbody>
      </Table>
      
     )
     }
      {loadingDelete && <Loader />}
    </>
  )
}

export default AdminUserListPage