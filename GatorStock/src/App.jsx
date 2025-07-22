import { useState } from 'react'
import { AuthContextProvider } from "./index"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <AuthContextProvider>
        <span>Hola desde APP</span>
      </AuthContextProvider>
    </div>
  )
}

export default App
