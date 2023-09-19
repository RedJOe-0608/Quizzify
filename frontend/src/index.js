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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index path='/' element={<HomePage />} />
      <Route path='/quiz/:id/startquiz' element={<StartQuizPage />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

