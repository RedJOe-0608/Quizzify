import React, { useState } from 'react'
import Questions from './Questions'
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import ModalDisplay from './ModalDisplay';
import { useGetSingleQuizQuery } from '../slices/quizzesApiSlice';
import { useSelector } from 'react-redux';

const Exercise = ({exercise, exercisesLength, levelsLength}) => {
  const navigate = useNavigate()
    const {levelNo, exerciseNo, id:quizId} = useParams()
    
    
    // console.log(levelsLength, exercisesLength);
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
    />}
    <form onSubmit={handleSubmit}>
    {exercise?.questions?.map((questions) => {
      return  <Questions questions={questions} exerciseScore={exerciseScore} setExerciseScore={setExerciseScore} />   
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
