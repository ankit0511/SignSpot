import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Create from "./Components/Create.jsx";
import Digital from "./Components/Digital.jsx"
const router = createBrowserRouter([

  {
    path: "/",
    element : <Home/>

  },
  {
    path: "/create-Sing",
    element : <Create/>

  },
  {
    path: "/digital-Sign",
    element : <Digital/>

  },
]);

function App() {
  

  return (
    <>
     <RouterProvider router={router}/> 
    </>
  )
}

export default App
