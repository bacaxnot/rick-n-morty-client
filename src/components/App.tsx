import { useState } from 'react'
import '@styles/App.sass'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      Hello World
    </div>
  )
}

export default App