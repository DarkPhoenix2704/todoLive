import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import SignUp from "./routes/Signup";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
