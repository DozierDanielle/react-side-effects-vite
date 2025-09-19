import React, { useState, useEffect } from 'react'

// Lab requirements:
// - fetch a programming joke from the API when the component mounts
// - show a loading message while waiting
// - one button: fetch a new joke
// - one p tag containing the joke text
// - use useState and useEffect
// - handle errors gracefully

export default function App() {
  const [joke, setJoke] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const API = 'https://v2.jokeapi.dev/joke/Programming?type=single'

  // Fetch function used on mount and on button click
  const fetchJoke = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(API)
      if (!res.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await res.json()
      // API returns { joke: "..." } for type=single
      if (data && typeof data.joke === 'string') {
        setJoke(data.joke)
      } else {
        setJoke('No joke found.')
      }
    } catch (err) {
      console.error(err)
      setError('Failed to fetch a joke. Please try again.')
      setJoke('')
    } finally {
      setLoading(false)
    }
  }

  // useEffect to fetch when component mounts
  useEffect(() => {
    fetchJoke()
  }, [])

  return (
    <div className="container" role="main">
      <h1>Programming Joke</h1>
      {loading ? (
        <p className="loading">Loading joke…</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        // One p tag that contains the joke text (or empty string)
        <p className="joke">{joke}</p>
      )}

      {/* Exactly one button for fetching a new joke */}
      <button onClick={fetchJoke} aria-label="New Joke">New Joke</button>
    </div>
  )
}
