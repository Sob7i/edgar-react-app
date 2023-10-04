import { useState, useEffect } from 'react'
import './App.css'

const API_KEY = process.env.REACT_APP_API_KEY
const API_URL = 'https://api.api-ninjas.com/v1/loremipsum?paragraphs='

function App() {
  const [articles, setArticles] = useState(null)

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        'X-Api-Key': `${API_KEY}`
      }
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .then(data => setArticles(data))
  }, [])

  return (
    <div className="App">
      <header id='header'>hi</header>
      <main id='main'>{JSON.stringify(articles)}</main>
      <footer id='footer'>footer</footer>
    </div>
  )
}

export default App
