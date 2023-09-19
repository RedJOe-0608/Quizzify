import {Row, Col} from 'react-bootstrap'
import Quiz from '../components/Quiz'
import { useEffect, useState } from 'react'

const HomePage = () => {

const [quizzes, setQuizzes] = useState([])

useEffect(() => {
  const fetchQuizzes = async() => {
    const response = await fetch('/api/quizzes')
    const data  = await response.json()
    console.log(data);
    setQuizzes(data)
  }

  fetchQuizzes()
},[])

  return (
    <>
     <h1>All Quizzes</h1> 
     <Row>
        {quizzes.map((quiz) => (
            <Col key={quiz._id} sm={12} md={6} lg={4} xl={3}>
                <Quiz quiz={quiz} />
            </Col>
        ))}
     </Row>
    </>
  )
}

export default HomePage
