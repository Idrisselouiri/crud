import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
// layout
import LayoutNavBar from "./Layouts/LayoutNavBar";
// Components
import Home from "./components/Home";
import Blog from "./components/Blog";
import Edit from "./components/Edit";
//Router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayoutNavBar/>}>
      <Route index element={<Home/>}/>
      <Route path="blog" element={<Blog/>}/>
      <Route path="edit/:empid" element={<Edit/>}/>
    </Route>
  )

)
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
