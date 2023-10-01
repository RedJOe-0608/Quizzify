import { useEffect, useState } from 'react'
import {ListGroup, Button} from 'react-bootstrap'
import {toast} from 'react-toastify'


const Questions = ({questions, exerciseScore, setExerciseScore, disableButton}) => {

  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    if(disableButton === false)
      setDisabled(false)
  },[disableButton, setDisabled, disabled])
  
const handleClick = (option,e) => {
  // e?.currentTarget.classList.toggle("active") we are handling it now with react-toastify
  setDisabled(true)
  
  if(Object.keys(option)[0] === questions.correctAnswer)
  {
    setExerciseScore((prevExerciseScore) => prevExerciseScore + questions.score)
    toast.success("Right Answer!")
  }
  else
  {
    toast.error("Wrong Answer!")
  }
}
    
  return (
    <ListGroup className='my-5'>
      <ListGroup.Item >
        <h2 className='mb-5'>{questions.question}</h2>
        {questions?.options.map((option,i) => {
            let ch = String.fromCharCode(97+i)
            return (
            <div key={i} className='d-flex align-items-center' style={{marginBottom: '1rem'}}>
                <p className='mb-0' style={{marginRight: '1.5rem'}}>{ch}</p>
                <Button 
                className='btn-block'
                disabled={disabled}
                id={(Math.random()*1000).toFixed()}
                variant="info"
                style={{minWidth: '7rem'}}
                onClick={(e) => handleClick(option,e)}
                >{Object.values(option)[0]}</Button> 
               
            </div>
            )
            
        })}
      </ListGroup.Item>
    </ListGroup>
  )
}

export default Questions
