import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PageLayout from "./PageLayout/PageLayout/PageLayout";
import Home from "./Pages/Home/Home";
import useFetchProduct from "./hooks/useFetchProduct";
import ItemDetail from "./Pages/ItemDetail/ItemDetail";

function App() {
const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout/>,
    children: [
      {
        path:"",
        element: <Home/>
      },
      {
        path:"itemDetail",
        element: <ItemDetail/>
      }
    ]
  }
])

useFetchProduct()
  return (
  <RouterProvider router = {router}/>
  )
}

export default App
