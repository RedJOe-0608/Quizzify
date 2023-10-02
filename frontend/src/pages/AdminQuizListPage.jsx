import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import { FaEdit, FaTrash} from 'react-icons/fa'
import {Table, Button, Row ,Col} from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { useGetQuizzesQuery } from '../slices/quizzesApiSlice'

const AdminQuizListPage = () => {

  const {data: quizzes, isLoading, error} = useGetQuizzesQuery()

  //gets the number of exercises in each quiz in an array
  let exercisesCount = []
  quizzes?.forEach((quiz) => {
    let eCount = 0
    quiz?.level.forEach((level) => {
      eCount+=level?.exercises?.length
    })
    exercisesCount?.push(eCount)

  })
  const deleteHandler = () => {}

  return (
    <>
    {isLoading ? <Loader /> : error ? <Message variant="danger">{error}</Message> : (
      <Row className='align-items-center'>
      <Col>
        <h1>Quizzes</h1>
      </Col>
          <Table stripped="true" hover responsive className='table-sm'>

          <thead>
                  <tr>
                      <th>ID</th>
                      <th>NAME</th>
                      <th>LEVELS</th>
                      <th>EXERCISES</th>
                      <th></th>
                  </tr>
              </thead>
              <tbody>
                {quizzes?.map((quiz, index) => (
                  <tr key={quiz._id}>
                    <td>{quiz?._id}</td>
                    <td>{quiz?.name}</td>
                    <td>{quiz?.totalLevels}</td>
                    <td>{exercisesCount[index]}</td>
                    <td>
                    <LinkContainer to={`/admin/quizzes/${quiz?._id}/edit`}>
                                  <Button variant='light' className='btn-sm mx-2'>
                                      <FaEdit />
                                  </Button>
                              </LinkContainer>
                                  <Button variant='danger' className='btn-sm'
                                  onClick={() => deleteHandler(quiz._id)}>
                                      <FaTrash style={{color: 'white'}} />
                                  </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
          </Table>
    </Row>
    )}
      
    </>
  )
}

export default AdminQuizListPage