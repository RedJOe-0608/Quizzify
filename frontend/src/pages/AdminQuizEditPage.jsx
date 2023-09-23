import {useState, useEffect} from 'react'
import {useNavigate, Link, useParams} from 'react-router-dom'
import {Form, Button} from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import {toast} from 'react-toastify'
import {useUpdateSingleQuizMutation, useGetSingleQuizQuery} from '../slices/quizzesApiSlice'
import AddNewQuestion from '../components/AddNewQuestion'

const AdminQuizEditPage = () => {

    const exerciseSample = [
        {
            exerciseNumber: 1,
            exercisePassScore: 0,
            questions: [
                {
                    questionNumber: 1,
                    question: '',
                    options: [
                        {"a": ''},
                        {"b": ''},
                        {"c": ''},
                        {"d": ''},
                    ],
                    correctAnswer: '',
                    score: 0
                }
            ]
        }
    ]

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
    const [correctScore, setCorrectScore] = useState('')
    const [exerciseNumber, setExerciseNumber] = useState(0)
    const [exercisePassScore, setExercisePassScore] = useState(0)

    const [showLevel,  setShowLevel] = useState(false)
    const [showExercise,  setShowExercise] = useState(false)
    const [showQuestion,  setShowQuestion] = useState(false)


  const submitHandler = (e) => {
    e.preventDefault()
    let o = []
    o.push(optionA,optionB,optionC,optionD)
    let q = {questionNumber,options: o,question,correctAnswer,correctScore}
    console.log(q);
    setQuestions((prev) => {
        return [...prev,q]
    })
    // console.log(questions);
    setExercises((prev) => {
        return [...prev,{exerciseNumber, exercisePassScore,questions}]
    })
    console.log({exerciseNumber, exercisePassScore,questions});
    setShowQuestion(false)
}

console.log(exercises);

const addLevelToggler = () => {setShowLevel(true)}
const addExerciseToggler = () => {setShowExercise(true)}
const addQuestionToggler = () => {setShowQuestion(true)}

  let index = 0
//   console.log(optionD);

  return <>
  <div className='d-flex w-full justify-content-between align-items-center mb-4'>
  <h1 className='mb-0'>Add a Level</h1>
  <Button variant='primary' onClick={addLevelToggler}>Add</Button>
  </div>
  

  <Form onSubmit={submitHandler}>

    {showLevel && (
        <>
         <Form.Group controlId='levelNumber' className='my-2'>
            
            <Form.Label>Level Number</Form.Label>
            <Form.Control
            type='number'
            placeholder='Enter Level Number'
            value={levelNumber}
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
            value={exerciseNumber}
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
               setCorrectScore={setCorrectScore} 
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
            // value={question}
            onChange={(e) => setExercisePassScore(e.target.value)}
            ></Form.Control>
        </Form.Group>
    
        <Button
          type='submit'
          variant='primary'
          className='my-2'
          >Submit</Button>
        </>
          
    )}
</Form>
  
  </>
      
    

}

export default AdminQuizEditPage