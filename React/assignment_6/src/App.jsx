import { useState } from 'react'
import UserData from './components/UserData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <UserData />
      </div>
    </>
  )
}

export default App
