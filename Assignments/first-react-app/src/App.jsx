import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./components/Home/Home";
import Register from "./components/Regsiter/Register";
import Login from "./components/Login/Login";
import Aboutus from "./components/About/About";
import UserProfile from './components/user-profile/UserProfile';
import RoutingError from "./RoutingError";

function App() {
  const browserRouter = createBrowserRouter([
    {
      path: "",
      element: <RootLayout />,
      errorElement:<RoutingError />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "about",
          element: <Aboutus />,
        },
        {
          path:'user-profile',
          element:<UserProfile />
        }
      ],
    },
  ]);

  return (
    <div className="main">
      <RouterProvider router={browserRouter} />
    </div>
  );
}

export default App;