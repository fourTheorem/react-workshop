import React from 'react'
import ReactDOM from 'react-dom/client'

const difficultThings = {
  'thing-1': 'Naming things',
  'thing-2': 'Cache invalidation',
  'thing-3': 'Off by one errors'
}

const App = () => (
  <div>
    <h2>The 2 most difficult things in IT</h2>
    <ol>
      {Object.entries(difficultThings).map(([thingId, thing]) => (
        <li key={thingId}>{thing}</li>
      ))}
    </ol>
  </div>
)

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
