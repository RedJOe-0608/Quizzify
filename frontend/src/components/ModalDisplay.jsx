import {Modal, Button} from 'react-bootstrap'
import { useGetSingleQuizQuery } from '../slices/quizzesApiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetQuizPython,addExercisePython,addLevelPython, updateExercisePython} from '../slices/pythonSlice'
import { resetQuizJs, addExerciseJs, addLevelJs, updateExerciseJs} from '../slices/javascriptSlice'
import {resetQuizReact, addExerciseReact, addLevelReact, updateExerciseReact} from '../slices/reactSlice'
import { updateUserJavascriptExercise, updateUserReactExercise, updateUserPythonExercise } from '../slices/authSlice';
import { useProfileMutation } from '../slices/usersApiSlice';
import Loader from '../components/Loader'

const ModalDisplay = ({show, setShow, lNo, eNo, id, levelsLength, exercisesLength, exerciseScore, setExerciseScore, exercisePassScore, disabled, setDisabled}) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
    // const { id:quizId, levelNo,exerciseNo} = useParams()
  const {data: singleQuiz} = useGetSingleQuizQuery(id)
    console.log(singleQuiz);
    
    const {userInfo} = useSelector((state) => state.auth)

    const [ {isLoading: loadingUpdateProfile}] = useProfileMutation()

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

    console.log(state);
    const {level} = state
    let {levelScore,levelNo, ex} = level[level.length -1];  

  const handleTryAgain =() => {
    setDisabled(false)

    try {
      setExerciseScore(0)
      setShow(false);
      if(quizName?.includes("React")){
        dispatch(resetQuizReact(userInfo))
        // const res = await updateProfile({_id: userInfo._id,react: state}).unwrap()
        // console.log(res);
      }
      else if(quizName?.includes("JavaScript")){
        dispatch(resetQuizJs(userInfo))
        // const res = await updateProfile({_id: userInfo._id,javascript: state}).unwrap()
        // console.log(res);
      } else{
        dispatch(resetQuizPython(userInfo))
        // const res = await updateProfile({_id: userInfo._id,python: state}).unwrap()
        // console.log(res);
      }

     
    } catch (error) {
      console.log(error);
    }
 


   
    navigate(`/quiz/${id}/level/${1}/exercise/${1}`)
  }

  const handleNext = async() => {


    if(quizName?.includes("React")){
      dispatch(updateExerciseReact({exerciseScore,exercisePassScore,levelsLength,exercisesLength}))

    }
    else if(quizName?.includes("JavaScript")){
      dispatch(updateExerciseJs({exerciseScore,exercisePassScore,levelsLength,exercisesLength}))
     
    } else{
      dispatch(updateExercisePython({exerciseScore,exercisePassScore,levelsLength,exercisesLength}))     
    }
    

    let newExercise = []
    newExercise.push({
        exerciseNo: ((ex.length+1) % exercisesLength) === 0 ? exercisesLength : (ex.length+1) % exercisesLength,
        exerciseScore: 0,
        exerciseStatus: "not passed"
      })

      let newlevel = []
      newlevel.push({
        levelNo: levelNo+1,
        levelStatus: "not passed",
        levelScore: 0,
        isCompleted: false,
        ex: newExercise
      })


      

    //this is for adding the next exercise
    if(levelsLength>=1 && eNo < exercisesLength)
    {
      if(quizName?.includes("React")){
        dispatch(addExerciseReact({newExercise}))
      }
      else if(quizName?.includes("JavaScript")){
        dispatch(addExerciseJs({newExercise}))
      } else{
        dispatch(addExercisePython({newExercise}))    
      }
      //this is for updating the level
    }else if(levelsLength > 1 && eNo === exercisesLength){
      if(quizName?.includes("React")){
        dispatch(addLevelReact(newlevel))
      }
      else if(quizName?.includes("JavaScript")){
        dispatch(addLevelJs(newlevel))
      } else{
        dispatch(addLevelPython(newlevel))    
      }    
    }

    //updating the user quiz state
    if(quizName?.includes("React")){
      dispatch(updateUserReactExercise())
    }
    else if(quizName?.includes("JavaScript")){
      dispatch(updateUserJavascriptExercise())
    } else{
      dispatch(updateUserPythonExercise()) 
    }
    
    

    if(levelsLength>=1 && eNo < exercisesLength)
      {
        eNo++
        navigate(`/quiz/${id}/level/${(lNo)}/exercise/${eNo}`)
        // console.log(`/quiz/${id}/level/${Number(levelNo)}/exercise/${(eNo)}`);
      }
      else if(levelsLength === 1 && eNo === exercisesLength)
      {
        navigate(`/quiz/${id}/quizfinish`)
      }
      else if(levelsLength > 1 && eNo === exercisesLength)
      {
        lNo++
        eNo = (eNo + 1) %Number(exercisesLength)
        // console.log(`/quiz/${id}/level/${lNo}/exercise/${(eNo)}`);
        navigate(`/quiz/${id}/level/${lNo}/exercise/${eNo}`)
      }

      setShow(false)
      setExerciseScore(0)
  }
  const handleClose = () => {
    setShow(false)
    setExerciseScore(0)
  };

  return (
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>
        {eNo === exercisesLength ? 'Level Summary' : 'Exercise Summary'}
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {eNo === exercisesLength ? (
        <>
        <p>You Have completed the level!</p>
        <p>Your Level Score is: {eNo === exercisesLength ? levelScore+=exerciseScore : levelScore}</p>
        {(levelScore >= exercisePassScore*exercisesLength) ? (
             <p>Status: Passed</p>
           ) : (
           <>
           <p>Status: Failed</p>
           <p>Please Try Again To Proceed to the next level!</p>
           </>
           ) }
         
        </>
        
      ) : (
        <>
          <p>You Have completed the exercise!</p>
           <p>Your Exercise Score is: {exerciseScore}</p>
           {(exerciseScore >= exercisePassScore) ? (
             <p>Status: Passed</p>
           ) : (<p>Status: Failed</p>) }
        </>
           
      )}
     
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleTryAgain}>
        Try Again
      </Button>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      {eNo === exercisesLength  ? (
        <Button 
        onClick={handleNext}
        variant='success'
        disabled={levelScore < exercisePassScore*exercisesLength}>Go To The Next Level</Button>
      ) : ( <Button variant="success" onClick={handleNext}>
      Go To The Next Exercise</Button>)}
     {loadingUpdateProfile && <Loader />}
    </Modal.Footer>
  </Modal>
  )
}

export default ModalDisplay
