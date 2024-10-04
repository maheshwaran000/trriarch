import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Coming from './pages/coming';
import Welcome from './pages/welcome';

const router=createBrowserRouter([
  {
    path:'/',
    element:<Coming/>
  },
  {
    path:'/home',
    element:<Coming/>
  },
  {
    path:'/founderInfo',
    element:<Coming/>
  },
  {
    path:'/projectsInfo',
    element:<Coming/>
  },
  {
    path:'/about',
    element:<Coming/>
  },
  {
    path:'/contactInfo',
    element:<Coming/>
  }
])
function App() {

  return(
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App;
