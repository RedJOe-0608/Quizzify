import {useState, useEffect} from 'react'
import {Row, Col, Form,Table, Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {toast} from 'react-toastify'
import Loader from '../components/Loader'
import { useProfileMutation } from '../slices/usersApiSlice'
import { setCredentials } from '../slices/authSlice'
import { useGetQuizzesQuery } from '../slices/quizzesApiSlice'

const ProfilePage = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const dispatch = useDispatch()
    const {userInfo} = useSelector((state) => state.auth)

    const {data: quizzes} = useGetQuizzesQuery()
    
    const [updateProfile, {isLoading: loadingUpdateProfile}] = useProfileMutation()


    useEffect(() => {
        if(userInfo)
        {
            setName(userInfo?.name)
            setEmail(userInfo?.email)
        }
    },[userInfo,userInfo.name, userInfo.email])

    const submitHandler = async (e) => {
        e.preventDefault()
        if(password !== confirmPassword){
            toast.error("Passwords do not match!")
        }else{
            try {
                const res = await updateProfile({_id: userInfo._id, name,email, password}).unwrap()
                dispatch(setCredentials(res))
                toast.success("Profile updated successfully!")
            } catch (error) {
                toast.error(error?.data?.message || error.message)
            }
        }
    }

  return (
    <Row>
        <Col md={3}>
            <h2>User Profile</h2>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='name' className='my-2'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                    type='name' 
                    placeholder='Enter name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId='email' className='my-2'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control 
                    type='email' 
                    placeholder='Enter email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId='password' className='my-2'>
                    <Form.Label>Email Password</Form.Label>
                    <Form.Control 
                    type='password' 
                    placeholder='Enter password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId='confirmPassword' className='my-2'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control 
                    type='password' 
                    placeholder='Confirm password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary' className='my-2'>Update</Button>

                {loadingUpdateProfile && <Loader />}
            </Form>
        </Col>
        <Col md={9} className='mt-4'>
            <h2>My Quizzes</h2>
            <Table striped hover responsive className='table-sm'>
                <thead>
                    <tr>
                        <th>Quiz Name</th>
                        <th>Total Levels</th>
                        <th>Levels Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {quizzes?.map((quiz) => (
                        <tr key={quiz?._id}>
                            <td>{quiz?.name}</td>
                            <td>{quiz?.totalLevels}</td>
                            <td>{quiz?.name.includes("JavaScript") ? userInfo?.javascript?.progress : quiz?.name.includes("React") ? userInfo?.react?.progress : userInfo?.python?.progress}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Col>
    </Row>
  )
}

export default ProfilePage