import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

function Counter () {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>You clicked <strong>{count}</strong> times</p>
      <button onClick={() => setCount(count + 1)}>
        💥 Click me
      </button>
      <button onClick={() => setCount(0)}>
        👻 Reset
      </button>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>
)
