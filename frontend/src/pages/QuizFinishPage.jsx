import React from 'react'
import {useParams, Link, useNavigate} from 'react-router-dom'
import {Row, Col, Image, ListGroup,Card, Button} from 'react-bootstrap'
import { useGetSingleQuizQuery } from '../slices/quizzesApiSlice'
import { useSelector, useDispatch } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import {resumeQuizPython, resetQuizPython,addExercisePython,addLevelPython} from '../slices/pythonSlice'
import {resumeQuizJs, resetQuizJs, addExerciseJs, addLevelJs} from '../slices/javascriptSlice'
import {resumeQuizReact, resetQuizReact, addExerciseReact, addLevelReact} from '../slices/reactSlice'
import { useEffect } from 'react'
const QuizFinishPage = () => {

    const {id: quizId} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    
    const {data: singleQuiz, isLoading, error} = useGetSingleQuizQuery(quizId)
    console.log(singleQuiz);
    const quizName = singleQuiz?.name

    
    const {userInfo} = useSelector((state) => state.auth)

    let state = useSelector((state) => {
        if(quizName?.includes("React")){
          return state.react
        }
        else if(quizName?.includes("JavaScript")){
          return state.javascript
        } else{
          return state.python     
        }
      })

    const resetQuiz = () => {
        if(quizName?.includes("React")){
          dispatch(resetQuizReact(userInfo))
        }
        else if(quizName?.includes("JavaScript")){
          dispatch(resetQuizJs(userInfo))
        } else if(quizName?.includes("Python")){
          dispatch(resetQuizPython(userInfo))  
        }
        navigate(`/quiz/${quizId}/level/${1}/exercise/${1}`)
       }

 

  return (
    <Row>
        <Col md={5}>
          <Image src={singleQuiz?.image} alt={singleQuiz?.name} fluid/>
        </Col>
        <Col md={7}>
          <ListGroup variant='flush'>
          {/* <ListGroup.Item>
            <h2>{value}</h2>
          </ListGroup.Item> */}
            <ListGroup.Item>
              <h3>{singleQuiz?.name}</h3>
            </ListGroup.Item>
            {userInfo &&  <ListGroup.Item> 
            {/* <p>Levels Completed: {state.progress} / {singleQuiz?.totalLevels}</p>   */}
            <p>Congratulations On Completing The Quiz!</p>
            </ListGroup.Item>}
           
            <ListGroup.Item>
              <p>Your Score: {state?.overallScore}</p>
            </ListGroup.Item>
          
            <ListGroup.Item>
            <Button
              className='btn-block'
              style={{marginRight: '1.5rem'}}
                type='button'
                onClick={() => {navigate('/')
                }}
            >
              Try Other Quizzes  
            </Button>
            <Button
              className='btn-block'
                type='button'
                onClick={resetQuiz}
            >
              Start Over
            </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
  )
}

export default QuizFinishPage