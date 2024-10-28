import { Outlet } from "react-router-dom"
import Side from "./components/nav/side"

function App() {


  return (
    <>
      <Nav/>
      <Outlet/>
    </>
  )
}

export default App
