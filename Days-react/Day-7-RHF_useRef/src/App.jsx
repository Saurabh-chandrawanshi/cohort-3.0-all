import React, { useState } from 'react'
import Form  from './components/From'
import RHF from './components/RHF'


const App = () => {
  const [users, setUsers] = useState(false);
  return (
    <div>
     
      <RHF />
      {/* <Form /> */}
    </div>
  )
}

export default App
