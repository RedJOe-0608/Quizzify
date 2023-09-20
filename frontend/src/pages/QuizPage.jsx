import React from 'react'
import { useGetSingleQuizQuery } from '../slices/quizzesApiSlice'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Exercise from '../components/Exercise'

const QuizPage = () => {

  const {id: quizId, levelNo, exerciseNo} = useParams()
  // console.log(levelNo, exerciseNo);
  const {data: quiz, isLoading, error} = useGetSingleQuizQuery(quizId)
  const levels = quiz?.level.filter((question) => question.levelNumber >= levelNo )
  console.log("Levels: " , levels);

  const levelsLength = levels?.length

  const exercises = !isLoading && levels?.map((x) => x.exercises)
  !isLoading && console.log("Excercises: ",exercises);

  let levelFilteredExcercises = []
  let singleExercise = []
   //All exercsises of the particular level
    levelFilteredExcercises =  !isLoading && (levels.length >1 ? exercises[levelNo - 1] : exercises[0])
    console.log(levelFilteredExcercises);
    
    let exercisesLength = levelFilteredExcercises?.length

    //The single exercise
    singleExercise = !isLoading && levelFilteredExcercises[exerciseNo - 1]
   console.log(singleExercise); 

 
// console.log(exercises);
  // levelFilteredExcercises = !isLoading && ( exercises[exerciseNo - 1]?.filter((e) => e?.exerciseNumber >= exerciseNo))
  // !isLoading && console.log(levelFilteredExcercises);
//  !isLoading && (exercises[levelNo-1] = levelFilteredExcercises)
//  !isLoading && console.log(exercises);
  


 
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
