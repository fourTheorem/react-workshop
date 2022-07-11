import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

function ChickenName () {
  const [name, setName] = useState('')
  return (
    <div>
      <h1>How would you name a chicken? 🐔</h1>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      {name ? <p><strong>{name}</strong> is a beautiful name for a chicken!</p> : null}
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <ChickenName />
  </React.StrictMode>
)
