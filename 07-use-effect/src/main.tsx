import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'

function Clock () {
  const [date, setDate] = useState(new Date())
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])
  return (<span>{date.toISOString()}</span>)
}

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <Clock />
  </React.StrictMode>
)
