import {Card} from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const Quiz = ({quiz}) => {
  console.log(quiz);

  let state = useSelector((state) => {
    if(quiz?.name.includes("React")){
      return state.react
    }
    else if(quiz?.name.includes("JavaScript")){
      return state.javascript
    } else{
      return state.python     
    }
  })

  const {userInfo} = useSelector((state) => state.auth)

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
        {localStorage.getItem("userInfo") ?  <Card.Text as='p'>Your Progress: {
          quiz?.name.includes("JavaScript") ? userInfo?.javascript?.progress : quiz?.name.includes("React") ? userInfo?.react?.progress : userInfo?.python?.progress
        } </Card.Text> : ''}
       
        <Card.Text as='p'>No. Of Levels: {quiz.totalLevels}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Quiz
