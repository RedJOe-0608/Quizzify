import {useParams, Link, useNavigate} from 'react-router-dom'
import {Row, Col, Image, ListGroup,Button} from 'react-bootstrap'
import { useGetSingleQuizQuery } from '../slices/quizzesApiSlice'
import { useSelector, useDispatch } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import {resumeQuizPython, resetQuizPython} from '../slices/pythonSlice'
import {resumeQuizJs, resetQuizJs} from '../slices/javascriptSlice'
import {resumeQuizReact, resetQuizReact} from '../slices/reactSlice'



// Level 2 will only be added to the redux state when level 1 is completed and so on
const StartQuizPage = () => {

    const {id: quizId} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {data: singleQuiz, isLoading, error} = useGetSingleQuizQuery(quizId)
    

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

       const resumeQuiz = () => {
        if(userInfo && (state.progress === singleQuiz?.totalLevels))
        {
          navigate(`/quiz/${quizId}/quizfinish`)
        }
        else
        {
          userInfo ? navigate(`/quiz/${quizId}/level/${levelNo}/exercise/${exerciseNo}`) : navigate('/login')
        }
       }

       const resetQuiz = () => {
        if(quizName?.includes("React")){
          dispatch(resetQuizReact(userInfo))
        }
        else if(quizName?.includes("JavaScript")){
          dispatch(resetQuizJs(userInfo))
        } else if(quizName?.includes("Python")){
          dispatch(resetQuizPython(userInfo))  
        }
        userInfo ? navigate(`/quiz/${quizId}/level/${1}/exercise/${1}`) : navigate('/register')
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
            <ListGroup.Item>
              <h3>{singleQuiz?.name}</h3>
            </ListGroup.Item>
            {userInfo &&  <ListGroup.Item> 
            <p>Levels Completed: {state.progress} / {singleQuiz?.totalLevels}</p>  
            </ListGroup.Item>}
           
            <ListGroup.Item>
              <p>This {singleQuiz?.name} has {singleQuiz?.totalLevels} levels. Each level has multiple MCQ exercises. You need to pass each exercise in order to move on to the next exercise. Complete them to test your knowledge!</p>
            </ListGroup.Item>
          
            <ListGroup.Item>
            <Button
              className='btn-block'
              style={{marginRight: '1.5rem'}}
                type='button'
                onClick={resumeQuiz}
            >
              {userInfo ? 'Resume Quiz' : 'Login'}  
            </Button>
            <Button
              className='btn-block'
                type='button'
                onClick={resetQuiz}
            >
              {userInfo ? "Start Over": 'Register'}
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