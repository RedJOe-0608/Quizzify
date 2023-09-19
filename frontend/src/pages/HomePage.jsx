import {Row, Col} from 'react-bootstrap'
import Quiz from '../components/Quiz'
import { useGetQuizzesQuery } from '../slices/quizzesApiSlice'
import Loader from '../components/Loader'
import Message from '../components/Message'

const HomePage = () => {

const {data: quizzes, isLoading, error} = useGetQuizzesQuery()

  return (
    <>
    {isLoading ? (
      <Loader />
    ) : error ? (
      <Message variant="danger">{error?.data?.message || error?.error}</Message>
    ) : (
      <>
      <h1>All Quizzes</h1> 
      <Row>
         {quizzes?.map((quiz) => (
             <Col key={quiz._id} sm={12} md={6} lg={4} xl={3}>
                 <Quiz quiz={quiz} />
             </Col>
         ))}
      </Row>
      </>
    )}
    
    </>
  )
}

export default HomePage
