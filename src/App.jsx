import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./Component/Layout/Layout";
import Products from "./Component/Products/Products";
import Cart from "./Component/Cart/Cart";

const router = createBrowserRouter([
  {path:'',element:<Layout/>,children:[
    {index:true,element:<Products/>},
    {path:"cart",element:<Cart/>},
    { path: "*", element: <h1>NoT Found 404 ...</h1> },
  ]},

])
function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
