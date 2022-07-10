import React from 'react'
import ReactDOM from 'react-dom/client'

interface HelloProps {
  name: string,
  color: string
}

function Hello ({ name, color }: HelloProps) {
  return <p>Hello <strong style={{ color }}>{name}</strong>!</p>
}

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <Hello name="People" color="cadetblue" />
    <Hello name="Friends" color="rebeccapurple" />
    <Hello name="Humans" color="olivedrab" />
  </React.StrictMode>
)
