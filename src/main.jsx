import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import About from './routes/About.jsx';
import Begin from './routes/Begin.jsx';
import Professor from './routes/Professor.jsx'; // Import the Professor component
import './index.css';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/about", element: <About /> },
  { path: "/begin", element: <Begin /> },
  { path: "/professors/:schoolName/:professorName", element: <Professor /> }, // Update the path to include schoolName
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
