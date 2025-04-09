import './App.css'
import React, { lazy, Suspense } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import ResturantMenu from './components/RestaurantMenu';
import { ShimmerUI } from './components/ShimmerUI.jsx';

const Grocery = lazy(() => import('./components/Grocery/Grocery.jsx'));
const AppLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto p-4">
        <Outlet />
      </div>
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurants/:resId", element: <ResturantMenu /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<ShimmerUI />}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const App = () => {
  return (
    <RouterProvider router={appRouter} />
  )
}

export default App;