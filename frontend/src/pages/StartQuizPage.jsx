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



// Level 2 will only be added to the redux state when level 1 is completed and so on



const StartQuizPage = () => {

    const {id: quizId} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {data: singleQuiz, isLoading, error} = useGetSingleQuizQuery(quizId)
    console.log(singleQuiz);
    

    const quizName = singleQuiz?.name


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

    const {userInfo} = useSelector((state) => state.auth)


    //if a user is logged in
    if(userInfo){
      if(quizName?.includes("React")){
        dispatch(resumeQuizReact({userInfo}))
      }
      else if(quizName?.includes("JavaScript")){
        dispatch(resumeQuizJs({userInfo}))
      } else if(quizName?.includes("Python")){
        dispatch(resumeQuizPython({userInfo}))    
      }
      
      
    }

    const level = state?.level
      let levelNo = level[level.length-1]?.levelNo;
      let ex = level[level.length-1]?.ex;

       let exerciseNo = ex[ex.length - 1]?.exerciseNo;

       const resetQuiz = () => {
       dispatch( resetQuizReact(userInfo))
        navigate(`/quiz/${quizId}/level/${1}/exercise/${1}`)
       }
    
  return (
    <>
    {isLoading ? (
       <Loader />
    ) : error ? (
      <Message variant="danger">{error?.data?.message || error?.error}</Message>
    ) : (
      <>
      <Link className='btn btn-light my-3' to="/">Go Back</Link>
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
            <ListGroup.Item>
              <p>Total No. Of Levels: {singleQuiz?.totalLevels}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>Your Progress: {singleQuiz?.yourProgress}</p>
            </ListGroup.Item>
          
            <ListGroup.Item>
            <Button
              className='btn-block'
              style={{marginRight: '1.5rem'}}
                type='button'
                onClick={() => navigate(`/quiz/${quizId}/level/${levelNo}/exercise/${exerciseNo}`)}
            >
              Resume Quiz
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
    </>
    )}
   </> 
  )
}

export default StartQuizPage