import {Modal, Button} from 'react-bootstrap'

const ModalDisplay = ({show, setShow, navigate, lNo, eNo, id, levelsLength, exercisesLength, exerciseScore, setExerciseScore, exercisePassScore}) => {

  const handleTryAgain = () => {
    setExerciseScore(0)
    setShow(false);
  }

  const handleNext = () => {
    setShow(false);

    if(levelsLength>=1 && eNo < exercisesLength)
      {
        eNo++
        navigate(`/quiz/${id}/level/${(lNo)}/exercise/${eNo}`)
        // console.log(`/quiz/${id}/level/${Number(levelNo)}/exercise/${(eNo)}`);
      }
      else if(levelsLength == 1 && eNo == exercisesLength)
      {
        navigate(`/quiz/${id}/quizfinish`)
      }
      else if(levelsLength > 1 && eNo == exercisesLength)
      {
        lNo++
        eNo = (eNo + 1) %Number(exercisesLength)
        // console.log(`/quiz/${id}/level/${lNo}/exercise/${(eNo)}`);
        navigate(`/quiz/${id}/level/${lNo}/exercise/${eNo}`)
      }
  }
  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Exercise Summary</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>You Have completed the exercise!</p>
      <p>Your Exercise Score is: {exerciseScore}</p>
      {(exerciseScore > exercisePassScore) ? (
        <p>Status: Passed</p>
      ) : (<p>Status: Failed</p>) }
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleTryAgain}>
        Try Again
      </Button>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="success" onClick={handleNext}>
        Go To The Next Exercise
      </Button>
    </Modal.Footer>
  </Modal>
  )
}

export default ModalDisplay
