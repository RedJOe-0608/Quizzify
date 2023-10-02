import {useState} from 'react'
import {useParams} from 'react-router-dom'
import {Form, Button} from 'react-bootstrap'
import {toast} from 'react-toastify'
import { useGetSingleQuizQuery, useAddNewLevelToQuizMutation, useAddNewExerciseToLevelMutation} from '../slices/quizzesApiSlice'
import AddNewQuestion from '../components/AddNewQuestion'

const AdminQuizEditPage = () => {

    const {id: quizId} = useParams()
    const {data: singleQuiz} = useGetSingleQuizQuery(quizId)

    const [addNewLevel] = useAddNewLevelToQuizMutation()

    const [addNewExercise] = useAddNewExerciseToLevelMutation()


    const [levelNumber, setLevelNumber] = useState(0)
    const [questions, setQuestions] = useState([])
    const [exercises, setExercises] = useState([])
    const [question, setQuestion] = useState('')
    const [questionNumber, setQuestionNumber] = useState(0)
    const [optionA, setOptionA] = useState({})
    const [optionB, setOptionB] = useState({})
    const [optionC, setOptionC] = useState({})
    const [optionD, setOptionD] = useState({})
    const [correctAnswer, setCorrectAnswer] = useState('')
    const [score, setScore] = useState(0)
    const [exerciseNumber, setExerciseNumber] = useState(0)
    const [exercisePassScore, setExercisePassScore] = useState(0)

    const [showLevel,  setShowLevel] = useState(false)
    const [showExercise,  setShowExercise] = useState(false)
    const [showQuestion,  setShowQuestion] = useState(false)


  const submitHandler = (e) => {
    e.preventDefault()
    let o = []
    o.push(optionA,optionB,optionC,optionD)
    setQuestions((prev) => ([...prev, {questionNumber,options: o,question,correctAnswer,score}]))
      setExercises((prev) => {
        if(prev?.length === 0)
        {
            return [{exerciseNumber,exercisePassScore,questions:[{questionNumber,options: o,question,correctAnswer,score}]}]
        }
        else if(prev && prev[prev.length-1]?.exerciseNumber === exerciseNumber)
        {
            if(prev.length > 1)
            {
                let arr = []
                for(let i=0;i<prev.length-1;i++)
                {
                    arr.push(prev[i]);
                }
                return [...arr,{...prev[prev.length-1],questions:[...questions, {questionNumber,options: o,question,correctAnswer,score}]}]
            }
            return [{...prev[prev.length-1],questions:[...questions, {questionNumber,options: o,question,correctAnswer,score}]}]
        }
        else{
             let newArr = [...prev,{ exerciseNumber,exercisePassScore,questions:[{questionNumber,options: o,question,correctAnswer,score}]}]
            let newQuestions =[]
             newQuestions = questions[questions.length-1]
            setQuestions([newQuestions])
            return newArr
        }
      })
   
    setShowQuestion(false)
}

// useEffect(() => {
//     console.log(questions);
//     console.log(exercises);
// }, [questions, exercises,questionNumber,question,correctAnswer,score])


const addLevelToggler = () => {setShowLevel(true)}
const addExerciseToggler = () => {setShowExercise(true)}
const addQuestionToggler = () => {setShowQuestion(true)}

 const levelSubmitHandler = async(e) => {
    e.preventDefault()
        try {

            //this means we are adding the exercise to an existing level
            if(levelNumber <= singleQuiz?.level.length)
            {
                let newExercise = exercises[exercises.length - 1]
                  await addNewExercise({quizId,newExercise,levelNumber})
                  toast.success("New Exercise Added!")
            }
            else
            {
            //This is the new level that will be added
            let newLevel = {}
            newLevel.levelNumber = levelNumber
            newLevel.exercises = exercises

            await addNewLevel({quizId,newLevel})
            toast.success("New Level Added!")
            }
        } catch (error) {
            toast.error(error?.data?.message || error?.error)
        }
 }

  return <>
  <div className='d-flex w-full justify-content-between align-items-center mb-4'>
    <h1 className='mb-0'>Add a Level</h1>
    <div >
        <Button variant='primary' onClick={addLevelToggler}>Add</Button>
        <Button variant='primary' style={{marginLeft: "0.5rem"}} onClick={levelSubmitHandler}>Update</Button>
    </div>
  </div>
  

  <Form onSubmit={submitHandler}>

    {showLevel && (
        <>
         <Form.Group controlId='levelNumber' className='my-2'>
            
            <Form.Label>Level Number</Form.Label>
            <Form.Control
            type='number'
            placeholder='Enter Level Number'
            onChange={(e) => setLevelNumber(e.target.value)}
            ></Form.Control>
        </Form.Group>
         <div className='d-flex w-full justify-content-between align-items-center mb-4'>
         <h4 className='mb-0'>Add Exercise</h4>
         <Button variant='primary' onClick={addExerciseToggler}>Add</Button>
         </div>
        </>
       
    ) }

    {showLevel && showExercise && (
        <>
          
        <Form.Group controlId='exerciseNumber' className='my-2'>
            <Form.Label>Exercise Number</Form.Label>
            <Form.Control
            type='number'
            placeholder='Enter Exercise Number'
            onChange={(e) => setExerciseNumber(e.target.value)}
            ></Form.Control>
        </Form.Group>
        <div className='d-flex w-full justify-content-between align-items-center mb-4'>
            <h4 className='mb-0'>Add Question</h4>
            <Button variant='primary' onClick={addQuestionToggler}>Add</Button>
            </div>
        </>
        
    )}
        
    {showLevel && showExercise && showQuestion && (
        <>
         
             <AddNewQuestion 
               setCorrectAnswer={setCorrectAnswer}
               setScore={setScore} 
               setOptionA={setOptionA}
               setOptionB={setOptionB}
               setOptionC={setOptionC}
               setOptionD={setOptionD}
               setQuestionNumber={setQuestionNumber}
               setQuestion={setQuestion}
               />

               
        <Form.Group controlId='exercisePassScore' className='my-2'>
            <Form.Label>Set Exercise Pass Score</Form.Label>
            <Form.Control
            type='number'
            placeholder='Set pass score for this exercise: '
            onChange={(e) => setExercisePassScore(e.target.value)}
            ></Form.Control>
        </Form.Group>
    
        <Button
          type='submit'
          variant='primary'
          className='my-2'
          >Submit Exercise</Button>
        </>
          
    )}
</Form>
  
  </>
      
    

}

export default AdminQuizEditPage