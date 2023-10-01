import React from 'react'
import { Form } from 'react-bootstrap'

const AddNewQuestion = ({setQuestionNumber, setQuestion, setOptionA, setOptionB, setOptionC, setOptionD, setCorrectAnswer, setScore}) => {
  return (
    <>
     
    <Form.Group controlId='questionNumber' className='my-2'>
            <Form.Label>Question Number</Form.Label>
            <Form.Control
            type='number'
            placeholder='Enter Question Number: '
            // value={question}
            onChange={(e) => setQuestionNumber(e.target.value)}
            ></Form.Control>
        </Form.Group>
        <Form.Group controlId='question' className='my-2'>
            <Form.Label>Question 1</Form.Label>
            <Form.Control
            type='text'
            placeholder='Enter Question: '
            // value={question}
            onChange={(e) => setQuestion(e.target.value)}
            ></Form.Control>
        </Form.Group>
        <Form.Group controlId='optionA' className='my-2'>
            <Form.Label>Option 1</Form.Label>
            <Form.Control
            type='text'
            placeholder='Option 1: '
            // value={question}
            onChange={(e) => setOptionA({a: e.target.value})}
            ></Form.Control>
        </Form.Group>
        <Form.Group controlId='optionB' className='my-2'>
            <Form.Label>Option 2</Form.Label>
            <Form.Control
            type='text'
            placeholder='Option 2: '
            // value={question}
            onChange={(e) => setOptionB({b: e.target.value})}
            ></Form.Control>
        </Form.Group>
        <Form.Group controlId='optionC' className='my-2'>
            <Form.Label>Option 3</Form.Label>
            <Form.Control
            type='text'
            placeholder='Option 3: '
            // value={question}
            onChange={(e) => setOptionC({c: e.target.value})}
            ></Form.Control>
        </Form.Group>
        <Form.Group controlId='optionD' className='my-2'>
            <Form.Label>Option 4</Form.Label>
            <Form.Control
            type='text'
            placeholder='Option 4: '
            // value={question}
            onChange={(e) => setOptionD({d: e.target.value})}
            ></Form.Control>
        </Form.Group>
        <Form.Group controlId='correctAnswer' className='my-2'>
            <Form.Label>Set Correct Answer</Form.Label>
            <Form.Control
            type='text'
            placeholder='set correct answer: '
            // value={question}
            onChange={(e) => setCorrectAnswer(e.target.value)}
            ></Form.Control>
        </Form.Group>
        <Form.Group controlId='correctAnswer' className='my-2'>
            <Form.Label>Set Score</Form.Label>
            <Form.Control
            type='number'
            placeholder='Set score for this question: '
            // value={question}
            onChange={(e) => setScore(e.target.value)}
            ></Form.Control>
        </Form.Group>
    </>
  )
}

export default AddNewQuestion
