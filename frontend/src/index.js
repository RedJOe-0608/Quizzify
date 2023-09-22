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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index path='/' element={<HomePage />} />
      <Route path='/quiz/:id/startquiz' element={<StartQuizPage />} />
      <Route path='/quiz/:id/level/:levelNo/exercise/:exerciseNo' element={<QuizPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
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

