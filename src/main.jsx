import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Home from './routes/Home/Home.jsx'
import Error from './routes/Error/Error.jsx'
import Exemplo1 from './routes/Pages/Exemplo1.jsx'
import Exemplo2 from './routes/Pages/Exemplo2.jsx'

const router = createBrowserRouter([{

  path:'/',element:<App/>,
  errorElement:<Error/>,


  children:[
    {path:'/',element:<Home/>},
    {path:'/Exemplo1',element:<Exemplo1/>},
    {path:'/Exemplo2',element:<Exemplo2/>}
  ]
}])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
