import {createBrowserRouter, RouterProvider, useSearchParams} from "react-router-dom";
import PageLayout from "./PageLayout/PageLayout/PageLayout";
import Home from "./Pages/Home/Home";
import useFetchProduct from "./hooks/useFetchProduct";
import ItemDetail from "./Pages/ItemDetail/ItemDetail";
import Cart from "./Pages/CartPage/Cart";
import MenPage from "./Pages/MenPage/MenPage";
import WomenPage from "./Pages/WomenPage/WomenPage";
import ElectronicsPage from "./Pages/Electronics/ElectronicsPage";

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
      },
      {
        path: "men",
        element: <MenPage/>
      },
      {
        path: "women",
        element: <WomenPage/>
      },
      {
        path: "electronics",
        element: <ElectronicsPage/>
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
