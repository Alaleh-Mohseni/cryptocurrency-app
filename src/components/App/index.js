import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import Home from '../../pages/Home';
import Coins from '../../pages/Coins';
import Login from '../../pages/Login';
import Profile from '../../pages/Profile';
import Register from '../../pages/Register';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home />
  },
  {
    path:"/coins",
    element:<Coins />
  },
  {
    path:"/login",
    element:<Login />
  },
  {
    path:"/profile",
    element:<Profile />
  },
  {
    path:"/register",
    element:<Register />
  },
  {
    path:'*',
    element:<Navigate to="/login"/>
  }
])

const App = () => {
  return <RouterProvider router={router}/>
}

export default App;
