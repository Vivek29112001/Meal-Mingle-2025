import './App.css'
import React, { lazy, Suspense, useEffect, useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';
// import Main from './components/home/main';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import ResturantMenu from './components/RestaurantMenu';
import { ShimmerUI } from './components/ShimmerUI.jsx';
import UserContext from './utils/UserContext.jsx';
import { Provider } from 'react-redux';  // redux provider connect redux to react
import appStore from './components/redux/appstore.jsx'; // redux store
import Cart from './components/Cart.jsx';


const Grocery = lazy(() => import('./components/Grocery/Grocery.jsx'));


const AppLayout = () => {

  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "vivek sharma"
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <div className="container mx-auto p-4">
            {/* Outlet renders the matched child route based on the current URL */}
            <Outlet />
          </div>
        </div>
      </UserContext.Provider>
    </Provider>
  )
}


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      // {path: "/", element: <Main />},
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
      {
        path: "/cart", element: <Cart />
      }
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