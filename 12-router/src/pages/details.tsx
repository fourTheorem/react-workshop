import React from 'react'
import { useParams, Link } from 'react-router-dom'

interface Person {
  name: string
  country: string
}

const people: Record<string, Person> = {
  luciano: {
    name: 'Luciano Mammino',
    country: '🇮🇹'
  },
  guilherme: {
    name: 'Guilherme Dalla Rosa',
    country: '🇧🇷'
  }
}

export default function DetailsPage () {
  const params = useParams()
  const details = people[params.name || 'unknown']

  if (!details) {
    return <h4>Person not found</h4>
  }

  return (
    <div>
      <h2>{details.name}</h2>
      <strong>Country: {details.country}</strong>

      <div>
          <Link replace to="/about">Back</Link>
      </div>
    </div>
  )
}
