import './App.css';
import Canva from './components/Canva';
import Menulist from './components/Menulist';
import Title from './components/Title';
import Loader from './components/Loader';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import About from './components/About';
import About3d from './components/About3d';
import Accordian from './components/Accordian';
import Skills from './components/Skills';
import InteractPage from './components/InteractPage';
import { Toaster } from 'react-hot-toast';

const appRouter = createBrowserRouter([
  // Main layout routes under Canva
  {
    path: '/',
    element: <Canva />,
    children: [
      {
        path: '/',
        element: <Title />,
      },
      {
        path: '/menu',
        element: <Menulist />,
      },
      {
        path: '/about',
        element: (
          <>
            <About />
            <About3d />
          </>
        ),
      },
    ],
  },
  {
    path: '/accordian',
    element: <Accordian />,
  },
  {
    path: '/skill',
    element: <Skills />,
  },
  {
    path: '/interactive-page',
    element: <InteractPage />,
  },
]);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <RouterProvider router={appRouter} />
      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
}

export default App;