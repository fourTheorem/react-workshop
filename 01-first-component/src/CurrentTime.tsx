import React from 'react'

export default function CurrentTime () {
  return (
    <div>
      Current time: {
        new Date().toISOString()
      }
    </div>
  )
}
