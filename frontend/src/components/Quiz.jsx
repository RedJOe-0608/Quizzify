import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Quiz = ({quiz}) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/quiz/${quiz._id}/startquiz`}>
        <Card.Img src={quiz.image} variant='top'/>
      </Link>
      <Card.Body>
        <Link  to={`/quiz/${quiz._id}/startquiz`}>
            <Card.Title as="div">
                <strong>{quiz.name}</strong>
            </Card.Title>
        </Link>
        <Card.Text as='p'>No. Of Levels: {quiz.totalLevels}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Quiz
