import {ListGroup, Button} from 'react-bootstrap'



const Questions = ({questions, exerciseScore, setExerciseScore}) => {

// console.log(questions);
  
const handleClick = (option,e) => {
  // console.log(Object.keys(option)[0] === questions.correctAnswer);
  e?.currentTarget.classList.toggle("active")
  if(Object.keys(option)[0] === questions.correctAnswer)
  {
    setExerciseScore((prevExerciseScore) => prevExerciseScore + questions.score)
 
  }
}
    
  return (
    <ListGroup className='my-5'>
      <ListGroup.Item >
        <h2 className='mb-5'>{questions.question}</h2>
        {questions?.options.map((option,i) => {
            // console.log(option);
            let ch = String.fromCharCode(97+i)
            // console.log(Object.values(option)[0]);
            return (
            <div key={i} className='d-flex align-items-center' style={{marginBottom: '1rem'}}>
                <p className='mb-0' style={{marginRight: '1.5rem'}}>{ch}</p>
                <Button 
                className='btn-block'
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
