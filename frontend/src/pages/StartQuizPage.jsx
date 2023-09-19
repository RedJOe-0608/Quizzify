import {useParams, Link} from 'react-router-dom'
import {Row, Col, Image, ListGroup,Card, Button} from 'react-bootstrap'
import { useEffect, useState } from 'react'
const StartQuizPage = () => {
    const {id: quizId} = useParams()
    const [singleQuiz, setSingleQuiz] = useState({})
    // const [value,setValue] = useState('')
    // const quiz = quizzes.find((q) => q._id === quizId)
    // console.log(quiz);

    useEffect(() => {
      const fetchQuiz = async( ) => {
        const res = await fetch(`/api/quizzes/${quizId}`)
        const data = await res.json()
        setSingleQuiz(data)
      }

      fetchQuiz()
    },[quizId])

    // const handleChange = (e) => {
    //   setValue(e.target.value)
    // }
  return (
    <>
      <Link className='btn btn-light my-3' to="/">Go Back</Link>
      <Row>
        <Col md={5}>
          <Image src={singleQuiz.image} alt={singleQuiz.name} fluid/>
        </Col>
        <Col md={7}>
          <ListGroup variant='flush'>
          {/* <ListGroup.Item>
            <h2>{value}</h2>
          </ListGroup.Item> */}
            <ListGroup.Item>
              <h3>{singleQuiz.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>Total No. Of Levels: {singleQuiz.totalLevels}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>Your Progress: {singleQuiz.yourProgress}</p>
            </ListGroup.Item>
            {/* <ListGroup.Item>
              <h2>Favorite Web Language?</h2>
              <input type="radio" className='my-4' name='language' value="HTML" id='HTML' 
              onChange={handleChange} />
              <label htmlFor="HTML" 
              style={{marginLeft: '0.5rem'}}
            
              >HTML</label>
            </ListGroup.Item> */}
            {/* <ListGroup.Item >
              <input type="radio" className='my-4' name='language' value="javascript" id='javascript' 
              onChange={handleChange}
              />
              <label htmlFor="javascript"  style={{marginLeft: '0.5rem'}}>JavaScript</label>
            </ListGroup.Item>
            <ListGroup.Item>
              <input type="radio" className='my-4' name='language' value="CSS" id='CSS' 
              onChange={handleChange}
              />
              <label htmlFor="CSS"  style={{marginLeft: '0.5rem'}}>CSS</label>
            </ListGroup.Item> */}
          
            <ListGroup.Item>
            <Button
              className='btn-block'
              style={{marginRight: '1.5rem'}}
                type='button'
            >
              Resume Quiz
            </Button>
            <Button
              className='btn-block'
                type='button'
            >
              Start Over
            </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  )
}

export default StartQuizPage