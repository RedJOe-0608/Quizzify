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
  const {data: quiz, isLoading, error} = useGetSingleQuizQuery(quizId)
  const levels = quiz?.level.filter((question) => question.levelNumber >= lNo )

  const levelsLength = levels?.length

  const exercises = !isLoading && levels?.map((x) => x.exercises)

  let levelFilteredExcercises = []
  let singleExercise = []
   //All exercsises of the particular level
    levelFilteredExcercises =  !isLoading && ( exercises[0])
    //exercises length is the total number of exercises in that particular level 
    let exercisesLength = levelFilteredExcercises?.length

    //The single exercise
    singleExercise = !isLoading && levelFilteredExcercises[eNo-1]

 
 
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
