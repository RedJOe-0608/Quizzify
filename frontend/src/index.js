import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import './assets/styles/index.css'
import './assets/styles/bootstrap.custom.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import HomePage from './pages/HomePage';
import StartQuizPage from './pages/StartQuizPage';
import QuizPage from './pages/QuizPage';
import { Provider } from 'react-redux';
import store from './store';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import QuizFinishPage from './pages/QuizFinishPage';
import AdminRoute from './components/AdminRoute';
import AdminQuizListPage from './pages/AdminQuizListPage';
import AdminQuizEditPage from './pages/AdminQuizEditPage';
import LeaderBoard from './components/LeaderBoard';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index path='/' element={<HomePage />} />
      <Route path='/quiz/:id/startquiz' element={<StartQuizPage />} />
      <Route path='/quiz/:id/level/:levelNo/exercise/:exerciseNo' element={<QuizPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/profile'  element={<ProfilePage />} />
      <Route path='/leaderboard'  element={<LeaderBoard />} />
      <Route path='/quiz/:id/quizfinish'  element={<QuizFinishPage />} />

      <Route path='' element={<AdminRoute />}>
        <Route path='/admin/quizlist' element={<AdminQuizListPage />}></Route>
        <Route path='/admin/quizzes/:id/edit' element={<AdminQuizEditPage />}></Route>
      </Route>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

