import React from 'react'
import ReactDOM from 'react-dom/client'

function DynamiteTrigger () {
  return <button onClick={() => alert('💥 Kaboom')}>
    🔥 Ignite!
  </button>
}

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <DynamiteTrigger />
  </React.StrictMode>
)
