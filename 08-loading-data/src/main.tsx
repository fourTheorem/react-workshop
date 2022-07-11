import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'

interface RickMortyCharacterProps {
  charId: number
}

interface Character {
  name: string
  image: string
}

function RickMortyCharacter ({ charId }: RickMortyCharacterProps) {
  const [character, setCharacter] = useState<Character | null>(null)
  const [error, setError] = useState<Error | null>(null)
  useEffect(() => {
    async function fetchCharacter (): Promise<Character> {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${charId}`)
      const data = (await response.json())
      return data
    }
    fetchCharacter()
      .then(setCharacter)
      .catch(setError)
  }, [charId])

  if (!character) {
    return <div>Loading ...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <h1>The best Rick and Morty characters</h1>
    <RickMortyCharacter charId={1} />
    <RickMortyCharacter charId={2} />
  </React.StrictMode>
)
