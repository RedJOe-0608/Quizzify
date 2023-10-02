import React from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Button} from 'react-bootstrap'
import { useGetSingleQuizQuery } from '../slices/quizzesApiSlice'
import { useSelector, useDispatch } from 'react-redux'
import { resetQuizPython} from '../slices/pythonSlice'
import {resetQuizJs} from '../slices/javascriptSlice'
import {resetQuizReact} from '../slices/reactSlice'
import { useEffect } from 'react'
import { useProfileMutation } from '../slices/usersApiSlice'
const QuizFinishPage = () => {

    const {id: quizId} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {data: singleQuiz} = useGetSingleQuizQuery(quizId)
    const quizName = singleQuiz?.name

    const [updateProfile] = useProfileMutation()
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

      //The logic behind this useEffect is that when each exercise page loads, we will then update the user details in the database. So, when we click on next in the modal, the neccessary calculations will done (i.e. a new level/exercise will be added, and then when we navigate to the next exercise page, all the made changes will be reflected in the database)
      useEffect(() => {
        const updateUserDB = async() => {
          if(quizName?.includes("React")){
          await updateProfile({_id: userInfo._id,react: state})
        }
        else if(quizName?.includes("JavaScript")){
          await updateProfile({_id: userInfo._id,javascript: state})
        } else if(quizName?.includes("Python")){
          await updateProfile({_id: userInfo,python: state})
        }
  
        }
  
        updateUserDB()
      },[state,quizName,updateProfile,userInfo, userInfo._id])

    
  

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
            <ListGroup.Item>
              <h3>{singleQuiz?.name}</h3>
            </ListGroup.Item>
            {userInfo &&  <ListGroup.Item> 
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
