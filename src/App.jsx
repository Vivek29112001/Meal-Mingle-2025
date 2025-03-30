import './App.css'
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
// import Body from './components/dummy-Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import ResturantMenu from './components/RestaurantMenu';


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/* if path is "/" */}
      {/* <Body /> */}
      {/* if path is "/about" */}
      {/* <About/> */}
      <Outlet />
    </div>
  )
}


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <ResturantMenu />,
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
// export default AppLayout;