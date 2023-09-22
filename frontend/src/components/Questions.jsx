import {ListGroup, Button} from 'react-bootstrap'

const Questions = ({questions, exerciseScore, setExerciseScore}) => {


// console.log(questions);
  
const handleClick = (option) => {
  // console.log(Object.keys(option)[0] === questions.correctAnswer);
  if(Object.keys(option)[0] === questions.correctAnswer)
  {
    setExerciseScore((prevExerciseScore) => prevExerciseScore + questions.score)
  }
    // console.log(`option ${Object.values(option)[0]} clicked!`)
}
    
  return (
    <ListGroup className='my-5'>
      <ListGroup.Item>
        <h2 className='mb-5'>{questions.question}</h2>
        {questions?.options.map((option,i) => {
            // console.log(option);
            let ch = String.fromCharCode(97+i)
            // console.log(Object.values(option)[0]);
            return (
            <div className='d-flex align-items-center' style={{marginBottom: '1rem'}}>
                <p className='mb-0' style={{marginRight: '1.5rem'}}>{ch}</p>
                <Button 
                className='btn-block' 
                style={{minWidth: '7rem'}}
                onClick={() => handleClick(option)}
                >{Object.values(option)[0]}</Button> 
               
            </div>
            )
            
        })}
      </ListGroup.Item>
    </ListGroup>
  )
}

export default Questions
