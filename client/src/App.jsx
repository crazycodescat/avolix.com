import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/Root';
import HomePage from './pages/Main/HomePage';
import Part from './pages/Main/Part';
import { AccessTokenProvider } from './context/GetAccessToken';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: 'true',
        element: <HomePage />,
      },
      {
        path: '/api/part/:partnumber',
        element: <Part />,
      },
    ],
  },
]);

function App() {
  return (
    <AccessTokenProvider>
      <RouterProvider router={router} />
    </AccessTokenProvider>
  );
}

export default App;
