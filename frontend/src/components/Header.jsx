import React from 'react'
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {FaUser} from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useLogoutMutation } from '../slices/usersApiSlice'
import { logout } from '../slices/authSlice'
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [logoutApiCall] = useLogoutMutation()

    const logoutHandler = async () => {
        try {
            await logoutApiCall().unwrap()
                dispatch(logout())
                navigate('/login')
        } catch (error) {
            console.log(error);
        }
    }
    const {userInfo} = useSelector((state) => state.auth)
  return (
    <header>
        {/* hamburger menu will show up below md screens */}
        <Navbar bg='dark' variant='dark' expand="md" collapseOnSelect>
            <Container>
                <LinkContainer to='/'>
                <Navbar.Brand>Quizzify</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                        {userInfo ? (
                           <>
                           
                            <LinkContainer to='/leaderboard' >
                                <Nav.Link>Leaderboard</Nav.Link>
                            </LinkContainer>
                           <NavDropdown title={userInfo.name} id='username'>
                                <LinkContainer to='/profile'>
                                    <NavDropdown.Item>Profile</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                            </NavDropdown>
                           </>
                        ) : (
                             <LinkContainer to='/login'>
                             <Nav.Link><FaUser />Sign In</Nav.Link>
                             </LinkContainer>
                        )}
                       {userInfo && userInfo.isAdmin && (
                        <NavDropdown title='Admin' id='adminmenu'>
                            <LinkContainer to='/admin/quizlist'>
                               <NavDropdown.Item>Quizzes</NavDropdown.Item> 
                            </LinkContainer>
                            <LinkContainer to='/admin/userlist'>
                               <NavDropdown.Item>Users</NavDropdown.Item> 
                            </LinkContainer>
                        </NavDropdown>
                       )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header
