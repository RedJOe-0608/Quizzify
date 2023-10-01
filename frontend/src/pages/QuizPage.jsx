import React from 'react'
import { useGetSingleQuizQuery } from '../slices/quizzesApiSlice'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Exercise from '../components/Exercise'

const QuizPage = () => {

  const {id: quizId, levelNo, exerciseNo} = useParams()
  const lNo = Number(levelNo)
  const eNo = Number(exerciseNo)
  // console.log(levelNo, exerciseNo);
  const {data: quiz, isLoading, error} = useGetSingleQuizQuery(quizId)
  // console.log(quiz);
  const levels = quiz?.level.filter((question) => question.levelNumber >= lNo )
  console.log("Levels: " , levels);

  const levelsLength = levels?.length

  const exercises = !isLoading && levels?.map((x) => x.exercises)
  !isLoading && console.log("Excercises: ",exercises);

  let levelFilteredExcercises = []
  let singleExercise = []
   //All exercsises of the particular level
    // levelFilteredExcercises =  !isLoading && (levels?.length >1 ? exercises[lNo - 1] : exercises[0])
    levelFilteredExcercises =  !isLoading && ( exercises[0])
    console.log(levelFilteredExcercises);
    //exercises length is the total number of exercises in that particular level 
    let exercisesLength = levelFilteredExcercises?.length

    //The single exercise
    singleExercise = !isLoading && levelFilteredExcercises[eNo-1]
   console.log(singleExercise); 

 
 
 return (
  isLoading ? (<Loader />) : error ? (
    <Message variant="danger">{error?.data?.message || error?.error}</Message>
  ) :  (
    <>
      <h1>QuizPage</h1>
      <Exercise exercise={singleExercise}
       exercisesLength={exercisesLength}
       levelsLength={levelsLength}
       />
    </>

  )
  )
}

export default QuizPage
