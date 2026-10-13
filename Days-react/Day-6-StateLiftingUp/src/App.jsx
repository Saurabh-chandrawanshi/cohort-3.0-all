import { useState } from "react"
import Login from "./components/Login"
import Register from "./components/register"
const App = () => {
  const [toggle, setToggel]=useState(false);
  const [Users, setUsers]=useState([]);
  
  return (
    <div>
      {toggle ? <Login setToggel={setToggel} /> : <Register setToggel={setToggel}/>}
    </div>
  )
}

export default App
