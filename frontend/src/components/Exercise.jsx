import React, { useEffect, useState } from 'react'
import Questions from './Questions'
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ModalDisplay from './ModalDisplay';
import { useGetSingleQuizQuery } from '../slices/quizzesApiSlice';
import { useSelector } from 'react-redux';
import { useProfileMutation } from '../slices/usersApiSlice';

const Exercise = ({exercise, exercisesLength, levelsLength}) => {
    const {levelNo, exerciseNo, id:quizId} = useParams()
    const [disabled, setDisabled] = useState(false)

    const {data: singleQuiz} = useGetSingleQuizQuery(quizId)

    const quizName = singleQuiz?.name
    const {userInfo} = useSelector((state) => state.auth)

    const [updateProfile] = useProfileMutation()

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
    },[state,quizName,updateProfile, userInfo._id])
    
    let eNo = Number(exerciseNo)
    let lNo = Number(levelNo)

    const [show, setShow] = useState(false);
    const [exerciseScore, setExerciseScore] = useState(0);

    const displayModal = () => {
        setShow(!show)
    }


    const handleSubmit = (e) => {
      //preventing the default submission

      /* 
      Now, each exercise has its own route. We go to l1e1, l1e2, and so on. The last route will be quiz finish. 
      
      */
      e.preventDefault()
      displayModal()
      
    }
  return (
    <>
    { show && <ModalDisplay 
      show={show} 
      setShow={setShow}
      lNo={lNo}
      levelsLength={levelsLength}
      exercisesLength={exercisesLength}
      eNo={eNo}
      id={quizId}
      exerciseScore={exerciseScore}
      setExerciseScore={setExerciseScore}
      exerciseNo={exercise.exerciseNumber}
      exercisePassScore={exercise.exercisePassScore}
      disabled={disabled}
      setDisabled={setDisabled}
    />}
    <form onSubmit={handleSubmit}>
    {exercise?.questions?.map((questions) => {
      return  <Questions key={questions._id} questions={questions} exerciseScore={exerciseScore} setExerciseScore={setExerciseScore} disableButton={disabled} />   
    })}
     <Button 
     type='submit'
     className='btn btn-block'>
      {exerciseNo == exercisesLength ? 'Submit And Finish Level' : ' Submit Exercise'}
     </Button>
    </form>
    </>
  )

}

export default Exercise
