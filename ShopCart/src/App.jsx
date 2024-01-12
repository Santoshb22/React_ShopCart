import {createBrowserRouter, RouterProvider, useSearchParams} from "react-router-dom";
import PageLayout from "./PageLayout/PageLayout/PageLayout";
import Home from "./Pages/Home/Home";
import useFetchProduct from "./hooks/useFetchProduct";
import ItemDetail from "./Pages/ItemDetail/ItemDetail";
import Cart from "./Pages/CartPage/Cart";

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
      },
      {
        path: "cart",
        element: <Cart/>
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
