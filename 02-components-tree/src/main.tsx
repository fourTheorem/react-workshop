import React from 'react'
import ReactDOM from 'react-dom/client'

function FirstChildComponent () {
  return (
    <div style={{ backgroundColor: 'bisque', padding: '2em' }}>
      <h2>First child component</h2>
    </div>
  )
}

function SecondChildComponent () {
  return (
    <div style={{ backgroundColor: 'gainsboro', padding: '2em' }}>
      <h2>Second child component</h2>
    </div>
  )
}

function ParentComponent () {
  return (
    <div style={{ backgroundColor: 'coral', padding: '2em' }}>
      <h1>Parent component</h1>
      <FirstChildComponent />
      <SecondChildComponent />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <ParentComponent />
  </React.StrictMode>
)
