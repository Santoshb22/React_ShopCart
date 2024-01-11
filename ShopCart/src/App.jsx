import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PageLayout from "./PageLayout/PageLayout/PageLayout";
import Home from "./Pages/Home/Home";

function App() {
const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout/>,
    children: [
      {
        path:"",
        element: <Home/>
      }
    ]
  }
])

  return (
  <RouterProvider router = {router}/>
  )
}

export default App
